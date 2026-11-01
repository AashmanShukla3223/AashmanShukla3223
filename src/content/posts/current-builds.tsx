export default function CurrentBuilds() {
  return (
    <article className="prose-aashman">
      <h1>Current builds: Samsung v1.0.32 and macOS Golden Gate v27.4.1</h1>
      <p className="text-white/50 text-sm">November 2026 · 3 min read</p>

      <p>
        The flagship simulators have moved past their original shipping tags. Samsung C5000 is now at{' '}
        <strong>v1.0.32</strong> (Custom Picture Mode — manual slider adjustments auto-switch to
        Custom and persist across reloads), and macOS Golden Gate is at <strong>v27.4.1</strong> with
        52 working apps, Dynamic Island, Siri routing, iPhone Mirroring, real device telemetry, and an
        MCP server.
      </p>

      <h2>What changed</h2>
      <ul>
        <li><strong>Samsung</strong>: Custom Picture Mode, EPG polish, 32 channels across News/Kids/Entertainment.</li>
        <li><strong>macOS Golden Gate</strong>: 52 apps, Liquid Glass, OTA pipeline, Virtual File System, 126 icons, Wallpaper Engine, Control Center, boot lifecycle, zero build errors.</li>
        <li><strong>Homepage</strong>: refreshed project cards, roadmap, and an interactive stress lab.</li>
        <li><strong>Android</strong>: two new native experiments — Parallax Launcher (RAZR V3i mode) and Self Calling (Telecom self-calls).</li>
      </ul>

      <h2>Open source</h2>
      <p>
        Issues and bugs are welcome on GitHub:{' '}
        <a href="https://github.com/AashmanShukla3223/AashmanShukla3223/issues">open an issue</a>.
      </p>
    </article>
  );
}
