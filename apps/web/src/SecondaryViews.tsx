import { useEffect, useMemo, useState } from 'react';
import type { CorpusExample, GeneratedDatasetIndex } from './generated/dataset-index';
import { isVerifiedExample, type VerifiedExample } from './verified-replay';
import { policyFingerprint } from '@scam-signal-lens/core';

export type SecondaryView = 'desk' | 'compare' | 'learn' | 'method' | 'local' | 'sources';
const pairs = [['S01', 'B01'], ['S02', 'B09'], ['S03', 'B03'], ['S04', 'B04'], ['S07', 'B07'], ['S13', 'B12']];
const human = (value: string) => value.replaceAll('_', ' ');
function findSeed(examples: CorpusExample[], seedId: string) { return examples.find((example) => example.provenance.originalSeedIds?.includes(seedId)); }

function RecordedConcern({ record }: { record: VerifiedExample | null | undefined }) {
  return record ? <p className="recorded-concern">Recorded application concern: <strong>{human(record.record.derived.concern)}</strong></p> : <p className="unavailable">No matching verified recording is available.</p>;
}

function RecordedComparison({ example, record }: { example: CorpusExample; record: VerifiedExample | undefined }) {
  if (!record) return <RecordedConcern record={record} />;
  const signals = Object.entries(record.record.passA.response.answers).filter((entry) => entry[1].type === 'noul') as [string, { type: 'noul'; noul: number }][];
  const choices = Object.entries(record.record.passA.response.answers).filter((entry) => entry[1].type === 'choice') as [string, { type: 'choice'; choice: string; confidence: number; probabilities: Record<string, number> }][];
  return <><RecordedConcern record={record} /><div className="compare-signals" aria-label="Recorded signal presence">{signals.map(([signal, answer]) => <span key={signal}>{human(signal)} {answer.noul.toFixed(2)}</span>)}</div>{choices.map(([choice, answer]) => <p className="compare-choice" key={choice}>{human(choice)}: {human(answer.choice)} ({answer.confidence.toFixed(2)})</p>)}<details className="compare-message"><summary>View recorded email fields</summary><dl><div><dt>Subject</dt><dd>{example.input.subject ?? 'No subject'}</dd></div><div><dt>Body</dt><dd>{example.input.body}</dd></div>{example.input.userContext && <div><dt>Recipient context</dt><dd>{example.input.userContext}</dd></div>}</dl></details></>;
}

export function CompareView({ aiDataset }: { aiDataset: GeneratedDatasetIndex }) {
  const [examples, setExamples] = useState<CorpusExample[]>([]);
  const [records, setRecords] = useState<Map<string, VerifiedExample>>(new Map());
  useEffect(() => {
    let active = true;
    aiDataset.loadExamples().then(async (loaded) => {
      if (!active) return;
      setExamples(loaded);
      const mapped = pairs.flatMap((pair) => pair.map((seedId) => findSeed(loaded, seedId))).filter((value): value is CorpusExample => Boolean(value));
      const values = await Promise.all(mapped.map(async (example) => [example.id, await aiDataset.loadRecord(example)] as const));
      if (!active) return;
      setRecords(new Map(values.flatMap(([id, value]) => isVerifiedExample(value) ? [[id, value] as const] : [])));
    }).catch(() => { if (active) setExamples([]); });
    return () => { active = false; };
  }, [aiDataset]);
  return <section className="secondary"><p className="eyebrow">COMPARE</p><h2>Paired boundary cases</h2><p className="lede">Each pair uses adapted AI emails tied to the original teaching scenarios. The comparison always uses the English AI corpus, regardless of the desk dataset.</p><div className="pairs">{pairs.map(([leftId, rightId]) => {
    const left = findSeed(examples, leftId), right = findSeed(examples, rightId);
    return <article className="pair" key={`${leftId}-${rightId}`}><header><span>{leftId} / {rightId}</span><small>Recorded result shown after validation</small></header><div>{[left, right].map((example, index) => example ? <section key={example.id}><p className="eyebrow">CASE {index + 1}</p><strong>{example.title}</strong><RecordedComparison example={example} record={records.get(example.id)} /></section> : <section key={index}><span className="unavailable">Mapped case unavailable</span></section>)}</div></article>;
  })}</div></section>;
}

function shuffled<T>(items: readonly T[]) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) { const next = Math.floor(Math.random() * (index + 1)); [copy[index], copy[next]] = [copy[next]!, copy[index]!]; }
  return copy;
}

export function LearnView({ dataset, examples }: { dataset: GeneratedDatasetIndex; examples: CorpusExample[] }) {
  const [index, setIndex] = useState(0), [choice, setChoice] = useState<string | null>(null), [record, setRecord] = useState<VerifiedExample | null>(null);
  const sample = useMemo(() => shuffled(examples), [examples]);
  const current = sample[index % Math.max(sample.length, 1)];
  useEffect(() => { setIndex(0); setChoice(null); setRecord(null); }, [dataset.id]);
  useEffect(() => {
    let active = true; setRecord(null);
    if (!current || !choice) return () => { active = false; };
    dataset.loadRecord(current).then((value) => { if (active && isVerifiedExample(value)) setRecord(value); }).catch(() => {});
    return () => { active = false; };
  }, [dataset, current, choice]);
  if (!current) return <section className="secondary">Loading learning cases…</section>;
  const next = () => { setIndex((value) => value + 1); setChoice(null); setRecord(null); };
  return <section className="secondary learn"><p className="eyebrow">LEARN MODE</p><h2>Read the request before the reveal.</h2><p className="lede">Titles and source labels stay hidden until you make a learning choice. This is not a scored qualification.</p><article className="learn-card"><p className="eyebrow">EMAIL / {current.language === 'es' ? 'SPANISH' : 'ENGLISH'}</p><p className="learn-subject">{current.input.subject ?? 'No subject'}</p><div className="learn-body">{current.input.body}</div>{current.input.userContext && <div className="context"><p>RECIPIENT CONTEXT</p>{current.input.userContext}</div>}{!choice ? <div className="learn-actions"><button onClick={() => setChoice('warning signs')}>Warning signs</button><button onClick={() => setChoice('needs verification')}>Needs verification</button><button onClick={() => setChoice('few warning signs')}>Few warning signs</button></div> : <div className="learn-reveal"><p>You chose: <strong>{choice}</strong></p><p>Title: <strong>{current.title}</strong></p><p>Dataset label: <strong>{current.groundTruth.label}</strong></p><RecordedConcern record={record} /><button onClick={next}>Next email</button></div>}</article></section>;
}

export function MethodView() { const policy = policyFingerprint(); return <section className="secondary prose"><p className="eyebrow">METHODOLOGY</p><h2>Recorded requests, replayed locally.</h2><p>Each benchmark email is projected into fixed input fields only. Dataset labels, titles, provenance, and authored rationales are excluded from the model request.</p><p>Pass A records the twelve fixed signal and two context-choice answers. Pass B selects literal evidence only from deterministic subject and body segments. The browser verifies the matching public artifact before it reveals a result.</p><p>Policy {policy.policyVersion} marks a signal indicated at {policy.yes}, not indicated at {policy.no}, and uncertain between those thresholds. Context choices require both {policy.choiceConfidenceFloor} confidence and {policy.choiceWinnerProbabilityFloor} winner probability. Rules {policy.strongWarningRules.join(', ')} can produce an alert concern.</p><p>The policy reports a concern state, not a sender verdict. AI Email 200 is authored synthetic material. SpaPhish is an attributed Spanish source sample, and its separate results do not establish English performance. A message alone cannot verify a sender or website.</p></section>; }

export function LocalView() { return <section className="secondary prose"><p className="eyebrow">RUN LOCALLY</p><h2>Use a private environment for live analysis.</h2><p>The public website cannot evaluate pasted text. A local analysis uploads the selected message text to the hosted provider and needs an owner-supplied credential. Keep private output outside the repository.</p><pre>pnpm build:recorder{`\n`}node tools/capture/dist/main.js analyze \\{`\n`}  --input-file /absolute/private-input.json \\{`\n`}  --language en --acknowledge-provider-upload true \\{`\n`}  --out /absolute/private-analysis-output --run-id private-review</pre><p>Run key-free validation with <code>pnpm test</code>, <code>pnpm typecheck</code>, and <code>pnpm build</code>. Private analyses cannot become public replay records without the project’s separate capture and review process.</p></section>; }

function download(payload: unknown) {
  const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
  const link = document.createElement('a'); link.href = url; link.download = 'scam-signal-lens-public-example.json'; link.click(); URL.revokeObjectURL(url);
}

export function SourcesView({ dataset, selected }: { dataset: GeneratedDatasetIndex; selected: CorpusExample | undefined }) {
  const [message, setMessage] = useState('');
  const exportSelected = async () => {
    if (!selected) return;
    setMessage('Validating the recorded artifact before export…');
    const value = await dataset.loadRecord(selected).catch(() => null);
    if (!isVerifiedExample(value)) { setMessage('No verified recorded artifact is bundled for this example, so no export was created.'); return; }
    download({ designation: 'reviewed public recorded example', example: { id: selected.id, datasetId: selected.datasetId, language: selected.language, input: selected.input, provenance: selected.provenance }, record: value.record, events: value.events, provenance: value.provenance, recordSha256: value.recordSha256 });
    setMessage('The validated public example export was downloaded.');
  };
  return <section className="secondary prose"><p className="eyebrow">SOURCES AND PRIVACY</p><h2>Two datasets, separate provenance.</h2><p>AI Email 200 is original constructed material. SpaPhish v5 is a balanced sample from the <a href="https://data.mendeley.com/datasets/hz2d6gz7pc/5">upstream SpaPhish release</a> by Lazaro Bustio-Martinez and listed contributors, shared under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. Source labels and recorded concerns remain distinct.</p><p>Upstream material was anonymized by its creators. This project does not claim an independent PII-free review and documents residual-contact limitations in its source materials.</p><p>The application adds no analytics, trackers, message uploads, or live API requests. GitHub Pages may retain ordinary hosting request logs. Dataset preparation, attribution, limitations, and license boundaries are documented with the project source.</p><button className="export" onClick={exportSelected}>Export selected validated public JSON</button>{message && <p aria-live="polite">{message}</p>}</section>;
}
