import { useState, useEffect } from 'react';

const BAR_COLORS = [
  { max: 15, color: '#0a1d3a', label: 'Initializing...' },
  { max: 30, color: '#0a1d3a', label: 'Connecting...' },
  { max: 50, color: '#10b981', label: 'Loading assets...' },
  { max: 75, color: '#f59e0b', label: 'Compiling interface...' },
  { max: 100, color: '#ff375f', label: 'Almost ready...' },
];

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 300);
          setTimeout(onFinish, 700);
          return 100;
        }
        const increment = Math.random() * 2.5 + 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onFinish]);

  const entry = BAR_COLORS.find((e) => progress <= e.max) ?? BAR_COLORS[BAR_COLORS.length - 1];

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050e1d] transition-opacity duration-400 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="w-72 sm:w-96 space-y-3">
        <div className="h-1 w-full rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
          <div
            className="h-full rounded-full transition-all duration-150 ease-out"
            style={{
              width: `${Math.min(progress, 100)}%`,
              backgroundColor: entry.color,
              boxShadow: `0 0 8px ${entry.color}60`,
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-mono text-white/30">{entry.label}</span>
          <span className="text-[10px] font-mono text-white/50">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
