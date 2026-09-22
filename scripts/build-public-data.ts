import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { relative, resolve } from "node:path";
import { POLICY_VERSION, POLICY_VERSION_ES_EXP, SIGNAL_IDS, evaluateDataset, sha256Web, verifyReplayRecord, validateCorpusEnvelope, type CorpusEnvelope, type EvaluationRow, type PublicCaptureEvent, type ReplayRecord } from "@scam-signal-lens/core";

type Frozen = { id: "ai-email-200-v1" | "spaphish-v5"; hash: string; count: number; benign: number; phishing: number; scope: ReplayRecord["questionScope"] };
const frozen: Record<string, Frozen> = {
  "ai-email-200-v1": { id: "ai-email-200-v1", hash: "c67f3bc7a4c16be626fe26ed2bcf56658d44286e12b75ed098d3eb6ecb30ed7c", count: 200, benign: 100, phishing: 100, scope: "synthetic_sanitized" },
  "spaphish-v5": { id: "spaphish-v5", hash: "6ad2512824f99d1f926fecb2d41d7b76f9308c31258767b823d142a48c9e6c1b", count: 499, benign: 250, phishing: 249, scope: "source_messages" },
};
// Capture contracts remain bound to the original frozen cohort. The one
// authorized post-capture publication exclusion is checked separately.
const captureSources: Record<string, Frozen> = {
  "ai-email-200-v1": frozen["ai-email-200-v1"]!,
  "spaphish-v5": { id: "spaphish-v5", hash: "d190e6c672ea5c2c0fa298d9595a058d05e84380305b2242c87b8f8e6b1f2421", count: 500, benign: 250, phishing: 250, scope: "source_messages" },
};
const hash = /^[a-f0-9]{64}$/;
const generatedRoot = resolve("apps/web/src/generated");
const arg = (name: string) => { const i = process.argv.indexOf(name); return i < 0 ? undefined : process.argv[i + 1]; };
const read = async (path: string): Promise<unknown> => JSON.parse(await readFile(path, "utf8")) as unknown;
const object = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null && !Array.isArray(value);
const string = (value: unknown, name: string) => { if (typeof value !== "string" || value.length === 0) throw new Error("invalid " + name); return value; };
const digest = (value: unknown, name: string) => { const result = string(value, name); if (!hash.test(result)) throw new Error("invalid " + name); return result; };
const count = (value: unknown, name: string, minimum = 0) => { if (!Number.isInteger(value) || (value as number) < minimum) throw new Error("invalid " + name); return value as number; };
const exact = (value: Record<string, unknown>, fields: string[], name: string) => { const actual = Object.keys(value).sort(), expected = [...fields].sort(); if (actual.length !== expected.length || actual.some((key, index) => key !== expected[index])) throw new Error("invalid " + name + " shape"); };
const under = (path: string, root: string) => { const rel = relative(root, path); return rel !== "" && !rel.startsWith("..") && !rel.includes("../"); };

type RecordEntry = { exampleId: string; inputSha256: string; passARequestSha256: string; passBRequestSha256: string | null; recordSha256: string; events: PublicCaptureEvent[] };
type Failure = { exampleId: string; errorCode: string; events: PublicCaptureEvent[] };
type RecoveryImport = { exampleId: string; completedRecordSha256: string | null; passASha256: string | null; snapshotSha256: string };
type RecoveryLineage = { parentRunId: string; parentManifestSha256: string; parentConfigSha256: string; parentSourceContentSha256: string; inheritedHttpAttemptCount: number; inheritedSessionIds: string[]; imports: RecoveryImport[]; changedInput: { exampleId: string; parentInputSha256: string; recoveryInputSha256: string } | null; superseded: Array<{ exampleId: string; parentInputSha256: string; recoveryInputSha256: string; completedRecordSha256: string | null; passASha256: string | null; snapshotSha256: string; eventCount: number; attemptReservationCount: number }> };
type Manifest = { schemaVersion: "1.0.0"; runId: string; datasetId: Frozen["id"]; datasetSha256: string; questionBundleSha256: string; policySha256: string; requestedModel: string; segmentationVersion: string; sourceContentSha256: string; declaredHttpAttemptCap: number; actualHttpAttemptCount: number; runWallElapsedMs: number; runWallMeasurement: "sum_completed_sessions"; unknownInterruptedSessionCount: number; configSha256: string; expectedCount: number; completedCount: number; captureSessions: Array<{ captureSessionId: string; startedAt: string; sourceRevision: { revision: string | null; dirtyStatus: "clean" | "dirty" | "unknown" }; resumed: boolean; endedAt?: string; durationMs?: number }>; hasRecoveryLineageField: boolean; recoveryLineage: RecoveryLineage | null; records: RecordEntry[]; failures: Failure[] };
export type ReplayAnchor = { captureSessionId: string; seq: number };
export type ReplayAnchors = { passA: ReplayAnchor; passB: ReplayAnchor | null; complete: ReplayAnchor };
export type RunProjection = { run: unknown; rows: unknown; evaluation: unknown; events: unknown; anchorsByExample: unknown };

/** The browser loader hashes precisely the public run data it will hand to the UI bridge. */
export const runProjection = (run: unknown, rows: unknown, evaluation: unknown, events: unknown, anchorsByExample: unknown): RunProjection => ({ run, rows, evaluation, events, anchorsByExample });
type PublicProjection = { kind: "authorized_post_capture_exclusion"; sourceDatasetId: "spaphish-v5"; parentCorpusSha256: string; sourceExpectedCount: 500; excludedExampleIds: ["SPAPHISH-088"] };

function parsePublicProjection(corpus: CorpusEnvelope): PublicProjection | null {
  const raw = corpus.metadata.publicationProjection;
  if (raw === undefined) return null;
  if (!object(raw)) throw new Error("invalid public projection metadata");
  exact(raw, ["kind", "sourceDatasetId", "parentCorpusSha256", "sourceExpectedCount", "excludedExampleIds", "reason", "ledger"], "public projection metadata");
  if (raw.kind !== "authorized_post_capture_exclusion" || raw.sourceDatasetId !== "spaphish-v5" || raw.parentCorpusSha256 !== captureSources["spaphish-v5"]!.hash || raw.sourceExpectedCount !== 500 || !Array.isArray(raw.excludedExampleIds) || raw.excludedExampleIds.length !== 1 || raw.excludedExampleIds[0] !== "SPAPHISH-088" || typeof raw.reason !== "string" || typeof raw.ledger !== "string") throw new Error("invalid authorized public projection metadata");
  return { kind: raw.kind, sourceDatasetId: raw.sourceDatasetId, parentCorpusSha256: raw.parentCorpusSha256, sourceExpectedCount: raw.sourceExpectedCount, excludedExampleIds: ["SPAPHISH-088"] };
}

export function publicEvents(value: unknown, id: string): PublicCaptureEvent[] {
  if (!Array.isArray(value)) throw new Error("invalid public events");
  const result = value.map((raw) => {
    if (!object(raw)) throw new Error("invalid public event");
    const allowed = ["seq", "captureSessionId", "exampleId", "pass", "attempt", "kind", "at", "offsetMs", "elapsedMs", "outcome", "reasonCode"];
    if (Object.keys(raw).some((key) => !allowed.includes(key)) || raw.exampleId !== id || !Number.isInteger(raw.seq) || (raw.seq as number) < 1 || typeof raw.captureSessionId !== "string" || !["A", "B", null].includes(raw.pass as null) || !(raw.attempt === null || Number.isInteger(raw.attempt)) || !["request_started", "request_finished", "pass_skipped", "example_completed"].includes(raw.kind as string) || typeof raw.at !== "string" || !Number.isFinite(Date.parse(raw.at)) || typeof raw.offsetMs !== "number" || !Number.isFinite(raw.offsetMs)) throw new Error("invalid public event");
    if (raw.elapsedMs !== undefined && (typeof raw.elapsedMs !== "number" || !Number.isFinite(raw.elapsedMs) || raw.elapsedMs < 0)) throw new Error("invalid event duration");
    if (raw.outcome !== undefined && !["success", "timeout", "http_error", "schema_error"].includes(raw.outcome as string)) throw new Error("invalid event outcome");
    if (raw.reasonCode !== undefined && !["authentication_failed", "authorization_failed", "validation_failed", "transient_http", "network_error", "response_too_large", "invalid_response", "schema_error", "attempt_cap_exceeded"].includes(raw.reasonCode as string)) throw new Error("invalid event reason");
    const result: PublicCaptureEvent = { seq: raw.seq as number, captureSessionId: raw.captureSessionId as string, exampleId: id, pass: raw.pass as PublicCaptureEvent["pass"], attempt: raw.attempt as number | null, kind: raw.kind as PublicCaptureEvent["kind"], at: raw.at as string, offsetMs: raw.offsetMs as number };
    if (raw.elapsedMs !== undefined) result.elapsedMs = raw.elapsedMs as number;
    if (raw.outcome !== undefined) result.outcome = raw.outcome as NonNullable<PublicCaptureEvent["outcome"]>;
    if (raw.reasonCode !== undefined) result.reasonCode = raw.reasonCode as NonNullable<PublicCaptureEvent["reasonCode"]>;
    return result;
  });
  const prior = new Map<string, number>();
  for (const item of result) { const previous = prior.get(item.captureSessionId); if (previous !== undefined && previous >= item.seq) throw new Error("event sequence must increase within a capture session"); prior.set(item.captureSessionId, item.seq); }
  return result;
}

export function parseManifest(raw: unknown, binding: "capture" | "frozen" = "capture"): Manifest {
  if (!object(raw)) throw new Error("invalid recording manifest");
  const baseFields = ["schemaVersion", "runId", "datasetId", "datasetSha256", "questionBundleSha256", "policySha256", "requestedModel", "segmentationVersion", "sourceContentSha256", "declaredHttpAttemptCap", "actualHttpAttemptCount", "runWallElapsedMs", "runWallMeasurement", "unknownInterruptedSessionCount", "captureSessions", "completedCount", "expectedCount", "configSha256", "records", "failures"];
  exact(raw, raw.recoveryLineage === undefined ? baseFields : [...baseFields, "recoveryLineage"], "recording manifest");
  const dataset = (binding === "frozen" ? frozen : captureSources)[raw.datasetId as string];
  if (raw.schemaVersion !== "1.0.0" || !dataset) throw new Error("manifest must name a frozen public corpus");
  if (!Array.isArray(raw.records) || !Array.isArray(raw.failures) || !Array.isArray(raw.captureSessions)) throw new Error("invalid manifest collections");
  const records = raw.records.map((entry) => {
    if (!object(entry)) throw new Error("invalid manifest record");
    exact(entry, ["exampleId", "inputSha256", "passARequestSha256", "passBRequestSha256", "recordSha256", "events"], "manifest record");
    const id = string(entry.exampleId, "record ID");
    if (!(entry.passBRequestSha256 === null || typeof entry.passBRequestSha256 === "string" && hash.test(entry.passBRequestSha256))) throw new Error("invalid Pass B request hash");
    return { exampleId: id, inputSha256: digest(entry.inputSha256, "input hash"), passARequestSha256: digest(entry.passARequestSha256, "Pass A request hash"), passBRequestSha256: entry.passBRequestSha256, recordSha256: digest(entry.recordSha256, "record hash"), events: publicEvents(entry.events, id) };
  });
  const failures = raw.failures.map((entry) => { if (!object(entry)) throw new Error("invalid manifest failure"); exact(entry, entry.validationDiagnostics === undefined ? ["exampleId", "errorCode", "events"] : ["exampleId", "errorCode", "events", "validationDiagnostics"], "manifest failure"); if (entry.validationDiagnostics !== undefined && (!Array.isArray(entry.validationDiagnostics) || entry.validationDiagnostics.length !== 0)) throw new Error("manifest failure diagnostics are not public projection input"); const id = string(entry.exampleId, "failure ID"); return { exampleId: id, errorCode: string(entry.errorCode, "failure code"), events: publicEvents(entry.events, id) }; });
  const sessions = raw.captureSessions.map((entry) => { if (!object(entry)) throw new Error("invalid capture session"); if (Object.keys(entry).some((key) => !["captureSessionId", "startedAt", "sourceRevision", "resumed", "endedAt", "durationMs"].includes(key)) || typeof entry.captureSessionId !== "string" || typeof entry.startedAt !== "string" || !object(entry.sourceRevision) || !(typeof entry.sourceRevision.revision === "string" || entry.sourceRevision.revision === null) || !["clean", "dirty", "unknown"].includes(entry.sourceRevision.dirtyStatus as string) || typeof entry.resumed !== "boolean" || !(entry.endedAt === undefined || typeof entry.endedAt === "string") || !(entry.durationMs === undefined || typeof entry.durationMs === "number" && Number.isFinite(entry.durationMs) && entry.durationMs >= 0)) throw new Error("invalid capture session"); return { captureSessionId: entry.captureSessionId, startedAt: entry.startedAt, sourceRevision: { revision: entry.sourceRevision.revision as string | null, dirtyStatus: entry.sourceRevision.dirtyStatus as "clean" | "dirty" | "unknown" }, resumed: entry.resumed, ...(entry.endedAt === undefined ? {} : { endedAt: entry.endedAt as string }), ...(entry.durationMs === undefined ? {} : { durationMs: entry.durationMs as number }) }; });
  const recoveryLineage = parseRecoveryLineage(raw.recoveryLineage);
  if ([...records, ...failures].some((entry) => entry.events.some((event) => !sessions.some((session) => session.captureSessionId === event.captureSessionId)))) throw new Error("event references an unknown capture session");
  const manifest: Manifest = { schemaVersion: "1.0.0", runId: string(raw.runId, "run ID"), datasetId: dataset.id, datasetSha256: digest(raw.datasetSha256, "dataset hash"), questionBundleSha256: digest(raw.questionBundleSha256, "question hash"), policySha256: digest(raw.policySha256, "policy hash"), requestedModel: string(raw.requestedModel, "model"), segmentationVersion: string(raw.segmentationVersion, "segmentation version"), sourceContentSha256: digest(raw.sourceContentSha256, "source content hash"), declaredHttpAttemptCap: count(raw.declaredHttpAttemptCap, "attempt cap", 1), actualHttpAttemptCount: count(raw.actualHttpAttemptCount, "actual attempts"), runWallElapsedMs: typeof raw.runWallElapsedMs === "number" && Number.isFinite(raw.runWallElapsedMs) && raw.runWallElapsedMs >= 0 ? raw.runWallElapsedMs : (() => { throw new Error("invalid run duration"); })(), runWallMeasurement: raw.runWallMeasurement === "sum_completed_sessions" ? raw.runWallMeasurement : (() => { throw new Error("invalid run wall measurement"); })(), unknownInterruptedSessionCount: count(raw.unknownInterruptedSessionCount, "unknown interrupted sessions"), configSha256: digest(raw.configSha256, "config hash"), expectedCount: count(raw.expectedCount, "expected count"), completedCount: count(raw.completedCount, "completed count"), captureSessions: sessions, hasRecoveryLineageField: raw.recoveryLineage !== undefined, recoveryLineage, records, failures };
  if (manifest.datasetSha256 !== dataset.hash || manifest.expectedCount !== dataset.count || manifest.actualHttpAttemptCount > manifest.declaredHttpAttemptCap) throw new Error("manifest frozen configuration mismatch");
  if (recoveryLineage !== null && (recoveryLineage.inheritedHttpAttemptCount > manifest.actualHttpAttemptCount || recoveryLineage.inheritedSessionIds.some((id) => !sessions.some((session) => session.captureSessionId === id)))) throw new Error("invalid recovery lineage session or attempt binding");
  return manifest;
}

function nullableDigest(value: unknown, name: string) { return value === null ? null : digest(value, name); }
function parseRecoveryLineage(raw: unknown): RecoveryLineage | null {
  if (raw === undefined || raw === null) return null;
  if (!object(raw)) throw new Error("invalid recovery lineage");
  exact(raw, ["parentRunId", "parentManifestSha256", "parentConfigSha256", "parentSourceContentSha256", "inheritedHttpAttemptCount", "inheritedSessionIds", "imports", "changedInput", "superseded"], "recovery lineage");
  if (!Array.isArray(raw.inheritedSessionIds) || raw.inheritedSessionIds.some((id) => typeof id !== "string") || new Set(raw.inheritedSessionIds).size !== raw.inheritedSessionIds.length || !Array.isArray(raw.imports) || !Array.isArray(raw.superseded) || !(raw.changedInput === null || object(raw.changedInput))) throw new Error("invalid recovery lineage collections");
  const changedInput = raw.changedInput === null ? null : (() => { exact(raw.changedInput, ["exampleId", "parentInputSha256", "recoveryInputSha256"], "recovery changed input"); const value = { exampleId: string(raw.changedInput.exampleId, "recovery changed example ID"), parentInputSha256: digest(raw.changedInput.parentInputSha256, "recovery parent input hash"), recoveryInputSha256: digest(raw.changedInput.recoveryInputSha256, "recovery input hash") }; if (value.parentInputSha256 === value.recoveryInputSha256) throw new Error("recovery changed input hash must differ"); return value; })();
  const imports = raw.imports.map((item) => { if (!object(item)) throw new Error("invalid recovery import"); exact(item, ["exampleId", "completedRecordSha256", "passASha256", "snapshotSha256"], "recovery import"); return { exampleId: string(item.exampleId, "recovery import ID"), completedRecordSha256: nullableDigest(item.completedRecordSha256, "recovery completed record hash"), passASha256: nullableDigest(item.passASha256, "recovery Pass A hash"), snapshotSha256: digest(item.snapshotSha256, "recovery snapshot hash") }; });
  const superseded = raw.superseded.map((item) => { if (!object(item)) throw new Error("invalid superseded capture"); exact(item, ["exampleId", "parentInputSha256", "recoveryInputSha256", "completedRecordSha256", "passASha256", "snapshotSha256", "eventCount", "attemptReservationCount"], "superseded capture"); return { exampleId: string(item.exampleId, "superseded ID"), parentInputSha256: digest(item.parentInputSha256, "superseded parent input hash"), recoveryInputSha256: digest(item.recoveryInputSha256, "superseded input hash"), completedRecordSha256: nullableDigest(item.completedRecordSha256, "superseded record hash"), passASha256: nullableDigest(item.passASha256, "superseded Pass A hash"), snapshotSha256: digest(item.snapshotSha256, "superseded snapshot hash"), eventCount: count(item.eventCount, "superseded event count"), attemptReservationCount: count(item.attemptReservationCount, "superseded attempt count") }; });
  if (new Set(imports.map((item) => item.exampleId)).size !== imports.length || (changedInput !== null && imports.some((item) => item.exampleId === changedInput.exampleId)) || (changedInput === null && superseded.length !== 0) || (changedInput !== null && (superseded.length !== 1 || superseded[0]!.exampleId !== changedInput.exampleId || superseded[0]!.parentInputSha256 !== changedInput.parentInputSha256 || superseded[0]!.recoveryInputSha256 !== changedInput.recoveryInputSha256))) throw new Error("invalid recovery import or superseded bindings");
  return { parentRunId: string(raw.parentRunId, "recovery parent run ID"), parentManifestSha256: digest(raw.parentManifestSha256, "recovery parent manifest hash"), parentConfigSha256: digest(raw.parentConfigSha256, "recovery parent config hash"), parentSourceContentSha256: digest(raw.parentSourceContentSha256, "recovery parent source hash"), inheritedHttpAttemptCount: count(raw.inheritedHttpAttemptCount, "inherited attempts"), inheritedSessionIds: [...raw.inheritedSessionIds] as string[], imports, changedInput, superseded };
}

export function strictRecord(raw: unknown): ReplayRecord {
  if (!object(raw)) throw new Error("invalid replay record");
  exact(raw, ["schemaVersion", "exampleId", "inputSha256", "questionBundleSha256", "segmentationVersion", "questionScope", "policySha256", "requestedModel", "segments", "passA", "passB", "evidencePassStatus", "processingElapsedMs", "derived"], "replay record");
  return raw as ReplayRecord;
}

export function manifestConfig(manifest: Manifest) {
  return { datasetId: manifest.datasetId, datasetSha256: manifest.datasetSha256, questionBundleSha256: manifest.questionBundleSha256, policySha256: manifest.policySha256, requestedModel: manifest.requestedModel, segmentationVersion: manifest.segmentationVersion, sourceContentSha256: manifest.sourceContentSha256, declaredHttpAttemptCap: manifest.declaredHttpAttemptCap, ...(manifest.hasRecoveryLineageField ? { recoveryLineage: manifest.recoveryLineage } : {}) };
}

export async function verifyManifestConfig(manifest: Manifest) {
  if (manifest.configSha256 !== await sha256Web(manifestConfig(manifest))) throw new Error("manifest configuration hash mismatch");
}

const eventTime = (event: PublicCaptureEvent) => Date.parse(event.at);
const acceptedPassAnchor = (record: ReplayRecord, pass: "A" | "B", events: readonly PublicCaptureEvent[]): ReplayAnchor => {
  const captured = pass === "A" ? record.passA : record.passB;
  if (captured === null) throw new Error(`missing Pass ${pass} for replay anchor`);
  const eligible = events.filter((event) => event.exampleId === record.exampleId && event.pass === pass && event.kind === "request_finished" && event.outcome === "success" && event.attempt === captured.attemptCount && event.elapsedMs === captured.successfulAttemptElapsedMs && eventTime(event) <= Date.parse(captured.capturedAt));
  if (eligible.length === 0) throw new Error(`missing accepted Pass ${pass} event anchor`);
  const latest = Math.max(...eligible.map(eventTime));
  const matches = eligible.filter((event) => eventTime(event) === latest);
  if (matches.length !== 1) throw new Error(`ambiguous accepted Pass ${pass} event anchor`);
  return { captureSessionId: matches[0]!.captureSessionId, seq: matches[0]!.seq };
};

export function replayAnchors(record: ReplayRecord, events: readonly PublicCaptureEvent[]): ReplayAnchors {
  const passA = acceptedPassAnchor(record, "A", events);
  const passB = record.passB === null ? null : acceptedPassAnchor(record, "B", events);
  const required = [passA, ...(passB === null ? [] : [passB])];
  const completionFollows = (completion: PublicCaptureEvent, anchor: ReplayAnchor) => {
    const accepted = events.find((candidate) => candidate.captureSessionId === anchor.captureSessionId && candidate.seq === anchor.seq);
    if (!accepted) return false;
    const timeDelta = eventTime(completion) - eventTime(accepted);
    if (timeDelta < 0) return false;
    // Event sequence is a validated order inside one capture session. It makes
    // same-millisecond completion records unambiguous without inventing a
    // cross-session sequence order.
    return completion.captureSessionId === accepted.captureSessionId
      ? timeDelta > 0 || completion.seq > accepted.seq
      : timeDelta > 0;
  };
  const completed = events.filter((event) => event.exampleId === record.exampleId && event.kind === "example_completed" && event.pass === null && event.outcome === "success" && required.every((anchor) => completionFollows(event, anchor)));
  if (completed.length !== 1) throw new Error("missing or ambiguous accepted completion event anchor");
  return { passA, passB, complete: { captureSessionId: completed[0]!.captureSessionId, seq: completed[0]!.seq } };
}

export async function validateRecoveryRecord(manifest: Manifest, entry: RecordEntry, record: ReplayRecord, anchors: ReplayAnchors) {
  const lineage = manifest.recoveryLineage;
  if (lineage === null) return;
  const inherited = new Set(lineage.inheritedSessionIds);
  const current = new Set(manifest.captureSessions.map((session) => session.captureSessionId).filter((id) => !inherited.has(id)));
  if (current.size === 0) throw new Error("recovery manifest has no current capture session");
  const anchorSessions = [anchors.passA, ...(anchors.passB === null ? [] : [anchors.passB]), anchors.complete].map((anchor) => anchor.captureSessionId);
  const changed = lineage.changedInput;
  if (changed !== null && record.exampleId === changed.exampleId) {
    if (record.inputSha256 !== changed.recoveryInputSha256 || entry.events.some((event) => !current.has(event.captureSessionId)) || anchorSessions.some((session) => !current.has(session))) throw new Error("changed recovery input reuses superseded record or event data");
    return;
  }
  const imported = lineage.imports.find((item) => item.exampleId === record.exampleId);
  if (!imported) throw new Error("recovery record is not authorized by an import anchor");
  if (imported.completedRecordSha256 !== null) {
    if (entry.recordSha256 !== imported.completedRecordSha256 || entry.events.some((event) => !inherited.has(event.captureSessionId)) || anchorSessions.some((session) => !inherited.has(session))) throw new Error("completed recovery import does not remain byte-identical");
    return;
  }
  if (imported.passASha256 === null) {
    // Parent failures and other unaccepted history remain auditable. The new
    // accepted stages must be current because no parent stage was imported.
    if (anchorSessions.some((session) => !current.has(session))) throw new Error("missing recovery stage has an inherited accepted anchor");
    return;
  }
  // The imported Pass A may keep its full parent attempt history. Only the
  // selected Pass A anchor can come from the parent; accepted later stages
  // must come from the recovery session.
  if (await sha256Web(record.passA) !== imported.passASha256 || !inherited.has(anchors.passA.captureSessionId) || (anchors.passB !== null && !current.has(anchors.passB.captureSessionId)) || !current.has(anchors.complete.captureSessionId)) throw new Error("partial recovery import has invalid Pass A or recovery event binding");
}

function copy(record: ReplayRecord): ReplayRecord {
  const pass = (item: ReplayRecord["passA"]): ReplayRecord["passA"] => ({ requestSha256: item.requestSha256, capturedAt: item.capturedAt, elapsedMs: item.elapsedMs, successfulAttemptElapsedMs: item.successfulAttemptElapsedMs, attemptCount: item.attemptCount, response: { model: item.response.model, answers: Object.fromEntries(Object.entries(item.response.answers).map(([id, answer]) => [id, answer.type === "noul" ? { type: "noul", noul: answer.noul } : { type: "choice", choice: answer.choice, probabilities: { ...answer.probabilities }, confidence: answer.confidence }])), usage: { input_tokens: item.response.usage.input_tokens, output_tokens: item.response.usage.output_tokens } } });
  return { schemaVersion: record.schemaVersion, exampleId: record.exampleId, inputSha256: record.inputSha256, questionBundleSha256: record.questionBundleSha256, segmentationVersion: record.segmentationVersion, questionScope: record.questionScope, policySha256: record.policySha256, requestedModel: record.requestedModel, segments: record.segments.map((segment) => ({ id: segment.id, source: segment.source, start: segment.start, end: segment.end, text: segment.text })), passA: pass(record.passA), passB: record.passB === null ? null : pass(record.passB), evidencePassStatus: record.evidencePassStatus, processingElapsedMs: record.processingElapsedMs, derived: { concern: record.derived.concern, triggeredRuleIds: [...record.derived.triggeredRuleIds], contextWarnings: [...record.derived.contextWarnings], evidence: Object.fromEntries(SIGNAL_IDS.map((id) => [id, { status: record.derived.evidence[id].status, segmentId: record.derived.evidence[id].segmentId }])) as ReplayRecord["derived"]["evidence"], adviceTemplateIds: [...record.derived.adviceTemplateIds] } };
}

async function refreshDatasetIndex() {
  const ids = ["ai-email-200-v1", "spaphish-v5", "spaphish-v5-es-questions"] as const;
  const loaders = await Promise.all(ids.map(async (id) => {
    try { await readFile(resolve(generatedRoot, "records", id, "record-loader.ts"), "utf8"); return id; } catch { return null; }
  }));
  const available = new Set(loaders.filter((id): id is (typeof ids)[number] => id !== null));
  const aiAvailable = available.has("ai-email-200-v1"), spaAvailable = available.has("spaphish-v5"), spaEsAvailable = available.has("spaphish-v5-es-questions");
  const source = [
    ...(aiAvailable ? ["const loadAiModule = () => import('./records/ai-email-200-v1/record-loader');", "const loadAiRecord = async (example: CorpusExample) => (await loadAiModule()).loadRecord(example);", "const loadAiRun = async () => (await loadAiModule()).loadRun();"] : []),
    ...(spaAvailable ? ["const loadSpaModule = () => import('./records/spaphish-v5/record-loader');", "const loadSpaRecord = async (example: CorpusExample) => (await loadSpaModule()).loadRecord(example);", "const loadSpaRun = async () => (await loadSpaModule()).loadRun();"] : []),
    ...(spaEsAvailable ? ["const loadSpaEsModule = () => import('./records/spaphish-v5-es-questions/record-loader');", "const loadSpaEsRecord = async (example: CorpusExample) => (await loadSpaEsModule()).loadRecord(example);", "const loadSpaEsRun = async () => (await loadSpaEsModule()).loadRun();"] : []),
    "",
    "export type CorpusExample = {",
    "  id: string; datasetId: string; title: string; language: 'en' | 'es';",
    "  input: { channel: 'email'; subject: string | null; body: string; userContext: string };",
    "  groundTruth: { label: 'phishing' | 'benign'; labelSource: 'synthetic_author' | 'source_dataset'; rationale?: string };",
    "  provenance: { sourceRecordId?: string; originalSeedIds?: string[] };",
    "};",
    "export type GeneratedDatasetIndex = {",
    "  id: string; name: string; language: string; sampleNote: string; total: number; loadExamples: () => Promise<CorpusExample[]>;",
    "  loadRecord: (example: CorpusExample) => Promise<unknown | null>;",
    "  loadRun: () => Promise<unknown | null>;",
    "};",
    "const unavailable = async () => null;",
    "export const datasets: GeneratedDatasetIndex[] = [",
    "  { id: 'ai-email-200-v1', name: 'AI Email 200', language: 'English', sampleNote: '200 authored emails, balanced by dataset label.', total: 200, loadExamples: async () => (await import('../../../../data/corpora/ai-email-200-v1.json')).default.examples as CorpusExample[], loadRecord: " + (aiAvailable ? "loadAiRecord, loadRun: loadAiRun" : "unavailable, loadRun: unavailable") + " },",
    "  { id: 'spaphish-v5', name: 'SpaPhish v5', language: 'Spanish', sampleNote: '499-email public subset from SpaPhish v5: 250 benign and 249 phishing labels after one authorized post-capture exclusion.', total: 499, loadExamples: async () => (await import('../../../../data/corpora/spaphish-v5.json')).default.examples as CorpusExample[], loadRecord: " + (spaAvailable ? "loadSpaRecord, loadRun: loadSpaRun" : "unavailable, loadRun: unavailable") + " }" + (spaEsAvailable ? "," : ""),
    ...(spaEsAvailable ? ["  { id: 'spaphish-v5-es-questions', name: 'SpaPhish v5 [Spanish Input Questions]', language: 'Spanish · ES questions', sampleNote: 'Same 499-email SpaPhish v5 public subset, recorded with Spanish signal questions under policy-v1-es-exp (YES 0.70).', total: 499, loadExamples: async () => (await import('../../../../data/corpora/spaphish-v5.json')).default.examples as CorpusExample[], loadRecord: loadSpaEsRecord, loadRun: loadSpaEsRun }"] : []),
    "];",
    ""
  ].join("\n");
  await writeFile(resolve(generatedRoot, "dataset-index.ts"), source);
}

export async function buildPublicData(corpusPath: string, recordsPath: string, outputPath: string, final: boolean, publicDatasetId?: string) {
  if (!final) throw new Error("public export requires --final and a complete frozen capture");
  const corpus = await read(resolve(corpusPath)) as CorpusEnvelope;
  validateCorpusEnvelope(corpus);
  const dataset = frozen[corpus.examples[0]?.datasetId ?? ""];
  if (!dataset || corpus.examples.some((example) => example.datasetId !== dataset.id) || corpus.examples.length !== dataset.count || corpus.examples.filter((example) => example.groundTruth.label === "benign").length !== dataset.benign || corpus.examples.filter((example) => example.groundTruth.label === "phishing").length !== dataset.phishing || await sha256Web(corpus) !== dataset.hash) throw new Error("corpus must be a frozen public corpus");
  const publishedId = publicDatasetId ?? dataset.id;
  if (publishedId !== dataset.id && publishedId !== "spaphish-v5-es-questions") throw new Error("unsupported public dataset id");
  if (publishedId === "spaphish-v5-es-questions" && dataset.id !== "spaphish-v5") throw new Error("Spanish-question publication requires the frozen SpaPhish corpus");
  const directFrozenCapture = publishedId === "spaphish-v5-es-questions";
  const projection = directFrozenCapture ? null : parsePublicProjection(corpus);
  if (!directFrozenCapture && (projection === null) !== (dataset.id !== "spaphish-v5")) throw new Error("public corpus projection metadata does not match its frozen cohort");
  const destination = resolve(outputPath);
  if (!under(destination, generatedRoot)) throw new Error("public modules must be generated under apps/web/src/generated");
  const sourceManifest = await read(resolve(recordsPath, "manifest.json"));
  const manifest = parseManifest(sourceManifest, directFrozenCapture ? "frozen" : "capture");
  const sourceDataset = (directFrozenCapture ? frozen : captureSources)[manifest.datasetId];
  if (!sourceDataset || (projection === null ? manifest.datasetId !== dataset.id : manifest.datasetId !== projection.sourceDatasetId || manifest.datasetSha256 !== projection.parentCorpusSha256)) throw new Error("manifest configuration hash mismatch");
  await verifyManifestConfig(manifest);
  const enrolled = new Map(corpus.examples.map((example) => [example.id, example]));
  const listed = new Set<string>();
  for (const entry of manifest.records) { if (!enrolled.has(entry.exampleId)) throw new Error("manifest contains non-enrolled example"); if (listed.has(entry.exampleId)) throw new Error("duplicate manifest record ID"); listed.add(entry.exampleId); }
  if (projection === null) {
    if (manifest.completedCount !== dataset.count || manifest.records.length !== dataset.count || manifest.failures.length !== 0 || listed.size !== dataset.count) throw new Error("final publication requires a complete frozen capture");
    if (manifest.completedCount !== manifest.records.length || manifest.completedCount + manifest.failures.length !== manifest.expectedCount) throw new Error("manifest completion counts mismatch");
  } else {
    const excluded = new Set<string>(projection.excludedExampleIds);
    if (manifest.expectedCount !== projection.sourceExpectedCount || manifest.completedCount !== dataset.count || manifest.records.length !== dataset.count || listed.size !== dataset.count || manifest.failures.length !== excluded.size || manifest.failures.some((failure) => !excluded.has(failure.exampleId))) throw new Error("authorized public projection does not retain exactly the complete source records");
  }
  const allowedRecordFiles = new Set(manifest.records.map((entry) => entry.exampleId + ".json"));
  const excludedFiles = new Set(projection === null ? [] : projection.excludedExampleIds.map((id) => id + ".json"));
  const files = (await readdir(resolve(recordsPath))).filter((file) => file.endsWith(".json") && file !== "manifest.json" && file !== "run-state.json" && !excludedFiles.has(file));
  if (files.some((file) => !allowedRecordFiles.has(file))) throw new Error("nonallowlisted JSON record artifact");
  if (files.length !== manifest.records.length) throw new Error("record file count differs from manifest");
  const accepted = new Map<string, { record: ReplayRecord; entry: RecordEntry; replayAnchors: ReplayAnchors; projectionSha256: string }>();
  for (const file of files) {
    const record = strictRecord(await read(resolve(recordsPath, file)));
    const entry = manifest.records.find((item) => item.exampleId === record.exampleId), example = enrolled.get(record.exampleId);
    if (!entry || !example || accepted.has(record.exampleId)) throw new Error("record is not uniquely allowlisted by manifest");
    if (record.questionScope !== dataset.scope || record.inputSha256 !== entry.inputSha256 || record.questionBundleSha256 !== manifest.questionBundleSha256 || record.policySha256 !== manifest.policySha256 || record.requestedModel !== manifest.requestedModel || record.segmentationVersion !== manifest.segmentationVersion || record.passA.requestSha256 !== entry.passARequestSha256 || (record.passB?.requestSha256 ?? null) !== entry.passBRequestSha256 || await sha256Web(record) !== entry.recordSha256) throw new Error("recording manifest binding mismatch");
    await verifyReplayRecord(record, example.input, example.language);
    if (record.evidencePassStatus === "failed") throw new Error("public projection cannot retain a failed required evidence pass");
    const replayAnchorSet = replayAnchors(record, entry.events);
    await validateRecoveryRecord(manifest, entry, record, replayAnchorSet);
    accepted.set(record.exampleId, { record: copy(record), entry, replayAnchors: replayAnchorSet, projectionSha256: await sha256Web({ inputSha256: record.inputSha256, recordSha256: entry.recordSha256, events: entry.events, replayAnchors: replayAnchorSet }) });
  }
  if (accepted.size !== manifest.records.length) throw new Error("missing allowlisted record");
  const rows: EvaluationRow[] = corpus.examples.map((example) => {
    const record = accepted.get(example.id)?.record;
    const evidence = record ? Object.values(record.derived.evidence).reduce((result, item) => { if (item.status !== "selected" && item.status !== "not_requested") result[item.status] = (result[item.status] ?? 0) + 1; return result; }, {} as NonNullable<EvaluationRow["evidence"]>) : { unavailable: 0 };
    const values = record ? Object.values(record.derived.evidence) : [];
    return { id: example.id, label: example.groundTruth.label, concern: record?.derived.concern ?? null, evidenceEligible: values.filter((item) => item.status !== "not_requested").length, evidenceSelected: values.filter((item) => item.status === "selected").length, evidence, captureComplete: record !== undefined && record.evidencePassStatus !== "failed" };
  });
  const { evaluatedAt: _generatedAt, ...evaluation } = evaluateDataset(publishedId, rows, { runId: manifest.runId, policyVersion: directFrozenCapture ? POLICY_VERSION_ES_EXP : POLICY_VERSION, questionHash: manifest.questionBundleSha256 });
  const allEvents = manifest.records.flatMap((entry) => entry.events).sort((left, right) => {
    const session = manifest.captureSessions.findIndex((item) => item.captureSessionId === left.captureSessionId) - manifest.captureSessions.findIndex((item) => item.captureSessionId === right.captureSessionId);
    return session === 0 ? left.seq - right.seq : session;
  });
  await mkdir(destination, { recursive: true });
  for (const [id, value] of accepted) await writeFile(resolve(destination, "record-" + id + ".ts"), "import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';\nexport const record = " + JSON.stringify(value.record, null, 2) + " as ReplayRecord;\nexport const events = " + JSON.stringify(value.entry.events, null, 2) + " as readonly PublicCaptureEvent[];\nexport const recordSha256 = " + JSON.stringify(value.entry.recordSha256) + ";\nexport const replayAnchors = " + JSON.stringify(value.replayAnchors) + " as const;\nexport const projectionSha256 = " + JSON.stringify(value.projectionSha256) + ";\n");
  const sourceRun = { runId: manifest.runId, datasetId: manifest.datasetId, datasetSha256: manifest.datasetSha256, questionBundleSha256: manifest.questionBundleSha256, policySha256: manifest.policySha256, requestedModel: manifest.requestedModel, segmentationVersion: manifest.segmentationVersion, sourceContentSha256: manifest.sourceContentSha256, declaredHttpAttemptCap: manifest.declaredHttpAttemptCap, actualHttpAttemptCount: manifest.actualHttpAttemptCount, runWallElapsedMs: manifest.runWallElapsedMs, runWallMeasurement: manifest.runWallMeasurement, unknownInterruptedSessionCount: manifest.unknownInterruptedSessionCount, configSha256: manifest.configSha256, expectedCount: manifest.expectedCount, completedCount: manifest.completedCount, captureSessions: manifest.captureSessions, recoveryLineage: manifest.recoveryLineage, failures: manifest.failures.map((failure) => ({ exampleId: failure.exampleId, errorCode: failure.errorCode })) };
  const projectionLineage = projection === null ? null : { kind: projection.kind, sourceManifestSha256: await sha256Web(sourceManifest), sourceDatasetSha256: manifest.datasetSha256, sourceConfigSha256: manifest.configSha256, sourceExpectedCount: projection.sourceExpectedCount, excludedExampleIds: projection.excludedExampleIds };
  const publicRun = { schemaVersion: manifest.schemaVersion, runId: manifest.runId, datasetId: publishedId, datasetSha256: dataset.hash, questionBundleSha256: manifest.questionBundleSha256, policySha256: manifest.policySha256, requestedModel: manifest.requestedModel, segmentationVersion: manifest.segmentationVersion, sourceContentSha256: manifest.sourceContentSha256, expectedCount: dataset.count, completedCount: dataset.count, failures: [], projectionLineage, sourceRun };
  const anchorsByExample = Object.fromEntries([...accepted.entries()].map(([id, value]) => [id, value.replayAnchors]));
  const runProjectionSha256 = await sha256Web(runProjection(publicRun, rows, evaluation, allEvents, anchorsByExample));
  const loader = ["import { sha256Web, verifyReplayRecord, type EvaluationRow, type PublicCaptureEvent, type ReplayRecord } from '@scam-signal-lens/core';", "import type { CorpusExample } from '../../dataset-index';", "import { acceptVerifiedRecord, acceptVerifiedRun } from '../../../verified-loader-bridge';", "export type ReplayAnchors = { passA: { captureSessionId: string; seq: number }; passB: { captureSessionId: string; seq: number } | null; complete: { captureSessionId: string; seq: number } };", "export type VerifiedPublicReplay = { example: CorpusExample; record: ReplayRecord; events: readonly PublicCaptureEvent[]; replayAnchors: ReplayAnchors; recordSha256: string; provenance: { captureSessionId?: string; capturedAt: string; sourceCodeRevision?: string } };", "const modules: Record<string, () => Promise<{ record: ReplayRecord; events: readonly PublicCaptureEvent[]; recordSha256: string; replayAnchors: ReplayAnchors; projectionSha256: string }>> = {", ...[...accepted.keys()].map((id) => "  " + JSON.stringify(id) + ": () => import('./record-" + id + "'),"), "};", "export const run = " + JSON.stringify(publicRun, null, 2) + " as const;", "export const rows = " + JSON.stringify(rows, null, 2) + " as readonly EvaluationRow[];", "export const evaluation = " + JSON.stringify(evaluation, null, 2) + " as const;", "export const events = " + JSON.stringify(allEvents, null, 2) + " as readonly PublicCaptureEvent[];", "export const anchorsByExample = " + JSON.stringify(anchorsByExample, null, 2) + " as const;", "export const runProjectionSha256 = " + JSON.stringify(runProjectionSha256) + ";", "export async function loadRecord(example: CorpusExample) { const load = modules[example.id]; if (!load) return null; try { const loaded = await load(); if (await sha256Web(example.input) !== loaded.record.inputSha256 || await sha256Web(loaded.record) !== loaded.recordSha256 || await sha256Web({ inputSha256: loaded.record.inputSha256, recordSha256: loaded.recordSha256, events: loaded.events, replayAnchors: loaded.replayAnchors }) !== loaded.projectionSha256) return null; await verifyReplayRecord(loaded.record, example.input, example.language); const session = run.sourceRun.captureSessions.find((item) => item.captureSessionId === loaded.replayAnchors.passA.captureSessionId); return acceptVerifiedRecord({ example, record: loaded.record, events: loaded.events, replayAnchors: loaded.replayAnchors, recordSha256: loaded.recordSha256, provenance: { ...(session === undefined ? {} : { captureSessionId: session.captureSessionId }), capturedAt: loaded.record.passA.capturedAt, ...(session?.sourceRevision.revision === null || session === undefined ? {} : { sourceCodeRevision: session.sourceRevision.revision }) } }); } catch { return null; } }", "export async function loadRun() { if (run.completedCount !== run.expectedCount || run.failures.length !== 0 || rows.length !== run.expectedCount || evaluation.datasetId !== run.datasetId || Object.keys(anchorsByExample).length !== run.expectedCount || await sha256Web({ run, rows, evaluation, events, anchorsByExample }) !== runProjectionSha256) return null; return acceptVerifiedRun({ manifest: run, evaluation, rows, events, anchorsByExample }); }"].join("\n");
  await writeFile(resolve(destination, "record-loader.ts"), loader + "\n");
  await refreshDatasetIndex();
  return { datasetId: publishedId, verifiedRecordCount: accepted.size, enrolledCount: dataset.count };
}

async function main() { const corpus = arg("--corpus"), records = arg("--records"), out = arg("--out"), publicDatasetId = arg("--public-dataset-id"); if (!corpus || !records || !out) throw new Error("Usage: pnpm build:public-data -- --corpus <corpus.json> --records <record-directory> --out <generated-directory> [--public-dataset-id <id>] [--final]"); process.stdout.write(JSON.stringify(await buildPublicData(corpus, records, out, process.argv.includes("--final"), publicDatasetId)) + "\n"); }
if (process.argv[1]?.endsWith("build-public-data.ts")) void main().catch((error: unknown) => { process.stderr.write((error instanceof Error ? error.message : "public_data_build_failed") + "\n"); process.exitCode = 1; });
