import { useEffect, useMemo, useState } from 'react';
import type { GeneratedDatasetIndex } from './generated/dataset-index';
import { isVerifiedRun, type ReplayEvent, type VerifiedRun } from './verified-replay';

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
  if (!run) return <section className="run-panel"><p className="eyebrow">RECORDED QUEUE</p><p className="unavailable">No verified complete run is bundled for this corpus.</p></section>;
  const current = shown.at(-1);
  const finished = cursor >= run.events.length && run.events.length > 0;
  return <section className="run-panel"><p className="eyebrow">RECORDED QUEUE</p><div className="replay-controls"><button onClick={() => setPlaying((value) => !value)}>{playing ? 'Pause queue' : cursor ? 'Resume queue' : 'Replay queue'}</button><button onClick={() => setCursor((value) => Math.min(value + 1, run.events.length))}>Step</button><button onClick={() => { setCursor(run.events.length); setPlaying(false); }}>Instant completion</button><button onClick={() => { setCursor(0); setPlaying(false); setAnnounced(false); }}>Restart</button></div><p className="queue">Current case: {current?.exampleId ?? 'Awaiting replay'} · phase: {current ? `${current.kind.replaceAll('_', ' ')}${current.pass ? `, Pass ${current.pass}` : ''}` : 'awaiting replay'}.</p><p className="queue">{finished ? 'Recorded benchmark replay completed. Precision and recall stay on the Results tab.' : 'This queue replays the checked-in recording. Precision and recall stay on the Results tab.'}</p>{announced && <p className="sr-only" aria-live="polite">Recorded benchmark replay completed.</p>}</section>;
}
