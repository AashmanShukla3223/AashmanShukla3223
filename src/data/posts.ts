export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  tags: string[];
};

export const posts: PostMeta[] = [
  {
    slug: 'shipping-v1-0-27',
    title: 'Shipping v1.0.27: 8 features in one weekend',
    date: '2026-06-03',
    excerpt:
      'How the Bronze Tier release came together — Closed Captions, AI usage stats, WII_SAVES_USB easter egg, PiP, Sleep Timer, channel memory per source, and an architectural fix for AI Picker channel disambiguation.',
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
