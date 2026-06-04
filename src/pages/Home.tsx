import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { posts } from '../data/posts';

export default function Home() {
  const featured = projects.find((p) => p.highlight);
  const latestPost = posts[0];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* ─── Hero ─── */}
      <section className="glass-strong rounded-3xl p-8 sm:p-12 animate-slide-up">
        <div className="flex items-center gap-2 mb-6">
          <span className="osd-button text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md font-mono">
            ON AIR · 1.0.27
          </span>
          <span className="text-white/40 text-xs font-mono">Kanpur, India · UTC+5:30</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
          <span className="bg-gradient-to-r from-tahoe-blue via-tahoe-indigo to-tahoe-mint bg-clip-text text-transparent">
            Aashman Shukla
          </span>
          <span className="text-white/40"> — Digital Archaeologist</span>
        </h1>

        <p className="mt-4 text-lg text-white/80 font-semibold">
          18 years old. Kanpur, India. Builder of period-authentic simulators.
        </p>

        <p className="mt-4 text-base text-white/70 leading-relaxed max-w-3xl">
          Preserving systems from 2010–2011 — the boundary between broadcast and streaming eras — using 2026 technology. Retro-futurism as archival methodology.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/projects" className="osd-button px-5 py-2.5 rounded-xl font-semibold text-sm">
            See projects →
          </Link>
          <a
            href="https://github.com/AashmanShukla3223"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-5 py-2.5 rounded-xl font-semibold text-sm text-white/90 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/AashamnS49638"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-5 py-2.5 rounded-xl font-semibold text-sm text-white/90 hover:text-white transition-colors"
          >
            Twitter
          </a>
        </div>

        {/* Languages strip */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/50 font-mono">
          <span>🇮🇳 हिन्दी (Hindi)</span>
          <span>🇮🇳 বাংলা (Bengali)</span>
          <span>🇬🇧 English</span>
          <span className="text-white/30">·</span>
          <span>TypeScript · React · Tailwind · Vercel · OpenCode</span>
        </div>
      </section>

      {/* ─── Three Websites, One Vision ─── */}
      <section
        className="glass rounded-2xl p-6 sm:p-8 animate-slide-up"
        style={{ animationDelay: '0.08s' }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] uppercase tracking-widest font-bold text-tahoe-mint">
            Three Websites, One Vision
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-tahoe-blue/40 transition-colors">
            <span className="text-2xl block mb-2">📺</span>
            <h3 className="font-bold text-white text-sm">Samsung C5000</h3>
            <p className="text-xs text-white/60 mt-1 leading-relaxed">
              The exact 2010 hardware that defined an era. DishTV DTH with 15 channels, AI Channel Picker (Gemini + Groq + DeepSeek R1), three-path OTA, virtual USB.
            </p>
            <a
              href="https://samsung-lcd-tv.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tahoe-blue text-xs mt-2 inline-block hover:underline font-mono"
            >
              samsung-lcd-tv.vercel.app →
            </a>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-tahoe-indigo/40 transition-colors">
            <span className="text-2xl block mb-2">🖥️</span>
            <h3 className="font-bold text-white text-sm">macOS 26 Tahoe</h3>
            <p className="text-xs text-white/60 mt-1 leading-relaxed">
              Love letter to 2011 macOS aesthetics, built with 2026 tech. React 19 glassmorphism, 20+ apps, window management, file system with drag-and-drop.
            </p>
            <a
              href="https://macos-26-tahoe.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tahoe-blue text-xs mt-2 inline-block hover:underline font-mono"
            >
              macos-26-tahoe.vercel.app →
            </a>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-tahoe-mint/40 transition-colors">
            <span className="text-2xl block mb-2">🏠</span>
            <h3 className="font-bold text-white text-sm">This Homepage</h3>
            <p className="text-xs text-white/60 mt-1 leading-relaxed">
              Portfolio, stress testing methodology, and technical essays on broadcast history and archival practice. You&apos;re here now.
            </p>
            <span className="text-emerald-400 text-xs mt-2 inline-block font-mono">● You are here</span>
          </div>
        </div>
      </section>

      {/* ─── Browser Stress Testing ─── */}
      <section
        className="glass rounded-2xl p-6 sm:p-8 animate-slide-up"
        style={{ animationDelay: '0.14s' }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] uppercase tracking-widest font-bold text-tahoe-orange">
            Browser stress testing
          </span>
        </div>
        <p className="text-sm text-white/70 mb-3 leading-relaxed">
          Two simulators embedded recursively create measurable load that scales linearly per nesting level. Unlike synthetic benchmarks (Speedometer, MotionMark, JetStream), this stresses what real webapps hit: iframe process isolation, JS heap fragmentation, CSS paint, audio context limits, video decoder pipelines.
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-xs text-white/70">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-4 font-semibold text-white/80">Level</th>
                <th className="text-left py-2 pr-4 font-semibold text-white/80">JS Heap</th>
                <th className="text-left py-2 pr-4 font-semibold text-white/80">FPS Drag</th>
                <th className="text-left py-2 font-semibold text-white/80">System Response</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">0</td><td className="py-2 pr-4">150 MB</td><td className="py-2 pr-4">60 FPS</td><td className="py-2">Instant — Baseline</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">1</td><td className="py-2 pr-4">280 MB</td><td className="py-2 pr-4">45 FPS</td><td className="py-2">Instant — Smooth</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">2</td><td className="py-2 pr-4">420 MB</td><td className="py-2 pr-4">20 FPS</td><td className="py-2">1–2 sec delay — Usable</td></tr>
              <tr><td className="py-2 pr-4 font-mono text-tahoe-mint">3</td><td className="py-2 pr-4">~580 MB</td><td className="py-2 pr-4">2–5 FPS</td><td className="py-2">5+ sec lag — Swap thrashing</td></tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 items-center text-xs">
          <Link to="/stress" className="text-tahoe-blue hover:underline font-mono">
            Full methodology →  <span className="text-white/30">(STRESS.md)</span>
          </Link>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span className="text-white/50">Hardware: 4 GB ChromeOS</span>
          <span className="text-white/30">·</span>
          <span className="text-white/50">Browser: Chrome 138+</span>
          <span className="text-white/30">·</span>
          <span className="text-white/50">Ceiling: 2 levels stable</span>
        </div>
      </section>

      {/* ─── Featured project ─── */}
      {featured && (
        <section
          className="glass rounded-2xl p-6 sm:p-8 transition-all hover:shadow-glass-lg animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{featured.emoji}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-tahoe-mint">
                  Featured project
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white">{featured.name}</h2>
              <p className="text-white/60 mt-1 text-sm">{featured.tagline}</p>
            </div>
            <div className="flex gap-2">
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="osd-button px-4 py-2 rounded-lg text-xs font-semibold"
              >
                Live →
              </a>
              <a
                href={featured.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-4 py-2 rounded-lg text-xs font-semibold text-white/90 hover:text-white"
              >
                Code
              </a>
            </div>
          </div>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">{featured.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {featured.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/60 bg-white/5 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ─── Latest writing ─── */}
      {latestPost && (
        <section
          className="glass rounded-2xl p-6 sm:p-8 animate-slide-up"
          style={{ animationDelay: '0.26s' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-tahoe-orange">
              Latest writing
            </span>
            <span className="text-white/40 text-xs font-mono">{latestPost.date}</span>
          </div>
          <Link to={`/writing/${latestPost.slug}`} className="group">
            <h3 className="text-xl font-bold text-white group-hover:text-tahoe-blue transition-colors">
              {latestPost.title}
            </h3>
            <p className="mt-2 text-white/60 text-sm">{latestPost.excerpt}</p>
            <span className="mt-3 inline-block text-xs text-tahoe-blue font-mono group-hover:underline">
              Read post →
            </span>
          </Link>
        </section>
      )}
    </div>
  );
}
