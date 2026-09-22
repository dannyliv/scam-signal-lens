import { useEffect, useState } from 'react';
import { datasets, type GeneratedDatasetIndex } from './generated/dataset-index';
import { chartSeries, completedMetricRows, formatRecordedRatio, readConcernCounts, readConfusion, readDisagreements, recordedBarPercent, recordedCaptureLines, type ConcernCounts } from './recorded-metrics';
import { isVerifiedRun, type VerifiedRun } from './verified-replay';
import { PRODUCT_VERSION } from './version';

type LoadedReport = { dataset: GeneratedDatasetIndex; run: VerifiedRun | null };
const concernHeaders = ['Alert', 'Verify', 'Few', 'Abstain', 'Unavailable'] as const;

function ConcernRow({ label, counts }: { label: string; counts: ConcernCounts | null }) {
  if (!counts) return <tr><th>{label}</th><td colSpan={5}>Not in recorded set</td></tr>;
  return <tr><th>{label}</th><td>{counts.strong_warning_signs}</td><td>{counts.verify_first}</td><td>{counts.few_warning_signs}</td><td>{counts.not_enough_evidence}</td><td>{counts.unavailable}</td></tr>;
}

function CorpusResult({ dataset, run }: { dataset: GeneratedDatasetIndex; run: VerifiedRun | null }) {
  const evaluation = run?.evaluation ?? null;
  const series = chartSeries(evaluation);
  const confusion = readConfusion(evaluation);
  const disagreements = readDisagreements(evaluation);
  return <article className="result-card">
    <h3>{dataset.name}</h3>
    <p className="lang">{dataset.language} · {dataset.sampleNote}</p>
    {series.map((item) => {
      const percent = recordedBarPercent(item.ratio);
      const label = `${dataset.name} ${item.name}`;
      return <div className="bar-row" key={item.name}>
        <span className="bar-name">{item.name}</span>
        <div className="bar-plot">
          <svg className="bar-svg" viewBox="0 0 100 10" preserveAspectRatio="none" role="img" aria-label={label}>
            <rect width="100" height="10" className="bar-track-rect" />
            {percent !== null && <rect width={percent} height="10" className={item.kind === 'precision' ? 'bar-fill-rect' : 'bar-recall-rect'} />}
          </svg>
          <strong>{formatRecordedRatio(item.ratio)}</strong>
        </div>
        <small className="bar-meaning">{item.meaning}</small>
      </div>;
    })}
    <p className="completed-note">{confusion ? `Completed recorded benchmark: TP ${confusion.tp} · FP ${confusion.fp} · TN ${confusion.tn} · FN ${confusion.fn}.` : 'Completed confusion counts: Not in recorded set.'}</p>
    <details className="benchmark-details">
      <summary>Completed recorded benchmark</summary>
      <div className="metric-summary">
        <dl>{completedMetricRows(evaluation).map((row) => <div key={row.label}><dt>{row.label}</dt><dd>{formatRecordedRatio(row.ratio)}</dd></div>)}</dl>
        <table>
          <caption>Source label by recorded concern</caption>
          <thead><tr><th>Dataset label</th>{concernHeaders.map((header) => <th key={header}>{header}</th>)}</tr></thead>
          <tbody>
            <ConcernRow label="phishing" counts={readConcernCounts(evaluation, 'phishing')} />
            <ConcernRow label="benign" counts={readConcernCounts(evaluation, 'benign')} />
          </tbody>
        </table>
        <p className="queue">Recorded disagreements</p>
        {disagreements === null ? <p className="queue">Not in recorded set.</p> : disagreements.length === 0 ? <p className="queue">None in this recorded set.</p> : <ul className="disagreements">{disagreements.map((row) => <li key={row.id}>{row.id}: dataset {row.label}, application concern {row.concern.replaceAll('_', ' ')}</li>)}</ul>}
        {recordedCaptureLines(run?.manifest ?? null, run?.rows.length ?? null).map((line) => <p className="queue" key={line}>{line}</p>)}
      </div>
    </details>
  </article>;
}

export function ResultsView() {
  const [loaded, setLoaded] = useState<LoadedReport[] | null>(null);
  useEffect(() => {
    let active = true;
    Promise.all(datasets.map(async (dataset) => {
      const value = await dataset.loadRun().catch(() => null);
      return { dataset, run: isVerifiedRun(value) ? value : null };
    })).then((reports) => { if (active) setLoaded(reports); });
    return () => { active = false; };
  }, []);
  return <section id="workspace" className="secondary results-view">
    <p className="eyebrow">RESULTS · {PRODUCT_VERSION}</p>
    <h2>Precision and recall</h2>
    <p className="lede">Each bar is a checked-in recorded metric for that corpus alone. Alert means strong warning signs. These figures are the completed benchmark, not a partial replay. A missing figure is labeled Not in recorded set.</p>
    {loaded === null ? <p className="lede">Loading recorded results…</p> : <div className="results-grid">{loaded.map((report) => <CorpusResult key={report.dataset.id} dataset={report.dataset} run={report.run} />)}</div>}
  </section>;
}
