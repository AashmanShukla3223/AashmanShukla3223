import { useEffect, useRef } from 'react';

// Brand-aligned palette: macOS Tahoe sapphire + Samsung 2010 emerald, amber, crimson
const THEME_COLORS = [
  '#10b981', // Emerald
  '#f59e0b', // Amber / Gold
  '#ff375f', // Neon Crimson
  '#0a84ff', // Tahoe Blue
  '#699bd8', // OSD Light Blue
  '#34c759', // iOS Call Green
  '#ffffff', // Crisp White
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  tiltAngle: number;
  tiltSpeed: number;
  shape: 'rect' | 'circle' | 'strip';
  opacity: number;
  life: number;
  maxLife: number;
}

export default function Confetti({ onComplete }: { onComplete?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth * window.devicePixelRatio);
    let height = (canvas.height = window.innerHeight * window.devicePixelRatio);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth * window.devicePixelRatio;
      height = canvas.height = window.innerHeight * window.devicePixelRatio;
    };
    window.addEventListener('resize', handleResize);

    const dpr = window.devicePixelRatio || 1;
    const count = 120;
    const particles: Particle[] = [];

    // Origin 1: Center of screen (where the phone is connected)
    const centerX = width / 2;
    const centerY = height * 0.45;

    // Generate burst particles
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = (Math.random() * 12 + 6) * dpr;
      const vy = Math.sin(angle) * speed - (Math.random() * 8 + 4) * dpr; // upward bias
      const vx = Math.cos(angle) * speed * 1.3;

      const shapes: ('rect' | 'circle' | 'strip')[] = ['rect', 'strip', 'circle'];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const baseSize = (Math.random() * 6 + 7) * dpr;

      particles.push({
        x: centerX + (Math.random() - 0.5) * 40 * dpr,
        y: centerY + (Math.random() - 0.5) * 40 * dpr,
        vx,
        vy,
        w: shape === 'strip' ? baseSize * 0.45 : baseSize,
        h: shape === 'strip' ? baseSize * 2.2 : baseSize * 1.1,
        color: THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.18,
        tiltAngle: Math.random() * Math.PI,
        tiltSpeed: Math.random() * 0.12 + 0.05,
        shape,
        opacity: 1,
        life: 0,
        maxLife: Math.floor(Math.random() * 40 + 130), // ~2.5 - 3.2s
      });
    }

    const gravity = 0.38 * dpr;
    const drag = 0.982;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let aliveCount = 0;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life++;

        if (p.life > p.maxLife) {
          p.opacity -= 0.035;
        }

        if (p.opacity <= 0) continue;
        aliveCount++;

        p.vx *= drag;
        p.vy = p.vy * drag + gravity;
        p.x += p.vx;
        p.y += p.vy;

        p.rotation += p.rotationSpeed;
        p.tiltAngle += p.tiltSpeed;

        const tilt = Math.cos(p.tiltAngle);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.scale(1, tilt);
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity));
        ctx.fillStyle = p.color;

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }

        ctx.restore();
      }

      if (aliveCount > 0) {
        animId = requestAnimationFrame(render);
      } else {
        onComplete?.();
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [onComplete]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[99999] h-full w-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}
