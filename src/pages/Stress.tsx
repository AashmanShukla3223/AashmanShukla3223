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
      </section>

      {/* System Requirements */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.12s' }}>
        <h2 className="text-lg font-bold text-white mb-4">System Requirements</h2>

        <h3 className="text-base font-semibold text-white mb-3">Samsung C5000 LCD TV Simulator</h3>
        <p className="text-sm text-white/70 mb-3">
          Production-grade web app: vanilla HTML/JS, ~300 KB single file, 15 channels, 7 USB profiles,
          tri-provider AI Picker, three-path firmware OTA.
        </p>
        <p className="text-sm text-white/70 mb-3"><span className="font-semibold text-white/80">Browser baseline:</span> Chrome 138+ (or equivalent Blink-based engine).</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs text-white/70">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-3 font-semibold text-white/80">Tier</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">OS</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">Browser</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">CPU</th>
                <th className="text-left py-2 pr-3 font-semibold text-white/80">RAM</th>
                <th className="text-left py-2 font-semibold text-white/80">Display</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 text-tahoe-mint font-mono">Minimum</td><td className="py-2 pr-3">Windows 10 / macOS 12 / Ubuntu 22.04 / ChromeOS / Android 12</td><td className="py-2 pr-3">Chrome 138+</td><td className="py-2 pr-3">Dual-core 2.0 GHz</td><td className="py-2 pr-3">2 GB</td><td className="py-2">1280×720</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 text-tahoe-blue font-mono">Recommended</td><td className="py-2 pr-3">Windows 11 / macOS 13 / Ubuntu 24.04 / ChromeOS / Android 14</td><td className="py-2 pr-3">Chrome 140–144</td><td className="py-2 pr-3">Quad-core 2.5 GHz</td><td className="py-2 pr-3">4 GB</td><td className="py-2">1366×768</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 text-tahoe-purple font-mono">Ultra</td><td className="py-2 pr-3">Windows 11 / macOS 14+ / Ubuntu 24.04</td><td className="py-2 pr-3">Chrome 145–149</td><td className="py-2 pr-3">6-core 3.0 GHz</td><td className="py-2 pr-3">8 GB</td><td className="py-2">1920×1080</td></tr>
              <tr><td className="py-2 pr-3 text-white/60 font-mono">Legacy</td><td className="py-2 pr-3">Windows XP–8.1 (via Supermium)</td><td className="py-2 pr-3">Supermium</td><td className="py-2 pr-3">Dual-core 2.0 GHz</td><td className="py-2 pr-3">2 GB</td><td className="py-2">1280×720</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/50 mb-4">Codecs required: H.264, AAC, HLS. Storage: ~5 MB cache. Permissions: Audio output.</p>

        <h3 className="text-base font-semibold text-white mb-3">macOS 26 Tahoe Simulator</h3>
        <p className="text-sm text-white/70 mb-3">
          React 19 + Vite + Tailwind. ~820 KB JS bundle. Glassmorphic window management, dock, traffic
          lights, file system.
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
                <th className="text-left py-2 font-semibold text-white/80">GPU</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 text-tahoe-mint font-mono">Minimum</td><td className="py-2 pr-3">Windows 10 / macOS 12 / Ubuntu 22.04 / ChromeOS</td><td className="py-2 pr-3">Chrome 138+</td><td className="py-2 pr-3">Dual-core 2.4 GHz</td><td className="py-2 pr-3">4 GB</td><td className="py-2">Any GPU w/ compositing</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 text-tahoe-blue font-mono">Recommended</td><td className="py-2 pr-3">Windows 11 / macOS 13 / Ubuntu 24.04</td><td className="py-2 pr-3">Chrome 140–144</td><td className="py-2 pr-3">Quad-core 3.0 GHz</td><td className="py-2 pr-3">8 GB</td><td className="py-2">Integrated ≤ 5 yrs old</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-3 text-tahoe-purple font-mono">Ultra</td><td className="py-2 pr-3">Windows 11 / macOS 14+</td><td className="py-2 pr-3">Chrome 145–149</td><td className="py-2 pr-3">8-core 3.5 GHz</td><td className="py-2 pr-3">16 GB</td><td className="py-2">Dedicated GPU or Apple Silicon</td></tr>
              <tr><td className="py-2 pr-3 text-white/60 font-mono">Legacy</td><td className="py-2 pr-3">Windows XP–8.1 (via Supermium)</td><td className="py-2 pr-3">Supermium</td><td className="py-2 pr-3">Dual-core 2.4 GHz</td><td className="py-2 pr-3">4 GB</td><td className="py-2">Any GPU w/ compositing</td></tr>
            </tbody>
          </table>
        </div>
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

      {/* Browser Compatibility */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-lg font-bold text-white mb-3">Browser Compatibility</h2>
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
            </tbody>
          </table>
        </div>
      </section>

      {/* How To Run */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.36s' }}>
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
              <tr className="border-b border-white/10"><th className="text-left py-2 pr-4 font-semibold text-white/80">Metric</th><th className="text-left py-2 font-semibold text-white/80">Where to find it</th></tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">JS heap size</td><td className="py-2"><code className="text-white/60">DevTools → Memory → Take heap snapshot</code></td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">FPS during drag</td><td className="py-2"><code className="text-white/60">DevTools → Rendering → FPS meter</code></td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">Audio context count</td><td className="py-2"><code className="text-white/60">console: (window.AudioContext.__count__ || '?')</code></td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-mono text-tahoe-mint">Tab process memory</td><td className="py-2"><code className="text-white/60">chrome://memory-internals</code></td></tr>
              <tr><td className="py-2 pr-4 font-mono text-tahoe-mint">Time to interactive</td><td className="py-2"><code className="text-white/60">DevTools → Performance</code></td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-sm font-semibold text-tahoe-purple mb-2">Stress test (30 minutes)</h3>
        <p className="text-sm text-white/70">
          Run all of the above on every browser you have access to. Tabulate. Post results.
        </p>
      </section>

      {/* Reporting */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.42s' }}>
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

Failure mode: [crash / freeze / unresponsive / hit own limit]`}
        </pre>
        <p className="text-xs text-white/50 mt-2">
          Open an issue at <code className="text-tahoe-blue">github.com/AashmanShukla3223/Samsung-LCD-TV-Simulator</code> with results.
        </p>
      </section>

      {/* Links */}
      <section className="glass rounded-2xl p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '0.48s' }}>
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
        </ul>
      </section>
    </div>
  );
}
