import {
  NO, REQUESTED_MODEL, SEGMENTATION_VERSION, SIGNAL_IDS, acceptEvidence, buildPassARequest, buildPassBRequest, derivePolicy, projectModelInput, segmentInput, sha256, verifyReplayRecord,
  allowlistedProviderResponse, type CorpusExample, type ReplayRecord, type SignalId, type CorpusQuestionScope,
} from "@scam-signal-lens/core/node";
import { requestWithRetry, type CaptureEvent } from "./typesafe-http.js";
import { assertNoSecret, safeFailureCode } from "./sanitize.js";
import { inspectProviderValidation, type PrivateValidationDiagnostic } from "./validation-diagnostic.js";

const expectedQuestions = (request: { questions: Record<string, { type: "noul" | "choice"; criteria: Record<string, string> }> }) => Object.fromEntries(Object.entries(request.questions).map(([key, question]) => [key, question.type === "noul" ? { type: "noul" as const } : { type: "choice" as const, options: Object.keys(question.criteria) }]));
const utc = () => new Date().toISOString();

export type CapturedExample = { record: ReplayRecord; events: CaptureEvent[]; captureComplete: boolean; validationDiagnostics: PrivateValidationDiagnostic[]; errorCode?: string };
export type CaptureSnapshot = { schemaVersion: "1.0.0"; exampleId: string; inputSha256: string; questionBundleSha256: string; policySha256: string; requestedModel: string; questionScope: CorpusQuestionScope; segmentationSha256: string; passA: ReplayRecord["passA"] | null; passBRequestSha256: string | null; record: ReplayRecord | null; events: CaptureEvent[]; processingElapsedMs: number; completed: boolean; validationDiagnostics?: PrivateValidationDiagnostic[]; errorCode?: string };
export type RecordExampleOptions = { key: string; example: CorpusExample; questionBundleSha256: string; policySha256: string; captureSessionId: string; nextSeq: () => number; questionScope?: CorpusQuestionScope; fetchImpl?: typeof fetch; sleep?: (milliseconds: number) => Promise<void>; consumeAttempt?: () => number; reserveAttempt?: (detail: { pass: "A" | "B"; attempt: number }) => Promise<void>; storage?: { load: () => Promise<CaptureSnapshot | null>; save: (snapshot: CaptureSnapshot) => Promise<void> } };

export async function recordExample(options: RecordExampleOptions): Promise<CapturedExample> {
  const input = projectModelInput(options.example);
  const segments = segmentInput(input, options.example.language);
  const corpusScope = options.questionScope ?? (options.example.datasetId === "ai-email-200-v1" ? "synthetic_sanitized" as const : "source_messages" as const);
  const passARequest = buildPassARequest(input, options.example.language, corpusScope);
  const inputSha256 = sha256(input);
  const segmentationSha256 = sha256(segments);
  const existing = await options.storage?.load() ?? null;
  const matches = (snapshot: CaptureSnapshot) => snapshot.exampleId === options.example.id && snapshot.inputSha256 === inputSha256 && snapshot.questionBundleSha256 === options.questionBundleSha256 && snapshot.policySha256 === options.policySha256 && snapshot.requestedModel === REQUESTED_MODEL && snapshot.questionScope === corpusScope && snapshot.segmentationSha256 === segmentationSha256;
  if (existing !== null && !matches(existing)) throw new Error("persisted_capture_config_mismatch");
  if (existing?.completed && existing.record !== null) {
    if (existing.record.exampleId !== options.example.id || existing.record.questionScope !== corpusScope || existing.record.questionBundleSha256 !== options.questionBundleSha256 || existing.record.policySha256 !== options.policySha256 || sha256(existing.record.segments) !== segmentationSha256) throw new Error("persisted_completed_record_mismatch");
    await verifyReplayRecord(existing.record, input, options.example.language);
    return { record: existing.record, events: existing.events, captureComplete: true, validationDiagnostics: existing.validationDiagnostics ?? [] };
  }
  const events: CaptureEvent[] = existing?.events ?? [];
  const validationDiagnostics: PrivateValidationDiagnostic[] = existing?.validationDiagnostics ?? [];
  const start = performance.now();
  const priorProcessingElapsedMs = existing?.processingElapsedMs ?? 0;
  const totalProcessingElapsed = () => priorProcessingElapsedMs + performance.now() - start;
  const event = (kind: CaptureEvent["kind"], pass: CaptureEvent["pass"], attempt: number | null, extras: Partial<CaptureEvent> = {}) => events.push({ seq: options.nextSeq(), captureSessionId: options.captureSessionId, exampleId: options.example.id, pass, attempt, kind, at: utc(), offsetMs: performance.now() - start, ...extras });
  const persist = async (passA: ReplayRecord["passA"] | null, passBRequestSha256: string | null, record: ReplayRecord | null, completed: boolean, errorCode?: string) => {
    if (!options.storage) return;
    await options.storage.save({ schemaVersion: "1.0.0", exampleId: options.example.id, inputSha256, questionBundleSha256: options.questionBundleSha256, policySha256: options.policySha256, requestedModel: REQUESTED_MODEL, questionScope: corpusScope, segmentationSha256, passA, passBRequestSha256, record, events: [...events], processingElapsedMs: record?.processingElapsedMs ?? totalProcessingElapsed(), completed, ...(validationDiagnostics.length === 0 ? {} : { validationDiagnostics: [...validationDiagnostics] }), ...(errorCode === undefined ? {} : { errorCode }) });
  };
  let passA: ReplayRecord["passA"] | null = existing?.passA ?? null;
  let passBRequestSha256 = existing?.passBRequestSha256 ?? null;
  try {
    if (passA === null) {
      const capturedA = await requestWithRetry({ key: options.key, request: passARequest, fetchImpl: options.fetchImpl, sleep: options.sleep, consumeAttempt: options.consumeAttempt, reserveAttempt: options.reserveAttempt ? (attempt) => options.reserveAttempt!({ pass: "A", attempt }) : undefined, onAttempt: async (attempt) => { event(attempt.phase === "started" ? "request_started" : "request_finished", "A", attempt.attempt, { at: attempt.at, elapsedMs: attempt.elapsedMs, outcome: attempt.outcome, reasonCode: attempt.reasonCode }); if (attempt.phase === "started") await persist(passA, passBRequestSha256, null, false); } });
      let safeA;
      try { safeA = allowlistedProviderResponse(capturedA.body, expectedQuestions(passARequest)); if (safeA.model !== REQUESTED_MODEL) throw new Error("schema_error"); }
      catch { validationDiagnostics.push(inspectProviderValidation("A", capturedA.body, expectedQuestions(passARequest), REQUESTED_MODEL)); throw new Error("schema_error"); }
      passA = { requestSha256: sha256(passARequest), capturedAt: utc(), elapsedMs: capturedA.elapsedMs, successfulAttemptElapsedMs: capturedA.successfulAttemptElapsedMs, attemptCount: capturedA.attemptCount, response: safeA };
    }
    if (passA.requestSha256 !== sha256(passARequest) || passA.response.model !== REQUESTED_MODEL) throw new Error("persisted_pass_a_mismatch");
    const safeA = allowlistedProviderResponse(passA.response, expectedQuestions(passARequest));
    const eligible = Object.entries(safeA.answers).filter(([id, answer]) => id !== "message_role" && id !== "request_route" && answer.type === "noul" && answer.noul > NO).map(([id]) => id as SignalId);
    const plan = buildPassBRequest(input, segments, eligible, options.example.language, corpusScope);
    const nextPassBHash = plan.request === null ? null : sha256(plan.request);
    if (passBRequestSha256 !== null && passBRequestSha256 !== nextPassBHash) throw new Error("persisted_pass_b_request_mismatch");
    passBRequestSha256 = nextPassBHash;
    await persist(passA, passBRequestSha256, null, false);
    const evidence = Object.fromEntries(SIGNAL_IDS.map((id) => [id, { status: "not_requested" as const, segmentId: null }])) as ReplayRecord["derived"]["evidence"];
    if (plan.request === null) {
      for (const id of eligible) evidence[id] = { status: plan.statuses[id] === "candidate_limit" ? "candidate_limit" : "not_requested", segmentId: null };
      event("pass_skipped", "B", null, { reasonCode: "schema_error" });
      const record = makeRecord(options, input, segments, passA, null, eligible.length === 0 ? "not_needed" : "candidate_limit", evidence);
      record.processingElapsedMs = totalProcessingElapsed();
      assertNoSecret(JSON.stringify(record), options.key);
      event("example_completed", null, null, { outcome: "success" });
      await persist(passA, passBRequestSha256, record, true);
      return { record, events, captureComplete: true, validationDiagnostics };
    }
    const capturedB = await requestWithRetry({ key: options.key, request: plan.request, fetchImpl: options.fetchImpl, sleep: options.sleep, consumeAttempt: options.consumeAttempt, reserveAttempt: options.reserveAttempt ? (attempt) => options.reserveAttempt!({ pass: "B", attempt }) : undefined, onAttempt: async (attempt) => { event(attempt.phase === "started" ? "request_started" : "request_finished", "B", attempt.attempt, { at: attempt.at, elapsedMs: attempt.elapsedMs, outcome: attempt.outcome, reasonCode: attempt.reasonCode }); if (attempt.phase === "started") await persist(passA, passBRequestSha256, null, false); } });
    let safeB;
    try { safeB = allowlistedProviderResponse(capturedB.body, expectedQuestions(plan.request)); if (safeB.model !== REQUESTED_MODEL) throw new Error("schema_error"); }
    catch { validationDiagnostics.push(inspectProviderValidation("B", capturedB.body, expectedQuestions(plan.request), REQUESTED_MODEL)); throw new Error("schema_error"); }
    const optionsBySignal = new Set(segments.filter((segment) => segment.source !== "userContext").map((segment) => segment.id));
    for (const id of eligible) {
      const answer = safeB.answers[`evidence_${id}`];
      if (!answer || answer.type !== "choice") throw new Error("schema_error");
      evidence[id] = acceptEvidence(answer, optionsBySignal, segments);
    }
    const passB = { requestSha256: sha256(plan.request), capturedAt: utc(), elapsedMs: capturedB.elapsedMs, successfulAttemptElapsedMs: capturedB.successfulAttemptElapsedMs, attemptCount: capturedB.attemptCount, response: safeB };
    const record = makeRecord(options, input, segments, passA, passB, "recorded", evidence);
    record.processingElapsedMs = totalProcessingElapsed();
    assertNoSecret(JSON.stringify(record), options.key);
    event("example_completed", null, null, { outcome: "success" });
    await persist(passA, passBRequestSha256, record, true);
    return { record, events, captureComplete: true, validationDiagnostics };
  } catch (error) {
    const code = safeFailureCode(error);
    event("example_completed", null, null, { outcome: "schema_error", reasonCode: code });
    if (passA !== null) {
      const stagedPassA = passA;
      const eligible = SIGNAL_IDS.filter((id) => stagedPassA.response.answers[id]?.type === "noul" && (stagedPassA.response.answers[id] as { noul: number }).noul > NO);
      const plan = buildPassBRequest(input, segments, eligible, options.example.language, corpusScope);
      if (plan.request !== null) {
        const evidence = Object.fromEntries(SIGNAL_IDS.map((id) => [id, { status: eligible.includes(id) ? "unavailable" as const : "not_requested" as const, segmentId: null }])) as ReplayRecord["derived"]["evidence"];
        const partial = makeRecord(options, input, segments, stagedPassA, null, "failed", evidence);
        partial.processingElapsedMs = totalProcessingElapsed();
        assertNoSecret(JSON.stringify(partial), options.key);
        await persist(stagedPassA, passBRequestSha256, partial, false, code);
        return { record: partial, events, captureComplete: false, validationDiagnostics, errorCode: code };
      }
    }
    await persist(passA, passBRequestSha256, null, false, code);
    return { record: undefined as never, events, captureComplete: false, validationDiagnostics, errorCode: code };
  }
}

function makeRecord(options: RecordExampleOptions, input: ReturnType<typeof projectModelInput>, segments: ReplayRecord["segments"], passA: ReplayRecord["passA"], passB: ReplayRecord["passB"], evidencePassStatus: ReplayRecord["evidencePassStatus"], evidence: ReplayRecord["derived"]["evidence"]): ReplayRecord {
  const answer = passA.response.answers;
  const route = answer.request_route;
  const role = answer.message_role;
  if (!route || route.type !== "choice" || !role || role.type !== "choice") throw new Error("schema_error");
  const signals: Partial<Record<SignalId, number>> = {};
  for (const [key, value] of Object.entries(answer)) if (key !== "message_role" && key !== "request_route" && value.type === "noul") signals[key as SignalId] = value.noul;
  const derived = derivePolicy({ signals, messageRole: { choice: role.choice, confidence: role.confidence, probability: role.probabilities[role.choice] ?? 0 }, requestRoute: { choice: route.choice, confidence: route.confidence, probability: route.probabilities[route.choice] ?? 0 } });
  return { schemaVersion: "1.0.0", exampleId: options.example.id, inputSha256: sha256(input), questionBundleSha256: options.questionBundleSha256, segmentationVersion: "intl-segmenter-sentence-v1", questionScope: options.questionScope ?? (options.example.datasetId === "ai-email-200-v1" ? "synthetic_sanitized" : "source_messages"), policySha256: options.policySha256, requestedModel: passA.response.model, segments, passA, passB, evidencePassStatus, processingElapsedMs: 0, derived: { concern: derived.concern, triggeredRuleIds: derived.triggeredRuleIds, contextWarnings: derived.contextWarnings, evidence, adviceTemplateIds: derived.concern === "strong_warning_signs" ? ["avoid_sender_route", "verify_independently"] : derived.concern === "verify_first" ? ["verify_independently"] : [] } };
}
