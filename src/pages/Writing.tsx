import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Writing() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <header className="glass-strong rounded-3xl p-8 animate-slide-up">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Writing</h1>
        <p className="mt-3 text-white/70 text-base">
          Technical essays on retro-futurism as archival practice, browser stress testing methodology, Indian broadcast media history, and building with AI-assisted development.
        </p>
      </header>

      <ul className="space-y-3">
        {sorted.map((post, i) => (
          <li
            key={post.slug}
            className="glass rounded-2xl p-5 sm:p-6 transition-all hover:shadow-glass-lg animate-slide-up"
            style={{ animationDelay: `${0.05 + i * 0.06}s` }}
          >
            <Link to={`/writing/${post.slug}`} className="group block">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-tahoe-blue transition-colors">
                  {post.title}
                </h2>
                <time className="text-xs font-mono text-white/40">{post.date}</time>
              </div>
              <p className="mt-2 text-white/60 text-sm">{post.excerpt}</p>
              <div className="mt-3 flex gap-1.5 flex-wrap">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/45 bg-white/5 border border-white/10"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
