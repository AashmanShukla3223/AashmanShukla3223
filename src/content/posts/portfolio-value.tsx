export default function PortfolioValue() {
  return (
    <article className="prose-aashman">
      <h1>Why the portfolio is ~$500K-ish</h1>
      <p className="text-white/50 text-sm">November 1, 2026 · 6 min read</p>

      <p>
        A number like "$500K" looks arbitrary until you price the work the way a client or
        employer would. This note breaks down where the estimate comes from. It is not a
        fundraising pitch — it is a sanity check against the "is this actually worth anything"
        question that every solo builder asks eventually.
      </p>

      <h2>The method</h2>
      <p>
        I priced each shipped artifact the way a small agency or a senior contractor would: lines
        of code are cheap, but integrated systems are not. A feature that works end-to-end — with
        its own update mechanism, error paths, persistence, and recovery story — is worth an order
        of magnitude more than the same feature as a demo. I used conservative hourly rates
        ($80–$120/hr for senior full-stack) and realistic timelines, then summed.
      </p>

      <h2>Samsung C5000 LCD TV Simulator — ~$90K</h2>
      <ul>
        <li>~4,200 lines of vanilla HTML/CSS/JS, single static file, no framework.</li>
        <li>Three-path firmware OTA (Internet + USB + Broadcast) with a cross-method conflict resolver.</li>
        <li>Tri-provider AI Channel Picker racing Groq/Gemini/OpenRouter behind a serverless proxy.</li>
        <li>Client-side TF-IDF RAG over a bilingual corpus, before the LLM call.</li>
        <li>Virtual USB filesystem, full DishTV EPG, full OSD, AajTak Exhale Window, decoupled asset CDN, disaster recovery.</li>
        <li>Estimated build: 6–8 weeks of senior full-stack + design + QA.</li>
      </ul>

      <h2>macOS Golden Gate — ~$260K</h2>
      <ul>
        <li>18,400+ lines of TypeScript, 127 components, 3 state machines, 210+ assets.</li>
        <li>52 working apps, window manager, VFS with trash and self-healing.</li>
        <li>Liquid Glass design language, spring-physics dock, 126 icons, wallpaper engine.</li>
        <li>Real telemetry via Battery/Memory/Storage APIs, boot lifecycle, OTA pipeline, MCP server.</li>
        <li>Estimated build: 4–6 months of a small team (frontend + design + QA).</li>
      </ul>

      <h2>Homepage + stress lab — ~$60K</h2>
      <ul>
        <li>Portfolio SPA, OTA update checker, recursive stress-test lab with field data.</li>
        <li>Writing, roadmap, about, now pages, content pipeline.</li>
        <li>Estimated build: 3–4 weeks.</li>
      </ul>

      <h2>Android experiments — ~$70K</h2>
      <ul>
        <li>Parallax Launcher: 6 instrument-panel modes, RAZR V3i rebuild, AGSL shaders, telephony, tariff system.</li>
        <li>Self Calling: Telecom framework integration, voice/video, alarm scheduling, in-call controls.</li>
        <li>Estimated build: 4–6 weeks each.</li>
      </ul>

      <h2>Tooling and infrastructure — ~$20K</h2>
      <ul>
        <li>Shared prompts/skills, MCP server, asset CDN via GitHub Releases, CI, versioning scripts.</li>
      </ul>

      <h2>Sum</h2>
      <p>
        90 + 260 + 60 + 70 + 20 ≈ <strong>$500K</strong>. Conservative. It ignores the value of
        the methodology (race-mode LLM fallback, decoupled asset CDN, disaster-recovery patterns)
        which is reusable across future projects, and it ignores the fact that all of this shipped
        in roughly a single development arc instead of six months.
      </p>

      <p>
        The real value is not the dollar figure — it is that the systems exist, they work, and they
        are open source. Anyone can read them, learn from them, or fork them. That is worth more
        than the estimate.
      </p>

      <p>
        Issues and bugs are welcome:{' '}
        <a href="https://github.com/AashmanShukla3223/AashmanShukla3223/issues">open an issue on GitHub</a>.
      </p>
    </article>
  );
}
