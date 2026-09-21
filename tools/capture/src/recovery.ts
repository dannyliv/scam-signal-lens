import {
  NO,
  REQUESTED_MODEL,
  SIGNAL_IDS,
  allowlistedProviderResponse,
  buildPassARequest,
  buildPassBRequest,
  projectModelInput,
  segmentInput,
  sha256,
  verifyReplayRecord,
  type CorpusExample,
  type CorpusQuestionScope,
} from "@scam-signal-lens/core/node";
import type { CaptureSnapshot } from "./record-example.js";

export type RecoveryImport = {
  exampleId: string;
  completedRecordSha256: string | null;
  passASha256: string | null;
  snapshotSha256: string;
};

export type SupersededCapture = {
  exampleId: string;
  parentInputSha256: string;
  recoveryInputSha256: string;
  completedRecordSha256: string | null;
  passASha256: string | null;
  snapshotSha256: string;
  eventCount: number;
  attemptReservationCount: number;
};

export type RecoveryLineage = {
  parentRunId: string;
  parentManifestSha256: string;
  parentConfigSha256: string;
  parentSourceContentSha256: string;
  inheritedHttpAttemptCount: number;
  inheritedSessionIds: string[];
  imports: RecoveryImport[];
  changedInput: { exampleId: string; parentInputSha256: string; recoveryInputSha256: string } | null;
  superseded: SupersededCapture[];
};

type ParentConfig = { datasetId: string; datasetSha256: string; questionBundleSha256: string; policySha256: string; requestedModel: string; segmentationVersion: string; sourceContentSha256: string; declaredHttpAttemptCap: number };
type ParentManifest = ParentConfig & { runId: string; configSha256: string; actualHttpAttemptCount: number; records: Array<{ exampleId: string; recordSha256: string }> };
type ParentState = ParentConfig & { runId: string; configSha256: string; actualHttpAttemptCount: number; captureSessions: Array<{ captureSessionId: string }>; attemptReservations: Array<{ exampleId: string }> };
type ExpectedInferenceConfig = { datasetId: string; datasetSha256: string; questionBundleSha256: string; policySha256: string; requestedModel: string; segmentationVersion: string; declaredHttpAttemptCap: number };

type RecoveryPlanOptions = {
  parentManifest: ParentManifest;
  parentState: ParentState;
  examples: CorpusExample[];
  parentSnapshots: Map<string, CaptureSnapshot>;
  changedExampleId?: string;
  expectedInferenceConfig: ExpectedInferenceConfig;
};

export type RecoveryPlan = {
  lineage: RecoveryLineage;
  snapshots: Map<string, CaptureSnapshot>;
  inheritedAttemptReservations: ParentState["attemptReservations"];
  inheritedCaptureSessions: ParentState["captureSessions"];
};

const expectedQuestions = (request: { questions: Record<string, { type: "noul" | "choice"; criteria: Record<string, string> }> }) => Object.fromEntries(Object.entries(request.questions).map(([id, question]) => [id, question.type === "noul" ? { type: "noul" as const } : { type: "choice" as const, options: Object.keys(question.criteria) }]));

function scopeFor(example: CorpusExample): CorpusQuestionScope {
  return example.datasetId === "ai-email-200-v1" ? "synthetic_sanitized" : "source_messages";
}

async function validateUnchangedSnapshot(example: CorpusExample, snapshot: CaptureSnapshot): Promise<RecoveryImport> {
  const input = projectModelInput(example);
  const scope = scopeFor(example);
  if (snapshot.exampleId !== example.id || snapshot.inputSha256 !== sha256(input) || snapshot.questionScope !== scope) throw new Error("recovery_snapshot_input_mismatch");
  const passARequest = buildPassARequest(input, example.language, scope);
  if (snapshot.passA !== null) {
    if (snapshot.passA.requestSha256 !== sha256(passARequest) || snapshot.passA.response.model !== REQUESTED_MODEL) throw new Error("recovery_pass_a_mismatch");
    const safeA = allowlistedProviderResponse(snapshot.passA.response, expectedQuestions(passARequest));
    const eligible = Object.entries(safeA.answers)
      .filter(([id, answer]) => id !== "message_role" && id !== "request_route" && answer.type === "noul" && answer.noul > NO)
      .map(([id]) => id as (typeof SIGNAL_IDS)[number]);
    const plan = buildPassBRequest(input, segmentInput(input, example.language), eligible, example.language, scope);
    const passBRequestSha256 = plan.request === null ? null : sha256(plan.request);
    if (snapshot.passBRequestSha256 !== passBRequestSha256) throw new Error("recovery_pass_b_request_mismatch");
  } else if (snapshot.passBRequestSha256 !== null) {
    throw new Error("recovery_pass_b_without_a");
  }
  if (snapshot.completed) {
    if (snapshot.record === null) throw new Error("recovery_completed_record_missing");
    await verifyReplayRecord(snapshot.record, input, example.language);
  }
  return {
    exampleId: example.id,
    completedRecordSha256: snapshot.completed && snapshot.record !== null ? sha256(snapshot.record) : null,
    passASha256: snapshot.passA === null ? null : sha256(snapshot.passA),
    snapshotSha256: sha256(snapshot),
  };
}

export async function buildRecoveryPlan(options: RecoveryPlanOptions): Promise<RecoveryPlan> {
  const { parentManifest, parentState, examples, parentSnapshots, changedExampleId, expectedInferenceConfig } = options;
  const parentConfig: ParentConfig = { datasetId: parentManifest.datasetId, datasetSha256: parentManifest.datasetSha256, questionBundleSha256: parentManifest.questionBundleSha256, policySha256: parentManifest.policySha256, requestedModel: parentManifest.requestedModel, segmentationVersion: parentManifest.segmentationVersion, sourceContentSha256: parentManifest.sourceContentSha256, declaredHttpAttemptCap: parentManifest.declaredHttpAttemptCap };
  if (!Number.isInteger(parentManifest.actualHttpAttemptCount) || parentManifest.actualHttpAttemptCount < 0 || parentManifest.actualHttpAttemptCount !== parentState.actualHttpAttemptCount || parentManifest.actualHttpAttemptCount > parentManifest.declaredHttpAttemptCap) throw new Error("recovery_parent_attempt_count_mismatch");
  if (typeof parentManifest.runId !== "string" || parentManifest.configSha256 !== sha256(parentConfig)) throw new Error("recovery_parent_manifest_invalid");
  if (parentState.runId !== parentManifest.runId || parentState.configSha256 !== parentManifest.configSha256 || parentState.datasetId !== parentConfig.datasetId || parentState.datasetSha256 !== parentConfig.datasetSha256 || parentState.questionBundleSha256 !== parentConfig.questionBundleSha256 || parentState.policySha256 !== parentConfig.policySha256 || parentState.requestedModel !== parentConfig.requestedModel || parentState.segmentationVersion !== parentConfig.segmentationVersion || parentState.sourceContentSha256 !== parentConfig.sourceContentSha256 || parentState.declaredHttpAttemptCap !== parentConfig.declaredHttpAttemptCap) throw new Error("recovery_parent_state_config_mismatch");
  if (parentConfig.datasetId !== expectedInferenceConfig.datasetId || parentConfig.questionBundleSha256 !== expectedInferenceConfig.questionBundleSha256 || parentConfig.policySha256 !== expectedInferenceConfig.policySha256 || parentConfig.requestedModel !== expectedInferenceConfig.requestedModel || parentConfig.segmentationVersion !== expectedInferenceConfig.segmentationVersion || parentConfig.declaredHttpAttemptCap !== expectedInferenceConfig.declaredHttpAttemptCap) throw new Error("recovery_inference_config_mismatch");
  const ids = new Set<string>();
  for (const example of examples) {
    if (ids.has(example.id)) throw new Error("recovery_duplicate_example_id");
    ids.add(example.id);
  }
  if (parentSnapshots.size !== examples.length || [...parentSnapshots.keys()].some(id => !ids.has(id))) throw new Error("recovery_parent_snapshot_set_mismatch");
  const changedIds = examples.filter(example => parentSnapshots.get(example.id)!.inputSha256 !== sha256(projectModelInput(example))).map(example => example.id);
  if (changedExampleId === undefined ? changedIds.length !== 0 || parentConfig.datasetSha256 !== expectedInferenceConfig.datasetSha256 : changedIds.length !== 1 || changedIds[0] !== changedExampleId || !ids.has(changedExampleId)) throw new Error("recovery_changed_input_mismatch");
  const changedSnapshot = changedExampleId === undefined ? null : parentSnapshots.get(changedExampleId)!;
  const changedExample = changedExampleId === undefined ? null : examples.find(example => example.id === changedExampleId)!;
  const changedInputSha256 = changedExample === null ? null : sha256(projectModelInput(changedExample));

  const snapshots = new Map<string, CaptureSnapshot>();
  const imports: RecoveryImport[] = [];
  for (const example of examples) {
    if (example.id === changedExampleId) continue;
    const snapshot = parentSnapshots.get(example.id);
    if (!snapshot) throw new Error("recovery_parent_snapshot_missing");
    const imported = await validateUnchangedSnapshot(example, snapshot);
    if (imported.completedRecordSha256 !== null) {
      const manifestRecord = parentManifest.records.find(record => record.exampleId === example.id);
      if (!manifestRecord || manifestRecord.recordSha256 !== imported.completedRecordSha256) throw new Error("recovery_parent_record_anchor_mismatch");
    }
    snapshots.set(example.id, snapshot);
    imports.push(imported);
  }
  const superseded = changedSnapshot === null || changedInputSha256 === null ? [] : [{
    exampleId: changedExampleId!,
    parentInputSha256: changedSnapshot.inputSha256,
    recoveryInputSha256: changedInputSha256,
    completedRecordSha256: changedSnapshot.completed && changedSnapshot.record !== null ? sha256(changedSnapshot.record) : null,
    passASha256: changedSnapshot.passA === null ? null : sha256(changedSnapshot.passA),
    snapshotSha256: sha256(changedSnapshot),
    eventCount: changedSnapshot.events.length,
    attemptReservationCount: parentState.attemptReservations.filter(reservation => reservation.exampleId === changedExampleId).length,
  }];
  return {
    lineage: {
      parentRunId: parentManifest.runId,
      parentManifestSha256: sha256(parentManifest),
      parentConfigSha256: parentManifest.configSha256,
      parentSourceContentSha256: parentManifest.sourceContentSha256,
      inheritedHttpAttemptCount: parentState.actualHttpAttemptCount,
      inheritedSessionIds: parentState.captureSessions.map(session => session.captureSessionId),
      imports,
      changedInput: changedSnapshot === null || changedInputSha256 === null ? null : { exampleId: changedExampleId!, parentInputSha256: changedSnapshot.inputSha256, recoveryInputSha256: changedInputSha256 },
      superseded,
    },
    snapshots,
    inheritedAttemptReservations: parentState.attemptReservations.filter(reservation => changedExampleId === undefined || reservation.exampleId !== changedExampleId),
    inheritedCaptureSessions: parentState.captureSessions,
  };
}
