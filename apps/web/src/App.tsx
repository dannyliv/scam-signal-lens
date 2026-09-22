import { useCallback, useEffect, useMemo, useState, type KeyboardEvent } from 'react';
import { datasets, type CorpusExample, type GeneratedDatasetIndex } from './generated/dataset-index';
import { CompareView, LearnView, LocalView, MethodView, SourcesView } from './SecondaryViews';
import { ResultsView } from './ResultsView';
import { ReplayPanel } from './ReplayPanel';
import { RunPanel } from './RunPanel';
import { isVerifiedExample, isVerifiedRun, type ReplayEvent, type VerifiedExample } from './verified-replay';
import { exactEvidenceSegment } from './replay-details';
import { PRODUCT_VERSION } from './version';

type CorpusMode = 'replay' | 'samples';
type AppView = CorpusMode | 'results' | 'methodology' | 'compare' | 'learn' | 'local' | 'sources';
type MobilePane = 'library' | 'message' | 'signals';

const labelText = (example: CorpusExample) => example.groundTruth.label === 'phishing' ? 'Phishing' : 'Benign';
const knownDataset = (value: string | undefined) => datasets.some((dataset) => dataset.id === value) ? value! : null;

function normalizeView(value: string | undefined): AppView {
  if (value === 'desk') return 'samples';
  if (value === 'method') return 'methodology';
  if (value === 'replay' || value === 'samples' || value === 'results' || value === 'methodology' || value === 'compare' || value === 'learn' || value === 'local' || value === 'sources') return value;
  return 'replay';
}

function currentRoute() {
  const [, view, datasetId, exampleId] = location.hash.split('/');
  const known = knownDataset(datasetId);
  return { view: normalizeView(view), datasetId: known, exampleId: known ? exampleId ?? '' : '' };
}

function onTabKeys(event: KeyboardEvent<HTMLElement>) {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
  const tabs = [...event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const index = tabs.indexOf(document.activeElement as HTMLButtonElement);
  if (index < 0) return;
  event.preventDefault();
  const next = tabs[(index + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
  next?.focus();
  next?.click();
}

function SourceText({ source, text, example, record, signalId }: { source: 'subject' | 'body' | 'userContext'; text: string; example: CorpusExample; record: VerifiedExample | null; signalId: string | null }) {
  const segment = record && signalId ? exactEvidenceSegment(record.record, example, signalId) : null;
  if (!segment || segment.source !== source) return <>{text}</>;
  return <>{text.slice(0, segment.start)}<mark className="exact-evidence">{text.slice(segment.start, segment.end)}</mark>{text.slice(segment.end)}</>;
}

export function App() {
  const initialRoute = currentRoute();
  const [datasetId, setDatasetId] = useState(initialRoute.datasetId ?? datasets[0]!.id);
  const [query, setQuery] = useState('');
  const [showLabel, setShowLabel] = useState(false);
  const [labelFilter, setLabelFilter] = useState<'all' | 'phishing' | 'benign'>('all');
  const [resultFilter, setResultFilter] = useState<'all' | 'strong_warning_signs' | 'verify_first' | 'few_warning_signs' | 'not_enough_evidence' | 'unavailable'>('all');
  const [view, setView] = useState<AppView>(initialRoute.view);
  const [corpusMode, setCorpusMode] = useState<CorpusMode>(initialRoute.view === 'samples' ? 'samples' : 'replay');
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
  const [mobilePane, setMobilePane] = useState<MobilePane>('message');
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
  useEffect(() => {
    const listen = () => {
      const next = currentRoute();
      setView(next.view);
      if (next.view === 'replay' || next.view === 'samples') setCorpusMode(next.view);
      if (next.view !== 'replay') setQueueEvents([]);
      if (next.datasetId && next.datasetId !== datasetId) setDatasetId(next.datasetId);
      if (next.exampleId) setSelectedId(next.exampleId);
    };
    addEventListener('hashchange', listen);
    return () => removeEventListener('hashchange', listen);
  }, [datasetId]);
  useEffect(() => { if (view === 'replay' && mobilePane === 'library') setMobilePane('message'); }, [view, mobilePane]);
  const cases = useMemo(() => examples.filter((item) => {
    const concern = recordedConcerns.get(item.id);
    return `${item.title}\n${item.input.subject ?? ''}\n${item.input.body}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()) && (labelFilter === 'all' || item.groundTruth.label === labelFilter) && (resultFilter === 'all' || (resultFilter === 'unavailable' ? concern === null : concern === resultFilter));
  }), [examples, query, labelFilter, resultFilter, recordedConcerns]);
  const selected = examples.find((item) => item.id === selectedId) ?? cases[0];
  const resetCorpusFilters = () => { setQuery(''); setLabelFilter('all'); setResultFilter('all'); setVisibleCount(100); setQueueCancelToken((value) => value + 1); };
  const openMode = (mode: CorpusMode) => {
    if (mode !== 'replay') setQueueEvents([]);
    setCorpusMode(mode);
    setView(mode);
    location.hash = selectedId ? `/${mode}/${datasetId}/${selectedId}` : `/${mode}/${datasetId}`;
  };
  const openReport = (next: 'results' | 'methodology') => { setQueueEvents([]); setView(next); location.hash = `/${next}`; };
  const openExtra = (next: 'compare' | 'learn' | 'local' | 'sources') => { setQueueEvents([]); setView(next); location.hash = `/${next}`; };
  const showCorpus = (id: string) => {
    if ((view === 'replay' || view === 'samples') && id === datasetId) return;
    setDatasetId(id);
    resetCorpusFilters();
    setQueueEvents([]);
    setView(corpusMode);
    location.hash = `/${corpusMode}/${id}`;
  };
  const selectExample = (id: string) => { setSelectedId(id); setSelectedSignalId(null); setMobilePane('message'); setDrawerOpen(false); setQueueCancelToken((value) => value + 1); location.hash = `/${view}/${datasetId}/${id}`; };
  const handleQueueEvents = useCallback((events: readonly ReplayEvent[]) => {
    setQueueEvents(events);
    const event = events.at(-1);
    if (event?.exampleId) {
      setSelectedId(event.exampleId);
      const route = `/replay/${datasetId}/${event.exampleId}`;
      if (location.hash !== `#${route}`) location.hash = route;
    }
  }, [datasetId]);
  const copyPublicExample = () => {
    if (!verifiedRecord || !selected) { setCopyStatus('No verified recorded artifact is available to export.'); return; }
    const payload = { designation: 'reviewed public recorded example', example: { id: selected.id, datasetId: selected.datasetId, language: selected.language, input: selected.input, provenance: selected.provenance }, record: verifiedRecord.record, events: verifiedRecord.events, provenance: verifiedRecord.provenance, recordSha256: verifiedRecord.recordSha256 };
    navigator.clipboard?.writeText(JSON.stringify(payload, null, 2)).then(() => setCopyStatus('Validated public JSON copied.')).catch(() => setCopyStatus('Copy is unavailable in this browser.'));
  };
  const corpusOpen = view === 'replay' || view === 'samples';
  const panes: MobilePane[] = view === 'replay' ? ['message', 'signals'] : ['library', 'message', 'signals'];
  return <main>
    <a className="skip" href="#workspace">Skip to workspace</a>
    <header className="topbar">
      <a className="brand" href="#/replay" aria-label="Scam Signal Lens home" onClick={(event) => { event.preventDefault(); openMode('replay'); }}><span className="lens">◉</span> Scam Signal Lens <span className="version">{PRODUCT_VERSION}</span></a>
      <span className="recorded">Recorded Jev analysis · No live API calls</span>
    </header>
    <section className="intro"><p className="eyebrow">SCAM SIGNAL LENS · {PRODUCT_VERSION} · RECORDED BENCHMARK</p><h1>Spot the signal. <em>Slow down</em> the scam.</h1><p>Replay a recorded queue, browse the sample emails, or open Results for precision and recall. This site does not call the model.</p></section>
    <section className="dataset-tabs" role="tablist" aria-label="Benchmark" onKeyDown={onTabKeys}>
      {datasets.map((item) => <button key={item.id} role="tab" aria-selected={corpusOpen && item.id === datasetId} className={corpusOpen && item.id === datasetId ? 'tab active' : 'tab'} onClick={() => showCorpus(item.id)}><span>{item.name}</span><small>{item.language}</small></button>)}
      <button role="tab" aria-selected={view === 'results'} className={view === 'results' ? 'tab active' : 'tab'} onClick={() => openReport('results')}><span>Results</span><small>Precision and recall</small></button>
      <button role="tab" aria-selected={view === 'methodology'} className={view === 'methodology' ? 'tab active' : 'tab'} onClick={() => openReport('methodology')}><span>Methodology</span><small>How this works</small></button>
    </section>
    <section className="dataset-tabs mode-tabs" role="tablist" aria-label="What to inspect" onKeyDown={onTabKeys}>
      <button role="tab" aria-selected={view === 'replay'} className={view === 'replay' ? 'tab active' : 'tab'} onClick={() => openMode('replay')}><span>Replay</span><small>Recorded queue</small></button>
      <button role="tab" aria-selected={view === 'samples'} className={view === 'samples' ? 'tab active' : 'tab'} onClick={() => openMode('samples')}><span>Data samples</span><small>Example emails</small></button>
    </section>
    {corpusOpen && (selected ? <SampleWorkspace mode={view} dataset={dataset} cases={cases} total={dataset.total} selected={selected} showLabel={showLabel} setShowLabel={setShowLabel} query={query} setQuery={(value) => { setQuery(value); setVisibleCount(100); }} labelFilter={labelFilter} setLabelFilter={setLabelFilter} resultFilter={resultFilter} setResultFilter={setResultFilter} visibleCount={visibleCount} showMore={() => setVisibleCount((count) => count + 100)} resetFilters={() => { setQuery(''); setLabelFilter('all'); setResultFilter('all'); }} mobilePane={mobilePane} setMobilePane={setMobilePane} panes={panes} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} selectedSignalId={selectedSignalId} setSelectedSignalId={setSelectedSignalId} evidenceRevealed={evidenceRevealed} setEvidenceRevealed={setEvidenceRevealed} verifiedRecord={verifiedRecord} copyStatus={copyStatus} copyPublicExample={copyPublicExample} queueEvents={queueEvents} onSelectCase={(id) => { setQueueEvents([]); selectExample(id); }} onQueueEvents={handleQueueEvents} queueCancelToken={queueCancelToken} /> : <section className="loading">Loading reviewed local corpus…</section>)}
    {view === 'results' && <ResultsView />}
    {view === 'methodology' && <MethodView />}
    {view === 'compare' && <CompareView aiDataset={datasets.find((item) => item.id === 'ai-email-200-v1')!} />}
    {view === 'learn' && <LearnView dataset={dataset} examples={examples} />}
    {view === 'local' && <LocalView />}
    {view === 'sources' && <SourcesView dataset={dataset} selected={selected} />}
    <footer><span>{PRODUCT_VERSION} · Static replay only. No message uploads, analytics, or live inference.</span><span className="footer-links"><button type="button" onClick={() => openExtra('compare')}>Compare</button><button type="button" onClick={() => openExtra('learn')}>Learn</button><button type="button" onClick={() => openExtra('local')}>Run locally</button><button type="button" onClick={() => openExtra('sources')}>Sources</button></span></footer>
  </main>;
}

function SampleWorkspace({ mode, dataset, cases, total, selected, showLabel, setShowLabel, query, setQuery, labelFilter, setLabelFilter, resultFilter, setResultFilter, visibleCount, showMore, resetFilters, mobilePane, setMobilePane, panes, drawerOpen, setDrawerOpen, selectedSignalId, setSelectedSignalId, evidenceRevealed, setEvidenceRevealed, verifiedRecord, copyStatus, copyPublicExample, queueEvents, onSelectCase, onQueueEvents, queueCancelToken }: {
  mode: CorpusMode; dataset: GeneratedDatasetIndex; cases: CorpusExample[]; total: number; selected: CorpusExample; showLabel: boolean; setShowLabel: (value: boolean | ((value: boolean) => boolean)) => void;
  query: string; setQuery: (value: string) => void; labelFilter: 'all' | 'phishing' | 'benign'; setLabelFilter: (value: 'all' | 'phishing' | 'benign') => void;
  resultFilter: 'all' | 'strong_warning_signs' | 'verify_first' | 'few_warning_signs' | 'not_enough_evidence' | 'unavailable'; setResultFilter: (value: 'all' | 'strong_warning_signs' | 'verify_first' | 'few_warning_signs' | 'not_enough_evidence' | 'unavailable') => void;
  visibleCount: number; showMore: () => void; resetFilters: () => void; mobilePane: MobilePane; setMobilePane: (value: MobilePane) => void; panes: MobilePane[]; drawerOpen: boolean; setDrawerOpen: (value: boolean | ((value: boolean) => boolean)) => void;
  selectedSignalId: string | null; setSelectedSignalId: (value: string | null) => void; evidenceRevealed: boolean; setEvidenceRevealed: (value: boolean) => void; verifiedRecord: VerifiedExample | null;
  copyStatus: string; copyPublicExample: () => void; queueEvents: readonly ReplayEvent[]; onSelectCase: (id: string) => void; onQueueEvents: (events: readonly ReplayEvent[]) => void; queueCancelToken: number;
}) {
  return <>
    {mode === 'replay' && <RunPanel dataset={dataset} onEvents={onQueueEvents} cancelToken={queueCancelToken} />}
    <section className="responsive-controls">
      {mode === 'samples' && <button className="library-toggle" aria-expanded={drawerOpen} aria-controls="example-library" onClick={() => setDrawerOpen((value) => !value)}>Examples</button>}
      <div className="mobile-panes" role="tablist" aria-label="Investigation panels" onKeyDown={(event) => { if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) return; event.preventDefault(); const next = (panes.indexOf(mobilePane) + (event.key === 'ArrowRight' ? 1 : panes.length - 1)) % panes.length; setMobilePane(panes[next]!); }}>
        {mode === 'samples' && <button id="tab-library" role="tab" aria-controls="example-library" aria-selected={mobilePane === 'library'} tabIndex={mobilePane === 'library' ? 0 : -1} onClick={() => setMobilePane('library')}>Examples</button>}
        <button id="tab-message" role="tab" aria-controls="message-panel" aria-selected={mobilePane === 'message'} tabIndex={mobilePane === 'message' ? 0 : -1} onClick={() => setMobilePane('message')}>{selected.title}</button>
        <button id="tab-signals" role="tab" aria-controls="signals-panel" aria-selected={mobilePane === 'signals'} tabIndex={mobilePane === 'signals' ? 0 : -1} onClick={() => setMobilePane('signals')}>Signals</button>
      </div>
    </section>
    <section id="workspace" className={`workspace ${mode === 'replay' ? 'replay-workspace' : ''} pane-${mobilePane}${drawerOpen ? ' drawer-open' : ''}`}>
      {mode === 'samples' && <aside id="example-library" role="tabpanel" aria-labelledby="tab-library" className="library"><div className="library-head"><div><p className="eyebrow">EXAMPLE LIBRARY</p><strong>{dataset.name}</strong><span>{dataset.sampleNote}</span></div><button className="quiet" onClick={resetFilters}>Reset</button></div><label className="search"><span>⌕</span><input aria-label="Search examples" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search email text" /></label><div className="filters"><label>Dataset label<select aria-label="Filter by dataset label" value={labelFilter} onChange={(event) => setLabelFilter(event.target.value as typeof labelFilter)}><option value="all">All</option><option value="phishing">Phishing</option><option value="benign">Benign</option></select></label><label>Recorded concern<select aria-label="Filter by recorded concern" value={resultFilter} onChange={(event) => setResultFilter(event.target.value as typeof resultFilter)}><option value="all">All</option><option value="strong_warning_signs">Alert</option><option value="verify_first">Verify</option><option value="few_warning_signs">Few signs</option><option value="not_enough_evidence">Abstain</option><option value="unavailable">Unavailable</option></select></label></div><div className="case-count">{cases.length} of {total} cases</div><div className="case-list">{cases.length === 0 ? <p className="empty-state">No examples match these filters.</p> : cases.slice(0, visibleCount).map((item, index) => <button key={item.id} className={item.id === selected.id ? 'case active' : 'case'} onClick={() => onSelectCase(item.id)}><span className="case-number">{String(index + 1).padStart(3, '0')}</span><strong>{item.title}</strong>{showLabel && <small className={item.groundTruth.label}>{labelText(item)}</small>}</button>)}{visibleCount < cases.length && <button className="more" onClick={showMore}>Show 100 more cases</button>}</div></aside>}
      <article id="message-panel" role="tabpanel" aria-labelledby="tab-message" className="message"><div className="article-head"><div><p className="eyebrow">MESSAGE / {selected.input.channel}</p><h2>{selected.title}</h2></div><button className="outline" onClick={copyPublicExample}>Copy public JSON</button></div>{copyStatus && <p className="queue" aria-live="polite">{copyStatus}</p>}<dl className="mail-meta"><div><dt>Subject</dt><dd><SourceText source="subject" text={selected.input.subject ?? 'No subject'} example={selected} record={evidenceRevealed ? verifiedRecord : null} signalId={selectedSignalId} /></dd></div><div><dt>Language</dt><dd>{selected.language === 'es' ? 'Spanish' : 'English'}</dd></div></dl><div className="mail-body"><SourceText source="body" text={selected.input.body} example={selected} record={evidenceRevealed ? verifiedRecord : null} signalId={selectedSignalId} /></div>{selected.input.userContext && <div className="context"><p>RECIPIENT CONTEXT</p><SourceText source="userContext" text={selected.input.userContext} example={selected} record={evidenceRevealed ? verifiedRecord : null} signalId={selectedSignalId} /></div>}<div className="truth"><div><p className="eyebrow">DATASET LABEL</p><strong>{showLabel ? labelText(selected) : 'Hidden for learning'}</strong></div><button className="quiet" onClick={() => setShowLabel((value) => !value)}>{showLabel ? 'Hide label' : 'Reveal label'}</button></div></article>
      <aside id="signals-panel" role="tabpanel" aria-labelledby="tab-signals" className="analysis"><p className="eyebrow">ANALYSIS REPLAY</p><ReplayPanel dataset={dataset} example={selected} queueEvents={queueEvents} controlledByQueue={mode === 'replay'} selectedSignalId={selectedSignalId} onSelectSignal={setSelectedSignalId} onEvidenceVisibility={setEvidenceRevealed} /><div className="rule"><p>WHY THIS MATTERS</p><span>Model outputs, source labels, and authored guidance remain separate.</span></div><div className="rule"><p>LIMITATION</p><span>Few warning signs would not guarantee safety.</span></div></aside>
    </section>
  </>;
}
