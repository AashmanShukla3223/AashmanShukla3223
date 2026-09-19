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
    const next = Math.max(0, Math.min(100, ((rect.right - clientX) / rect.width) * 100));
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
    <div className="phone-shell">
      <div className="phone-screen">
        <div className="dynamic-island"><span /><span /></div>
        <div className="call-time">09:41</div>
        <div className="caller-avatar"><span className="avatar-head" /><span className="avatar-body" /></div>
        <p className="caller-label">{received ? 'call connected' : 'incoming call'}</p>
        <h1 className="caller-name">{received ? 'Connected' : 'Developer'}</h1>
        <p className="caller-sub">{received ? 'entering the archive…' : 'your next idea'}</p>
        {!received && <><div className="call-actions"><button className="call-decline" aria-label="decline call">×</button><button className="call-answer" aria-label="answer call">⌁</button></div><div ref={trackRef} className="answer-slider" onPointerDown={startSwipe} onPointerMove={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) move(event.clientX); }} onPointerUp={endSwipe} onPointerCancel={endSwipe}><div className="answer-fill" style={{ width: `${answer}%` }} /><div className="answer-handle" style={{ right: `${answer}%` }}>›</div><span>swipe to answer</span></div></>}
        {received && <div className="received-mark">✓</div>}
        <div className="call-progress"><i style={{ width: `${answer}%` }} /></div>
      </div>
    </div>
    <p className="phone-caption">Aashman Shukla <span>/</span> personal archive</p>
  </div>;
}
