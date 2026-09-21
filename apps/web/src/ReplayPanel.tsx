import { useEffect, useMemo, useState } from 'react';
import type { GeneratedDatasetIndex, CorpusExample } from './generated/dataset-index';
import { exactEvidenceSegment, readableAdvice, revealStage } from './replay-details';
import { isVerifiedExample, type ChoiceAnswer, type ReplayEvent, type SignalAnswer, type VerifiedExample } from './verified-replay';
import { signalStatus } from '@scam-signal-lens/core';

function humanConcern(value: string) { return value.replaceAll('_', ' '); }
const signalMeaning: Record<string, string> = {
  credential_request: 'Requests for passwords or sign-in codes can enable account takeover.', sensitive_data_request: 'Requests for financial or identifying data can create loss or identity risk.', payment_request: 'A request to send money deserves an independent check.', unusual_payment_routing: 'A changed account, gift-card code, or forwarding route can bypass normal safeguards.', urgency_pressure: 'Time pressure can make independent verification harder.', authority_claim: 'A claimed role can increase pressure, but the text alone cannot authenticate it.', verification_bypass: 'Discouraging normal checks removes a protective step.', advance_fee_or_refund_trap: 'Pay-to-receive and overpayment forwarding patterns can divert money.', remote_access_request: 'Remote control can expose accounts and private information.', unrealistic_reward: 'Exceptional guaranteed returns or income can be used to pressure action.', independent_verification_path: 'A previously known contact route can support independent verification.', analyzer_instruction: 'Instructions to suppress review can conceal relevant warning signs.'
};
const ruleMeaning: Record<string, string> = { H1: 'Credential disclosure requested.', H2: 'Advance fee or refund diversion indicated.', H3: 'Payment request combined with unusual routing, bypass, or unrealistic reward.', H4: 'Remote access plus pressure or bypass without an established route.', H5: 'Sensitive data request through a sender-supplied route plus pressure or authority.' };

export function ReplayPanel({ dataset, example, queueEvents, selectedSignalId, onSelectSignal, onEvidenceVisibility }: {
  dataset: GeneratedDatasetIndex; example: CorpusExample; queueEvents: readonly ReplayEvent[]; selectedSignalId: string | null; onSelectSignal: (signalId: string | null) => void; onEvidenceVisibility: (visible: boolean) => void;
}) {
  const [record, setRecord] = useState<VerifiedExample | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cursor, setCursor] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => { const media = window.matchMedia('(prefers-reduced-motion: reduce)'); const update = () => setReducedMotion(media.matches); update(); media.addEventListener('change', update); return () => media.removeEventListener('change', update); }, []);
  useEffect(() => {
    let active = true;
    setRecord(null); setError(null); setCursor(0); setPlaying(false); onSelectSignal(null);
    dataset.loadRecord(example).then((value) => {
      if (!active) return;
      if (!isVerifiedExample(value)) { setError('No matching verified recording is available.'); return; }
      setRecord(value);
    }).catch(() => { if (active) setError('Recording validation failed. Analysis is unavailable.'); });
    return () => { active = false; };
  }, [dataset, example, onSelectSignal]);
  const events = record?.events ?? [];
  const queueForExample = useMemo(() => queueEvents.filter((event) => event.exampleId === example.id), [queueEvents, example.id]);
  const queueMode = queueEvents.length > 0;
  const revealed = queueMode ? queueForExample : events.slice(0, cursor);
  const anchors = record?.replayAnchors;
  const stage = useMemo(() => anchors ? revealStage(revealed, anchors) : { passA: false, evidence: false, complete: false }, [revealed, anchors]);
  useEffect(() => { onEvidenceVisibility(record !== null && stage.evidence); }, [record, stage.evidence, onEvidenceVisibility]);
  useEffect(() => {
    if (queueMode || !playing || cursor >= events.length) return;
    if (reducedMotion) { setCursor(events.length); return; }
    const timer = window.setTimeout(() => setCursor((value) => Math.min(value + 1, events.length)), 220);
    return () => window.clearTimeout(timer);
  }, [playing, cursor, events.length, reducedMotion, queueMode]);
  useEffect(() => { if (cursor >= events.length) setPlaying(false); }, [cursor, events.length]);
  if (!record) return <div className="awaiting"><span className="orbit">◌</span><h2>Awaiting a verified recording</h2><p>{error ?? 'This case has no bundled result yet. It will remain unavailable until a matching recorded Jev analysis is validated.'}</p><button disabled>Replay recorded benchmark</button></div>;

  const latest = revealed.at(-1);
  const answers = record.record.passA.response.answers;
  const signalAnswers = Object.entries(answers).filter((entry): entry is [string, SignalAnswer] => entry[1].type === 'noul');
  const contextAnswers = Object.entries(answers).filter((entry): entry is [string, ChoiceAnswer] => entry[1].type === 'choice');
  const evidence = stage.evidence ? record.record.derived.evidence : {};
  const selectedEvidence = selectedSignalId && stage.evidence ? exactEvidenceSegment(record.record, example, selectedSignalId) : null;

  return <div className="replay"><p className="eyebrow">CONDENSED PLAYBACK</p><p className="replay-note">Recorded request timings are shown separately. Playback speed is not inference speed.</p>
    {queueMode ? <p className="queue">Queue replay controls the recorded event prefix for this message.</p> : <div className="replay-controls"><button onClick={() => setPlaying((value) => !value)}>{playing ? 'Pause' : cursor ? 'Resume' : 'Replay recorded benchmark'}</button><button onClick={() => setCursor((value) => Math.min(value + 1, events.length))}>Step</button><button onClick={() => { setCursor(events.length); setPlaying(false); }}>Instant completion</button><button onClick={() => { setCursor(0); setPlaying(false); onSelectSignal(null); }}>Restart</button></div>}
    <p className="queue">Results revealed so far: {revealed.length} / {events.length} recorded events for this message</p>
    {latest && <div className="event"><strong>{latest.kind.replaceAll('_', ' ')}</strong><span>{latest.pass ? `Pass ${latest.pass}` : 'Run event'}{latest.elapsedMs !== undefined ? ` · ${latest.elapsedMs} ms` : ''}</span></div>}
    {stage.passA && <section className="analysis-detail"><p className="eyebrow">RECORDED SIGNAL PRESENCE</p><p className="replay-note">Values describe signal presence. They are not a scam percentage.</p><div className="signal-list">{signalAnswers.map(([id, answer]) => { const status = signalStatus(answer.noul).replaceAll('_', ' '); return <button key={id} className={selectedSignalId === id ? 'signal active-signal' : 'signal'} onClick={() => onSelectSignal(selectedSignalId === id ? null : id)}><span><strong>{humanConcern(id)}</strong><small>{status} · {signalMeaning[id] ?? 'This recorded signal is considered with the rest of the message.'}</small></span><b>{answer.noul.toFixed(2)}</b></button>; })}</div>
      {contextAnswers.length > 0 && <div className="choices"><p className="eyebrow">CONTEXT CHOICES</p>{contextAnswers.map(([id, answer]) => <div key={id}><strong>{humanConcern(id)}: {humanConcern(answer.choice)}</strong><span> confidence {answer.confidence.toFixed(2)}</span><ul>{Object.entries(answer.probabilities).map(([choice, probability]) => <li key={choice}>{humanConcern(choice)} {probability.toFixed(2)}</li>)}</ul></div>)}</div>}
    </section>}
    {(stage.evidence || stage.complete) && <section className="analysis-detail"><p className="eyebrow">EXACT RECORDED EVIDENCE</p>{stage.evidence ? Object.entries(evidence).map(([signal, decision]) => <button key={signal} className={selectedSignalId === signal ? 'evidence active-signal' : 'evidence'} onClick={() => onSelectSignal(selectedSignalId === signal ? null : signal)}><strong>{humanConcern(signal)}</strong><span>{decision.status.replaceAll('_', ' ')}</span></button>) : <p className="replay-note">Evidence selection was not required for this recorded result.</p>}{selectedSignalId && <p className="replay-note">{selectedEvidence ? 'The matching text is highlighted in the message panel.' : 'No literal accepted excerpt is available for this signal.'}</p>}</section>}
    {stage.complete && <section className="result"><p className="eyebrow">RECORDED RESULT</p><strong>{humanConcern(record.record.derived.concern)}</strong><p>{record.record.derived.concern === 'few_warning_signs' ? 'Few warning signs in this text. This is not a guarantee of safety.' : 'Application concern is a recorded policy result, not a sender verdict.'}</p><p>Triggered rules: {record.record.derived.triggeredRuleIds.map((id) => `${id}: ${ruleMeaning[id] ?? humanConcern(id)}`).join(' ') || 'None recorded'}</p>{record.record.derived.contextWarnings.length > 0 && <p>Context warnings: {record.record.derived.contextWarnings.map(humanConcern).join(', ')}</p>}
      <p className="eyebrow">SUGGESTED VERIFICATION STEPS · AUTHORED GUIDANCE</p>{record.record.derived.adviceTemplateIds.map((id) => <p key={id}>{readableAdvice(id)}</p>)}<p className="replay-note">Guidance is authored by this application. It is separate from the model result and dataset label.</p>
      <p className="eyebrow">RECORDING PROVENANCE</p><p>Requested model: {record.record.requestedModel}</p><p>Captured: {record.record.passA.capturedAt}</p><p>Pass A capture request time: {record.record.passA.successfulAttemptElapsedMs} ms across {record.record.passA.attemptCount} attempt(s).</p>{record.record.passB && <p>Pass B evidence-selection time: {record.record.passB.successfulAttemptElapsedMs} ms across {record.record.passB.attemptCount} attempt(s).</p>}<p>Capture session: {record.provenance.captureSessionId ?? 'Unavailable'}</p><p>Record digest: {record.recordSha256}</p></section>}
  </div>;
}
