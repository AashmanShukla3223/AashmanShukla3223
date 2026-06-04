export default function Stress() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <header className="glass-strong rounded-3xl p-8 animate-slide-up">
        <div className="flex items-center gap-2 mb-3">
          <span className="osd-button text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md font-mono">
            STRESS TEST
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Browser & Hardware Stress Testing Guide
        </h1>
        <p className="mt-3 text-white/70 text-base">
          Stress-test your browser engine, hardware, and OS with two real production webapps stacked
          recursively. No synthetic benchmark — these are working simulators with full feature sets,
          exercised at scale.
        </p>
        <blockquote className="border-l-2 border-tahoe-mint/50 pl-4 mt-4 text-sm text-white/60 italic">
          Live across two simulators on <code className="text-tahoe-blue text-xs">aashman-homepage.vercel.app</code>.
        </blockquote>
        <p className="text-sm text-white/60 mt-2">
          <strong className="text-white/80">For:</strong> Web developers, browser engineers, performance engineers, hardware reviewers, and anyone curious how their setup handles real-world JS-heavy workloads.
        </p>
      </header>

      {/* What You're Testing */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.06s' }}>
        <h2 className="text-lg font-bold text-white mb-4">What You're Testing</h2>
        <p className="text-sm text-white/70 mb-4">
          Two simulators that can be embedded inside each other recursively, creating a measurable
          load that scales linearly per nesting level. Unlike synthetic benchmarks (Speedometer,
          MotionMark, JetStream), this stresses things real web apps actually hit:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-4 font-semibold text-white/80">Subsystem stressed</th>
                <th className="text-left py-2 font-semibold text-white/80">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-xs text-tahoe-mint">Iframe process isolation</td><td className="py-2">Site isolation forces separate processes per origin; recursion multiplies that</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-xs text-tahoe-mint">JS heap fragmentation</td><td className="py-2">Two different runtimes (vanilla JS + React 19) coexisting, repeated per level</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-xs text-tahoe-mint">CSS layout & paint</td><td className="py-2">Tailwind rebuilt per iframe, glassmorphism <code className="text-tahoe-orange text-xs">backdrop-filter</code> per layer (notoriously GPU-heavy)</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-xs text-tahoe-mint">Audio context limits</td><td className="py-2">Chrome ~50 max, Firefox ~10, Safari ~6. Each level adds 1–2 contexts.</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-xs text-tahoe-mint">Video decoder pipelines</td><td className="py-2">Each level can play MP4 + HLS via separate HTMLVideoElement decoders. Hardware decoder slots are limited per tab.</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-xs text-tahoe-mint">WebGL context cap</td><td className="py-2">Browsers cap at 8–16 concurrent contexts. Recursion can overflow.</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-xs text-tahoe-mint">GC under pressure</td><td className="py-2">V8, SpiderMonkey, and JavaScriptCore behave very differently under sustained memory pressure</td></tr>
              <tr><td className="py-2 pr-4 font-mono text-xs text-tahoe-mint">HTTP/2 multiplexing</td><td className="py-2">Each level independently fetches MP4s from GitHub Releases CDN</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-white/70 font-semibold mt-4">No synthetic benchmark hits all of these simultaneously. This one does.</p>
      </section>

      {/* System Requirements */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.12s' }}>
        <h2 className="text-lg font-bold text-white mb-4">System Requirements</h2>

        <h3 className="text-base font-semibold text-white mb-3">Samsung C5000 LCD TV Simulator</h3>
        <p className="text-sm text-white/70 mb-3">
          Production-grade web app: vanilla HTML/JS, ~300 KB single file, 15 channels, 7 USB profiles,
          tri-provider AI Picker, three-path firmware OTA.
        </p>
        <p className="text-sm text-white/70 mb-3"><span className="font-semibold text-white/80">Browser baseline:</span> Chrome 138+ (or equivalent Blink-based engine). Empirically tested across Chrome 138 → Chrome 149 (current stable as of June 2026).</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs text-white/70">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-3 font-semibold text-white/80">Tier</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">OS</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">Browser</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">CPU</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">RAM</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">Display</th>
                <th className="text-left py-2 font-semibold text-white/80">Network</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 text-tahoe-mint font-mono">Minimum</td><td className="py-2 pr-3">Windows 10 / macOS 12 / Ubuntu 22.04 / ChromeOS / Android 12</td><td className="py-2 pr-3">Chrome 138+ / Edge 138+ / Firefox 130+ / Safari 17+</td><td className="py-2 pr-3">Dual-core 2.0 GHz</td><td className="py-2 pr-3">2 GB</td><td className="py-2 pr-3">1280×720</td><td className="py-2">5 Mbps (HLS streaming)</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 text-tahoe-blue font-mono">Recommended</td><td className="py-2 pr-3">Windows 11 / macOS 13 / Ubuntu 24.04 / ChromeOS / Android 14</td><td className="py-2 pr-3">Chrome 140–144 / Edge 140–144 / Firefox 135+ / Safari 18+</td><td className="py-2 pr-3">Quad-core 2.5 GHz</td><td className="py-2 pr-3">4 GB</td><td className="py-2 pr-3">1366×768</td><td className="py-2">15 Mbps</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 text-tahoe-purple font-mono">Ultra</td><td className="py-2 pr-3">Windows 11 / macOS 14+ / Ubuntu 24.04</td><td className="py-2 pr-3">Chrome 145–149 / Edge 145–149 / Firefox 138+ / Safari 18+</td><td className="py-2 pr-3">6-core 3.0 GHz</td><td className="py-2 pr-3">8 GB</td><td className="py-2 pr-3">1920×1080</td><td className="py-2">25 Mbps</td></tr>
              <tr><td className="py-2 pr-3 text-white/60 font-mono">Legacy</td><td className="py-2 pr-3">Windows XP / Vista / 7 / 8 / 8.1</td><td className="py-2 pr-3">Supermium (any recent build)</td><td className="py-2 pr-3">Dual-core 2.0 GHz</td><td className="py-2 pr-3">2 GB</td><td className="py-2 pr-3">1280×720</td><td className="py-2">5 Mbps</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/50 mb-4">Codecs required: H.264, AAC, HLS. Storage: ~5 MB cache. Permissions: Audio output.</p>
        <p className="text-xs text-red-400/80"><span className="font-semibold text-red-400">Not supported:</span> Internet Explorer (any version). IE11 lacks ES6 modules, <code className="text-tahoe-orange text-xs">backdrop-filter</code>, modern Audio API features, and hasn&apos;t received updates since 2022.</p>

        <h3 className="text-base font-semibold text-white mb-3">macOS 26 Tahoe Simulator</h3>
        <p className="text-sm text-white/70 mb-3">
          React 19 + Vite + Tailwind. ~820 KB JS bundle. Glassmorphic window management, dock, traffic
          lights, file system. Empirically tested across Chrome 138 → Chrome 149. React 19 + glassmorphism is heavier than the Samsung sim — older browsers struggle even where they technically run.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-xs text-white/70">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-3 font-semibold text-white/80">Tier</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">OS</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">Browser</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">CPU</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">RAM</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">GPU</th>
                <th className="text-left py-2 font-semibold text-white/80">Display</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 text-tahoe-mint font-mono">Minimum</td><td className="py-2 pr-3">Windows 10 / macOS 12 / Ubuntu 22.04 / ChromeOS</td><td className="py-2 pr-3">Chrome 138+ / Edge 138+ / Firefox 130+ / Safari 17+</td><td className="py-2 pr-3">Dual-core 2.4 GHz</td><td className="py-2 pr-3">4 GB</td><td className="py-2 pr-3">Any GPU w/ compositing</td><td className="py-2">1366×768</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 text-tahoe-blue font-mono">Recommended</td><td className="py-2 pr-3">Windows 11 / macOS 13 / Ubuntu 24.04</td><td className="py-2 pr-3">Chrome 140–144 / Edge 140–144 / Firefox 135+ / Safari 18+</td><td className="py-2 pr-3">Quad-core 3.0 GHz</td><td className="py-2 pr-3">8 GB</td><td className="py-2 pr-3">Integrated ≤ 5 yrs old</td><td className="py-2">1920×1080</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 text-tahoe-purple font-mono">Ultra</td><td className="py-2 pr-3">Windows 11 / macOS 14+</td><td className="py-2 pr-3">Chrome 145–149 / Edge 145–149 / Firefox 138+ / Safari 18+</td><td className="py-2 pr-3">8-core 3.5 GHz</td><td className="py-2 pr-3">16 GB</td><td className="py-2 pr-3">Dedicated GPU or Apple Silicon</td><td className="py-2">2560×1440</td></tr>
              <tr><td className="py-2 pr-3 text-white/60 font-mono">Legacy</td><td className="py-2 pr-3">Windows XP / Vista / 7 / 8 / 8.1</td><td className="py-2 pr-3">Supermium (recent builds)</td><td className="py-2 pr-3">Dual-core 2.4 GHz</td><td className="py-2 pr-3">4 GB</td><td className="py-2 pr-3">Any GPU w/ compositing</td><td className="py-2">1366×768</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/50 mb-4"><span className="font-semibold text-white/80">GPU note:</span> <code className="text-tahoe-orange text-xs">backdrop-filter: blur()</code> is GPU-accelerated in Chrome/Edge/Safari, partially in Firefox. Without GPU compositing, expect ~10–15 FPS during window drag.</p>
        <p className="text-xs text-red-400/80"><span className="font-semibold text-red-400">Not supported:</span> Internet Explorer (any version).</p>
      </section>

      {/* Recursive Mode */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.18s' }}>
        <h2 className="text-lg font-bold text-white mb-3">Recursive Mode</h2>
        <p className="text-sm text-white/70 mb-3">
          The stress-test scenario. Powering on HDMI 4 inside the Samsung sim loads the macOS Tahoe
          simulator as an embedded iframe. The macOS sim <em>also</em> embeds the Samsung TV as an app
          — meaning recursion is possible.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-white/70">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-4 font-semibold text-white/80">Tier</th>
                <th className="text-left py-2 pr-4 font-semibold text-white/80">RAM required</th>
                <th className="text-left py-2 pr-4 font-semibold text-white/80">Realistic depth</th>
                <th className="text-left py-2 font-semibold text-white/80">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 text-tahoe-mint font-mono">Minimum</td><td className="py-2 pr-4">4 GB</td><td className="py-2 pr-4">1 level</td><td className="py-2">Confirmed working on 4 GB Chromebook</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 text-tahoe-blue font-mono">Recommended</td><td className="py-2 pr-4">8 GB</td><td className="py-2 pr-4">2 levels</td><td className="py-2">The canonical "loop closes" view</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 text-tahoe-purple font-mono">Ultra</td><td className="py-2 pr-4">16 GB</td><td className="py-2 pr-4">3–4 levels</td><td className="py-2">Predicted; not empirically verified at every browser</td></tr>
              <tr><td className="py-2 pr-4 text-white/60 font-mono">Theoretical max</td><td className="py-2 pr-4">32 GB+</td><td className="py-2 pr-4">~5–6 levels</td><td className="py-2">Browser-dependent; iframe-spawn cap kicks in</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/50 mt-3">Per-level cost: ~250 MB JS heap, +1 audio context, +1–2 video elements, +1 React fiber tree</p>
      </section>

      {/* Effective Tier Matrix */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.24s' }}>
        <h2 className="text-lg font-bold text-white mb-3">Effective Tier = Browser × Hardware</h2>
        <p className="text-sm text-white/70 mb-3">
          Your real tier is a function of two axes — your browser version and your hardware quality.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-white/70">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-3 font-semibold text-white/80"></th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">Chrome 138–139</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">Chrome 140–144</th>
                <th className="text-left py-2 font-semibold text-white/80">Chrome 145–149</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 text-tahoe-purple font-mono">Ultra hardware</td><td className="py-2 pr-3 text-tahoe-blue">→ Recommended</td><td className="py-2 pr-3 text-tahoe-purple">→ Ultra</td><td className="py-2 text-tahoe-purple">→ Ultra</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 text-tahoe-blue font-mono">Recommended hardware</td><td className="py-2 pr-3 text-tahoe-mint">→ Baseline</td><td className="py-2 pr-3 text-tahoe-blue">→ Recommended</td><td className="py-2 text-tahoe-purple">→ Ultra</td></tr>
              <tr><td className="py-2 pr-3 text-white/60 font-mono">Baseline hardware</td><td className="py-2 pr-3 text-white/60">→ Baseline</td><td className="py-2 pr-3 text-tahoe-mint">→ Baseline</td><td className="py-2 text-tahoe-blue">→ Recommended</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Reading Rules & Worked Examples */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-lg font-bold text-white mb-3">Reading the Rules</h2>
        <ul className="space-y-2 text-sm text-white/70 mb-4">
          <li><span className="text-emerald-400 mr-2">✅</span><strong>Hardware can boost your tier by +1.</strong> Chrome 138 + Ultra hardware → Recommended (you get smoother feature surface than the table alone suggests).</li>
          <li><span className="text-emerald-400 mr-2">✅</span><strong>Hardware can drop your tier by –1.</strong> Chrome 149 + Baseline hardware → Recommended (browser is great, hardware is the bottleneck).</li>
          <li><span className="text-red-400 mr-2">❌</span><strong>Hardware cannot boost/drop by 2 tiers.</strong> Chrome 138 + Ultra hardware ≠ Ultra. Chrome 149 + Baseline hardware ≠ Baseline. There&apos;s a floor and ceiling the other axis sets.</li>
          <li><span className="text-tahoe-mint mr-2">🪞</span><strong>Why the floor exists:</strong> V8 (Chrome&apos;s JS engine) ships meaningful performance upgrades every ~6 versions. Newer Chrome has GC improvements, better parser/compiler heuristics, and updated GPU compositing. Hardware can&apos;t compensate for missing engine work.</li>
          <li><span className="text-tahoe-mint mr-2">🪞</span><strong>Why the ceiling exists:</strong> Modern Chrome on weak hardware still fundamentally hits the iframe/audio/video decoder limits of the hardware. Software optimization isn&apos;t infinite.</li>
        </ul>

        <h3 className="text-base font-semibold text-white mb-3">Worked Examples</h3>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-xs text-white/70">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-4 font-semibold text-white/80">Setup</th>
                <th className="text-left py-2 pr-4 font-semibold text-white/80">Effective tier</th>
                <th className="text-left py-2 font-semibold text-white/80">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono">Chrome 149 · M3 MacBook Pro · 36 GB RAM</td><td className="py-2 pr-4 text-tahoe-purple font-semibold">Ultra</td><td className="py-2">Both axes maxed — recursion to 4+ levels likely</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono">Chrome 149 · 4 GB Chromebook</td><td className="py-2 pr-4 text-tahoe-blue font-semibold">Recommended</td><td className="py-2">Ultra browser, baseline hardware → middle (2 levels confirmed)</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono">Chrome 138 · Ryzen 9 + 64 GB</td><td className="py-2 pr-4 text-tahoe-blue font-semibold">Recommended</td><td className="py-2">Baseline browser, ultra hardware → middle (browser is the cap)</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono">Chrome 142 · 8 GB i5 laptop</td><td className="py-2 pr-4 text-tahoe-blue font-semibold">Recommended</td><td className="py-2">Both axes mid-tier → cleanly Recommended</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono">Chrome 138 · 4 GB old machine</td><td className="py-2 pr-4 text-tahoe-mint font-semibold">Baseline</td><td className="py-2">Both axes minimum — Baseline experience, 1 recursion level</td></tr>
              <tr><td className="py-2 pr-4 font-mono">Chrome 149 · gaming desktop</td><td className="py-2 pr-4 text-tahoe-purple font-semibold">Ultra</td><td className="py-2">Both maxed</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/50">The pattern: look at both your Chrome version and your hardware. Take the lower of the two as your starting tier, then bump up by 1 if the other axis is at Ultra.</p>
      </section>

      {/* Browser Compatibility */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.36s' }}>
        <h2 className="text-lg font-bold text-white mb-3">Browser Compatibility</h2>
        <p className="text-sm text-white/70 mb-3">Verified behavior. Test results below are empirical from device testing — not extrapolated.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-white/70">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-3 font-semibold text-white/80">Browser</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">Engine</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">Samsung TV</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">macOS Tahoe</th>
                <th className="text-left py-2 font-semibold text-white/80">Recursion</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 font-mono">Chrome 138+</td><td className="py-2 pr-3">Blink/V8</td><td className="py-2 pr-3 text-emerald-400">Excellent</td><td className="py-2 pr-3 text-emerald-400">Excellent</td><td className="py-2 text-white/50">TBD</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 font-mono">Edge 138+</td><td className="py-2 pr-3">Blink/V8</td><td className="py-2 pr-3 text-emerald-400">Excellent</td><td className="py-2 pr-3 text-emerald-400">Excellent</td><td className="py-2 text-white/50">TBD</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 font-mono">Firefox 130+</td><td className="py-2 pr-3">Gecko/SpM</td><td className="py-2 pr-3 text-emerald-400">Good</td><td className="py-2 pr-3 text-amber-400">Some jank</td><td className="py-2 text-white/50">TBD</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 font-mono">Safari 18+</td><td className="py-2 pr-3">WebKit/JSC</td><td className="py-2 pr-3 text-emerald-400">Good</td><td className="py-2 pr-3 text-emerald-400">Good</td><td className="py-2 text-white/50">TBD</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 font-mono">ChromeOS (4 GB)</td><td className="py-2 pr-3">Blink/V8</td><td className="py-2 pr-3 text-emerald-400">Works</td><td className="py-2 pr-3 text-amber-400">Slower</td><td className="py-2 text-tahoe-mint">2 levels max</td></tr>
              <tr><td className="py-2 pr-3 font-mono">Brave / Opera GX</td><td className="py-2 pr-3">Blink/V8</td><td className="py-2 pr-3 text-emerald-400">Excellent</td><td className="py-2 pr-3 text-emerald-400">Excellent</td><td className="py-2 text-white/50">TBD</td></tr>
              <tr><td className="py-2 pr-3 font-mono">Samsung Internet</td><td className="py-2 pr-3">Blink/V8</td><td className="py-2 pr-3 text-emerald-400">Works</td><td className="py-2 pr-3 text-amber-400">Cramped UX</td><td className="py-2">1 level (mobile RAM)</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/50 mt-3">Note: This matrix is incomplete. If you test the recursion ceiling on hardware/browser not listed above, please open an issue at the repo with your config + max levels reached. Contributions welcome.</p>
      </section>

      {/* Legacy OS Support via Supermium */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.42s' }}>
        <h2 className="text-lg font-bold text-white mb-3">Legacy OS Support via Supermium</h2>
        <p className="text-sm text-white/70 mb-3">
          <a href="https://win32subsystem.live/supermium/" target="_blank" rel="noopener noreferrer" className="text-tahoe-blue hover:text-tahoe-mint underline underline-offset-2">Supermium</a> is a Chromium fork by win32ss that backports current Blink engine + V8 to Windows XP/Vista/7/8/8.1. If you&apos;re on a legacy OS — or running a retro hardware test rig — this is the <em>only</em> way to run these simulators properly.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-xs text-white/70">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-4 font-semibold text-white/80">Your OS</th>
                <th className="text-left py-2 pr-4 font-semibold text-white/80">Native Chrome status</th>
                <th className="text-left py-2 font-semibold text-white/80">Use Supermium?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono">Windows 11</td><td className="py-2 pr-4 text-emerald-400">Latest (current)</td><td className="py-2 text-white/50">No — use native Chrome/Edge</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono">Windows 10</td><td className="py-2 pr-4 text-emerald-400">Latest (current)</td><td className="py-2 text-white/50">No — use native Chrome/Edge</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono">Windows 8.1</td><td className="py-2 pr-4 text-red-400">Frozen at v109 (Jan 2023)</td><td className="py-2 text-emerald-400">Yes — Supermium runs current Blink</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono">Windows 8</td><td className="py-2 pr-4 text-red-400">Frozen at v109 (Jan 2023)</td><td className="py-2 text-emerald-400">Yes</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono">Windows 7</td><td className="py-2 pr-4 text-red-400">Frozen at v109 (Jan 2023)</td><td className="py-2 text-emerald-400">Yes</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono">Windows Vista</td><td className="py-2 pr-4 text-red-400">Frozen at v49 (2016)</td><td className="py-2 text-emerald-400">Yes (only modern option)</td></tr>
              <tr><td className="py-2 pr-4 font-mono">Windows XP</td><td className="py-2 pr-4 text-red-400">Frozen at v49 (2016)</td><td className="py-2 text-emerald-400">Yes (only modern option)</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-sm font-semibold text-white mb-2">Why this matters for the test</h3>
        <p className="text-sm text-white/70 mb-3">
          Running modern webapps on legacy OSes is itself a stress test — of Supermium&apos;s backport quality, of the Win32 graphics stack, of legacy hardware that&apos;s still functional. If you have a Pentium 4 / XP machine and want to know &quot;does the modern web still work here?&quot; — this gives you a definitive answer.
        </p>
        <h3 className="text-sm font-semibold text-white mb-2">Caveats</h3>
        <ul className="space-y-1.5 text-sm text-white/70 list-disc list-inside mb-4">
          <li>Supermium audio output uses WaveOut on XP/Vista — may not handle multiple <code className="text-tahoe-orange text-xs">AudioContext</code>s as cleanly as WASAPI on Win10+</li>
          <li>HLS playback (channels 134 &amp; 135) depends on <code className="text-tahoe-orange text-xs">&lt;video&gt;</code> element MSE support, which Supermium provides but with higher CPU overhead</li>
          <li>Recursion ceiling on Supermium is RAM-bound first (often XP machines have ≤4 GB) and may cap at 1 level</li>
        </ul>

        <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
          <p className="text-sm font-semibold text-red-400 mb-1">Internet Explorer (any version): NOT supported.</p>
          <p className="text-xs text-white/60">
            IE11 lacks ES6 modules, <code className="text-tahoe-orange text-xs">backdrop-filter</code>, modern Audio API features, and CSS Grid behavior the simulators rely on. IE has not received updates since 2022 and is end-of-life on every supported Windows version. Even on Windows 7, use Supermium instead of IE.
          </p>
        </div>
      </section>

      {/* How To Run */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.48s' }}>
        <h2 className="text-lg font-bold text-white mb-3">How To Run The Test</h2>

        <h3 className="text-sm font-semibold text-tahoe-mint mb-2">Quick test (5 minutes)</h3>
        <ol className="text-sm text-white/70 space-y-1.5 list-decimal list-inside mb-4">
          <li>Open <code className="text-tahoe-blue text-xs">samsung-lcd-tv.vercel.app</code></li>
          <li>Press <kbd className="osd-button text-[10px] px-1.5 py-0.5 rounded font-mono">P</kbd> to power on the TV</li>
          <li>Navigate: <strong>Input List → HDMI 4 (PC/Mac)</strong></li>
          <li>Click the power button on the splash screen</li>
          <li>macOS 26 Tahoe loads inside the TV at 1366×768</li>
          <li>Inside macOS, open the <strong>Samsung LCD TV</strong> app</li>
          <li>Power on that TV → switch to HDMI 4 again → recursion deepens</li>
        </ol>

        <h3 className="text-sm font-semibold text-tahoe-blue mb-2">Measurement test (15 minutes)</h3>
        <p className="text-sm text-white/70 mb-2">
          Open DevTools (F12) before starting. Track these per recursion level:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-xs text-white/70">
            <thead>
              <tr className="border-b border-white/10"><th className="text-left py-2 pr-4 font-semibold text-white/80">Metric</th><th className="text-left py-2 pr-4 font-semibold text-white/80">Where to find it</th><th className="text-left py-2 font-semibold text-white/80">What to record</th></tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">JS heap size</td><td className="py-2 pr-4"><code className="text-white/60">DevTools → Memory → Take heap snapshot</code></td><td className="py-2">MB used</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">FPS during drag</td><td className="py-2 pr-4"><code className="text-white/60">DevTools → Rendering → FPS meter</code></td><td className="py-2">min FPS while dragging a window</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">Audio context count</td><td className="py-2 pr-4"><code className="text-white/60">console: (window.AudioContext.__count__ || '?')</code></td><td className="py-2">Integer</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">Tab process memory</td><td className="py-2 pr-4"><code className="text-white/60">chrome://memory-internals</code></td><td className="py-2">MB total</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">Time to interactive</td><td className="py-2 pr-4"><code className="text-white/60">DevTools → Performance</code></td><td className="py-2">Seconds from load to first interaction</td></tr>
              <tr><td className="py-2 pr-4 font-mono text-tahoe-mint">Network requests</td><td className="py-2 pr-4"><code className="text-white/60">DevTools → Network</code></td><td className="py-2">Count of requests, total bytes</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-white/70 mb-2">Record one row per recursion level. Stop when:</p>
        <ul className="text-sm text-white/70 space-y-1 list-disc list-inside mb-4">
          <li>FPS drops below 10</li>
          <li>JS heap exceeds 1.5 GB</li>
          <li>Browser becomes unresponsive for &gt;5 seconds</li>
          <li>Tab crashes</li>
        </ul>

        <h3 className="text-sm font-semibold text-tahoe-purple mb-2">Stress test (30 minutes)</h3>
        <p className="text-sm text-white/70">
          Run all of the above on every browser you have access to. Tabulate. Post results.
        </p>
      </section>

      {/* Known Limitations & Honest Caveats */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.54s' }}>
        <h2 className="text-lg font-bold text-white mb-3">Known Limitations &amp; Honest Caveats</h2>

        <h3 className="text-sm font-semibold text-emerald-400 mb-2">Things this test is good for</h3>
        <ul className="space-y-1.5 text-sm text-white/70 list-disc list-inside mb-4">
          <li>Comparing browsers on a workload that mimics real heavy webapps</li>
          <li>Stressing iframe isolation, video decode, audio contexts, GC simultaneously</li>
          <li>Generating real-world data for browser engineering teams</li>
          <li>Discovering memory leaks in browser implementations</li>
        </ul>

        <h3 className="text-sm font-semibold text-amber-400 mb-2">Things this test is <em>not</em> good for</h3>
        <ul className="space-y-1.5 text-sm text-white/70 list-disc list-inside mb-4">
          <li>Comparing GPUs (GPU usage is modest)</li>
          <li>Comparing CPUs in isolation (browser overhead dominates)</li>
          <li>Replacing Speedometer/MotionMark for synthetic benchmark scores</li>
          <li>Anything that requires repeated, deterministic runs (browser GC timing varies)</li>
        </ul>

        <h3 className="text-sm font-semibold text-white mb-2">Caveats on the data</h3>
        <ul className="space-y-1.5 text-sm text-white/70 list-disc list-inside">
          <li>Recursion depth is RAM-bound first, then browser-implementation-bound second. Same hardware, different browser → very different ceilings.</li>
          <li>Some metrics (audio context counts) are not exposed by all browsers, requiring approximation</li>
          <li>The simulators are real production webapps — they receive updates. A result from v1.0.27.5 may not match a result from v1.0.28+. Always note the version tested.</li>
          <li>Different MP4 codecs may behave differently. Hardware H.264 decoders are common; Hardware H.265/AV1 are less so.</li>
        </ul>
      </section>

      {/* What I'm Hoping People Do With This */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
        <h2 className="text-lg font-bold text-white mb-3">What I&apos;m Hoping People Do With This</h2>
        <ul className="space-y-3 text-sm text-white/70">
          <li><strong className="text-white/90">Performance engineer or browser engineer:</strong> treat this as a real-world test case your synthetic benchmarks may miss. Comparing GC behavior, paint pipeline, or iframe isolation across browser engines on this workload would be genuinely informative.</li>
          <li><strong className="text-white/90">Hardware reviewer:</strong> this could be an unusual addition to your browser-perf section. It scales linearly with RAM, which gives you a cleaner test than most browser benchmarks where everything peaks early.</li>
          <li><strong className="text-white/90">Web developer:</strong> the lesson is that single-page-apps stacked together don&apos;t fail at the SPA level — they fail at iframe boundary multiplication. Worth knowing if you ever embed third-party widgets.</li>
          <li><strong className="text-white/90">Curious:</strong> open <code className="text-tahoe-blue text-xs">samsung-lcd-tv.vercel.app</code>, press <kbd className="osd-button text-[10px] px-1.5 py-0.5 rounded font-mono">P</kbd>, switch to HDMI 4, and see your hardware&apos;s limit. That&apos;s the whole experience.</li>
        </ul>
      </section>

      {/* Reporting */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.66s' }}>
        <h2 className="text-lg font-bold text-white mb-3">Reporting Format</h2>
        <p className="text-sm text-white/70 mb-3">
          If you run this and want to contribute results, use this template:
        </p>
        <pre className="bg-black/40 rounded-xl p-4 text-xs text-white/60 font-mono overflow-x-auto whitespace-pre-wrap">
{`Device:         [e.g. ThinkPad X1 Carbon Gen 11]
OS:             [e.g. Windows 11 24H2]
CPU:            [e.g. Intel i7-1365U]
RAM:            [e.g. 16 GB]
GPU:            [e.g. Intel Iris Xe]
Browser:        [e.g. Chrome 140.0.7339.82]

Recursion ceiling reached: [N levels]

Per-level metrics:
| Level | JS heap | FPS drag | Audio ctx | Notes |
|-------|---------|----------|-----------|-------|
| 0     |         |          |           |       |
| 1     |         |          |           |       |
| 2     |         |          |           |       |
| ...   |         |          |           |       |

Failure mode: [crash / freeze / unresponsive / hit own limit]`}
        </pre>
        <p className="text-xs text-white/50 mt-2">
          Open an issue at <code className="text-tahoe-blue">github.com/AashmanShukla3223/Samsung-LCD-TV-Simulator</code> with results.
        </p>
      </section>

      {/* Links */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.72s' }}>
        <h2 className="text-lg font-bold text-white mb-3">Links</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="https://samsung-lcd-tv.vercel.app" target="_blank" rel="noopener noreferrer" className="text-tahoe-blue hover:text-tahoe-mint underline underline-offset-2">
              Samsung C5000 Simulator →
            </a>
          </li>
          <li>
            <a href="https://macos-26-tahoe.vercel.app" target="_blank" rel="noopener noreferrer" className="text-tahoe-blue hover:text-tahoe-mint underline underline-offset-2">
              macOS 26 Tahoe Simulator →
            </a>
          </li>
          <li>
            <a href="https://github.com/AashmanShukla3223/Samsung-LCD-TV-Simulator" target="_blank" rel="noopener noreferrer" className="text-tahoe-blue hover:text-tahoe-mint underline underline-offset-2">
              Samsung sim source →
            </a>
          </li>
          <li>
            <a href="https://github.com/AashmanShukla3223/macos-26-tahoe" target="_blank" rel="noopener noreferrer" className="text-tahoe-blue hover:text-tahoe-mint underline underline-offset-2">
              macOS Tahoe source →
            </a>
          </li>
          <li>
            <a href="https://aashman-homepage.vercel.app" target="_blank" rel="noopener noreferrer" className="text-tahoe-blue hover:text-tahoe-mint underline underline-offset-2">
              Homepage →
            </a>
          </li>
        </ul>
        <p className="text-xs text-white/50 mt-3">
          This document lives at: <code className="text-tahoe-blue">aashman-homepage.vercel.app/stress</code>
        </p>
      </section>

      {/* Changelog */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.78s' }}>
        <h2 className="text-lg font-bold text-white mb-3">Changelog</h2>
        <ul className="space-y-2 text-sm text-white/70 list-disc list-inside">
          <li><strong className="text-white/80">2026-06-04</strong> — Initial publication. Samsung sim at v1.0.27.5, macOS Tahoe at v26.0.0, homepage v1.0.0. Recursion confirmed working at 2 levels on 4 GB ChromeOS hardware. Chrome 138+ confirmed as baseline via Windows 10 cloud VM testing.</li>
          <li><strong className="text-white/80">2026-06-04 (revision 2)</strong> — Added Legacy OS support tier via Supermium. Adjusted browser version floors based on empirical tested baseline. Explicitly noted Internet Explorer unsupported.</li>
          <li><strong className="text-white/80">2026-06-04 (revision 3)</strong> — Added &quot;Effective Tier = Browser × Hardware&quot; matrix. Made Chrome version ranges explicit (138–139 / 140–144 / 145–149) instead of open-ended &quot;+&quot;. Verified Chrome 149 as current stable (released May 29, 2026).</li>
        </ul>
        <p className="text-xs text-white/50 mt-3 italic">Built and tested in Kanpur, India. Reproducible results encouraged.</p>
      </section>
    </div>
  );
}
