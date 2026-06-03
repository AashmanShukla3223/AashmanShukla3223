export default function QualityWeightedFollowers() {
  return (
    <article className="prose-aashman">
      <h1>Why one real follower beats ten bot stars</h1>
      <p className="text-white/50 text-sm">May 28, 2026 · 3 min read</p>

      <p>
        GitHub metrics are noisy. A repo with 1,000 stars from auto-starring bots is worth less than
        a repo with 10 stars from people who actually opened an issue. Same for followers — and yet
        we keep counting raw integers.
      </p>

      <h2>My quality-weighted scoring framework</h2>
      <ul>
        <li>1 real fork from a real person <strong>≈ 100 bot stars</strong></li>
        <li>1 real engaged follow <strong>≈ 10 raw followers</strong></li>
        <li>1 real human star <strong>≈ 5–10 bot stars</strong></li>
        <li>1 semi-automated follow (1:1-ratio mass-followers) <strong>≈ 1</strong></li>
        <li>1 bot star <strong>≈ 0 or negative</strong> (because it pollutes your signal)</li>
      </ul>

      <h2>How to detect mass-followers</h2>
      <p>
        The classic tell is a near 1:1 follower-to-following ratio with both numbers in the
        thousands. But sophisticated mass-followers normalize the ratio and add gaps. Better signals:
      </p>
      <ul>
        <li>Did they add 50+ follows in a single day? (Public timeline shows this.)</li>
        <li>Have they ever opened an issue or PR on a repo they starred?</li>
        <li>Does their bio name a real role, or just "AI engineer" / "tech enthusiast"?</li>
        <li>Do they have a personal site that exists and loads?</li>
      </ul>

      <h2>Why this matters for solo builders</h2>
      <p>
        If you're a teenager in Kanpur shipping a Samsung TV simulator, the metric that matters isn't{' '}
        <em>star count</em>, it's <strong>did anyone read the code</strong>. One issue from someone
        who noticed a real bug is worth more than a thousand drive-by stars.
      </p>
      <p>
        I track this. It changes which messages I respond to first.
      </p>
    </article>
  );
}
