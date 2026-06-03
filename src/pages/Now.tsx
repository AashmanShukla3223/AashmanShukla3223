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
          What I'm actively working on right now? Here is the full picture.
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
            v1.0.30 — Kids Indian originals (Chikoo Aur Bunty + Motu Patlu)
          </li>
        </ul>
      </section>

      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.18s' }}>
        <h2 className="text-lg font-bold text-white mb-3">🏠 This homepage</h2>
        <p className="text-sm text-white/70">
          You're reading the v1.0 launch. React 19 + Vite + Tailwind + TypeScript, hybrid macOS Tahoe
          glassmorphism × Samsung 2010 OSD aesthetic. Replacing my GitHub-profile redirect.
        </p>
      </section>

      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.26s' }}>
        <h2 className="text-lg font-bold text-white mb-3">📚 Learning</h2>
        <ul className="space-y-2 text-sm text-white/70">
          <li>Vercel Functions + serverless region pinning (currently <code className="text-tahoe-mint">bom1</code> for the AI Picker)</li>
          <li>How LLMs handle near-duplicate candidate lists (position bias is real)</li>
          <li>Quality-weighted social metrics — see my <a href="/writing/quality-weighted-followers" className="text-tahoe-blue hover:text-tahoe-mint underline underline-offset-2">post</a></li>
        </ul>
      </section>
    </div>
  );
}
