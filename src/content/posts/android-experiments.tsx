export default function AndroidExperiments() {
  return (
    <article className="prose-aashman">
      <h1>Android experiments: Parallax Launcher and Self Calling</h1>
      <p className="text-white/50 text-sm">November 2026 · 3 min read</p>

      <p>
        Alongside the web simulators, two native Android projects. Same ethos — software that feels
        real, with attention to the strange details.
      </p>

      <h2>Parallax Launcher</h2>
      <p>
        An enthusiast Android launcher built with Jetpack Compose, with distinct tactile
        instrument-panel home screens: Industrial Rig, Celestial OrbitOS, Swiss Broadsheet,
        Cyberdeck HUD, Cinecam Rangefinder, and a pixel-exact Motorola RAZR V3i clamshell rebuild
        (Mode 7) with a working flip hinge, etched keypad, and real telephony. AGSL shaders, sensor
        telemetry, CameraX, six accent themes. Beta testing open.
      </p>

      <h2>Self Calling</h2>
      <p>
        An Android app that places self-calls through the Telecom framework so ringing, connected,
        and ended states render on the real native dialer UI. Mic loopback, per-identity voice
        presets, video calls, in-call Hold/Mute/Speaker controls, alarm-based incoming-call
        scheduling that survives process death, and a self-call log. Targets Android 6.0+ up to
        Android 17.
      </p>

      <p>
        Issues and bugs welcome on GitHub:{' '}
        <a href="https://github.com/AashmanShukla3223/AashmanShukla3223/issues">open an issue</a>.
      </p>
    </article>
  );
}
