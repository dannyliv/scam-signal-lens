import { canonicalJson, sha256Web } from "./canonical-json.js";
import { buildPassARequest, buildPassBRequest, type CorpusQuestionScope, type QuestionLanguage, type SystemOneRequest } from "./questions.js";
import { derivePolicy, NO, policyFingerprint, type PolicyFingerprint, signalStatus } from "./policy.js";
import { policyFingerprintEsExp } from "./policy-es-exp.js";
import { allowlistedProviderResponse, validatePublicProviderResponse, validateSegments } from "./schema.js";
import { SEGMENTATION_VERSION, segmentInput } from "./segmentation.js";
import { SIGNAL_IDS, type ChoiceAnswer, type ModelInput, type PublicProviderResponse, type ReplayRecord, type Segment, type SignalId } from "./types.js";

const expectedQuestions = (request: SystemOneRequest) => Object.fromEntries(Object.entries(request.questions).map(([key, question]) => [key, question.type === "noul" ? { type: "noul" as const } : { type: "choice" as const, options: Object.keys(question.criteria) }]));
const exactKeys = (value: unknown, keys: readonly string[], name: string) => {
  if (typeof value !== "object" || value === null || Array.isArray(value)) throw new Error(`invalid ${name}`);
  const actual = Object.keys(value).sort(); const expected = [...keys].sort();
  if (actual.length !== expected.length || actual.some((key, index) => key !== expected[index])) throw new Error(`${name} has unexpected fields`);
};

export function deriveReplay(input: ModelInput, language: "en" | "es", segments: Segment[], passA: PublicProviderResponse, evidence: ReplayRecord["derived"]["evidence"], fingerprint: PolicyFingerprint = policyFingerprint(), questionLanguage: QuestionLanguage = "en"): ReplayRecord["derived"] {
  validateSegments(input, segments);
  const request = buildPassARequest(input, language, language === "es" ? "source_messages" : "synthetic_sanitized", questionLanguage);
  const signals: Partial<Record<SignalId, number>> = {};
  for (const id of Object.keys(request.questions)) if (id !== "message_role" && id !== "request_route") {
    const answer = passA.answers[id];
    if (!answer || answer.type !== "noul") throw new Error(`missing Noul answer: ${id}`);
    signals[id as SignalId] = answer.noul;
  }
  const contextual = (key: "message_role" | "request_route") => {
    const answer = passA.answers[key];
    if (!answer || answer.type !== "choice") throw new Error(`missing Choice answer: ${key}`);
    return { choice: answer.choice, confidence: answer.confidence, probability: answer.probabilities[answer.choice] ?? 0 };
  };
  const policy = derivePolicy({ signals, messageRole: contextual("message_role"), requestRoute: contextual("request_route") }, fingerprint);
  const adviceTemplateIds = policy.concern === "strong_warning_signs" ? ["avoid_sender_route", "verify_independently"] : policy.concern === "verify_first" ? ["verify_independently"] : [];
  return { concern: policy.concern, triggeredRuleIds: policy.triggeredRuleIds, contextWarnings: policy.contextWarnings, evidence, adviceTemplateIds };
}

export function expectedEvidenceStatus(signalProbability: number, candidateCount: number): "not_requested" | "candidate_limit" | "recorded" {
  if (signalProbability <= 0.2) return "not_requested";
  return candidateCount > 64 ? "candidate_limit" : "recorded";
}

export function acceptEvidence(answer: ChoiceAnswer, optionIds: ReadonlySet<string>, segments: Segment[]): { status: "selected" | "none_selected" | "low_confidence"; segmentId: string | null } {
  const winnerProbability = answer.probabilities[answer.choice] ?? 0;
  if (answer.confidence < 0.65 || winnerProbability < 0.7) return { status: "low_confidence", segmentId: null };
  if (answer.choice === "NONE") return { status: "none_selected", segmentId: null };
  const segment = segments.find((candidate) => candidate.id === answer.choice);
  if (!optionIds.has(answer.choice) || !segment) throw new Error("selected evidence is not a valid segment option");
  return { status: "selected", segmentId: segment.id };
}

function assertRecordedDuration(value: unknown, name: string): void {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) throw new Error(`invalid ${name}`);
}

/**
 * Browser-safe verifier. It treats every recording field as untrusted, recreates
 * the exact two requests, and only returns a policy result derived from the
 * validated provider answers.
 */
export async function verifyReplayRecord(record: ReplayRecord, input: ModelInput, language: "en" | "es"): Promise<ReplayRecord["derived"]> {
  exactKeys(record, ["schemaVersion", "exampleId", "inputSha256", "questionBundleSha256", "segmentationVersion", "questionScope", "policySha256", "requestedModel", "segments", "passA", "passB", "evidencePassStatus", "processingElapsedMs", "derived"], "recording");
  const scope: CorpusQuestionScope = record.questionScope;
  if (scope !== "synthetic_sanitized" && scope !== "source_messages") throw new Error("invalid recording question scope");
  if (record.schemaVersion !== "1.0.0") throw new Error("unsupported recording schema");
  if (record.inputSha256 !== await sha256Web(input)) throw new Error("recording input hash mismatch");
  const fingerprint = await resolvePolicyFingerprint(record.policySha256);
  const resolvedQuestions = await resolveQuestionLanguage(input, scope, record.policySha256, record.questionBundleSha256);
  const questionLanguage = resolvedQuestions.questionLanguage;
  if (record.segmentationVersion !== SEGMENTATION_VERSION) throw new Error("recording segmentation version mismatch");
  validateSegments(input, record.segments);
  if (canonicalJson(record.segments) !== canonicalJson(segmentInput(input, language))) throw new Error("recording segments mismatch");
  assertRecordedDuration(record.processingElapsedMs, "processing duration");

  const passARequest = buildPassARequest(input, language, scope, questionLanguage);
  if (record.requestedModel !== passARequest.model) throw new Error("recording requested model mismatch");
  if (resolvedQuestions.rebuilt && record.questionBundleSha256 !== await sha256Web(passARequest.questions)) throw new Error("recording question hash mismatch");
  if (resolvedQuestions.rebuilt && record.passA.requestSha256 !== await sha256Web(passARequest)) throw new Error("Pass A request hash mismatch");
  exactKeys(record.passA, ["requestSha256", "capturedAt", "elapsedMs", "successfulAttemptElapsedMs", "attemptCount", "response"], "Pass A");
  if (!Number.isInteger(record.passA.attemptCount) || record.passA.attemptCount < 1 || record.passA.attemptCount > 3 || Number.isNaN(Date.parse(record.passA.capturedAt))) throw new Error("invalid Pass A capture metadata");
  assertRecordedDuration(record.passA.elapsedMs, "Pass A duration");
  assertRecordedDuration(record.passA.successfulAttemptElapsedMs, "Pass A successful attempt duration");
  validatePublicProviderResponse(record.passA.response, expectedQuestions(passARequest));
  if (record.passA.response.model !== record.requestedModel) throw new Error("Pass A model mismatch");

  const eligible = SIGNAL_IDS.filter((id) => {
    const answer = record.passA.response.answers[id];
    return answer?.type === "noul" && answer.noul > NO;
  });
  const plan = buildPassBRequest(input, record.segments, eligible, language, scope, questionLanguage);
  const evidence = {} as ReplayRecord["derived"]["evidence"];
  for (const id of SIGNAL_IDS) evidence[id] = { status: "not_requested", segmentId: null };
  if (plan.request === null) {
    if (record.passB !== null) throw new Error("unexpected Pass B response");
    const expectedStatus = eligible.length === 0 ? "not_needed" : "candidate_limit";
    if (record.evidencePassStatus !== expectedStatus) throw new Error("Pass B status mismatch");
    for (const id of eligible) evidence[id] = { status: plan.statuses[id] === "candidate_limit" ? "candidate_limit" : "not_requested", segmentId: null };
  } else if (record.evidencePassStatus === "failed" && record.passB === null) {
    for (const id of eligible) evidence[id] = { status: "unavailable", segmentId: null };
  } else {
    if (record.evidencePassStatus !== "recorded" || record.passB === null) throw new Error("missing Pass B response");
    if (resolvedQuestions.rebuilt && record.passB.requestSha256 !== await sha256Web(plan.request)) throw new Error("Pass B request hash mismatch");
    exactKeys(record.passB, ["requestSha256", "capturedAt", "elapsedMs", "successfulAttemptElapsedMs", "attemptCount", "response"], "Pass B");
    if (!Number.isInteger(record.passB.attemptCount) || record.passB.attemptCount < 1 || record.passB.attemptCount > 3 || Number.isNaN(Date.parse(record.passB.capturedAt))) throw new Error("invalid Pass B capture metadata");
    assertRecordedDuration(record.passB.elapsedMs, "Pass B duration");
    assertRecordedDuration(record.passB.successfulAttemptElapsedMs, "Pass B successful attempt duration");
    validatePublicProviderResponse(record.passB.response, expectedQuestions(plan.request));
    if (record.passB.response.model !== record.requestedModel) throw new Error("Pass B model mismatch");
    const candidateIds = new Set(record.segments.filter((segment) => segment.source !== "userContext").map((segment) => segment.id));
    for (const id of eligible) {
      const answer = record.passB.response.answers[`evidence_${id}`];
      if (!answer || answer.type !== "choice") throw new Error("missing Pass B evidence answer");
      evidence[id] = acceptEvidence(answer, candidateIds, record.segments);
    }
  }
  const derived = deriveReplay(input, language, record.segments, allowlistedProviderResponse(record.passA.response, expectedQuestions(passARequest)), evidence, fingerprint, questionLanguage);
  if (canonicalJson(record.derived) !== canonicalJson(derived)) throw new Error("derived replay result mismatch");
  return derived;
}

async function resolvePolicyFingerprint(policySha256: string): Promise<PolicyFingerprint> {
  for (const fingerprint of [policyFingerprint(), policyFingerprintEsExp()]) if (await sha256Web(fingerprint) === policySha256) return fingerprint;
  throw new Error("recording policy hash mismatch");
}

const PUBLISHED_ES_QUESTION_BUNDLE_SHA256 = "9631a5b623f8c05b491dc5a5f67ab9b62e5b1898446a722339eaa0c16a40af8b";

async function resolveQuestionLanguage(input: ModelInput, scope: CorpusQuestionScope, policySha256: string, questionBundleSha256: string): Promise<{ questionLanguage: QuestionLanguage; rebuilt: boolean }> {
  for (const questionLanguage of ["en", "es"] as const) {
    if (await sha256Web(buildPassARequest(input, "en", scope, questionLanguage).questions) === questionBundleSha256) return { questionLanguage, rebuilt: true };
  }
  // The published Spanish-question run binds this digest together with policy-v1-es-exp.
  // Answer shape and the re-derived concern still have to match. Request hashes are
  // recomputed when the in-source Spanish definitions produce the same digest.
  if (questionBundleSha256 === PUBLISHED_ES_QUESTION_BUNDLE_SHA256 && policySha256 === await sha256Web(policyFingerprintEsExp())) return { questionLanguage: "es", rebuilt: false };
  throw new Error("recording question hash mismatch");
}

export { signalStatus };
