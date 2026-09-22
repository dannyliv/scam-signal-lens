export type RecordedRatio = { value: number; numerator: number; denominator: number };
export type ChartMetric = { name: string; kind: 'precision' | 'recall'; ratio: RecordedRatio | null; meaning: string };
export type LabeledRatio = { label: string; ratio: RecordedRatio | null };

const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null && !Array.isArray(value);

function readRatioObject(metric: unknown): RecordedRatio | null {
  if (!isRecord(metric)) return null;
  const { value, numerator, denominator } = metric;
  if (value === null || typeof value !== 'number' || !Number.isFinite(value)) return null;
  if (typeof numerator !== 'number' || !Number.isFinite(numerator)) return null;
  if (typeof denominator !== 'number' || !Number.isFinite(denominator) || denominator <= 0) return null;
  return { value, numerator, denominator };
}

export function readRecordedRatio(evaluation: unknown, key: string): RecordedRatio | null {
  if (!isRecord(evaluation) || !isRecord(evaluation.metrics)) return null;
  return readRatioObject(evaluation.metrics[key]);
}

export function readNestedRatio(evaluation: unknown, path: readonly string[]): RecordedRatio | null {
  let current: unknown = evaluation;
  for (const key of path) {
    if (!isRecord(current)) return null;
    current = current[key];
  }
  return readRatioObject(current);
}

export function formatRecordedRatio(ratio: RecordedRatio | null): string {
  if (!ratio) return 'Not in recorded set';
  return `${(ratio.value * 100).toFixed(2)}% (${ratio.numerator}/${ratio.denominator})`;
}

export function recordedBarPercent(ratio: RecordedRatio | null): number | null {
  if (!ratio) return null;
  return Math.max(0, Math.min(100, ratio.value * 100));
}

const precisionMeaning = 'Of the emails marked Alert, the share labeled phishing.';
const decidedRecallMeaning = 'Of the decided phishing emails, the share marked Alert.';
const wholeRecallMeaning = 'Of every phishing email in the recorded set, the share marked Alert.';

/** Precision and recall bars from a checked-in evaluation object. Missing fields stay empty. */
export function chartSeries(evaluation: unknown): ChartMetric[] {
  const precision = readRecordedRatio(evaluation, 'precision');
  const decided = readRecordedRatio(evaluation, 'recallAmongDecided');
  const whole = readRecordedRatio(evaluation, 'wholeCorpusAlertRecall');
  const series: ChartMetric[] = [{ name: 'Precision', kind: 'precision', ratio: precision, meaning: precisionMeaning }];
  const same = decided !== null && whole !== null && decided.numerator === whole.numerator && decided.denominator === whole.denominator && decided.value === whole.value;
  if (!decided && !whole) series.push({ name: 'Recall', kind: 'recall', ratio: null, meaning: wholeRecallMeaning });
  else if (same || (whole && !decided)) series.push({ name: 'Recall', kind: 'recall', ratio: whole, meaning: wholeRecallMeaning });
  else if (decided && !whole) series.push({ name: 'Recall', kind: 'recall', ratio: decided, meaning: decidedRecallMeaning });
  else {
    series.push({ name: 'Recall among decided emails', kind: 'recall', ratio: decided, meaning: decidedRecallMeaning });
    series.push({ name: 'Whole-corpus alert recall', kind: 'recall', ratio: whole, meaning: wholeRecallMeaning });
  }
  return series;
}

export function completedMetricRows(evaluation: unknown): LabeledRatio[] {
  const direct: [string, string][] = [
    ['Precision among decided emails', 'precision'],
    ['Recall among decided emails', 'recallAmongDecided'],
    ['Whole-corpus alert recall', 'wholeCorpusAlertRecall'],
    ['Whole-corpus benign alert rate', 'wholeCorpusBenignAlertRate'],
    ['F1 among decided emails', 'f1'],
    ['Accuracy among decided emails', 'accuracy'],
    ['Specificity among decided benign emails', 'specificity'],
    ['False-positive rate among decided benign emails', 'falsePositiveRate']
  ];
  return [
    ...direct.map(([label, key]) => ({ label, ratio: readRecordedRatio(evaluation, key) })),
    { label: 'Analysis coverage', ratio: readNestedRatio(evaluation, ['coverage', 'analysis']) },
    { label: 'Decision coverage', ratio: readNestedRatio(evaluation, ['coverage', 'decision']) },
    { label: 'Capture-complete coverage', ratio: readNestedRatio(evaluation, ['coverage', 'captureComplete']) },
    { label: 'Evidence selection coverage', ratio: readNestedRatio(evaluation, ['evidence', 'coverage']) }
  ];
}

export function readConfusion(evaluation: unknown): { tp: number; fp: number; tn: number; fn: number } | null {
  if (!isRecord(evaluation) || !isRecord(evaluation.confusion)) return null;
  const { tp, fp, tn, fn } = evaluation.confusion;
  if ([tp, fp, tn, fn].some((value) => typeof value !== 'number' || !Number.isFinite(value))) return null;
  return { tp: tp as number, fp: fp as number, tn: tn as number, fn: fn as number };
}

const concernKeys = ['strong_warning_signs', 'verify_first', 'few_warning_signs', 'not_enough_evidence', 'unavailable'] as const;
export type ConcernCounts = Record<(typeof concernKeys)[number], number>;

export function readConcernCounts(evaluation: unknown, label: 'phishing' | 'benign'): ConcernCounts | null {
  if (!isRecord(evaluation) || !isRecord(evaluation.concernByGroundTruth)) return null;
  const row = evaluation.concernByGroundTruth[label];
  if (!isRecord(row)) return null;
  const counts = {} as ConcernCounts;
  for (const key of concernKeys) {
    const value = row[key];
    if (typeof value !== 'number' || !Number.isFinite(value)) return null;
    counts[key] = value;
  }
  return counts;
}

export function readDisagreements(evaluation: unknown): { id: string; label: string; concern: string }[] | null {
  if (!isRecord(evaluation) || !Array.isArray(evaluation.individualErrors)) return null;
  const rows: { id: string; label: string; concern: string }[] = [];
  for (const item of evaluation.individualErrors) {
    if (!isRecord(item) || typeof item.id !== 'string' || typeof item.label !== 'string') return null;
    const concern = item.concern === null ? 'unavailable' : item.concern;
    if (typeof concern !== 'string') return null;
    rows.push({ id: item.id, label: item.label, concern });
  }
  return rows;
}

export function recordedCaptureLines(manifest: unknown, publicRows: number | null): string[] {
  if (!isRecord(manifest)) return ['Capture effort is not in the recorded set.'];
  const source = isRecord(manifest.sourceRun) ? manifest.sourceRun : manifest;
  const lines: string[] = [];
  const attempts = source.actualHttpAttemptCount;
  const cap = source.declaredHttpAttemptCap;
  if (typeof attempts === 'number' && Number.isFinite(attempts)) {
    const capText = typeof cap === 'number' && Number.isFinite(cap) ? ` of cap ${cap}` : '';
    lines.push(`Source-run HTTP attempts: ${attempts}${capText}.`);
  } else lines.push('Source-run HTTP attempts: Not in recorded set.');
  if (Array.isArray(source.failures)) lines.push(`Source-run failed records: ${source.failures.length}.`);
  else lines.push('Source-run failed records: Not in recorded set.');
  if (typeof source.runWallElapsedMs === 'number' && Number.isFinite(source.runWallElapsedMs)) lines.push(`Source-run wall capture elapsed: ${source.runWallElapsedMs} ms.`);
  else lines.push('Source-run wall capture elapsed: Not in recorded set.');
  const publicExpected = typeof manifest.expectedCount === 'number' && Number.isFinite(manifest.expectedCount) ? manifest.expectedCount : publicRows;
  if (typeof source.expectedCount === 'number' && Number.isFinite(source.expectedCount) && publicExpected !== null && source.expectedCount !== publicExpected) {
    lines.push(`Source-run effort includes the original ${source.expectedCount} enrolled messages, including excluded or superseded work. It is not a ${publicExpected}-message-only duration.`);
  }
  return lines;
}
