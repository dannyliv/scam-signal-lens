import { describe, expect, it } from 'vitest';
import { evaluation as aiEvaluation, run as aiRun } from '../src/generated/records/ai-email-200-v1/record-loader';
import { evaluation as spaEvaluation, run as spaRun } from '../src/generated/records/spaphish-v5/record-loader';
import { evaluation as spaEsEvaluation } from '../src/generated/records/spaphish-v5-es-questions/record-loader';
import { chartSeries, formatRecordedRatio, readConfusion, recordedCaptureLines } from '../src/recorded-metrics';

describe('recorded result charts', () => {
  it('reads checked-in precision and recall for both corpora', () => {
    expect(chartSeries(aiEvaluation).map((item) => [item.name, formatRecordedRatio(item.ratio)])).toEqual([
      ['Precision', '100.00% (92/92)'],
      ['Recall', '92.00% (92/100)']
    ]);
    expect(chartSeries(spaEvaluation).map((item) => [item.name, formatRecordedRatio(item.ratio)])).toEqual([
      ['Precision', '93.48% (43/46)'],
      ['Recall', '17.27% (43/249)']
    ]);
    expect(chartSeries(spaEsEvaluation).map((item) => [item.name, formatRecordedRatio(item.ratio)])).toEqual([
      ['Precision', '90.63% (58/64)'],
      ['Recall', '23.29% (58/249)']
    ]);
    expect(readConfusion(aiEvaluation)).toEqual({ tp: 92, fp: 0, tn: 100, fn: 8 });
    expect(readConfusion(spaEvaluation)).toEqual({ tp: 43, fp: 3, tn: 247, fn: 206 });
    expect(readConfusion(spaEsEvaluation)).toEqual({ tp: 58, fp: 6, tn: 244, fn: 191 });
  });

  it('labels a missing metric instead of inventing one', () => {
    expect(formatRecordedRatio(null)).toBe('Not in recorded set');
    expect(chartSeries({ metrics: { precision: { value: null, numerator: 0, denominator: 0 } } }).map((item) => formatRecordedRatio(item.ratio))).toEqual(['Not in recorded set', 'Not in recorded set']);
    expect(chartSeries(null).every((item) => item.ratio === null)).toBe(true);
  });

  it('keeps separate recall bars when the recorded definitions differ', () => {
    const evaluation = {
      metrics: {
        precision: { value: 0.5, numerator: 1, denominator: 2 },
        recallAmongDecided: { value: 0.5, numerator: 1, denominator: 2 },
        wholeCorpusAlertRecall: { value: 0.25, numerator: 1, denominator: 4 }
      }
    };
    expect(chartSeries(evaluation).map((item) => item.name)).toEqual(['Precision', 'Recall among decided emails', 'Whole-corpus alert recall']);
  });

  it('preserves the SpaPhish source-run scope note from the checked-in manifest', () => {
    expect(recordedCaptureLines(spaRun, spaRun.expectedCount).some((line) => line.includes('original 500') && line.includes('not a 499-message-only'))).toBe(true);
    expect(recordedCaptureLines(aiRun, aiRun.expectedCount).some((line) => line.includes('not a'))).toBe(false);
    expect(recordedCaptureLines(null, null)).toEqual(['Capture effort is not in the recorded set.']);
  });
});
