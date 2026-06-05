export default function ShippingV1_0_27() {
  return (
    <article className="prose-aashman">
      <h1>Shipping v1.0.31: Shipping 30+ New Features and 10+ New Channels in One Week</h1>
      <p className="text-white/50 text-sm">June 5, 2026 · 4 min read</p>

      <p>
        v1.0.31 of the <a href="https://samsung-lcd-tv.vercel.app">Samsung C5000 Simulator</a> shipped
        last night with 30+ New features combined all the way to v1.0.25 and 10+ New Channels in One Week. It's also the first release
        where I made an architectural decision worth writing about: how to fix the AI Picker's
        position-bias bug without changing the underlying race-mode pipeline.
      </p>

      <h2>The bug</h2>
      <p>
        Channels 126, 128, and 132 were all literally named <code>"AajTak — Halla Bol (6 PM)"</code>.
        When a user asked the AI Picker "Show me Halla Bol," all 3 passed TF-IDF retrieval
        indistinguishably, and the LLM reliably picked the first one (126) due to <em>position
        bias</em> on identical-looking inputs.
      </p>
      <p>
        Same problem for channels 123 and 130 (both "Special Report"). Effectively, the AI Picker
        had 11 distinct channels out of 13 — not because of corpus quality, but because of label
        collisions.
      </p>

      <h2>The fix (3 layers)</h2>
      <ol>
        <li>
          <strong>Rename collision channels</strong> with edition identifiers — Halla Bol [Evening
          Debate Edition], [Evening Edition], [Late Edition] 2019. Special Report (Early) and
          (Late).
        </li>
        <li>
          <strong>Restructure the AI corpus</strong> with hierarchical metadata: <code>category</code>,
          {' '}<code>network</code>, <code>show</code>, <code>edition</code>, plus an explicit{' '}
          <code>disambiguator</code> field on collision channels.
        </li>
        <li>
          <strong>Rewrite the LLM prompt</strong> to send candidates as a 3-level tree (Category →
          Network → Show), with explicit instructions not to default to the lowest-numbered channel.
        </li>
      </ol>

      <h2>Why this matters</h2>
      <p>
        When you're shipping LLM-backed features, "the model just picks the wrong one" is rarely a
        prompt-engineering problem. It's usually a <em>data shape</em> problem. Position bias is real,
        and it shows up the moment your candidate list has near-duplicates.
      </p>
      <p>
        The fix didn't require changing the tri-provider race logic in <code>api/ai-pick.js</code> at
        all. Everything lives in the client-side corpus. Server endpoint untouched.
      </p>

      <h2>The other features are:</h2>
      <ul>
        <li>Added 6 New LIVE Channels</li>
        <li>Full Overhauled EPG Guide with Info added</li>
        <li>Added Kids and Entertainment Category</li>
        <li>Moved watermark DishTV to the right</li>
        <li>Moved AI Picker Shortcut to Alt+I)</li>
        <li>4 Day Block consisting of time at the top</li>
        <li>Added 24 hour Real Time and Channel Overlay</li>
      </ul>

      <hr />
      <p className="text-white/50 text-sm">
        Source: <a href="https://github.com/AashmanShukla3223/Samsung-LCD-TV-Simulator">github.com/AashmanShukla3223/Samsung-LCD-TV-Simulator</a>
      </p>
    </article>
  );
}
