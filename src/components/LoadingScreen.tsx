import { useEffect, useRef, useState, type PointerEvent } from 'react';

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [answer, setAnswer] = useState(0);
  const [received, setReceived] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const finishTimer = useRef<number | null>(null);

  useEffect(() => () => { if (finishTimer.current) window.clearTimeout(finishTimer.current); }, []);

  const move = (clientX: number) => {
    const track = trackRef.current;
    if (!track || received) return;
    const rect = track.getBoundingClientRect();
    const next = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setAnswer(next);
  };

  const startSwipe = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    move(event.clientX);
  };

  const endSwipe = () => {
    if (answer < 92 || received) { setAnswer(0); return; }
    setAnswer(100);
    setReceived(true);
    finishTimer.current = window.setTimeout(onFinish, 850);
  };

  return <div className={`incoming-call ${received ? 'call-received' : ''} fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#05070c] text-white`}>
    <div className="call-glow" />
    <div className="loader-layout">
    <div className="phone-shell">
      <div className="phone-screen">
        <div className="dynamic-island"><span /><span /></div>
        <div className="call-time">09:41</div>
        <div className="caller-avatar"><span className="avatar-head" /><span className="avatar-body" /></div>
        <p className="caller-label">{received ? 'call connected' : 'incoming call'}</p>
        <h1 className="caller-name">{received ? 'Connected' : 'Developer'}</h1>
        <p className="caller-sub">{received ? 'entering the archive…' : 'your next idea'}</p>
        {!received && <>
          <div className="call-options">
            <button type="button" aria-label="Remind me" className="call-option"><span>◷</span><small>Remind Me</small></button>
            <button type="button" aria-label="Voicemail" className="call-option"><span>⌁</span><small>Voicemail</small></button>
          </div>
          <div ref={trackRef} className="answer-slider" aria-label="Slide to answer" onPointerDown={startSwipe} onPointerMove={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) move(event.clientX); }} onPointerUp={endSwipe} onPointerCancel={endSwipe}><div className="answer-fill" style={{ width: `${answer}%` }} /><div className="answer-handle" style={{ left: `calc(${answer}% - 25px)` }}>☎</div><span>slide to answer</span></div>
        </>}
        {received && <div className="received-mark">✓</div>}
        <div className="call-progress"><i style={{ width: `${answer}%` }} /></div>
      </div>
    </div>
    {!received && <div className="loading-orb outside-loading-orb" aria-label="Loading progress">
      <svg viewBox="0 0 120 120" aria-hidden="true"><circle className="loading-orb-track" cx="60" cy="60" r="53" /><circle className="loading-orb-progress" cx="60" cy="60" r="53" pathLength="100" style={{ strokeDashoffset: 100 - answer }} /></svg>
      <span>{Math.round(answer)}%</span>
    </div>}
    </div>
  </div>;
}
