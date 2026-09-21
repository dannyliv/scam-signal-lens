export const SIGNAL_IDS = [
  "credential_request", "sensitive_data_request", "payment_request", "unusual_payment_routing",
  "urgency_pressure", "authority_claim", "verification_bypass", "advance_fee_or_refund_trap",
  "remote_access_request", "unrealistic_reward", "independent_verification_path", "analyzer_instruction",
] as const;

export type SignalId = (typeof SIGNAL_IDS)[number];
export type Concern = "strong_warning_signs" | "verify_first" | "few_warning_signs" | "not_enough_evidence";
export type GroundTruthLabel = "phishing" | "benign";
export type Channel = "email" | "sms" | "chat" | "social_dm";

export type ModelInput = { channel: Channel; subject: string | null; body: string; userContext: string };
export type GroundTruth = { label: GroundTruthLabel; labelSource: "synthetic_author" | "source_dataset"; rationale?: string };
export type CorpusExample = {
  id: string; datasetId: string; title: string; language: "en" | "es";
  input: ModelInput; groundTruth: GroundTruth;
  provenance: { sourceRecordId?: string; sourceRawSha256?: string; originalSeedIds?: string[] };
};
export type CorpusEnvelope = { version: "1.0.0"; metadata: Record<string, unknown>; examples: CorpusExample[] };
export type NoulAnswer = { type: "noul"; noul: number };
export type ChoiceAnswer = { type: "choice"; choice: string; probabilities: Record<string, number>; confidence: number };
export type PublicProviderResponse = { model: string; answers: Record<string, NoulAnswer | ChoiceAnswer>; usage: { input_tokens: number; output_tokens: number } };
export type Segment = { id: string; source: "subject" | "body" | "userContext"; start: number; end: number; text: string };
export type EvidenceStatus = "selected" | "none_selected" | "low_confidence" | "not_requested" | "candidate_limit" | "unavailable";
export type ReplayRecord = {
  schemaVersion: "1.0.0"; exampleId: string; inputSha256: string; questionBundleSha256: string;
  segmentationVersion: string; questionScope: "synthetic_sanitized" | "source_messages"; policySha256: string; requestedModel: string; segments: Segment[];
  passA: CapturePass; passB: CapturePass | null; evidencePassStatus: "recorded" | "not_needed" | "candidate_limit" | "failed";
  processingElapsedMs: number;
  derived: { concern: Concern; triggeredRuleIds: string[]; contextWarnings: string[]; evidence: Record<SignalId, { status: EvidenceStatus; segmentId: string | null }>; adviceTemplateIds: string[] };
};
export type CapturePass = { requestSha256: string; capturedAt: string; elapsedMs: number; successfulAttemptElapsedMs: number; attemptCount: number; response: PublicProviderResponse };
export type ContextualChoice = { choice: string; confidence: number; probability: number };
export type PublicCaptureEvent = { seq: number; captureSessionId: string; exampleId: string; pass: "A" | "B" | null; attempt: number | null; kind: "request_started" | "request_finished" | "pass_skipped" | "example_completed"; at: string; offsetMs: number; elapsedMs?: number; outcome?: "success" | "timeout" | "http_error" | "schema_error"; reasonCode?: "authentication_failed" | "authorization_failed" | "validation_failed" | "transient_http" | "network_error" | "response_too_large" | "invalid_response" | "schema_error" | "attempt_cap_exceeded" };
