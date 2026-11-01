export default function CurrentBuilds() {
  return (
    <article className="prose-aashman">
      <h1>Current builds: Samsung v1.0.32 and macOS Golden Gate v27.4.1</h1>
      <p className="text-white/50 text-sm">November 1, 2026 · 8 min read</p>

      <p>
        The flagship simulators have moved well past their original shipping tags. Samsung C5000 is now
        at <strong>v1.0.32</strong> — Custom Picture Mode, EPG polish, and 32 channels across News,
        Kids, and Entertainment. macOS Golden Gate is at <strong>v27.4.1</strong>, with 52 working
        apps, a Dynamic Island, real device telemetry, and an MCP server that lets AI agents drive
        the desktop. This note is a checkpoint: where everything stands, what changed, and where it
        goes next.
      </p>

      <h2>Why a checkpoint</h2>
      <p>
        Simulators rot fast if you don't write down what they actually do. Features pile up, version
        numbers drift from reality, and six months later nobody — including me — remembers whether a
        given behavior was intentional or a happy accident. So: a snapshot, taken November 1, 2026, of
        the two browser worlds I've been building, plus the homepage and the Android experiments that
        now orbit them.
      </p>

      <h2>Samsung C5000 — v1.0.32</h2>
      <p>
        The Samsung simulator is a faithful recreation of a 2010 BN59-series LCD TV, rebuilt with
        2026 architecture. Single static HTML file, roughly 4,200 lines of vanilla HTML/CSS/JS, no
        framework. It ships on Vercel and is pinned to the Mumbai region (<code>bom1</code>) for
        low-latency to Indian users.
      </p>
      <h3>What v1.0.32 adds</h3>
      <ul>
        <li>
          <strong>Custom Picture Mode.</strong> Manual slider adjustments now auto-switch the picture
          mode to Custom, and the choice persists across reloads. Small thing, but it's the kind of
          detail a real TV has and a demo usually skips.
        </li>
        <li>
          <strong>32 channels</strong> across three tiers: News 121–142, Kids 221–228, Entertainment
          321–322, with live HLS and MP4 archives.
        </li>
        <li>
          <strong>Full DishTV EPG</strong> with four daypart blocks (Late Night, Morning, Mid
          Morning, LIVE) and daypart navigation.
        </li>
        <li>
          <strong>Three-path firmware OTA.</strong> Internet manifest polling, a virtual USB
          filesystem with four profiles (normal, empty, corrupted, multi-firmware), and a passive
          DishTV broadcast scanner with a reception progress bar. All three converge on one install
          flow, with a cross-method conflict resolver when two paths offer different versions.
        </li>
        <li>
          <strong>Tri-provider AI Channel Picker.</strong> Races Groq (~500ms), Gemini (~3s), and
          OpenRouter DeepSeek R1 (~5–8s) behind a serverless <code>/api/ai-pick</code> that hides
          keys. Client-side TF-IDF RAG over a bilingual channel-metadata corpus runs before the LLM
          call. Seven modes, per-provider toggles, bring-your-own-key, graceful degradation to
          retrieval-only.
        </li>
        <li>
          <strong>AajTak <code>:55</code> Hourly Exhale Window.</strong> At the <code>:55</code> of
          every real-time hour a soft overlay fades in and a 220 Hz tone plays for 0.8s — a
          parasympathetic-friendly pause in the middle of Indian primetime news.
        </li>
        <li>
          <strong>Decoupled asset CDN.</strong> <code>APP_VERSION</code> is independent of the
          asset-bundle release tags; GitHub Releases doubles as a free binary CDN to escape Vercel's
          100 MB limit. This is what let the simulator ship real MP4 content at all.
        </li>
        <li>
          <strong>Disaster recovery tested.</strong> Survived an accidental folder override in
          production; full state restored via a single misplaced-file move in under an hour.
        </li>
      </ul>
      <p>
        The simulator's real achievement is not any single feature — it's that the whole thing is
        one static file with its own update mechanism, asset CDN, AI brain, and recovery story. It
        behaves like a product, not a demo.
      </p>

      <h2>macOS Golden Gate — v27.4.1</h2>
      <p>
        Golden Gate is a React 19 + Vite + Framer Motion recreation of Apple's macOS, running
        entirely in a browser tab. It is the more ambitious of the two: an operating system that
        happens to be a web app, not a web app pretending to be an OS.
      </p>
      <h3>By the numbers</h3>
      <ul>
        <li><strong>52 working apps</strong> — Finder, Safari, Mail, Messages, FaceTime, Photos, Maps, Music, TV, Notes, Calendar, Contacts, Terminal, Xcode, Final Cut Pro, Logic Pro, Pixelmator Pro, Motion, GarageBand, iMovie, Chess, Minecraft, and more.</li>
        <li><strong>Dynamic Island</strong>, Siri routing, and iPhone Mirroring.</li>
        <li><strong>126 app icons</strong> — 63 light + 63 dark, auto-generated via ImageMagick, with graceful fallback.</li>
        <li><strong>Dock with spring-physics magnification</strong> — six configurable sliders.</li>
        <li><strong>Wallpaper Engine</strong> with image/video support, auto day/night switching, and file upload.</li>
        <li><strong>Control Center</strong> with Wi-Fi/Bluetooth/AirDrop toggles, brightness/sound sliders, battery, and an appearance toggle that switches wallpaper and icons together.</li>
        <li><strong>Real telemetry</strong> — battery, memory, and storage readouts come from the browser's device APIs, not mocked values.</li>
        <li><strong>Virtual File System</strong> with trash, self-healing on corrupt state, persisted to localStorage.</li>
        <li><strong>Boot lifecycle</strong> — 432 Hz sine-wave chime, Setup Assistant, Login Screen, Recovery Mode.</li>
        <li><strong>OTA Software Update</strong> pipeline with semver comparison (currently v27.4.1).</li>
        <li><strong>Ships its own MCP server</strong> (<code>npm run mcp-server</code>), so AI agents can drive the desktop.</li>
        <li><strong>Zero build errors</strong> — <code>tsc --noEmit</code> passes clean at every commit.</li>
      </ul>
      <h3>TV.app integration</h3>
      <p>
        Twenty-four hosted MP4 channels plus live HLS news streams, delivered via GitHub Releases as
        a CDN. The same decoupled-asset trick the Samsung simulator uses, applied to a desktop OS.
      </p>

      <h2>The homepage</h2>
      <p>
        aashman-homepage.vercel.app is the portfolio and lab around both simulators: Home, Work,
        Notes, Now, Lab, Roadmap, About, Updates. The stress lab embeds both simulators recursively
        and records heap/FPS/feeling per recursion level — two levels stable on 4 GB ChromeOS, swap
        thrashing at three. The homepage itself is a React 19 + Vite + Tailwind SPA with an OTA
        update checker, so even the portfolio has a version number.
      </p>

      <h2>The Android experiments</h2>
      <p>
        Two native projects orbit the web simulators now. <strong>Parallax Launcher</strong> is an
        enthusiast Android launcher built with Jetpack Compose — tactile instrument-panel home
        screens plus a pixel-exact Motorola RAZR V3i clamshell rebuild with a working flip hinge
        and real telephony. <strong>Self Calling</strong> places self-calls through the Telecom
        framework so ringing, connected, and ended states render on the real native dialer UI, with
        mic loopback, video calls, and alarm-based scheduling that survives process death.
      </p>

      <h2>Tooling</h2>
      <p>
        The work is built with AI coding agents as fast implementation partners: OpenCode, Antigravity
        CLI, and Qoder as backup. I own the architecture, the taste calls, and the verification;
        the agents own the typing. Catching their mistakes is part of the workflow, not a sign it
        failed.
      </p>

      <h2>What's next</h2>
      <ul>
        <li>Samsung: 30-day EPG, channel disambiguation, Virtual PVR, dual audio, dynamic OTA asset packs.</li>
        <li>macOS Golden Gate: window snapping, Stage Manager, Migration Assistant, WebGPU glass.</li>
        <li>Android: RAZR V3i polish, Telecom edge cases, more instrument panels.</li>
        <li>Homepage: live in-browser recursion benchmark with FPS telemetry, more essays.</li>
      </ul>

      <p>
        Issues and bugs are welcome:{' '}
        <a href="https://github.com/AashmanShukla3223/AashmanShukla3223/issues">open an issue on GitHub</a>.
      </p>
    </article>
  );
}
