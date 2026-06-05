export default function Credits() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <header className="glass-strong rounded-3xl p-8 animate-slide-up">
        <div className="flex items-center gap-2 mb-3">
          <span className="osd-button text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md font-mono">
            v{typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.0.0'}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Credits</h1>
        <p className="mt-3 text-white/70 text-base">
          The people and tools that made this possible — shipped faster than ever into production.
        </p>
      </header>

      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.08s' }}>
        <h2 className="text-lg font-bold text-white mb-3">🤖 AI Agents</h2>

        <div className="space-y-4">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h3 className="font-bold text-white text-sm">OpenCode CLI</h3>
            <p className="text-xs text-white/60 mt-1 leading-relaxed">
              The primary coding assistant throughout this project. Handled boilerplate generation,
              component scaffolding, refactoring, and debugging across all three simulators and the
              homepage. Every feature from the Samsung C5000 OSD dialogs to the glassmorphic macOS
              Tahoe UI was built iteratively with OpenCode as the coding partner. The
              project's pace — three simulators, full documentation, and stress testing methodology
              in one week — would not have been possible without it.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h3 className="font-bold text-white text-sm">Antigravity CLI (formerly Gemini CLI)</h3>
            <p className="text-xs text-white/60 mt-1 leading-relaxed">
              Google's terminal-based AI agent, used extensively during the early phase of the
              Samsung C5000 simulator. Generated the initial TV chassis, OSD menu system, channel
              rendering pipeline, and the AI Channel Picker integration (Gemini + Groq + DeepSeek R1).
              The Antigravity &amp; OpenCode Prompts repo serves as a public archive of the skills and
              prompts used to ship features at speed.
            </p>
          </div>
        </div>
      </section>

      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.16s' }}>
        <h2 className="text-lg font-bold text-white mb-3">🧠 How They Helped Ship Faster</h2>
        <ul className="space-y-2 text-sm text-white/70">
          <li>
            <span className="text-emerald-400 font-mono text-xs mr-2">BOILERPLATE</span>
            Route setup, page components, data files, TypeScript types — generated in seconds instead of hours
          </li>
          <li>
            <span className="text-emerald-400 font-mono text-xs mr-2">ITERATION</span>
            "Change the button color to blossom pink" — instant turnarounds, no context-switching
          </li>
          <li>
            <span className="text-emerald-400 font-mono text-xs mr-2">DEBUGGING</span>
            AI identified JS heap issues, audio context limits, and iframe isolation quirks during stress testing
          </li>
          <li>
            <span className="text-emerald-400 font-mono text-xs mr-2">DOCS</span>
            STRESS.md and HOMEPAGE.md were collaboratively written — AI structured the methodology, I verified the data
          </li>
          <li>
            <span className="text-emerald-400 font-mono text-xs mr-2">SPEED</span>
            No design debates, no merge conflicts, no meetings — pure engineering velocity
          </li>
        </ul>
        <p className="mt-3 text-xs text-white/50 text-center">
          Estimated multiplier: <strong className="text-white">24× faster</strong> than a 2011-era team of 3 engineers + 1 designer + DevOps
        </p>
      </section>

      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.24s' }}>
        <h2 className="text-lg font-bold text-white mb-3">👤 Human Collaborator</h2>

        <div className="bg-white/5 rounded-xl p-4 border border-tahoe-indigo/30">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧑‍💻</span>
            <div>
              <h3 className="font-bold text-white text-sm">Kritharth Tiwari</h3>
              <a
                href="https://github.com/quizmaster277"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tahoe-blue text-xs font-mono hover:underline"
              >
                @quizmaster277
              </a>
            </div>
          </div>
          <p className="text-xs text-white/60 leading-relaxed">
            Real-world collaborator who contributed ideas, code review, and technical discussions
            throughout the development of the Samsung C5000 simulator and macOS 26 Tahoe project.
            Kritharth helped validate the stress testing methodology, suggested improvements to the
            AI Channel Picker's disambiguation logic, and provided feedback on the OSD menu system's
            UX flow. This project is a testament to what a two-person team with AI tooling can ship
            in a single week.
          </p>
        </div>
      </section>

      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.32s' }}>
        <h2 className="text-lg font-bold text-white mb-3">⚡ The Result</h2>
        <div className="text-sm text-white/70 space-y-2">
          <p>
            June 1–5, 2026: Three production-grade webapps, full stress testing methodology, and
            comprehensive documentation — all built, tested, documented, and shipped in one week.
          </p>
          <p className="text-xs text-white/50 italic">
            The code itself is the artifact. Vercel is the museum. GitHub is the archive. AI agents
            are the tools that made the museum possible.
          </p>
        </div>
      </section>
    </div>
  );
}
