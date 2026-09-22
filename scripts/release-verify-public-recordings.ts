import { readdir, readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { POLICY_VERSION, POLICY_VERSION_ES_EXP, evaluateDataset, sha256Web, type EvaluationRow, type PublicCaptureEvent } from "@scam-signal-lens/core";

type Example = { id: string; language: "en" | "es"; input: { channel: "email"; subject: string | null; body: string; userContext: string }; groundTruth: { label: EvaluationRow["label"] } };
type VerifiedReplay = { record: { evidencePassStatus: string; derived: { concern: EvaluationRow["concern"]; evidence: Record<string, { status: string }> } } };
type PublicLoader = {
  run: { datasetId: string; datasetSha256: string; runId: string; questionBundleSha256: string; expectedCount: number; completedCount: number; failures: readonly unknown[] };
  rows: readonly EvaluationRow[];
  evaluation: { datasetId: string; [key: string]: unknown };
  events: readonly PublicCaptureEvent[];
  anchorsByExample: Readonly<Record<string, unknown>>;
  runProjectionSha256: string;
  loadRecord: (example: Example) => Promise<unknown>;
  loadRun: () => Promise<unknown>;
};
type DatasetIndexEntry = { id: string; total: number; loadExamples: () => Promise<Example[]>; loadRecord: (example: Example) => Promise<unknown>; loadRun: () => Promise<unknown> };

const root = resolve(import.meta.dirname, "..");
const generated = resolve(root, "apps/web/src/generated/records");
const generatedIndex = await import(pathToFileURL(resolve(root, "apps/web/src/generated/dataset-index.ts")).href) as { datasets: DatasetIndexEntry[] };
const allDatasets = ["ai-email-200-v1", "spaphish-v5", "spaphish-v5-es-questions"] as const;
const corpusFiles: Record<(typeof allDatasets)[number], string> = {
  "ai-email-200-v1": "ai-email-200-v1.json",
  "spaphish-v5": "spaphish-v5.json",
  "spaphish-v5-es-questions": "spaphish-v5.json",
};
const selected = process.argv.includes("--dataset") ? process.argv[process.argv.indexOf("--dataset") + 1] : undefined;
if (selected !== undefined && !allDatasets.includes(selected as typeof allDatasets[number])) throw new Error("--dataset must name a frozen public corpus");
const datasets = selected === undefined ? allDatasets : allDatasets.filter((datasetId) => datasetId === selected);

for (const datasetId of datasets) {
  const corpus = JSON.parse(await readFile(resolve(root, "data/corpora", corpusFiles[datasetId]), "utf8")) as { examples: Example[] };
  const indexed = generatedIndex.datasets.find((dataset) => dataset.id === datasetId);
  if (!indexed || indexed.total !== corpus.examples.length) throw new Error(`${datasetId}: generated dataset index is missing or has the wrong count`);
  const indexedExamples = await indexed.loadExamples();
  if (await sha256Web(indexedExamples) !== await sha256Web(corpus.examples)) throw new Error(`${datasetId}: generated dataset index examples differ from the frozen corpus`);
  const directory = resolve(generated, datasetId);
  const expectedFiles = new Set([...corpus.examples.map((example) => `record-${example.id}.ts`), "record-loader.ts"]);
  const entries = await readdir(directory, { withFileTypes: true });
  const files = new Set(entries.filter((entry) => entry.isFile()).map((entry) => entry.name));
  if (entries.some((entry) => !entry.isFile()) || files.size !== expectedFiles.size || [...files].some((file) => !expectedFiles.has(file))) throw new Error(`${datasetId}: generated public replay modules must contain exactly the enrolled records and record-loader.ts`);

  const loader = await import(pathToFileURL(resolve(directory, "record-loader.ts")).href) as PublicLoader;
  if (loader.run.datasetId !== datasetId || loader.run.expectedCount !== corpus.examples.length || loader.run.completedCount !== corpus.examples.length || loader.run.failures.length !== 0 || loader.rows.length !== corpus.examples.length || loader.rows.some((row) => row.captureComplete !== true) || Object.keys(loader.anchorsByExample).length !== corpus.examples.length) throw new Error(`${datasetId}: generated run completeness mismatch`);
  if (await sha256Web(corpus) !== loader.run.datasetSha256) throw new Error(`${datasetId}: generated run corpus hash mismatch`);
  if (await sha256Web({ run: loader.run, rows: loader.rows, evaluation: loader.evaluation, events: loader.events, anchorsByExample: loader.anchorsByExample }) !== loader.runProjectionSha256) throw new Error(`${datasetId}: generated run projection digest mismatch`);

  const run = await indexed.loadRun();
  if (run === null) throw new Error(`${datasetId}: generated run did not pass browser verification`);
  const directRun = await loader.loadRun();
  if (directRun === null || await sha256Web(run) !== await sha256Web(directRun)) throw new Error(`${datasetId}: dataset index run differs from the generated loader`);
  const verified = new Map<string, VerifiedReplay>();
  for (const example of indexedExamples) {
    const replay = await indexed.loadRecord(example);
    if (replay === null) throw new Error(`${datasetId}:${example.id}: generated replay did not pass browser verification`);
    verified.set(example.id, replay as VerifiedReplay);
  }
  const expectedRows: EvaluationRow[] = corpus.examples.map((example) => {
    const record = verified.get(example.id)?.record;
    if (!record) throw new Error(`${datasetId}:${example.id}: verified replay was not retained`);
    const evidenceValues = Object.values(record.derived.evidence);
    const evidence = evidenceValues.reduce((result, item) => {
      if (item.status !== "selected" && item.status !== "not_requested") {
        if (!(["none_selected", "low_confidence", "candidate_limit", "unavailable"] as const).includes(item.status as "none_selected" | "low_confidence" | "candidate_limit" | "unavailable")) throw new Error(`${datasetId}: invalid verified evidence status`);
        const status = item.status as keyof NonNullable<EvaluationRow["evidence"]>;
        result[status] = (result[status] ?? 0) + 1;
      }
      return result;
    }, {} as NonNullable<EvaluationRow["evidence"]>);
    return { id: example.id, label: example.groundTruth.label, concern: record.derived.concern, evidenceEligible: evidenceValues.filter((item) => item.status !== "not_requested").length, evidenceSelected: evidenceValues.filter((item) => item.status === "selected").length, evidence, captureComplete: record.evidencePassStatus !== "failed" };
  });
  if (await sha256Web(expectedRows) !== await sha256Web(loader.rows)) throw new Error(`${datasetId}: generated rows do not match verified replay records and corpus labels`);

  const policyVersion = datasetId === "spaphish-v5-es-questions" ? POLICY_VERSION_ES_EXP : POLICY_VERSION;
  const { evaluatedAt: _generatedAt, ...expectedEvaluation } = evaluateDataset(datasetId, expectedRows, { runId: loader.run.runId, policyVersion, questionHash: loader.run.questionBundleSha256 });
  const { evaluatedAt: _recordedAt, ...recordedEvaluation } = loader.evaluation as { evaluatedAt?: string; [key: string]: unknown };
  if (await sha256Web(expectedEvaluation) !== await sha256Web(recordedEvaluation)) throw new Error(`${datasetId}: generated evaluation does not match the verified replay rows`);
}

process.stdout.write("Verified every generated public replay and run projection.\n");
