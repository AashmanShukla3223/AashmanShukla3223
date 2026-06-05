export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  tags: string[];
};

export const posts: PostMeta[] = [
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
