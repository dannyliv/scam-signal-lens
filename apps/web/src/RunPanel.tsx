import { useEffect, useMemo, useState } from 'react';
import { evaluateDataset, type EvaluationRow } from '@scam-signal-lens/core';
import type { GeneratedDatasetIndex } from './generated/dataset-index';
import { isVerifiedRun, type ReplayEvent, type VerifiedRun } from './verified-replay';
import { revealedPassARows } from './replay-metrics';

type Evaluation = ReturnType<typeof evaluateDataset>;
const record = (value: unknown): Record<string, unknown> | null => typeof value === 'object' && value !== null && !Array.isArray(value) ? value as Record<string, unknown> : null;
function metric(label: string, value: { value: number | null; numerator: number; denominator: number }) {
  return <div><dt>{label}</dt><dd>{value.value === null ? `Unavailable (${value.numerator}/${value.denominator})` : `${(value.value * 100).toFixed(1)}% (${value.numerator}/${value.denominator})`}</dd></div>;
}
function Summary({ report, heading, scope }: { report: Evaluation; heading: string; scope: 'prefix'|'full' }) {
  const prefix = scope === 'prefix';
  const recallLabel = prefix ? 'Alert recall in revealed phishing rows' : 'Whole-corpus alert recall';
  const benignLabel = prefix ? 'Alert rate in revealed benign rows' : 'Whole-dataset benign alert rate';
  const decisionLabel = prefix ? 'Decision coverage in revealed rows' : 'Decision coverage';
  return <section className="metric-summary"><p className="eyebrow">{heading}</p><dl className="metric-headlines">{metric(recallLabel, report.metrics.wholeCorpusAlertRecall)}{metric(benignLabel, report.metrics.wholeCorpusBenignAlertRate)}{metric(decisionLabel, report.coverage.decision)}</dl><p className="queue">TP {report.confusion.tp} · FP {report.confusion.fp} · TN {report.confusion.tn} · FN {report.confusion.fn}. Abstentions: {report.abstentions.benign + report.abstentions.phishing}. Unavailable: {report.unavailable.benign + report.unavailable.phishing}.</p><details className="metric-details"><summary>{prefix ? 'All revealed-prefix quality metrics' : 'All full-dataset quality metrics'}</summary><dl>{metric(recallLabel, report.metrics.wholeCorpusAlertRecall)}{metric(benignLabel, report.metrics.wholeCorpusBenignAlertRate)}{metric('Analysis coverage', report.coverage.analysis)}{metric(decisionLabel, report.coverage.decision)}{metric('Capture-complete coverage', report.coverage.captureComplete)}{metric('Precision among decided emails', report.metrics.precision)}{metric('Recall among decided emails', report.metrics.recallAmongDecided)}{metric('F1 among decided emails', report.metrics.f1)}{metric('Accuracy among decided emails', report.metrics.accuracy)}{metric('Specificity among decided benign emails', report.metrics.specificity)}{metric('False-positive rate among decided benign emails', report.metrics.falsePositiveRate)}{metric('Evidence selection coverage', report.evidence.coverage)}</dl></details><details><summary>Source label by recorded concern</summary><table><thead><tr><th>Dataset label</th><th>Alert</th><th>Verify</th><th>Few</th><th>Abstain</th><th>Unavailable</th></tr></thead><tbody>{(['phishing', 'benign'] as const).map((label) => <tr key={label}><th>{label}</th><td>{report.concernByGroundTruth[label].strong_warning_signs}</td><td>{report.concernByGroundTruth[label].verify_first}</td><td>{report.concernByGroundTruth[label].few_warning_signs}</td><td>{report.concernByGroundTruth[label].not_enough_evidence}</td><td>{report.concernByGroundTruth[label].unavailable}</td></tr>)}</tbody></table></details><details><summary>Recorded disagreements</summary>{report.individualErrors.length === 0 ? <p className="queue">None in this report.</p> : <ul>{report.individualErrors.map((row) => <li key={row.id}>{row.id}: dataset {row.label}, application concern {(row.concern ?? 'unavailable').replaceAll('_', ' ')}</li>)}</ul>}</details></section>;
}

export function RunPanel({ dataset, onEvents, cancelToken }: { dataset: GeneratedDatasetIndex; onEvents: (events: readonly ReplayEvent[]) => void; cancelToken: number }) {
  const [run, setRun] = useState<VerifiedRun | null>(null), [cursor, setCursor] = useState(0), [playing, setPlaying] = useState(false), [reducedMotion, setReducedMotion] = useState(false), [announced, setAnnounced] = useState(false);
  useEffect(() => { const media = window.matchMedia('(prefers-reduced-motion: reduce)'); const update = () => setReducedMotion(media.matches); update(); media.addEventListener('change', update); return () => media.removeEventListener('change', update); }, []);
  useEffect(() => { let active = true; setRun(null); setCursor(0); setPlaying(false); setAnnounced(false); onEvents([]); dataset.loadRun().then((value) => { if (active && isVerifiedRun(value)) setRun(value); }); return () => { active = false; }; }, [dataset, onEvents]);
  useEffect(() => { setPlaying(false); }, [cancelToken]);
  const shown = useMemo(() => run?.events.slice(0, cursor) ?? [], [run, cursor]);
  useEffect(() => { onEvents(shown); }, [shown, onEvents]);
  useEffect(() => {
    if (!playing || !run || cursor >= run.events.length) return;
    if (reducedMotion) { setCursor(run.events.length); return; }
    const id = window.setTimeout(() => setCursor((value) => Math.min(value + 1, run.events.length)), 100);
    return () => clearTimeout(id);
  }, [playing, run, cursor, reducedMotion]);
  useEffect(() => { if (run && cursor >= run.events.length) setPlaying(false); }, [run, cursor]);
  useEffect(() => { if (run && cursor >= run.events.length && run.events.length > 0 && !announced) setAnnounced(true); }, [run, cursor, announced]);
  if (!run) return <section className="run-panel"><p className="eyebrow">BENCHMARK QUEUE</p><p className="unavailable">No verified complete run is bundled. Whole-corpus metrics are unavailable.</p></section>;
  const prefixRows = revealedPassARows(run.rows, shown, run.anchorsByExample) as EvaluationRow[];
  const prefix = evaluateDataset(dataset.id, prefixRows, { runId: typeof run.manifest.runId === 'string' ? run.manifest.runId : undefined });
  const complete = run.evaluation as Evaluation;
  const current = shown.at(-1);
  const manifest = run.manifest as Record<string, unknown>;
  const sourceRun = record(manifest.sourceRun) ?? manifest;
  const attempts = typeof sourceRun.actualHttpAttemptCount === 'number' ? sourceRun.actualHttpAttemptCount : null;
  const attemptCap = typeof sourceRun.declaredHttpAttemptCap === 'number' ? sourceRun.declaredHttpAttemptCap : null;
  const elapsed = typeof sourceRun.runWallElapsedMs === 'number' ? sourceRun.runWallElapsedMs : null;
  const failures = Array.isArray(sourceRun.failures) ? sourceRun.failures.length : null;
  const sourceExpected = typeof sourceRun.expectedCount === 'number' ? sourceRun.expectedCount : null;
  const publicExpected = typeof manifest.expectedCount === 'number' ? manifest.expectedCount : run.rows.length;
  const sourceRunNote = sourceExpected !== null && sourceExpected !== publicExpected ? ` Source-run effort includes the original ${sourceExpected} enrolled messages, including excluded or superseded work. It is not a ${publicExpected}-message-only duration.` : '';
  return <section className="run-panel"><p className="eyebrow">BENCHMARK QUEUE</p><div className="replay-controls"><button onClick={() => setPlaying((value) => !value)}>{playing ? 'Pause queue' : cursor ? 'Resume queue' : 'Replay queue'}</button><button onClick={() => setCursor((value) => Math.min(value + 1, run.events.length))}>Step</button><button onClick={() => { setCursor(run.events.length); setPlaying(false); }}>Instant completion</button><button onClick={() => { setCursor(0); setPlaying(false); setAnnounced(false); }}>Restart</button></div><p className="queue">Current case: {current?.exampleId ?? 'Awaiting replay'} · phase: {current ? `${current.kind.replaceAll('_', ' ')}${current.pass ? `, Pass ${current.pass}` : ''}` : 'awaiting replay'}.</p><p className="queue">Results revealed so far: {prefixRows.length}/{run.rows.length} validated rows. Prefix denominators cover only completed, revealed recordings.</p>{announced && <p className="sr-only" aria-live="polite">Recorded benchmark replay completed.</p>}<Summary heading="RESULTS REVEALED SO FAR" report={prefix} scope="prefix" /><details><summary>Complete recorded benchmark report</summary><Summary heading="FULL RECORDED DATASET" report={complete} scope="full" /><p className="queue">Source-run HTTP attempts: {attempts ?? 'Unavailable'}{attemptCap === null ? '' : ` of cap ${attemptCap}`}. Source-run failed records: {failures ?? 'Unavailable'}. Source-run wall capture elapsed: {elapsed === null ? 'Unavailable' : `${elapsed} ms`}.{sourceRunNote}</p></details></section>;
}
