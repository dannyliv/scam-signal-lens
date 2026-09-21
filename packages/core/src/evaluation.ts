import type { Concern, GroundTruthLabel } from "./types.js";

export type EvaluationRow = { id: string; label: GroundTruthLabel; concern: Concern | null; evidenceEligible: number; evidenceSelected: number; captureComplete?: boolean; evidence?: Partial<Record<"none_selected" | "low_confidence" | "candidate_limit" | "unavailable", number>> };
type Metric = { value: number | null; numerator: number; denominator: number };
const metric = (numerator: number, denominator: number): Metric => ({ value: denominator === 0 ? null : numerator / denominator, numerator, denominator });
const labels: GroundTruthLabel[] = ["benign", "phishing"];
const concerns: Concern[] = ["strong_warning_signs", "verify_first", "few_warning_signs", "not_enough_evidence"];

export function evaluateDataset(datasetId: string, rows: EvaluationRow[], metadata: { runId?: string; policyVersion?: string; questionHash?: string } = {}) {
  const confusion = { tp: 0, fp: 0, tn: 0, fn: 0 };
  const concernByGroundTruth: Record<GroundTruthLabel, Record<Concern | "unavailable", number>> = {
    benign: { strong_warning_signs: 0, verify_first: 0, few_warning_signs: 0, not_enough_evidence: 0, unavailable: 0 },
    phishing: { strong_warning_signs: 0, verify_first: 0, few_warning_signs: 0, not_enough_evidence: 0, unavailable: 0 },
  };
  const abstentions = { benign: 0, phishing: 0 };
  const unavailable = { benign: 0, phishing: 0 };
  const evidence = { eligible: 0, selected: 0, none_selected: 0, low_confidence: 0, candidate_limit: 0, unavailable: 0 };
  let validPassACount = 0;
  let decidedCount = 0;
  for (const row of rows) {
    evidence.eligible += row.evidenceEligible;
    evidence.selected += row.evidenceSelected;
    for (const key of ["none_selected", "low_confidence", "candidate_limit", "unavailable"] as const) evidence[key] += row.evidence?.[key] ?? 0;
    if (row.concern === null) { unavailable[row.label]++; concernByGroundTruth[row.label].unavailable++; continue; }
    validPassACount++;
    concernByGroundTruth[row.label][row.concern]++;
    if (row.concern === "not_enough_evidence") { abstentions[row.label]++; continue; }
    decidedCount++;
    const actualPositive = row.label === "phishing";
    const alert = row.concern === "strong_warning_signs";
    if (actualPositive && alert) confusion.tp++;
    else if (actualPositive) confusion.fn++;
    else if (alert) confusion.fp++;
    else confusion.tn++;
  }
  const enrolledPhishing = rows.filter((row) => row.label === "phishing").length;
  const enrolledBenign = rows.filter((row) => row.label === "benign").length;
  const metrics = {
    precision: metric(confusion.tp, confusion.tp + confusion.fp),
    recallAmongDecided: metric(confusion.tp, confusion.tp + confusion.fn),
    f1: metric(2 * confusion.tp, 2 * confusion.tp + confusion.fp + confusion.fn),
    accuracy: metric(confusion.tp + confusion.tn, decidedCount),
    specificity: metric(confusion.tn, confusion.tn + confusion.fp),
    falsePositiveRate: metric(confusion.fp, confusion.fp + confusion.tn),
    wholeCorpusAlertRecall: metric(confusion.tp, enrolledPhishing),
    wholeCorpusBenignAlertRate: metric(confusion.fp, enrolledBenign),
  };
  const coverage = { analysis: metric(validPassACount, rows.length), decision: metric(decidedCount, rows.length), captureComplete: metric(rows.filter((row) => row.captureComplete === true).length, rows.length), classified: decidedCount };
  return { datasetId, runId: metadata.runId ?? null, policyVersion: metadata.policyVersion ?? null, questionHash: metadata.questionHash ?? null, evaluatedAt: new Date().toISOString(), expectedCount: rows.length, validPassACount, decidedCount, confusion, abstentions, unavailable, concernByGroundTruth, metrics, evidence: { ...evidence, coverage: metric(evidence.selected, evidence.eligible) }, coverage, individualErrors: rows.filter((row) => row.concern !== null && row.concern !== "not_enough_evidence" && ((row.label === "phishing") !== (row.concern === "strong_warning_signs"))).map((row) => ({ id: row.id, label: row.label, concern: row.concern })) };
}

export const EVALUATION_CONCERNS = concerns;
export const EVALUATION_LABELS = labels;
