import { useEffect, useState } from 'react';

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => { const started = performance.now(); const tick = () => { const value = Math.min(100, ((performance.now() - started) / 1450) * 100); setProgress(value); if (value < 100) requestAnimationFrame(tick); else window.setTimeout(onFinish, 300); }; const frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame); }, [onFinish]);
  return <div className="incoming-call fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#05070c] text-white">
    <div className="call-glow" />
    <div className="phone-shell">
      <div className="phone-screen">
        <div className="dynamic-island"><span /><span /></div>
        <div className="call-time">{Math.max(0, Math.round(1.45 - progress / 100 * 1.45)).toFixed(2)}</div>
        <div className="caller-avatar"><span className="avatar-head" /><span className="avatar-body" /></div>
        <p className="caller-label">incoming call</p>
        <h1 className="caller-name">Developer</h1>
        <p className="caller-sub">your next idea</p>
        <div className="call-actions"><button className="call-decline" aria-label="decline call">×</button><button className="call-answer" aria-label="answer call">⌁</button></div>
        <div className="swipe-track"><span className="swipe-arrow">↑</span><span>swipe to answer</span></div>
        <div className="call-progress"><i style={{ width: `${progress}%` }} /></div>
      </div>
    </div>
    <p className="phone-caption">Aashman Shukla <span>/</span> personal archive</p>
  </div>;
}
