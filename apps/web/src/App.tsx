import { useCallback, useEffect, useMemo, useState } from 'react';
import { datasets, type CorpusExample } from './generated/dataset-index';
import { CompareView, LearnView, LocalView, MethodView, SourcesView, type SecondaryView } from './SecondaryViews';
import { ReplayPanel } from './ReplayPanel';
import { RunPanel } from './RunPanel';
import { isVerifiedExample, isVerifiedRun, type ReplayEvent, type VerifiedExample } from './verified-replay';
import { exactEvidenceSegment } from './replay-details';

const labelText = (example: CorpusExample) => example.groundTruth.label === 'phishing' ? 'Phishing' : 'Benign';
const knownDataset = (value: string | undefined) => datasets.some((dataset) => dataset.id === value) ? value! : null;
function currentRoute() {
  const [, view, datasetId, exampleId] = location.hash.split('/');
  return { view: view as SecondaryView | undefined, datasetId: knownDataset(datasetId), exampleId: knownDataset(datasetId) ? exampleId ?? '' : datasetId ?? '' };
}

function SourceText({ source, text, example, record, signalId }: { source: 'subject'|'body'|'userContext'; text: string; example: CorpusExample; record: VerifiedExample | null; signalId: string | null }) {
  const segment = record && signalId ? exactEvidenceSegment(record.record, example, signalId) : null;
  if (!segment || segment.source !== source) return <>{text}</>;
  return <>{text.slice(0, segment.start)}<mark className="exact-evidence">{text.slice(segment.start, segment.end)}</mark>{text.slice(segment.end)}</>;
}

export function App() {
  const initialRoute = currentRoute();
  const [datasetId, setDatasetId] = useState(initialRoute.datasetId ?? datasets[0]!.id);
  const [query, setQuery] = useState('');
  const [showLabel, setShowLabel] = useState(false);
  const [labelFilter, setLabelFilter] = useState<'all'|'phishing'|'benign'>('all');
  const [resultFilter, setResultFilter] = useState<'all'|'strong_warning_signs'|'verify_first'|'few_warning_signs'|'not_enough_evidence'|'unavailable'>('all');
  const initialView = initialRoute.view ?? 'desk';
  const [view, setView] = useState<SecondaryView>(['desk', 'compare', 'learn', 'method', 'local', 'sources'].includes(initialView) ? initialView : 'desk');
  const dataset = datasets.find((item) => item.id === datasetId)!;
  const [examples, setExamples] = useState<CorpusExample[]>([]);
  const routeSelected = initialRoute.exampleId;
  const [selectedId, setSelectedId] = useState(routeSelected);
  const [queueEvents, setQueueEvents] = useState<readonly ReplayEvent[]>([]);
  const [selectedSignalId, setSelectedSignalId] = useState<string | null>(null);
  const [verifiedRecord, setVerifiedRecord] = useState<VerifiedExample | null>(null);
  const [evidenceRevealed, setEvidenceRevealed] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const [recordedConcerns, setRecordedConcerns] = useState<Map<string, string | null>>(new Map());
  const [visibleCount, setVisibleCount] = useState(100);
  const [mobilePane, setMobilePane] = useState<'library'|'message'|'signals'>('message');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [queueCancelToken, setQueueCancelToken] = useState(0);
  useEffect(() => { let active = true; setExamples([]); setSelectedId(''); dataset.loadExamples().then((loaded) => { if (active) { const requested = currentRoute().exampleId; setExamples(loaded); setSelectedId(loaded.some((item) => item.id === requested) ? requested : loaded[0]?.id ?? ''); } }); return () => { active = false; }; }, [dataset]);
  useEffect(() => {
    let active = true;
    setVerifiedRecord(null); setSelectedSignalId(null); setEvidenceRevealed(false);
    const current = examples.find((example) => example.id === selectedId);
    if (!current) return () => { active = false; };
    dataset.loadRecord(current).then((value) => { if (active && isVerifiedExample(value)) setVerifiedRecord(value); }).catch(() => {});
    return () => { active = false; };
  }, [dataset, examples, selectedId]);
  useEffect(() => { let active = true; setRecordedConcerns(new Map()); dataset.loadRun().then((value) => { if (active && isVerifiedRun(value)) setRecordedConcerns(new Map(value.rows.map((row) => [row.id, row.concern]))); }).catch(() => {}); return () => { active = false; }; }, [dataset]);
  useEffect(() => { const listen = () => { const next = currentRoute(); if (['desk', 'compare', 'learn', 'method', 'local', 'sources'].includes(next.view as SecondaryView)) setView(next.view as SecondaryView); if (next.datasetId && next.datasetId !== datasetId) setDatasetId(next.datasetId); if (next.exampleId) setSelectedId(next.exampleId); }; addEventListener('hashchange', listen); return () => removeEventListener('hashchange', listen); }, [datasetId]);
  const navigate = (next: SecondaryView) => { location.hash = next === 'desk' && selectedId ? `/desk/${datasetId}/${selectedId}` : `/${next}`; setView(next); };
  const cases = useMemo(() => examples.filter((item) => {
    const concern = recordedConcerns.get(item.id);
    return `${item.title}\n${item.input.subject ?? ''}\n${item.input.body}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()) && (labelFilter === 'all' || item.groundTruth.label === labelFilter) && (resultFilter === 'all' || (resultFilter === 'unavailable' ? concern === null : concern === resultFilter));
  }), [examples, query, labelFilter, resultFilter, recordedConcerns]);
  const selected = examples.find((item) => item.id === selectedId) ?? cases[0];
  const changeDataset = (next: string) => { setDatasetId(next); setQuery(''); setLabelFilter('all'); setResultFilter('all'); setVisibleCount(100); setQueueCancelToken((value) => value + 1); };
  const selectExample = (id: string) => { setSelectedId(id); setSelectedSignalId(null); setMobilePane('message'); setDrawerOpen(false); setQueueCancelToken((value) => value + 1); location.hash = `/${view}/${datasetId}/${id}`; };
  const handleQueueEvents = useCallback((events: readonly ReplayEvent[]) => { setQueueEvents(events); const event = events.at(-1); if (event?.exampleId) { setSelectedId(event.exampleId); const route = `/desk/${datasetId}/${event.exampleId}`; if (location.hash !== route) location.hash = route; } }, [datasetId]);
  const copyPublicExample = () => {
    if (!verifiedRecord || !selected) { setCopyStatus('No verified recorded artifact is available to export.'); return; }
    const payload = { designation: 'reviewed public recorded example', example: { id: selected.id, datasetId: selected.datasetId, language: selected.language, input: selected.input, provenance: selected.provenance }, record: verifiedRecord.record, events: verifiedRecord.events, provenance: verifiedRecord.provenance, recordSha256: verifiedRecord.recordSha256 };
    navigator.clipboard?.writeText(JSON.stringify(payload, null, 2)).then(() => setCopyStatus('Validated public JSON copied.')).catch(() => setCopyStatus('Copy is unavailable in this browser.'));
  };
  return <main>
    <a className="skip" href="#workspace">Skip to workspace</a><header className="topbar"><a className="brand" href="#/desk" aria-label="Scam Signal Lens home" onClick={() => navigate('desk')}><span className="lens">◉</span> Scam Signal Lens</a><span className="recorded">Recorded Jev analysis · No live API calls</span><nav aria-label="Application views">{(['desk', 'compare', 'learn', 'method', 'local', 'sources'] as SecondaryView[]).map((item) => <button key={item} className={view === item ? 'nav active-nav' : 'nav'} onClick={() => navigate(item)}>{item === 'desk' ? 'Desk' : item === 'method' ? 'Method' : item === 'local' ? 'Run locally' : item}</button>)}</nav></header>
    <section className="intro"><p className="eyebrow">SCAM SIGNAL LENS / RECORDED BENCHMARK</p><h1>Spot the signal. <em>Slow down</em> the scam.</h1><p>Inspect email tactics and supporting excerpts. A message alone cannot verify who sent it or whether a website is safe.</p></section>
    {view === 'desk' && <><section className="dataset-tabs" aria-label="Benchmark dataset">
      {datasets.map((item) => <button key={item.id} className={item.id === datasetId ? 'tab active' : 'tab'} onClick={() => changeDataset(item.id)}><span>{item.name}</span><small>{item.language}</small></button>)}
    </section>
    {selected ? <><RunPanel dataset={dataset} onEvents={handleQueueEvents} cancelToken={queueCancelToken} /><section className="responsive-controls"><button className="library-toggle" aria-expanded={drawerOpen} aria-controls="example-library" onClick={() => setDrawerOpen((value) => !value)}>Examples</button><div className="mobile-panes" role="tablist" aria-label="Investigation panels" onKeyDown={(event) => { if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) return; event.preventDefault(); const panes: typeof mobilePane[] = ['library', 'message', 'signals']; const next = (panes.indexOf(mobilePane) + (event.key === 'ArrowRight' ? 1 : panes.length - 1)) % panes.length; setMobilePane(panes[next]!); }}><button id="tab-library" role="tab" aria-controls="example-library" aria-selected={mobilePane === 'library'} tabIndex={mobilePane === 'library' ? 0 : -1} onClick={() => setMobilePane('library')}>Examples</button><button id="tab-message" role="tab" aria-controls="message-panel" aria-selected={mobilePane === 'message'} tabIndex={mobilePane === 'message' ? 0 : -1} onClick={() => setMobilePane('message')}>{selected.title}</button><button id="tab-signals" role="tab" aria-controls="signals-panel" aria-selected={mobilePane === 'signals'} tabIndex={mobilePane === 'signals' ? 0 : -1} onClick={() => setMobilePane('signals')}>Signals</button></div></section><section id="workspace" className={`workspace pane-${mobilePane}${drawerOpen ? ' drawer-open' : ''}`}>
      <aside id="example-library" role="tabpanel" aria-labelledby="tab-library" className="library"><div className="library-head"><div><p className="eyebrow">EXAMPLE LIBRARY</p><strong>{dataset.name}</strong><span>{dataset.sampleNote}</span></div><button className="quiet" onClick={() => { setQuery(''); setLabelFilter('all'); setResultFilter('all'); }}>Reset</button></div><label className="search"><span>⌕</span><input aria-label="Search examples" value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(100); }} placeholder="Search email text" /></label><div className="filters"><label>Dataset label<select aria-label="Filter by dataset label" value={labelFilter} onChange={(event) => setLabelFilter(event.target.value as typeof labelFilter)}><option value="all">All</option><option value="phishing">Phishing</option><option value="benign">Benign</option></select></label><label>Recorded concern<select aria-label="Filter by recorded concern" value={resultFilter} onChange={(event) => setResultFilter(event.target.value as typeof resultFilter)}><option value="all">All</option><option value="strong_warning_signs">Alert</option><option value="verify_first">Verify</option><option value="few_warning_signs">Few signs</option><option value="not_enough_evidence">Abstain</option><option value="unavailable">Unavailable</option></select></label></div><div className="case-count">{cases.length} of {dataset.total} cases</div><div className="case-list">{cases.length === 0 ? <p className="empty-state">No examples match these filters.</p> : cases.slice(0, visibleCount).map((item, index) => <button key={item.id} className={item.id === selected.id ? 'case active' : 'case'} onClick={() => { setQueueEvents([]); selectExample(item.id); }}><span className="case-number">{String(index + 1).padStart(3, '0')}</span><strong>{item.title}</strong>{showLabel && <small className={item.groundTruth.label}>{labelText(item)}</small>}</button>)}{visibleCount < cases.length && <button className="more" onClick={() => setVisibleCount((count) => count + 100)}>Show 100 more cases</button>}</div></aside>
      <article id="message-panel" role="tabpanel" aria-labelledby="tab-message" className="message"><div className="article-head"><div><p className="eyebrow">MESSAGE / {selected.input.channel}</p><h2>{selected.title}</h2></div><button className="outline" onClick={copyPublicExample}>Copy public JSON</button></div>{copyStatus && <p className="queue" aria-live="polite">{copyStatus}</p>}<dl className="mail-meta"><div><dt>Subject</dt><dd><SourceText source="subject" text={selected.input.subject ?? 'No subject'} example={selected} record={evidenceRevealed ? verifiedRecord : null} signalId={selectedSignalId} /></dd></div><div><dt>Language</dt><dd>{selected.language === 'es' ? 'Spanish' : 'English'}</dd></div></dl><div className="mail-body"><SourceText source="body" text={selected.input.body} example={selected} record={evidenceRevealed ? verifiedRecord : null} signalId={selectedSignalId} /></div>{selected.input.userContext && <div className="context"><p>RECIPIENT CONTEXT</p><SourceText source="userContext" text={selected.input.userContext} example={selected} record={evidenceRevealed ? verifiedRecord : null} signalId={selectedSignalId} /></div>}<div className="truth"><div><p className="eyebrow">DATASET LABEL</p><strong>{showLabel ? labelText(selected) : 'Hidden for learning'}</strong></div><button className="quiet" onClick={() => setShowLabel((value) => !value)}>{showLabel ? 'Hide label' : 'Reveal label'}</button></div></article>
      <aside id="signals-panel" role="tabpanel" aria-labelledby="tab-signals" className="analysis"><p className="eyebrow">ANALYSIS REPLAY</p><ReplayPanel dataset={dataset} example={selected} queueEvents={queueEvents} selectedSignalId={selectedSignalId} onSelectSignal={setSelectedSignalId} onEvidenceVisibility={setEvidenceRevealed} /><div className="rule"><p>WHY THIS MATTERS</p><span>Model outputs, source labels, and authored guidance remain separate.</span></div><div className="rule"><p>LIMITATION</p><span>Few warning signs would not guarantee safety.</span></div></aside>
    </section></> : <section className="loading">Loading reviewed local corpus…</section>}</>}
    {view === 'compare' && <CompareView aiDataset={datasets.find((item) => item.id === 'ai-email-200-v1')!} />}{view === 'learn' && <LearnView dataset={dataset} examples={examples} />}{view === 'method' && <MethodView />}{view === 'local' && <LocalView />}{view === 'sources' && <SourcesView dataset={dataset} selected={selected} />}
    <footer><span>Static replay only. No message uploads, analytics, or live inference.</span><span>Dataset label and application concern are distinct.</span></footer>
  </main>;
}
