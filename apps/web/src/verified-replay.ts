import type { CorpusExample } from './generated/dataset-index';
export type ReplayEvent = { seq: number; captureSessionId: string; exampleId: string; kind: 'request_started' | 'request_finished' | 'pass_skipped' | 'example_completed'; pass?: 'A' | 'B' | null; attempt?: number | null; at?: string; offsetMs?: number; elapsedMs?: number; outcome?: string; reasonCode?: string };
export type SignalAnswer = { type: 'noul'; noul: number };
export type ChoiceAnswer = { type: 'choice'; choice: string; confidence: number; probabilities: Record<string, number> };
export type CoreRecord = {
  requestedModel: string;
  segments: readonly { id: string; source: 'subject'|'body'|'userContext'; start: number; end: number; text: string }[];
  passA: { capturedAt: string; successfulAttemptElapsedMs: number; attemptCount: number; response: { answers: Record<string, SignalAnswer | ChoiceAnswer> } };
  passB: { capturedAt: string; successfulAttemptElapsedMs: number; attemptCount: number; response: { answers: Record<string, SignalAnswer | ChoiceAnswer> } } | null;
  derived: {
    concern: string; triggeredRuleIds: readonly string[]; contextWarnings: readonly string[];
    evidence: Record<string, { status: 'selected'|'none_selected'|'low_confidence'|'not_requested'|'candidate_limit'|'unavailable' | string; segmentId?: string | null }>;
    adviceTemplateIds: readonly string[];
  };
};
export type VerifiedExample = {
  example: CorpusExample; record: CoreRecord; events: readonly ReplayEvent[];
  replayAnchors: { passA: ReplayAnchor; passB: ReplayAnchor | null; complete: ReplayAnchor };
  recordSha256: string; provenance: { captureSessionId?: string; capturedAt?: string; sourceCodeRevision?: string; [key: string]: string | undefined };
};
export type ReplayAnchor = { captureSessionId: string; seq: number };
export type EvaluationRow = { id: string; label: 'phishing'|'benign'; concern: 'strong_warning_signs'|'verify_first'|'few_warning_signs'|'not_enough_evidence'|null; evidenceEligible: number; evidenceSelected: number; captureComplete?: boolean; evidence?: Record<string, number> };
export type VerifiedRun = {
  manifest: { captureSessionId?: string; [key: string]: unknown }; evaluation: unknown; rows: readonly EvaluationRow[]; events: readonly ReplayEvent[];
  anchorsByExample: Readonly<Record<string, { passA: ReplayAnchor; passB: ReplayAnchor | null; complete: ReplayAnchor }>>;
};
const examples = new WeakSet<object>(), runs = new WeakSet<object>();
export function isVerifiedExample(value: unknown): value is VerifiedExample { return typeof value === 'object' && value !== null && examples.has(value); }
export function isVerifiedRun(value: unknown): value is VerifiedRun { return typeof value === 'object' && value !== null && runs.has(value); }

/** Internal capability probes. Only the verifier bridge can register an artifact. */
export const verifiedReplayRegistry = {
  acceptExample(value: VerifiedExample) { examples.add(value); return value; },
  acceptRun(value: VerifiedRun) { runs.add(value); return value; }
};
