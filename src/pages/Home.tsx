import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { posts } from '../data/posts';

export default function Home() {
  const featured = projects.find((p) => p.highlight);
  const latestPost = posts[0];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* ─── Hero ─── */}
      <section className="glass-strong rounded-3xl p-8 sm:p-12 animate-slide-up">
        <div className="flex items-center gap-2 mb-6">
          <span className="osd-button text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md font-mono">
            ON AIR · 1.0.27
          </span>
          <span className="text-white/40 text-xs font-mono">Kanpur, India · UTC+5:30</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
          Hi, I'm <span className="bg-gradient-to-r from-tahoe-blue via-tahoe-indigo to-tahoe-mint bg-clip-text text-transparent">Aashman Shukla</span>.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          I'm 18, from Kanpur, and I build <strong className="text-white">period-authentic browser simulators</strong>{' '}
          — a 2010 Samsung LCD TV with real Hindi news broadcasts and a tri-provider AI channel
          picker, a macOS 26 Tahoe desktop, and a public library of AI-agent coding prompts that
          ships these projects faster.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/projects" className="osd-button px-5 py-2.5 rounded-xl font-semibold text-sm">
            See projects →
          </Link>
          <a
            href="https://github.com/AashmanShukla3223"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-5 py-2.5 rounded-xl font-semibold text-sm text-white/90 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/AashamnS49638"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-5 py-2.5 rounded-xl font-semibold text-sm text-white/90 hover:text-white transition-colors"
          >
            Twitter
          </a>
        </div>

        {/* Languages strip */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/50 font-mono">
          <span>🇮🇳 हिन्दी (Hindi)</span>
          <span>🇮🇳 বাংলা (Bengali)</span>
          <span>🇬🇧 English</span>
          <span className="text-white/30">·</span>
          <span>TypeScript · React · Tailwind · Vercel · OpenCode</span>
        </div>
      </section>

      {/* ─── Featured project ─── */}
      {featured && (
        <section
          className="glass rounded-2xl p-6 sm:p-8 transition-all hover:shadow-glass-lg animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{featured.emoji}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-tahoe-mint">
                  Featured project
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white">{featured.name}</h2>
              <p className="text-white/60 mt-1 text-sm">{featured.tagline}</p>
            </div>
            <div className="flex gap-2">
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="osd-button px-4 py-2 rounded-lg text-xs font-semibold"
              >
                Live →
              </a>
              <a
                href={featured.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-4 py-2 rounded-lg text-xs font-semibold text-white/90 hover:text-white"
              >
                Code
              </a>
            </div>
          </div>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">{featured.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {featured.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/60 bg-white/5 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ─── Latest writing ─── */}
      {latestPost && (
        <section
          className="glass rounded-2xl p-6 sm:p-8 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-tahoe-orange">
              Latest writing
            </span>
            <span className="text-white/40 text-xs font-mono">{latestPost.date}</span>
          </div>
          <Link to={`/writing/${latestPost.slug}`} className="group">
            <h3 className="text-xl font-bold text-white group-hover:text-tahoe-blue transition-colors">
              {latestPost.title}
            </h3>
            <p className="mt-2 text-white/60 text-sm">{latestPost.excerpt}</p>
            <span className="mt-3 inline-block text-xs text-tahoe-blue font-mono group-hover:underline">
              Read post →
            </span>
          </Link>
        </section>
      )}
    </div>
  );
}
