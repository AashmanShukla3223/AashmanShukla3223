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

function segPct(progress: number, min: number, max: number) {
  return Math.max(0, Math.min(1, (progress - min) / (max - min)));
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

  const topPct = segPct(progress, 0, 25);
  const rightPct = segPct(progress, 25, 50);
  const bottomPct = segPct(progress, 50, 75);
  const leftPct = segPct(progress, 75, 100);

  const topActive = progress < 25;
  const rightActive = progress >= 25 && progress < 50;
  const bottomActive = progress >= 50 && progress < 75;
  const leftActive = progress >= 75 && progress < 100;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050e1d] transition-opacity duration-400 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Top edge — dark blue, left to right */}
      <div
        className="fixed top-0 left-0 h-[2.5px] transition-all duration-150 ease-out"
        style={{
          width: `${topPct * 100}%`,
          backgroundColor: '#0a1d3a',
          boxShadow: topActive ? '0 0 8px #0a1d3a80' : 'none',
        }}
      />

      {/* Right edge — emerald green, top to bottom */}
      <div
        className="fixed top-0 right-0 w-[2.5px] transition-all duration-150 ease-out"
        style={{
          height: `${rightPct * 100}%`,
          backgroundColor: '#10b981',
          boxShadow: rightActive ? '0 0 8px #10b98180' : 'none',
        }}
      />

      {/* Bottom edge — gold yellow, right to left (anchored at right) */}
      <div
        className="fixed bottom-0 right-0 h-[2.5px] transition-all duration-150 ease-out"
        style={{
          width: `${bottomPct * 100}%`,
          backgroundColor: '#f59e0b',
          boxShadow: bottomActive ? '0 0 8px #f59e0b80' : 'none',
        }}
      />

      {/* Left edge — blossom pink, bottom to top (anchored at bottom) */}
      <div
        className="fixed bottom-0 left-0 w-[2.5px] transition-all duration-150 ease-out"
        style={{
          height: `${leftPct * 100}%`,
          backgroundColor: '#ff375f',
          boxShadow: leftActive ? '0 0 8px #ff375f80' : 'none',
        }}
      />

      {/* Center content */}
      <div className="flex flex-col items-center gap-6 w-72 sm:w-96">
        <p
          key={quoteIndex}
          className="text-xs text-white/40 text-center italic leading-relaxed animate-fade-in h-10 flex items-center"
        >
          {shuffled[quoteIndex]}
        </p>

        <div className="flex justify-between items-center w-full">
          <span className="text-[10px] font-mono text-white/30">{side.label}</span>
          <span className="text-[10px] font-mono text-white/50">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
