import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { resolve, relative } from "node:path";
import { execFileSync } from "node:child_process";
import { POLICY_VERSION, SEGMENTATION_VERSION, buildPassARequest, policyFingerprint, projectModelInput, sha256, validateCorpusEnvelope, type CorpusEnvelope, type ModelInput } from "@scam-signal-lens/core/node";
import { AttemptBudget, declaredAttemptCap } from "./record.js";
import { recordExample, type CaptureSnapshot } from "./record-example.js";
import { buildRecoveryPlan, type RecoveryLineage } from "./recovery.js";

type Args = { command: "smoke" | "record" | "analyze"; dataset?: string; inputFile?: string; language?: "en" | "es"; acknowledgeProviderUpload?: boolean; recoverFrom?: string; changedExampleId?: string; out: string; exampleId?: string | undefined; runId: string };
const usage = "Usage: node tools/capture/dist/main.js <smoke|record> --dataset <corpus.json> --out <private-output-dir> --run-id <id> [--example <id>] [--recover-from <parent-private-output> --changed-example <id>] | analyze --input-file <input.json> --language <en|es> --acknowledge-provider-upload true --out <private-output-dir> --run-id <id>. Live analysis uploads the selected text to TypeSafe.";

function parseArgs(argv: string[]): Args {
  const [command, ...rest] = argv;
  if (command !== "smoke" && command !== "record" && command !== "analyze") throw new Error(usage);
  const values = new Map<string, string>();
  for (let index = 0; index < rest.length; index += 2) {
    const flag = rest[index]; const value = rest[index + 1];
    if (!flag?.startsWith("--") || value === undefined) throw new Error(usage);
    values.set(flag.slice(2), value);
  }
  const dataset = values.get("dataset"); const inputFile = values.get("input-file"); const language = values.get("language"); const acknowledged = values.get("acknowledge-provider-upload"); const recoverFrom = values.get("recover-from"); const changedExampleId = values.get("changed-example"); const out = values.get("out"); const runId = values.get("run-id");
  if (!out || !runId || (command === "analyze" ? !inputFile || (language !== "en" && language !== "es") || acknowledged !== "true" : !dataset) || ((recoverFrom === undefined) && changedExampleId !== undefined) || (recoverFrom !== undefined && command !== "record")) throw new Error(usage);
  return { command, ...(dataset === undefined ? {} : { dataset }), ...(inputFile === undefined ? {} : { inputFile }), ...(language === undefined ? {} : { language: language as "en" | "es" }), ...(acknowledged === undefined ? {} : { acknowledgeProviderUpload: acknowledged === "true" }), ...(recoverFrom === undefined ? {} : { recoverFrom }), ...(changedExampleId === undefined ? {} : { changedExampleId }), out, runId, exampleId: values.get("example") };
}

const under = (child: string, parent: string) => { const path = relative(parent, child); return path === "" || (!path.startsWith("..") && !path.includes("../")); };
const repositoryRoot = resolve(import.meta.dirname, "../../..");
function sourceRevision() {
  try {
    const revision = execFileSync("git", ["rev-parse", "HEAD"], { cwd: repositoryRoot, stdio: ["ignore", "pipe", "ignore"] }).toString("utf8").trim();
    const dirty = execFileSync("git", ["status", "--porcelain"], { cwd: repositoryRoot, stdio: ["ignore", "pipe", "ignore"] }).toString("utf8").trim().length > 0;
    return { revision, dirtyStatus: dirty ? "dirty" : "clean" };
  } catch { return { revision: null, dirtyStatus: "unknown" }; }
}

async function loadCorpus(path: string): Promise<CorpusEnvelope> {
  const parsed: unknown = JSON.parse(await readFile(path, "utf8"));
  validateCorpusEnvelope(parsed);
  return parsed;
}

async function readOptionalJson<T>(path: string): Promise<T | null> {
  try { return JSON.parse(await readFile(path, "utf8")) as T; } catch (error) { if ((error as NodeJS.ErrnoException).code === "ENOENT") return null; throw error; }
}

async function writePrivateJson(path: string, value: unknown): Promise<void> {
  const temporary = `${path}.${crypto.randomUUID()}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value)}\n`, { mode: 0o600 });
  await rename(temporary, path);
}

function snapshotStorage(output: string, exampleId: string) {
  const stateDirectory = resolve(output, ".capture-state");
  const statePath = resolve(stateDirectory, `${exampleId}.json`);
  return {
    load: async (): Promise<CaptureSnapshot | null> => readOptionalJson<CaptureSnapshot>(statePath),
    save: async (snapshot: CaptureSnapshot): Promise<void> => { await mkdir(stateDirectory, { recursive: true, mode: 0o700 }); await writePrivateJson(statePath, snapshot); },
  };
}

type CaptureSession = { captureSessionId: string; startedAt: string; sourceRevision: ReturnType<typeof sourceRevision>; resumed: boolean; endedAt?: string; durationMs?: number };
type RunState = { schemaVersion: "1.0.0"; runId: string; datasetId: string; datasetSha256: string; questionBundleSha256: string; policySha256: string; requestedModel: string; segmentationVersion: string; sourceContentSha256: string; declaredHttpAttemptCap: number; recoveryLineage: RecoveryLineage | null; configSha256: string; actualHttpAttemptCount: number; attemptReservations: Array<{ captureSessionId: string; exampleId: string; pass: "A" | "B"; attempt: number; reservedAt: string; outcome: "unknown" }>; captureSessions: CaptureSession[] };

function equalRunConfig(state: RunState, expected: Omit<RunState, "actualHttpAttemptCount" | "attemptReservations" | "captureSessions">): boolean {
  return state.runId === expected.runId && state.datasetId === expected.datasetId && state.datasetSha256 === expected.datasetSha256 && state.questionBundleSha256 === expected.questionBundleSha256 && state.policySha256 === expected.policySha256 && state.requestedModel === expected.requestedModel && state.segmentationVersion === expected.segmentationVersion && state.sourceContentSha256 === expected.sourceContentSha256 && state.declaredHttpAttemptCap === expected.declaredHttpAttemptCap && sha256(state.recoveryLineage) === sha256(expected.recoveryLineage) && state.configSha256 === expected.configSha256;
}

const behaviorSourceFiles = [
  "packages/core/src/canonical-json.ts", "packages/core/src/hash-node.ts", "packages/core/src/input.ts", "packages/core/src/questions.ts", "packages/core/src/policy.ts", "packages/core/src/segmentation.ts", "packages/core/src/schema.ts", "packages/core/src/replay.ts", "packages/core/src/types.ts",
  "tools/capture/src/typesafe-http.ts", "tools/capture/src/record.ts", "tools/capture/src/record-example.ts", "tools/capture/src/validation-diagnostic.ts", "tools/capture/src/recovery.ts", "tools/capture/src/sanitize.ts", "tools/capture/src/main.ts",
] as const;
async function sourceContentSha256(): Promise<string> {
  const contents = await Promise.all(behaviorSourceFiles.map(async (file) => [file, await readFile(resolve(repositoryRoot, file), "utf8")] as const));
  return sha256(Object.fromEntries(contents));
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  const output = resolve(args.out);
  if (under(output, repositoryRoot)) throw new Error("private capture output must be outside the repository");
  if (args.command === "analyze" && args.acknowledgeProviderUpload !== true) throw new Error(usage);
  const key = process.env.TYPESAFE_API_KEY;
  if (!key) throw new Error("TYPESAFE_API_KEY is required by the private capture process");
  if (args.command === "analyze") {
    const raw: unknown = JSON.parse(await readFile(resolve(args.inputFile!), "utf8"));
    const input = projectModelInput({ input: raw as ModelInput });
    const scope = "source_messages" as const;
    const questionHash = sha256(buildPassARequest({ channel: "email", subject: null, body: "Question bundle fingerprint", userContext: "" }, args.language!, scope).questions);
    const policyHash = sha256(policyFingerprint());
    await mkdir(output, { recursive: true, mode: 0o700 });
    const sessionId = crypto.randomUUID();
    let sequence = 0;
    const privateId = `private-${sha256(input).slice(0, 16)}`;
    const example = { id: privateId, datasetId: "private-input-v1", title: "Private input", language: args.language!, input, groundTruth: { label: "benign" as const, labelSource: "synthetic_author" as const }, provenance: {} };
    const budget = new AttemptBudget(declaredAttemptCap(1));
    const captured = await recordExample({ key, example, questionBundleSha256: questionHash, policySha256: policyHash, questionScope: scope, captureSessionId: sessionId, nextSeq: () => ++sequence, consumeAttempt: () => budget.consume(), storage: snapshotStorage(output, privateId) });
    if (captured.record) await writePrivateJson(resolve(output, `${privateId}.json`), captured.record);
    await writePrivateJson(resolve(output, "manifest.json"), { schemaVersion: "1.0.0", runId: args.runId, datasetId: "private-input-v1", inputSha256: sha256(input), questionBundleSha256: questionHash, policySha256: policyHash, requestedModel: "jev-1.13.0", declaredHttpAttemptCap: budget.cap, actualHttpAttemptCount: budget.count(), captureSessionId: sessionId, captureComplete: captured.captureComplete, events: captured.events, errorCode: captured.errorCode ?? null });
    process.stdout.write(`${JSON.stringify({ runId: args.runId, captureComplete: captured.captureComplete })}\n`);
    return;
  }
  const corpus = await loadCorpus(resolve(args.dataset!));
  const selected = args.command === "smoke" ? corpus.examples.filter((example) => example.id === args.exampleId) : corpus.examples;
  if (selected.length === 0) throw new Error("no selected corpus example");
  const corpusHash = sha256(corpus);
  const scope = corpus.examples[0]?.datasetId === "ai-email-200-v1" ? "synthetic_sanitized" as const : "source_messages" as const;
  const questionHash = sha256(buildPassARequest({ channel: "email", subject: null, body: "Question bundle fingerprint", userContext: "" }, corpus.examples[0]?.language ?? "en", scope).questions);
  const policyHash = sha256(policyFingerprint());
  const cap = declaredAttemptCap(selected.length);
  let recovery: Awaited<ReturnType<typeof buildRecoveryPlan>> | null = null;
  if (args.recoverFrom !== undefined) {
    const parentOutput = resolve(args.recoverFrom);
    if (parentOutput === output || under(parentOutput, repositoryRoot)) throw new Error("recovery parent must be a different private capture output");
    const parentManifest = await readOptionalJson<{ runId: string; datasetId: string; datasetSha256: string; questionBundleSha256: string; policySha256: string; requestedModel: string; segmentationVersion: string; sourceContentSha256: string; declaredHttpAttemptCap: number; configSha256: string; actualHttpAttemptCount: number; records: Array<{ exampleId: string; recordSha256: string }> }>(resolve(parentOutput, "manifest.json"));
    const parentState = await readOptionalJson<RunState>(resolve(parentOutput, "run-state.json"));
    if (parentManifest === null || parentState === null) throw new Error("recovery parent metadata missing");
    const parentSnapshots = new Map<string, CaptureSnapshot>();
    for (const example of selected) {
      const snapshot = await readOptionalJson<CaptureSnapshot>(resolve(parentOutput, ".capture-state", `${example.id}.json`));
      if (snapshot === null) throw new Error("recovery parent snapshot missing");
      parentSnapshots.set(example.id, snapshot);
    }
    recovery = await buildRecoveryPlan({ parentManifest, parentState, examples: selected, parentSnapshots, ...(args.changedExampleId === undefined ? {} : { changedExampleId: args.changedExampleId }), expectedInferenceConfig: { datasetId: corpus.examples[0]?.datasetId ?? "unknown", datasetSha256: corpusHash, questionBundleSha256: questionHash, policySha256: policyHash, requestedModel: "jev-1.13.0", segmentationVersion: SEGMENTATION_VERSION, declaredHttpAttemptCap: cap } });
  }
  await mkdir(output, { recursive: true, mode: 0o700 });
  const statePath = resolve(output, "run-state.json");
  const config = { datasetId: corpus.examples[0]?.datasetId ?? "unknown", datasetSha256: corpusHash, questionBundleSha256: questionHash, policySha256: policyHash, requestedModel: "jev-1.13.0", segmentationVersion: SEGMENTATION_VERSION, sourceContentSha256: await sourceContentSha256(), declaredHttpAttemptCap: cap, recoveryLineage: recovery?.lineage ?? null };
  const expectedRun = { schemaVersion: "1.0.0" as const, runId: args.runId, ...config, configSha256: sha256(config) };
  let state = await readOptionalJson<RunState>(statePath);
  if (state !== null && !equalRunConfig(state, expectedRun)) throw new Error("existing capture run configuration is immutable");
  if (state === null) {
    state = {
      ...expectedRun,
      actualHttpAttemptCount: recovery?.lineage.inheritedHttpAttemptCount ?? 0,
      attemptReservations: (recovery?.inheritedAttemptReservations ?? []) as RunState["attemptReservations"],
      captureSessions: (recovery?.inheritedCaptureSessions ?? []) as CaptureSession[],
    };
    for (const [exampleId, snapshot] of recovery?.snapshots ?? []) await snapshotStorage(output, exampleId).save(snapshot);
  }
  const budget = new AttemptBudget(cap, state.actualHttpAttemptCount);
  const sessionId = crypto.randomUUID();
  const sessionStart = performance.now();
  const session: CaptureSession = { captureSessionId: sessionId, startedAt: new Date().toISOString(), sourceRevision: sourceRevision(), resumed: state.captureSessions.length > 0 };
  state.captureSessions.push(session);
  await writePrivateJson(statePath, state);
  let sequence = Math.max(0, ...[...(recovery?.snapshots.values() ?? [])].flatMap(snapshot => snapshot.events.map(event => event.seq)));
  const captured: Array<{ exampleId: string; entry: Awaited<ReturnType<typeof recordExample>> }> = [];
  for (const example of selected) {
    const reserveAttempt = async (detail: { pass: "A" | "B"; attempt: number }) => { budget.consume(); state.actualHttpAttemptCount = budget.count(); state.attemptReservations.push({ captureSessionId: sessionId, exampleId: example.id, ...detail, reservedAt: new Date().toISOString(), outcome: "unknown" }); await writePrivateJson(statePath, state); };
    const entry = await recordExample({ key, example, questionBundleSha256: questionHash, policySha256: policyHash, captureSessionId: sessionId, nextSeq: () => ++sequence, reserveAttempt, storage: snapshotStorage(output, example.id) });
    captured.push({ exampleId: example.id, entry });
    if (entry.errorCode === "authentication_failed" || entry.errorCode === "authorization_failed" || entry.errorCode === "attempt_cap_exceeded") break;
  }
  const completed = captured.filter(({ entry }) => entry.captureComplete && entry.record !== undefined);
  session.endedAt = new Date().toISOString();
  session.durationMs = performance.now() - sessionStart;
  await writePrivateJson(statePath, state);
  const unknownInterruptedSessionCount = state.captureSessions.filter((item) => item.endedAt === undefined).length;
  const measuredRunWallElapsedMs = state.captureSessions.reduce((total, item) => total + (item.durationMs ?? 0), 0);
  const manifest = { schemaVersion: "1.0.0", runId: args.runId, ...config, configSha256: expectedRun.configSha256, actualHttpAttemptCount: budget.count(), runWallElapsedMs: measuredRunWallElapsedMs, runWallMeasurement: "sum_completed_sessions", unknownInterruptedSessionCount, captureSessions: state.captureSessions, completedCount: completed.length, expectedCount: selected.length, records: completed.map(({ entry }) => ({ exampleId: entry.record.exampleId, inputSha256: entry.record.inputSha256, passARequestSha256: entry.record.passA.requestSha256, passBRequestSha256: entry.record.passB?.requestSha256 ?? null, recordSha256: sha256(entry.record), events: entry.events })), failures: captured.filter(({ entry }) => !entry.captureComplete).map(({ exampleId, entry }) => ({ exampleId, errorCode: entry.errorCode ?? "schema_error", events: entry.events, validationDiagnostics: entry.validationDiagnostics })) };
  for (const { entry } of captured.filter(({ entry }) => entry.record !== undefined)) await writePrivateJson(resolve(output, `${entry.record.exampleId}.json`), entry.record);
  await writePrivateJson(resolve(output, "manifest.json"), manifest);
  process.stdout.write(`${JSON.stringify({ runId: args.runId, completedCount: completed.length, expectedCount: selected.length })}\n`);
}

void main().catch((error: unknown) => { process.stderr.write(`${error instanceof Error ? error.message : "capture_failed"}\n`); process.exitCode = 1; });
