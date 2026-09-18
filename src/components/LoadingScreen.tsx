import { useEffect, useState } from 'react';

const stages = ['Waking the archive', 'Tuning the glass', 'Opening the studio'];

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const started = performance.now();
    const tick = () => {
      const value = Math.min(100, ((performance.now() - started) / 1050) * 100);
      setProgress(value);
      if (value < 100) requestAnimationFrame(tick);
      else window.setTimeout(onFinish, 260);
    };
    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onFinish]);
  const stage = progress < 38 ? stages[0] : progress < 75 ? stages[1] : stages[2];
  return <div className="fixed inset-0 z-50 flex items-end p-6 sm:p-10 bg-[#071426] text-white"><div className="w-full max-w-5xl mx-auto"><div className="flex items-end justify-between gap-6"><div><p className="text-[10px] uppercase tracking-[0.22em] text-white/45 font-mono">Aashman Shukla / personal archive</p><h1 className="mt-3 text-4xl sm:text-6xl font-bold tracking-[-0.05em]">A place for curious things.</h1></div><span className="font-mono text-sm text-[#63e6e2]">{Math.round(progress)}%</span></div><div className="mt-8 h-px bg-white/15 overflow-hidden"><div className="h-full bg-gradient-to-r from-[#0a84ff] via-[#63e6e2] to-[#ff375f]" style={{width:`${progress}%`}} /></div><p className="mt-3 text-xs text-white/45 font-mono">{stage}…</p></div></div>;
}
