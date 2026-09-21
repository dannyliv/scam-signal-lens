import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { POLICY_VERSION, evaluateDataset, validateCorpusEnvelope, verifyReplayRecord, type CorpusEnvelope, type EvaluationRow, type ReplayRecord } from "@scam-signal-lens/core";
import { parseManifest, strictRecord, verifyManifestConfig } from "./build-public-data.js";

const arg = (name: string) => { const i = process.argv.indexOf(name); return i < 0 ? undefined : process.argv[i + 1]; };
const read = async (path: string): Promise<unknown> => JSON.parse(await readFile(path, "utf8")) as unknown;
const csv = (value: string | number | boolean | null) => JSON.stringify(value ?? "");
const stats = (values: number[]) => values.length === 0 ? { count: 0, min: null, max: null, median: null } : (() => { const sorted = [...values].sort((a, b) => a - b), middle = Math.floor(sorted.length / 2); return { count: sorted.length, min: sorted[0]!, max: sorted.at(-1)!, median: sorted.length % 2 ? sorted[middle]! : (sorted[middle - 1]! + sorted[middle]!) / 2 }; })();

export async function evaluateRecording(corpusPath: string, recordsPath: string, outputPath: string) {
  const corpus = await read(resolve(corpusPath));
  validateCorpusEnvelope(corpus);
  const manifest = parseManifest(await read(resolve(recordsPath, "manifest.json")));
  await verifyManifestConfig(manifest);
  if (corpus.examples.length === 0 || corpus.examples.some((example) => example.datasetId !== manifest.datasetId)) throw new Error("evaluation corpus and manifest mismatch");
  const enrolled = new Map(corpus.examples.map((example) => [example.id, example]));
  const recordEntries = new Map(manifest.records.map((entry) => [entry.exampleId, entry]));
  const failureEntries = new Map(manifest.failures.map((entry) => [entry.exampleId, entry]));
  if (recordEntries.size !== manifest.records.length) throw new Error("ambiguous duplicate manifest record IDs");
  const files = (await readdir(resolve(recordsPath))).filter((file) => file.endsWith(".json") && file !== "manifest.json" && file !== "run-state.json");
  if (files.some((file) => !recordEntries.has(file.slice(0, -5)) && !failureEntries.has(file.slice(0, -5)))) throw new Error("nonallowlisted JSON record artifact");
  const records = new Map<string, ReplayRecord>();
  const invalid = new Set<string>();
  for (const file of files) {
    const record = strictRecord(await read(resolve(recordsPath, file)));
    const entry = recordEntries.get(record.exampleId), failure = failureEntries.get(record.exampleId), example = enrolled.get(record.exampleId);
    if ((!entry && !failure) || !example || records.has(record.exampleId)) { invalid.add(record.exampleId); records.delete(record.exampleId); continue; }
    try {
      if (record.questionBundleSha256 !== manifest.questionBundleSha256 || record.policySha256 !== manifest.policySha256 || record.requestedModel !== manifest.requestedModel || record.segmentationVersion !== manifest.segmentationVersion || (entry !== undefined && (record.inputSha256 !== entry.inputSha256 || record.passA.requestSha256 !== entry.passARequestSha256 || (record.passB?.requestSha256 ?? null) !== entry.passBRequestSha256))) throw new Error("record binding mismatch");
      await verifyReplayRecord(record, example.input, example.language);
      records.set(record.exampleId, record);
    } catch { invalid.add(record.exampleId); records.delete(record.exampleId); }
  }
  const rows: EvaluationRow[] = corpus.examples.map((example) => {
    const record = records.get(example.id);
    const evidence = record ? Object.values(record.derived.evidence).reduce((result, item) => { if (item.status !== "selected" && item.status !== "not_requested") result[item.status] = (result[item.status] ?? 0) + 1; return result; }, {} as NonNullable<EvaluationRow["evidence"]>) : { unavailable: 0 };
    const decisions = record ? Object.values(record.derived.evidence) : [];
    return { id: example.id, label: example.groundTruth.label, concern: record?.derived.concern ?? null, evidenceEligible: decisions.filter((item) => item.status !== "not_requested").length, evidenceSelected: decisions.filter((item) => item.status === "selected").length, evidence, captureComplete: record !== undefined && record.evidencePassStatus !== "failed" };
  });
  const base = evaluateDataset(manifest.datasetId, rows, { runId: manifest.runId, policyVersion: POLICY_VERSION, questionHash: manifest.questionBundleSha256 });
  const { evaluatedAt, ...stable } = base;
  const allEvents = [...manifest.records, ...manifest.failures].flatMap((entry) => entry.events);
  const requestFinished = allEvents.filter((event) => event.kind === "request_finished");
  const failedRequests = requestFinished.filter((event) => event.outcome !== "success" && event.elapsedMs !== undefined);
  const report = {
    generatedAt: evaluatedAt,
    ...stable,
    provenance: {
      runId: manifest.runId, datasetId: manifest.datasetId, datasetSha256: manifest.datasetSha256, questionBundleSha256: manifest.questionBundleSha256, policySha256: manifest.policySha256,
      requestedModel: manifest.requestedModel, segmentationVersion: manifest.segmentationVersion, sourceContentSha256: manifest.sourceContentSha256, configSha256: manifest.configSha256,
      declaredHttpAttemptCap: manifest.declaredHttpAttemptCap, actualHttpAttemptCount: manifest.actualHttpAttemptCount, runWallElapsedMs: manifest.runWallElapsedMs, runWallMeasurement: manifest.runWallMeasurement,
      captureSessions: manifest.captureSessions, unknownInterruptedSessionCount: manifest.unknownInterruptedSessionCount,
    },
    recordingValidation: { validRecordCount: records.size, invalidRecordIds: [...invalid].sort(), unavailableRecordCount: rows.filter((row) => row.concern === null).length, failedRecordIds: manifest.failures.map((failure) => failure.exampleId).sort() },
    capture: {
      retries: Math.max(0, manifest.actualHttpAttemptCount - requestFinished.filter((event) => event.outcome === "success").length),
      failures: manifest.failures.map((failure) => ({ exampleId: failure.exampleId, errorCode: failure.errorCode })),
      passA: stats([...records.values()].map((record) => record.passA.elapsedMs)),
      passB: stats([...records.values()].flatMap((record) => record.passB === null ? [] : [record.passB.elapsedMs])),
      successfulHttpAttempts: stats(requestFinished.filter((event) => event.outcome === "success" && event.elapsedMs !== undefined).map((event) => event.elapsedMs!)),
      failedHttpAttempts: stats(failedRequests.map((event) => event.elapsedMs!)),
      failedHttpAttemptOutcomes: Object.fromEntries(["timeout", "http_error", "schema_error"].map((outcome) => [outcome, requestFinished.filter((event) => event.outcome === outcome).length])),
      completeExampleProcessing: stats([...records.values()].map((record) => record.processingElapsedMs)),
      wholeRun: { elapsedMs: manifest.runWallElapsedMs, measurement: manifest.runWallMeasurement, sessions: manifest.captureSessions.length, unknownInterruptedSessions: manifest.unknownInterruptedSessionCount },
    },
    rows,
  };
  await mkdir(resolve(outputPath), { recursive: true });
  const prefix = resolve(outputPath, manifest.datasetId + "-evaluation");
  await writeFile(prefix + ".json", JSON.stringify(report, null, 2) + "\n");
  const header = ["id", "label", "concern", "capture_complete", "evidence_eligible", "evidence_selected", "pass_b_status"];
  const csvRows = corpus.examples.map((example) => { const record = records.get(example.id), row = rows.find((candidate) => candidate.id === example.id)!; return [example.id, example.groundTruth.label, row.concern ?? "unavailable", row.captureComplete === true, row.evidenceEligible, row.evidenceSelected, record?.evidencePassStatus ?? "unavailable"].map(csv).join(","); });
  await writeFile(prefix + ".csv", header.join(",") + "\n" + csvRows.join("\n") + "\n");
  const readable = ["# Recording evaluation", "", "Generated at: " + evaluatedAt, "", "## Provenance", "", "- Dataset: " + manifest.datasetId, "- Run: " + manifest.runId, "- Model: " + manifest.requestedModel, "- Valid Pass A records: " + records.size + " / " + corpus.examples.length, "- Failed captures: " + manifest.failures.length, "- HTTP attempts: " + manifest.actualHttpAttemptCount + " / " + manifest.declaredHttpAttemptCap, "", "## Coverage and metrics", "", "~~~json", JSON.stringify({ confusion: base.confusion, coverage: base.coverage, metrics: base.metrics, unavailable: base.unavailable, abstentions: base.abstentions }, null, 2), "~~~", "", "Pass A classification timing, Pass B evidence timing, complete example processing, and whole-run timing are reported separately in the JSON report. B-failed records remain visible and have capture_complete=false in the CSV."].join("\n");
  await writeFile(prefix + ".md", readable + "\n");
  return report;
}

async function main() { const corpus = arg("--corpus"), records = arg("--records"), out = arg("--out"); if (!corpus || !records || !out) throw new Error("Usage: pnpm evaluate -- --corpus <corpus.json> --records <record-directory> --out <output-directory>"); await evaluateRecording(corpus, records, out); }
if (process.argv[1]?.endsWith("evaluate-recording.ts")) void main().catch((error: unknown) => { process.stderr.write((error instanceof Error ? error.message : "evaluation_failed") + "\n"); process.exitCode = 1; });
