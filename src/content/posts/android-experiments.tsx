export default function AndroidExperiments() {
  return (
    <article className="prose-aashman">
      <h1>Android experiments: Parallax Launcher and Self Calling</h1>
      <p className="text-white/50 text-sm">November 1, 2026 · 9 min read</p>

      <p>
        The web simulators get most of the attention, but two native Android projects orbit them
        now. Same ethos — software that feels real, with attention to the strange details — applied
        to launchers and phone calls. This note is the long version of what each one is and why it
        exists.
      </p>

      <h2>Why native, after all that web</h2>
      <p>
        The browser is a remarkable substrate, but it has edges. Some things — real telephony, a
        launcher that owns the home screen, sensors and shaders running at full speed — only make
        sense as native apps. The Android experiments exist where the web simulators stop: when the
        thing being simulated is the phone itself.
      </p>

      <h2>Parallax Launcher</h2>
      <p>
        An enthusiast Android launcher built with Jetpack Compose and Material 3. Not a skin on top
        of a stock launcher — a set of distinct, tactile instrument-panel home screens, each a
        different aesthetic and mental model for interacting with apps, hardware telemetry, sensors,
        and the camera.
      </p>
      <h3>The five panels (plus one)</h3>
      <ul>
        <li>
          <strong>Industrial Rig.</strong> Knurled rotary dial with rotational physics mapped to app
          index detents, a mechanical arm toggle, a gated launch button, and an amber OLED subsystem
          showing microvolt battery voltage, CPU frequency, RAM, and temperature.
        </li>
        <li>
          <strong>Celestial OrbitOS.</strong> Verlet particle physics — apps orbit as gravitational
          bodies, with accelerometer drift and mass scaling by launch frequency.
        </li>
        <li>
          <strong>Swiss Broadsheet.</strong> Editorial typography with AGSL paper-grain shader and a
          notification listener that turns notifications into AP/Reuters-style wire tickers.
        </li>
        <li>
          <strong>Cyberdeck HUD.</strong> Oscilloscope waveforms, segmented RAM visualizer, AGSL CRT
          shader with chromatic aberration and scanlines, hex reticle and CLI filtering.
        </li>
        <li>
          <strong>Cinecam Rangefinder.</strong> CameraX live feed with exposure/focus HUD, dual-stage
          volume-shutter binding, live luminance histogram, and a gyroscopic artificial horizon.
        </li>
        <li>
          <strong>Mode 7 — Motorola RAZR V3i.</strong> A pixel-exact clamshell rebuild: working flip
          hinge, internal 176×220 and external 96×80 panels with RGB subpixel stripe, etched keypad
          on one continuous brushed sheet, 21 drawn vector icons, authentic status bar, and real
          telephony via InCallService + TelecomManager. Four Quartz finishes.
        </li>
      </ul>
      <h3>Customization</h3>
      <p>
        Six global accent colors, four background schemes, four font families, and per-style
        tunables — detent angles, gravity constants, orbit node caps, aspect ratios, framing grids,
        CRT toggles. Targets minSdk 27 (Android 8.1) through targetSdk 37, with AGSL shaders and
        backward-compatible Compose renderers for older devices. CI runs on every push via GitHub
        Actions.
      </p>
      <h3>The tariff system</h3>
      <p>
        Mode 7's in-call screen shows a real tariff: per-elapsed-second minor units and per-completed-
        minute major units, both accruing and summed. Configurable under CFG → 07 RAZR V3i TARIFF.
        A small, strange, honest feature — the kind of thing a real handset did and a demo never
        bothers with.
      </p>

      <h2>Self Calling</h2>
      <p>
        An Android app that places self-calls through the Telecom framework — ConnectionService plus
        PhoneAccount — so ringing, connected, and ended states render on the <em>real native dialer
        UI</em>, not a custom one. The trick is that the OS does the rendering; the app just drives
        it.
      </p>
      <h3>Features</h3>
      <ul>
        <li><strong>Identity presets</strong> — saved name + number pairs; tap to switch active. Outgoing and simulated incoming calls both use the active preset.</li>
        <li><strong>Voice in call (per identity)</strong> — silence, live mic loopback, or a looping audio file. Starts on connect, stops on hang-up.</li>
        <li><strong>Call timing</strong> — connect delay 2/5/10s; auto-end never/30s/1min/5min.</li>
        <li><strong>Incoming calls (v2)</strong> — alarm-based waiting time (Immediately … 3 hours) that survives process death, plus a configurable ring timeout (default 45s).</li>
        <li><strong>In-call controls</strong> — Hold, Mute, Speaker, Bluetooth from the native dialer's in-call screen via connection capabilities.</li>
        <li><strong>Video calls</strong> — advertises VIDEO_STATE_BIDIRECTIONAL and supplies a standard Telecom VideoProvider (Camera2 local preview + simulated remote). Works on AOSP/Google dialers; Samsung's InCallUI won't render third-party video, which is an OEM limitation, not a bug.</li>
        <li><strong>Self-call log</strong> — local history, no external DB.</li>
      </ul>
      <h3>Android 6 through 17</h3>
      <p>
        Targets Android 6.0+ (minSdk 23) up to Android 17 (targetSdk 37), with edge-to-edge handling
        on Android 15+, runtime permission flows, and Telecom account registration that re-registers
        fresh when the account kind changes. Tested on a Pixel (API 37) and a Galaxy Nexus (API 23).
      </p>

      <h2>Shared principles</h2>
      <p>
        Both projects follow the same rules as the web simulators: decouple early, verify before
        patching, ship and roll back fearlessly, and treat AI agents as collaborators rather than
        crutches. The tooling is the same too — OpenCode, Antigravity CLI, Qoder as backup — and the
        same "catching the agent's mistakes is part of the workflow" discipline.
      </p>

      <h2>Open source</h2>
      <p>
        Beta testing is open for Parallax Launcher (see TESTING.md). Issues and bugs are welcome on
        GitHub:{' '}
        <a href="https://github.com/AashmanShukla3223/AashmanShukla3223/issues">open an issue</a>.
      </p>
    </article>
  );
}
