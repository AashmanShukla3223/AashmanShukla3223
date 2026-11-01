export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  tags: string[];
};

export const posts: PostMeta[] = [
  {
    slug: 'portfolio-value',
    title: 'Why the portfolio is ~$500K-ish',
    date: '2026-11-01',
    excerpt:
      'A breakdown of where the ~$500K estimate comes from — Samsung, macOS Golden Gate, homepage, Android experiments, and tooling.',
    tags: ['portfolio', 'valuation', 'meta'],
  },
  {
    slug: 'android-life-story',
    title: 'The Android projects: a life story',
    date: '2026-11-01',
    excerpt:
      'Why Parallax Launcher exists (I wanted the best RAZR V3i) and why Self Calling exists (no ads, seamless prank calls to every contact). A life story.',
    tags: ['android', 'parallax-launcher', 'self-calling', 'essay'],
  },
  {
    slug: 'android-experiments',
    title: 'Android experiments: Parallax Launcher and Self Calling',
    date: '2026-11-01',
    excerpt:
      'Two native Android projects — a tactile launcher with a RAZR V3i mode, and a Telecom self-call app that rings on the real native dialer.',
    tags: ['android', 'parallax-launcher', 'self-calling'],
  },
  {
    slug: 'current-builds',
    title: 'Current builds: Samsung v1.0.32 and macOS Golden Gate v27.4.1',
    date: '2026-11-01',
    excerpt:
      'Where the flagship simulators stand today — Samsung C5000 v1.0.32, macOS Golden Gate v27.4.1 with 52 apps, plus two new Android experiments.',
    tags: ['samsung-c5000', 'macos-golden-gate', 'release-notes'],
  },
  {
    slug: 'shipping-v1-0-31',
    title: 'Shipping v1.0.31: 30+ Features and 10+ Channels in One Week',
    date: '2026-06-03',
    excerpt:
      'How the v1.0.31 release came together — 6 New LIVE Channels, 12 New MP4s, Channel Overlay, Bug Fixes and Version Synchorization.',
    tags: ['samsung-c5000', 'release-notes', 'opencode'],
  },
  {
    slug: 'quality-weighted-followers',
    title: 'Why one real follower beats ten bot stars',
    date: '2026-05-28',
    excerpt:
      'My quality-weighted scoring framework for evaluating GitHub social metrics — distinguishing engaged followers from mass-follow bots, and why the math matters for solo builders.',
    tags: ['github', 'open-source', 'meta'],
  },
];
