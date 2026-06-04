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
        <h2 className="text-lg font-bold text-white mb-3">📺 Samsung C5000 Simulator</h2>
        <ul className="space-y-2 text-sm text-white/70">
          <li>
            <span className="text-emerald-400 font-mono text-xs mr-2">SHIPPED</span>
            v1.0.27 Bronze Tier (8 features + AI Picker disambiguation fix)
          </li>
          <li>
            <span className="text-tahoe-orange font-mono text-xs mr-2">NEXT</span>
            v1.0.28 — 3 new AajTak MP4s + India Today HLS stream (downloading the segments now via{' '}
            <code className="text-tahoe-mint">yt-dlp --download-sections</code> on Windows in parallel)
          </li>
          <li>
            <span className="text-white/40 font-mono text-xs mr-2">QUEUED</span>
            v1.0.29 — Kids imports (2× Peppa Pig + 2× Paw Patrol Hindi dubs)
          </li>
          <li>
            <span className="text-white/40 font-mono text-xs mr-2">QUEUED</span>
            v1.0.30 — Full DishTV EPG (140+ channels), kids Indian originals (Chikoo Aur Bunty + Motu Patlu), recording scheduler
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
            <span className="text-tahoe-mint font-mono text-xs mr-2">BROWSER</span>
            How V8 GC heuristics change across Chrome versions — GC improvements every ~6 versions meaningfully affect recursion ceilings
          </li>
          <li>
            <span className="text-tahoe-mint font-mono text-xs mr-2">BROADCAST</span>
            Indian DTH expansion history (DishTV, Airtel, Tata Sky competitive era) and HLS as modern broadcast protocol
          </li>
          <li>
            <span className="text-tahoe-mint font-mono text-xs mr-2">ARCHIVAL</span>
            Retro-futurism as archival methodology — preserving the 2010–2011 broadcast-to-streaming transition with code
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
