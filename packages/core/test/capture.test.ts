import { describe, expect, it } from "vitest";

import { requestWithRetry } from "../../../tools/capture/src/typesafe-http.js";
import { resumeEligible, resumePassAEligible, runTwoPass } from "../../../tools/capture/src/record.js";
import { recordExample } from "../../../tools/capture/src/record-example.js";
import { buildRecoveryPlan } from "../../../tools/capture/src/recovery.js";
import { inspectProviderValidation } from "../../../tools/capture/src/validation-diagnostic.js";
import { buildPassARequest, policyFingerprint, projectModelInput, segmentInput, sha256 } from "../src/node.js";

describe("capture transport", () => {
  it("retries only transient failures at most twice and records elapsed attempts", async () => {
    let calls = 0;
    const result = await requestWithRetry({
      key: "fake-canary-key",
      request: { model: "jev-1.13.0", state: {}, questions: {} },
      fetchImpl: async () => {
        calls++;
        if (calls < 3) return new Response("overloaded", { status: 503 });
        return new Response(JSON.stringify({ model: "jev-1.13.0", answers: {}, usage: { input_tokens: 1, output_tokens: 2 } }), { status: 200 });
      },
      sleep: async () => undefined,
    });
    expect(calls).toBe(3);
    expect(result.attemptCount).toBe(3);
    expect(result.events.map((event) => event.outcome)).toEqual(["http_error", "http_error", "success"]);
  });

  it("does not retry authentication failures", async () => {
    let calls = 0;
    await expect(requestWithRetry({ key: "fake-canary-key", request: { model: "jev-1.13.0", state: {}, questions: {} }, fetchImpl: async () => { calls++; return new Response("denied", { status: 401 }); }, sleep: async () => undefined })).rejects.toThrow("authentication_failed");
    expect(calls).toBe(1);
  });

  it("emits transport-owned start and finish timestamps for each attempt", async () => {
    const events: string[] = [];
    await requestWithRetry({ key: "fake-canary-key", request: {}, fetchImpl: async () => new Response(JSON.stringify({ ok: true }), { status: 200 }), sleep: async () => undefined, onAttempt: (event) => events.push(`${event.attempt}:${event.phase}:${event.at.length > 0}`) });
    expect(events).toEqual(["1:started:true", "1:finished:true"]);
  });

  it("closes the attempt event when authentication is rejected", async () => {
    const events: string[] = [];
    await expect(requestWithRetry({ key: "fake-canary-key", request: {}, fetchImpl: async () => new Response("denied", { status: 403 }), sleep: async () => undefined, onAttempt: (event) => events.push(`${event.phase}:${event.reasonCode ?? "none"}`) })).rejects.toThrow("authorization_failed");
    expect(events).toEqual(["started:none", "finished:authorization_failed"]);
  });

  it("does not include durable start bookkeeping time in the HTTP attempt measurement", async () => {
    const bookkeepingDelayMs = 30;
    const result = await requestWithRetry({
      key: "fake-canary-key", request: {},
      onAttempt: async (event) => { if (event.phase === "started") await new Promise<void>((resolve) => setTimeout(resolve, bookkeepingDelayMs)); },
      fetchImpl: async () => new Response(JSON.stringify({ ok: true })),
    });
    expect(result.successfulAttemptElapsedMs).toBeLessThan(bookkeepingDelayMs);
  });
});

describe("immutable resume", () => {
  it("allows only a completed record with exact frozen configuration", () => {
    const base = { datasetSha256: "dataset", questionSha256: "questions", policySha256: "policy", requestedModel: "jev-1.13.0", segmentSha256: "segments" };
    expect(resumeEligible({ ...base }, { ...base, completed: true })).toBe(true);
    expect(resumeEligible({ ...base }, { ...base, completed: true, policySha256: "changed" })).toBe(false);
    expect(resumeEligible({ ...base }, { ...base, completed: false })).toBe(false);
    expect(resumePassAEligible({ ...base }, { ...base, exampleId: "x", passA: { recorded: true }, completed: false })).toBe(true);
  });

  it("persists Pass A before a failed Pass B and reuses it after restart", async () => {
    const base = { datasetSha256: "dataset", questionSha256: "questions", policySha256: "policy", requestedModel: "jev-1.13.0", segmentSha256: "segments", exampleId: "email-1", inputSha256: "input", passARequestSha256: "a-request", passBRequestSha256: "b-request" };
    let stage: any = null; let aCalls = 0; let bCalls = 0;
    const options = { config: base, load: async () => stage, save: async (value: any) => { stage = value; }, passA: async () => ({ answer: "A" }), passB: async () => { bCalls++; if (bCalls === 1) throw new Error("network_error"); return { answer: "B" }; } };
    await expect(runTwoPass(options)).rejects.toThrow("network_error");
    options.passA = async () => { aCalls++; return { answer: "A-again" }; };
    const resumed = await runTwoPass(options);
    expect(resumed).toEqual({ passA: { answer: "A" }, passB: { answer: "B" }, reusedPassA: true });
    expect(aCalls).toBe(0);
  });

  it("persists the real validated Pass A before a Pass B failure and resumes only Pass B", async () => {
    const saved: any[] = [];
    let latest: any = null;
    let failPassB = true;
    const requests: unknown[] = [];
    const fetchImpl: typeof fetch = async (_url, init) => {
      const request = JSON.parse(String(init?.body));
      requests.push(request);
      const answers: Record<string, unknown> = {};
      for (const [id, question] of Object.entries(request.questions as Record<string, any>)) {
        if (question.type === "noul") answers[id] = { type: "noul", noul: id === "credential_request" ? 0.3 : 0 };
        else if (id === "message_role") answers[id] = { type: "choice", choice: "informational", probabilities: { active_request: 0, informational: 1, educational_or_quoted: 0, mixed_or_unclear: 0 }, confidence: 1 };
        else if (id === "request_route") answers[id] = { type: "choice", choice: "no_sensitive_action", probabilities: { independently_established: 0, sender_supplied: 0, no_sensitive_action: 1, mixed_or_unknown: 0 }, confidence: 1 };
        else answers[id] = { type: "choice", choice: "NONE", probabilities: { NONE: 1, ...Object.fromEntries(Object.keys(question.criteria).filter((key) => key !== "NONE").map((key) => [key, 0])) }, confidence: 1 };
      }
      if (Object.keys(request.questions).some((id) => id.startsWith("evidence_")) && failPassB) throw new Error("offline");
      return new Response(JSON.stringify({ model: "jev-1.13.0", answers, usage: { input_tokens: 1, output_tokens: 1 } }), { status: 200 });
    };
    const storage = { load: async () => latest, save: async (snapshot: any) => { latest = snapshot; saved.push(snapshot); } };
    const example = { id: "e1", datasetId: "ai-email-200-v1", language: "en" as const, input: { channel: "email" as const, subject: null, body: "hello", userContext: "" } };
    const input = projectModelInput(example);
    const common: any = { key: "fake-canary-key", example, questionBundleSha256: sha256(buildPassARequest(input, "en", "synthetic_sanitized").questions), policySha256: sha256(policyFingerprint()), captureSessionId: "session", nextSeq: (() => { let value = 0; return () => ++value; })(), fetchImpl, sleep: async () => undefined, storage };
    const first = await recordExample(common);
    expect(first.captureComplete).toBe(false);
    expect(saved.some((snapshot) => snapshot.passA?.response?.answers?.credential_request)).toBe(true);
    const stagedSnapshot = JSON.parse(JSON.stringify(latest));
    const stagedBytes = JSON.stringify(stagedSnapshot);
    const recoveryConfig = { datasetId: "ai-email-200-v1", datasetSha256: "same-corpus", questionBundleSha256: common.questionBundleSha256, policySha256: common.policySha256, requestedModel: "jev-1.13.0", segmentationVersion: "intl-segmenter-sentence-v1", sourceContentSha256: "parent-source", declaredHttpAttemptCap: 6 };
    const stagedRecovery = await buildRecoveryPlan({ parentManifest: { runId: "parent", ...recoveryConfig, configSha256: sha256(recoveryConfig), actualHttpAttemptCount: 2, records: [] }, parentState: { runId: "parent", ...recoveryConfig, configSha256: sha256(recoveryConfig), actualHttpAttemptCount: 2, captureSessions: [{ captureSessionId: "parent-session" }], attemptReservations: [] }, examples: [example as any], parentSnapshots: new Map([[example.id, stagedSnapshot]]), expectedInferenceConfig: recoveryConfig });
    expect(JSON.stringify(stagedRecovery.snapshots.get(example.id))).toBe(stagedBytes);
    expect(stagedRecovery.lineage.imports[0]?.passASha256).toBe(sha256(stagedSnapshot.passA));
    const firstCallCount = saved.length;
    const stagedRequestHash = latest.passA.requestSha256;
    latest.passA.requestSha256 = "0".repeat(64);
    const beforeCorruptStage = requests.length;
    await expect(recordExample({ ...common, captureSessionId: "corrupt-stage" })).resolves.toMatchObject({ captureComplete: false, errorCode: "schema_error" });
    expect(requests).toHaveLength(beforeCorruptStage);
    latest.passA.requestSha256 = stagedRequestHash;
    latest.segmentationSha256 = "0".repeat(64);
    await expect(recordExample({ ...common, captureSessionId: "corrupt-segments" })).rejects.toThrow("persisted_capture_config_mismatch");
    latest.segmentationSha256 = sha256(segmentInput(input, "en"));
    failPassB = false;
    const resumed = await recordExample({ ...common, captureSessionId: "session-2" });
    expect(resumed.captureComplete).toBe(true);
    expect(resumed.record.passA.response.answers.credential_request).toEqual({ type: "noul", noul: 0.3 });
    expect(requests.filter((request: any) => !Object.keys(request.questions).some((id) => id.startsWith("evidence_")))).toHaveLength(1);
    expect(requests.filter((request: any) => Object.keys(request.questions).some((id) => id.startsWith("evidence_")))).toHaveLength(4);
    expect(resumed.record.processingElapsedMs).toBeGreaterThanOrEqual(first.record.processingElapsedMs);
    expect(saved.length).toBeGreaterThan(firstCallCount);
  });

  it("fails closed before fetch when a persisted Pass A or completed record is corrupted", async () => {
    const example: any = { id: "e2", datasetId: "ai-email-200-v1", language: "en", input: { channel: "email", subject: null, body: "hello", userContext: "" } };
    const input = projectModelInput(example);
    const config = { questionBundleSha256: sha256(buildPassARequest(input, "en", "synthetic_sanitized").questions), policySha256: sha256(policyFingerprint()) };
    let latest: any = null; let fetches = 0;
    const fetchImpl: typeof fetch = async (_url, init) => {
      fetches++; const request = JSON.parse(String(init?.body)); const answers: Record<string, unknown> = {};
      for (const [id, question] of Object.entries(request.questions as Record<string, any>)) answers[id] = question.type === "noul" ? { type: "noul", noul: 0 } : id === "message_role" ? { type: "choice", choice: "informational", probabilities: { active_request: 0, informational: 1, educational_or_quoted: 0, mixed_or_unclear: 0 }, confidence: 1 } : { type: "choice", choice: "no_sensitive_action", probabilities: { independently_established: 0, sender_supplied: 0, no_sensitive_action: 1, mixed_or_unknown: 0 }, confidence: 1 };
      return new Response(JSON.stringify({ model: "jev-1.13.0", answers, usage: { input_tokens: 1, output_tokens: 1 } }));
    };
    const storage = { load: async () => latest, save: async (snapshot: any) => { latest = snapshot; } };
    const options: any = { key: "fake-canary-key", example, ...config, captureSessionId: "session", nextSeq: (() => { let seq = 0; return () => ++seq; })(), fetchImpl, storage };
    await expect(recordExample(options)).resolves.toMatchObject({ captureComplete: true });
    latest.record.passA.requestSha256 = "0".repeat(64);
    const beforeCompleted = fetches;
    await expect(recordExample(options)).rejects.toThrow("Pass A request hash");
    expect(fetches).toBe(beforeCompleted);
  });
});


describe("versioned recovery", () => {
  it("imports only unchanged snapshots and supersedes the changed example without its events", async () => {
    const example = (id: string, body: string): any => ({ id, datasetId: "spaphish-v5", language: "es", input: { channel: "email", subject: null, body, userContext: "" }, groundTruth: { label: "phishing", labelSource: "source_dataset" }, provenance: {} });
    const unchanged = example("SPAPHISH-001", "unchanged");
    const changed = example("SPAPHISH-397", "redacted");
    const parentSnapshots: any = new Map([
      [unchanged.id, { exampleId: unchanged.id, inputSha256: sha256(projectModelInput(unchanged)), passA: null, record: null, events: [{ seq: 1 }], questionScope: "source_messages", passBRequestSha256: null, completed: false }],
      [changed.id, { exampleId: changed.id, inputSha256: "old-input-hash", passA: { requestSha256: "old-pass-a" }, record: { old: true }, events: [{ seq: 2 }], questionScope: "source_messages", passBRequestSha256: null, completed: true }],
    ]);
    const parentConfig = { datasetId: "spaphish-v5", datasetSha256: "parent-corpus", questionBundleSha256: "questions", policySha256: "policy", requestedModel: "jev-1.13.0", segmentationVersion: "intl-segmenter-sentence-v1", sourceContentSha256: "parent-source", declaredHttpAttemptCap: 6 };
    const parentManifest = { runId: "parent", ...parentConfig, configSha256: sha256(parentConfig), actualHttpAttemptCount: 4, records: [] };
    const plan = await buildRecoveryPlan({
      parentManifest,
      parentState: { runId: "parent", ...parentConfig, configSha256: sha256(parentConfig), actualHttpAttemptCount: 4, captureSessions: [{ captureSessionId: "parent-session" }], attemptReservations: [{ exampleId: "SPAPHISH-001" }, { exampleId: "SPAPHISH-397" }] },
      examples: [unchanged, changed],
      parentSnapshots,
      changedExampleId: "SPAPHISH-397",
      expectedInferenceConfig: { ...parentConfig, datasetSha256: "recovery-corpus" },
    });
    expect(plan.lineage.imports).toHaveLength(1);
    expect(plan.lineage.imports[0]?.exampleId).toBe("SPAPHISH-001");
    expect(plan.snapshots.has("SPAPHISH-397")).toBe(false);
    expect(plan.lineage.changedInput?.exampleId).toBe("SPAPHISH-397");
    expect(plan.lineage.superseded[0]?.eventCount).toBe(1);
    expect(plan.inheritedAttemptReservations).toEqual([{ exampleId: "SPAPHISH-001" }]);
  });
});

describe("recovery parent binding", () => {
  const example = (id: string): any => ({ id, datasetId: "ai-email-200-v1", language: "en", input: { channel: "email", subject: null, body: id, userContext: "" }, groundTruth: { label: "benign", labelSource: "synthetic_author" }, provenance: {} });
  const parentConfig = { datasetId: "ai-email-200-v1", datasetSha256: "same-corpus", questionBundleSha256: "questions", policySha256: "policy", requestedModel: "jev-1.13.0", segmentationVersion: "intl-segmenter-sentence-v1", sourceContentSha256: "parent-source", declaredHttpAttemptCap: 12 };
  const fixture = () => {
    const examples = [example("AIB001"), example("AIB002")];
    const parentManifest: any = { runId: "parent", ...parentConfig, configSha256: sha256(parentConfig), actualHttpAttemptCount: 4, records: [] };
    const parentState: any = { runId: "parent", ...parentConfig, configSha256: sha256(parentConfig), actualHttpAttemptCount: 4, captureSessions: [{ captureSessionId: "parent-session" }], attemptReservations: [] };
    const parentSnapshots: any = new Map(examples.map(item => [item.id, { exampleId: item.id, inputSha256: sha256(projectModelInput(item)), passA: null, passBRequestSha256: null, record: null, events: [], questionScope: "synthetic_sanitized", completed: false }]));
    return { examples, parentManifest, parentState, parentSnapshots };
  };

  it("imports all unchanged AI snapshots with null changedInput", async () => {
    const source = fixture();
    const plan = await buildRecoveryPlan({ ...source, expectedInferenceConfig: parentConfig });
    expect(plan.lineage.changedInput).toBeNull();
    expect(plan.lineage.superseded).toEqual([]);
    expect(plan.lineage.imports.map(item => item.exampleId)).toEqual(["AIB001", "AIB002"]);
  });

  it("rejects parent manifest, state, config, or cap mismatches before imports", async () => {
    const invalidManifest = fixture(); invalidManifest.parentManifest.configSha256 = "bad";
    await expect(buildRecoveryPlan({ ...invalidManifest, expectedInferenceConfig: parentConfig })).rejects.toThrow("recovery_parent_manifest_invalid");
    const invalidState = fixture(); invalidState.parentState.runId = "other";
    await expect(buildRecoveryPlan({ ...invalidState, expectedInferenceConfig: parentConfig })).rejects.toThrow("recovery_parent_state_config_mismatch");
    const invalidInference = fixture();
    await expect(buildRecoveryPlan({ ...invalidInference, expectedInferenceConfig: { ...parentConfig, declaredHttpAttemptCap: 18 } })).rejects.toThrow("recovery_inference_config_mismatch");
    const invalidCap = fixture(); invalidCap.parentManifest.actualHttpAttemptCount = 13; invalidCap.parentState.actualHttpAttemptCount = 13;
    await expect(buildRecoveryPlan({ ...invalidCap, expectedInferenceConfig: parentConfig })).rejects.toThrow("recovery_parent_attempt_count_mismatch");
  });
});


describe("private validation diagnostics", () => {
  it("reports fixed predicates without retaining nonnumeric provider values", () => {
    const inspection = inspectProviderValidation("B", { model: "jev-1.13.0", answers: { q: { type: "choice", choice: "a", probabilities: { a: "untrusted-string", b: { hidden: "object" } }, confidence: 0.5 } }, usage: { input_tokens: 1, output_tokens: 1 } }, { q: { type: "choice", options: ["a", "b"] } }, "jev-1.13.0");
    expect(inspection.choiceSummary.invalidNumericValueCount).toBe(2);
    expect(inspection.failedExpectedQuestionIds).toEqual([{ id: "q", failed: ["probability_range", "probability_sum", "winner_maximal"] }]);
    expect(JSON.stringify(inspection)).not.toContain("untrusted-string");
    expect(JSON.stringify(inspection)).not.toContain("hidden");
    const typeMismatch = inspectProviderValidation("A", { model: "jev-1.13.0", answers: { q: { type: "choice", noul: 0 } }, usage: { input_tokens: 1, output_tokens: 1 } }, { q: { type: "noul" } }, "jev-1.13.0");
    expect(typeMismatch.failedExpectedQuestionIds).toEqual([{ id: "q", failed: ["type", "finite_range"] }]);
  });
});

describe("recorded validation diagnostics", () => {
  it("persists a requested-model mismatch cause before rejecting Pass A", async () => {
    const example: any = { id: "model-mismatch", datasetId: "ai-email-200-v1", language: "en", input: { channel: "email", subject: null, body: "hello", userContext: "" } };
    const input = projectModelInput(example);
    const fetchImpl: typeof fetch = async (_url, init) => {
      const request: any = JSON.parse(String(init?.body));
      const answers: Record<string, unknown> = {};
      for (const [id, question] of Object.entries(request.questions as Record<string, any>)) answers[id] = question.type === "noul" ? { type: "noul", noul: 0 } : id === "message_role" ? { type: "choice", choice: "informational", probabilities: { active_request: 0, informational: 1, educational_or_quoted: 0, mixed_or_unclear: 0 }, confidence: 1 } : { type: "choice", choice: "no_sensitive_action", probabilities: { independently_established: 0, sender_supplied: 0, no_sensitive_action: 1, mixed_or_unknown: 0 }, confidence: 1 };
      return new Response(JSON.stringify({ model: "wrong-model", answers, usage: { input_tokens: 1, output_tokens: 1 } }));
    };
    const result = await recordExample({ key: "fake-canary-key", example, questionBundleSha256: sha256(buildPassARequest(input, "en", "synthetic_sanitized").questions), policySha256: sha256(policyFingerprint()), captureSessionId: "session", nextSeq: () => 1, fetchImpl });
    expect(result.captureComplete).toBe(false);
    expect(result.validationDiagnostics).toHaveLength(1);
    expect(result.validationDiagnostics[0]?.modelMatch).toBe(false);
  });
});
