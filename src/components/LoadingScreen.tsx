import { useState, useEffect, useMemo } from 'react';

const SIDES = [
  { min: 0, max: 25, color: '#0a1d3a', label: 'Initializing...' },
  { min: 25, max: 50, color: '#10b981', label: 'Loading...' },
  { min: 50, max: 75, color: '#f59e0b', label: 'Compiling...' },
  { min: 75, max: 100, color: '#ff375f', label: 'Almost ready...' },
];

const QUOTES = [
  '"The best way to predict the future is to invent it." — Alan Kay',
  '"Software is a gas: it expands to fill its container." — Nathan Myhrvold',
  '"AI is not a feature. It is the new runtime." — Jensen Huang',
  '"Code is poetry written in logic." — Anonymous',
  '"The most dangerous phrase in language is: we have always done it this way." — Grace Hopper',
  '"First, solve the problem. Then, write the code." — John Johnson',
  '"Machine learning is the last invention that humanity will ever need to make." — Nick Bostrom',
  '"Any sufficiently advanced technology is indistinguishable from magic." — Arthur C. Clarke',
  '"Talk is cheap. Show me the code." — Linus Torvalds',
  '"AI will not replace you. A person using AI will." — Satya Nadella',
];

const SIDE_COLORS = ['#0a1d3a', '#10b981', '#f59e0b', '#ff375f'];

function offset(progress: number, min: number, max: number) {
  const clamped = Math.max(0, Math.min(1, (progress - min) / (max - min)));
  return 100 * (1 - clamped);
}

function lineVariant(idx: number, progress: number): { color: string; dashoff: number; glow: boolean } {
  const seg = SIDES[idx];
  if (progress >= seg.max) return { color: SIDE_COLORS[idx], dashoff: 0, glow: false };
  if (progress <= seg.min) return { color: 'rgba(255,255,255,0.06)', dashoff: 100, glow: false };
  return {
    color: SIDE_COLORS[idx],
    dashoff: offset(progress, seg.min, seg.max),
    glow: true,
  };
}

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const shuffled = useMemo(() => {
    const arr = [...QUOTES];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 400);
          setTimeout(onFinish, 800);
          return 100;
        }
        const inc = Math.random() * 2.5 + 0.5;
        return Math.min(prev + inc, 100);
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onFinish]);

  useEffect(() => {
    const qi = setInterval(() => setQuoteIndex((i) => (i + 1) % shuffled.length), 2200);
    return () => clearInterval(qi);
  }, [shuffled.length]);

  const side = SIDES.find((s) => progress < s.max) ?? SIDES[SIDES.length - 1];

  const v0 = lineVariant(0, progress);
  const v1 = lineVariant(1, progress);
  const v2 = lineVariant(2, progress);
  const v3 = lineVariant(3, progress);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050e1d] transition-opacity duration-400 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="w-72 sm:w-96 flex flex-col items-center gap-8">
        <p
          key={quoteIndex}
          className="text-xs text-white/40 text-center italic leading-relaxed animate-fade-in h-10 flex items-center"
        >
          {shuffled[quoteIndex]}
        </p>

        <svg viewBox="0 0 120 120" width={100} height={100}>
          {[0, 1, 2, 3].map((i) => {
            const v = [v0, v1, v2, v3][i];
            const lines = [
              { x1: 10, y1: 10, x2: 110, y2: 10 },
              { x1: 110, y1: 10, x2: 110, y2: 110 },
              { x1: 110, y1: 110, x2: 10, y2: 110 },
              { x1: 10, y1: 110, x2: 10, y2: 10 },
            ][i];
            return (
              <g key={i}>
                <line {...lines} stroke="rgba(255,255,255,0.04)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <line
                  {...lines}
                  stroke={v.color}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="100"
                  strokeDashoffset={v.dashoff}
                  style={{ filter: v.glow ? `drop-shadow(0 0 4px ${v.color}80)` : 'none', transition: 'stroke-dashoffset 0.15s ease-out' }}
                />
              </g>
            );
          })}
        </svg>

        <div className="flex justify-between items-center w-full">
          <span className="text-[10px] font-mono text-white/30">{side.label}</span>
          <span className="text-[10px] font-mono text-white/50">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
