export default function Now() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <header className="glass-strong rounded-3xl p-8 animate-slide-up">
        <div className="flex items-center gap-2 mb-3">
          <span className="osd-button text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md font-mono">
            JUNE 2026
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Now</h1>
        <p className="mt-3 text-white/70 text-base">
          What I&apos;m actively working on right now — projects, learning, and stress testing.
        </p>
      </header>

      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-lg font-bold text-white mb-3">📺 Samsung C5000 Simulator — v1.0.31 (Capstone)</h2>
        <ul className="space-y-2 text-sm text-white/70">
          <li>
            <span className="text-emerald-400 font-mono text-xs mr-2">SHIPPED</span>
            Full DishTV Programme Guide — 33 channels across News/Kids/Entertainment with 30-day schedule, 4 daypart blocks (Late Night, Morning, Mid Morning, LIVE)
          </li>
          <li>
            <span className="text-emerald-400 font-mono text-xs mr-2">SHIPPED</span>
            3 LIVE channels added: India TV (141), Republic Bharat (142), 9XM Live (321), Sony Kal HD LIVE (322)
          </li>
          <li>
            <span className="text-emerald-400 font-mono text-xs mr-2">SHIPPED</span>
            Entertainment tier (321–322) with live HLS streams alongside News (121–142) and Kids (221–228)
          </li>
          <li>
            <span className="text-white/40 font-mono text-xs mr-2">NEXT</span>
            Community submissions: stress test results, archive contributions, simulator extensions
          </li>
        </ul>
      </section>

      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.18s' }}>
        <h2 className="text-lg font-bold text-white mb-3">🏠 This homepage</h2>
        <p className="text-sm text-white/70">
          You&apos;re reading the v1.0 launch. React 19 + Vite + Tailwind + TypeScript, hybrid macOS Tahoe
          glassmorphism × Samsung 2010 OSD aesthetic. Replacing my GitHub-profile redirect.
        </p>
      </section>

      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.26s' }}>
        <h2 className="text-lg font-bold text-white mb-3">🧪 Stressing</h2>
        <ul className="space-y-2 text-sm text-white/70">
          <li>
            <span className="text-tahoe-orange font-mono text-xs mr-2">ACTIVE</span>
            2-level recursion confirmed stable on 4 GB ChromeOS (420 MB JS heap, 20 FPS during drag)
          </li>
          <li>
            <span className="text-red-400 font-mono text-xs mr-2">LIMIT</span>
            Level 3 hits ~580 MB heap, 2–5 FPS, 5+ second lag —<span className="text-white/80"> swap thrashing</span> begins
          </li>
          <li>
            <span className="text-white/40 font-mono text-xs mr-2">NEXT</span>
            Testing on 8 GB Windows machine to find the &ldquo;Ultra&rdquo; tier ceiling
          </li>
          <li>
            <span className="text-white/40 font-mono text-xs mr-2">METHOD</span>
            Full methodology documented at <a href="/stress" className="text-tahoe-blue hover:text-tahoe-mint underline underline-offset-2">aashman-homepage.vercel.app/stress</a>
          </li>
        </ul>
      </section>

      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.34s' }}>
        <h2 className="text-lg font-bold text-white mb-3">📚 Learning</h2>
        <ul className="space-y-2 text-sm text-white/70">
          <li>
            <span className="text-tahoe-mint font-mono text-xs mr-2">ARCHIVAL</span>
            Retro-futurism as archival practice — preserving the 2010–2011 broadcast-to-streaming transition with code
          </li>
          <li>
            <span className="text-tahoe-mint font-mono text-xs mr-2">STRESS</span>
            Browser stress testing methodology — novel approach using recursive iframe embedding as real-world benchmark
          </li>
          <li>
            <span className="text-tahoe-mint font-mono text-xs mr-2">BROADCAST</span>
            Indian broadcast media history — AajTak archives, DishTV evolution, DTH expansion competitive era
          </li>
          <li>
            <span className="text-tahoe-mint font-mono text-xs mr-2">AI</span>
            Building with AI-assisted development — OpenCode + Claude as engineering multiplier (24× speed)
          </li>
          <li>
            <span className="text-tahoe-mint font-mono text-xs mr-2">LLMs</span>
            How LLMs handle near-duplicate candidate lists (position bias is real) — see my <a href="/writing/quality-weighted-followers" className="text-tahoe-blue hover:text-tahoe-mint underline underline-offset-2">post</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
