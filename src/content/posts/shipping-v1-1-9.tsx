export default function ShippingV1_1_9() {
  return (
    <article className="prose-aashman">
      <h1>Shipping v1.1.9: the homepage grows up</h1>
      <p className="text-white/50 text-sm">November 1, 2026 · 4 min read</p>

      <p>
        The homepage just crossed from 1.0.x to 1.1.9. That version bump is not arbitrary — it marks
        the moment the site stopped being a portfolio and started being a lab. This note is the
        release notes, written honestly, with the parts that went wrong included.
      </p>

      <h2>What shipped</h2>
      <ul>
        <li><strong>Project cards for all four projects</strong> — Samsung C5000, macOS Golden Gate, Parallax Launcher, Self Calling — on the Home tab, not just the two web simulators.</li>
        <li><strong>Notes overhaul</strong> — current-builds essay, Android experiments essay, the Android life story, and a breakdown of why the portfolio is ~$500K-ish.</li>
        <li><strong>Now page</strong> — expanded to five honest items instead of three vague ones.</li>
        <li><strong>Lab page</strong> — Android experiments section added alongside the browser stress table.</li>
        <li><strong>Roadmap</strong> — Android Experiments track, corrected version strings (Samsung v1.0.32, macOS v27.4.1).</li>
        <li><strong>About page</strong> — native-experiment chips, portfolio-value line with a link to the breakdown, issues link.</li>
        <li><strong>Versioning</strong> — homepage now at v1.1.9, with an OTA update checker that actually reports it.</li>
      </ul>

      <h2>What I got wrong along the way</h2>
      <p>
        I shipped the macOS version as v27.2 in the README for months after the live site was already
        at v27.4.1. I claimed the toolkit repo had 13 release tags when it had 17. I called
        Parallax "Android 8+" when it is Android 7+. I called the Samsung simulator v1.0.31 when it
        was v1.0.32. None of these were lies — they were stale facts that I never went back to
        check. The fix was simple and embarrassing: read my own GitHub.
      </p>

      <h2>The lesson</h2>
      <p>
        A portfolio is a mirror. If you do not look in it honestly, it shows you a version of
        yourself that stopped existing months ago. v1.1.9 is the version where I finally looked.
      </p>

      <p>
        Issues and bugs are welcome:{' '}
        <a href="https://github.com/AashmanShukla3223/AashmanShukla3223/issues">open an issue on GitHub</a>.
      </p>
    </article>
  );
}
