import { useEffect, useMemo, type CSSProperties } from 'react';

const COLORS = ['#34c759', '#0a84ff', '#ffcc00', '#ff375f', '#bf5af2', '#ffffff'];
const PIECE_COUNT = 56;

type ConfettiPiece = {
  left: string;
  color: string;
  delay: string;
  duration: string;
  rotation: string;
  drift: string;
  shape: 'square' | 'pill';
};

export default function Confetti({ onComplete }: { onComplete: () => void }) {
  const pieces = useMemo<ConfettiPiece[]>(
    () =>
      Array.from({ length: PIECE_COUNT }, (_, index) => ({
        left: `${(index * 37) % 101}%`,
        color: COLORS[index % COLORS.length],
        delay: `${(index % 9) * 55}ms`,
        duration: `${1500 + (index % 6) * 130}ms`,
        rotation: `${(index % 2 ? 1 : -1) * (360 + (index % 4) * 90)}deg`,
        drift: `${((index * 17) % 160) - 80}px`,
        shape: index % 3 === 0 ? 'pill' : 'square',
      })),
    [],
  );

  useEffect(() => {
    const timer = window.setTimeout(onComplete, 2400);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="confetti-layer" aria-hidden="true">
      {pieces.map((piece, index) => (
        <i
          className={`confetti-piece confetti-${piece.shape}`}
          key={index}
          style={
            {
              left: piece.left,
              backgroundColor: piece.color,
              animationDelay: piece.delay,
              animationDuration: piece.duration,
              '--confetti-rotation': piece.rotation,
              '--confetti-drift': piece.drift,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
