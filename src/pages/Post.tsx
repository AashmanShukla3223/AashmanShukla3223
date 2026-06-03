import { useParams, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { posts } from '../data/posts';

// Lazy-load each post by slug
const postLoaders: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  'shipping-v1-0-27': () => import('../content/posts/shipping-v1-0-27'),
  'quality-weighted-followers': () => import('../content/posts/quality-weighted-followers'),
};

export default function Post() {
  const { slug = '' } = useParams();
  const meta = posts.find((p) => p.slug === slug);
  const loader = postLoaders[slug];

  if (!meta || !loader) {
    return (
      <div className="max-w-3xl mx-auto glass-strong rounded-3xl p-10 text-center animate-slide-up">
        <h1 className="text-2xl font-bold text-white">Post not found</h1>
        <p className="mt-2 text-white/60">No post matched the slug <code>{slug}</code>.</p>
        <Link to="/writing" className="mt-6 inline-block osd-button px-5 py-2 rounded-lg text-sm font-semibold">
          ← All writing
        </Link>
      </div>
    );
  }

  const Component = lazy(loader);

  return (
    <div className="max-w-3xl mx-auto animate-slide-up">
      <Link
        to="/writing"
        className="inline-flex items-center gap-1 text-xs font-mono text-white/50 hover:text-white mb-4"
      >
        ← All writing
      </Link>
      <div className="glass-strong rounded-3xl p-8 sm:p-12">
        <Suspense fallback={<p className="text-white/50">Loading…</p>}>
          <Component />
        </Suspense>
      </div>
    </div>
  );
}
