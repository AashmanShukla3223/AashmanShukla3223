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
            ON AIR · v1.0.27.5
          </span>
          <span className="text-white/40 text-xs font-mono">Kanpur, India · UTC+5:30</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
          <span className="text-gradient-four">
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

      {/* ─── Aesthetic: Retro + Futuristic ─── */}
      <section
        className="glass rounded-2xl p-6 sm:p-8 animate-slide-up"
        style={{ animationDelay: '0.12s' }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] uppercase tracking-widest font-bold text-tahoe-indigo">
            Aesthetic: Retro + Futuristic
          </span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-bold text-white/90 mb-2">Retro Layer (2010–2011)</h3>
            <ul className="space-y-1.5 text-xs text-white/60 list-disc list-inside">
              <li>Samsung C5000 bezel — physical TV chassis rendered in CSS</li>
              <li>DishTV OSD — 2001–2016 broadcast UI language</li>
              <li>CRT scanlines — visual artifact from analog era</li>
              <li>macOS Lion design language — pre-Monterey, pre-Neumorphism</li>
              <li>AajTak archives — 2001–2020 Indian news broadcasts</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white/90 mb-2">Futuristic Layer (2026)</h3>
            <ul className="space-y-1.5 text-xs text-white/60 list-disc list-inside">
              <li>React 19 + TypeScript — modern framework, strict typing</li>
              <li>AI Picker — Gemini + Groq + DeepSeek R1 consensus inference</li>
              <li>Glassmorphism — 2020s UI trend, backdrop-filter</li>
              <li>Vercel Edge — serverless, globally distributed</li>
              <li>HLS streaming — HTTP Live Streaming, modern broadcast protocol</li>
              <li>Stress testing methodology — novel browser benchmarking approach</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-white/70 text-center italic border-t border-white/10 pt-4">
          They coexist simultaneously. Not nostalgia. <strong className="text-white">Archaeology with code.</strong>
        </p>
      </section>

      {/* ─── Browser Stress Testing ─── */}
      <section
        className="glass rounded-2xl p-6 sm:p-8 animate-slide-up"
        style={{ animationDelay: '0.16s' }}
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
                <th className="text-left py-2 pr-4 font-semibold text-white/80">System Response</th>
                <th className="text-left py-2 font-semibold text-white/80">Failure Mode</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">0</td><td className="py-2 pr-4">150 MB</td><td className="py-2 pr-4">60 FPS</td><td className="py-2 pr-4">Instant</td><td className="py-2">Baseline</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">1</td><td className="py-2 pr-4">280 MB</td><td className="py-2 pr-4">45 FPS</td><td className="py-2 pr-4">Instant</td><td className="py-2">Smooth</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">2</td><td className="py-2 pr-4">420 MB</td><td className="py-2 pr-4">20 FPS</td><td className="py-2 pr-4">1–2 sec delay</td><td className="py-2">Usable</td></tr>
              <tr><td className="py-2 pr-4 font-mono text-tahoe-mint">3</td><td className="py-2 pr-4">~580 MB</td><td className="py-2 pr-4">2–5 FPS</td><td className="py-2 pr-4">5+ sec lag</td><td className="py-2"><span className="text-red-400">Swap thrashing</span></td></tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 items-center text-xs">
          <Link to="/stress" className="text-tahoe-blue hover:underline font-mono">
            Full methodology →  <span className="text-white/30">(STRESS.md)</span>
          </Link>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span className="text-white/50">4 GB ChromeOS (Crostini)</span>
          <span className="text-white/30">·</span>
          <span className="text-white/50">Chrome 138+</span>
          <span className="text-white/30">·</span>
          <span className="text-white/50">Ceiling: 2 levels stable</span>
        </div>
      </section>

      {/* ─── Development Speed ─── */}
      <section
        className="glass rounded-2xl p-6 sm:p-8 animate-slide-up"
        style={{ animationDelay: '0.2s' }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] uppercase tracking-widest font-bold text-tahoe-mint">
            Development Speed: 24× faster
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-emerald-400/5 rounded-xl p-4 border border-emerald-400/20">
            <h3 className="text-sm font-bold text-emerald-400 mb-2">June 2–9, 2026 (1 week)</h3>
            <ul className="space-y-1 text-xs text-white/60 font-mono">
              <li>├── Samsung C5000 (v1.0.27.1, production-ready)</li>
              <li>├── macOS 26 Tahoe (React 19, full feature set)</li>
              <li>├── aashman-homepage (portfolio + documentation)</li>
              <li>├── STRESS.md (methodology + empirical data)</li>
              <li>├── GitHub repos with releases</li>
              <li>└── 3 Vercel deployments live</li>
            </ul>
          </div>
          <div className="bg-amber-400/5 rounded-xl p-4 border border-amber-400/20">
            <h3 className="text-sm font-bold text-amber-400 mb-2">Equivalent 2011 timeline</h3>
            <ul className="space-y-1 text-xs text-white/60">
              <li><span className="text-white/40">•</span> 1 frontend engineer: 3 months</li>
              <li><span className="text-white/40">•</span> 1 backend engineer: 2 months</li>
              <li><span className="text-white/40">•</span> 1 designer: 1.5 months</li>
              <li><span className="text-white/40">•</span> Testing/DevOps: 1 month</li>
              <li className="mt-2 text-white/70 font-semibold">Total: 6 months, ~$80–120K labor</li>
            </ul>
          </div>
        </div>
        <p className="mt-3 text-xs text-white/50 text-center">
          Speed multiplier: <strong className="text-white">24×</strong> — OpenCode + Claude handled boilerplate, no design debates, no merge conflicts, no meetings. Quality didn&apos;t suffer.
        </p>
      </section>

      {/* ─── Built With ─── */}
      <section
        className="glass rounded-2xl p-6 sm:p-8 animate-slide-up"
        style={{ animationDelay: '0.22s' }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] uppercase tracking-widest font-bold text-white/60">
            Built With
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel Edge', 'HLS', 'H.264', 'Gemini', 'Groq', 'DeepSeek R1', 'Claude + OpenCode', 'GitHub Releases CDN'].map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-[10px] font-mono text-white/60 bg-white/5 border border-white/10"
            >
              {t}
            </span>
          ))}
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

      {/* ─── Philosophy: Archival as Code ─── */}
      <section
        className="glass rounded-2xl p-6 sm:p-8 animate-slide-up"
        style={{ animationDelay: '0.3s' }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] uppercase tracking-widest font-bold text-tahoe-indigo">
            Philosophy: Archival as Code
          </span>
        </div>
        <p className="text-sm text-white/70 mb-3 font-semibold">Why preserve 2010–2011 systems in 2026?</p>
        <ul className="space-y-1.5 text-sm text-white/70 list-disc list-inside mb-4">
          <li><strong className="text-white">Last moment of broadcast dominance</strong> — before streaming took over</li>
          <li><strong className="text-white">Peak of feature phones</strong> — before app stores</li>
          <li><strong className="text-white">Last Windows XP / macOS Lion generation</strong> — before modern OS</li>
          <li><strong className="text-white">Peak of Indian DTH expansion</strong> — DishTV, Airtel, Tata Sky competitive era</li>
        </ul>
        <p className="text-sm text-white/80 text-center italic border-t border-white/10 pt-4">
          You&apos;re not just being nostalgic. You&apos;re <strong>documenting a historical transition.</strong>
        </p>
        <p className="text-xs text-white/50 text-center mt-2">
          The code itself is the artifact. Vercel is the museum. GitHub is the archive. Browser is the display case.
        </p>
      </section>
    </div>
  );
}
