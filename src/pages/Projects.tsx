import { projects } from '../data/projects';

const statusBadge: Record<string, { label: string; cls: string }> = {
  live: { label: '● LIVE', cls: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30' },
  'in-progress': { label: '● IN PROGRESS', cls: 'text-tahoe-orange bg-tahoe-orange/10 border-tahoe-orange/30' },
  archived: { label: '○ ARCHIVED', cls: 'text-white/40 bg-white/5 border-white/15' },
};

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <header className="glass-strong rounded-3xl p-8 animate-slide-up">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Projects</h1>
        <p className="mt-3 text-white/70 text-base max-w-2xl">
          Things I've built, shipped, and kept alive. Each one is in production — clickable URLs,
          not screenshots.
        </p>
      </header>

      <div className="grid gap-5">
        {projects.map((p, i) => {
          const badge = statusBadge[p.status];
          return (
            <article
              key={p.id}
              className="glass rounded-2xl p-6 sm:p-7 transition-all hover:shadow-glass-lg hover:-translate-y-0.5 animate-slide-up"
              style={{
                animationDelay: `${0.05 + i * 0.06}s`,
                borderColor: p.accent ? `${p.accent}33` : undefined,
              }}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-2xl">{p.emoji}</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">{p.name}</h2>
                  </div>
                  <p className="text-sm text-white/55 ml-10">{p.tagline}</p>
                </div>
                <span
                  className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded border ${badge.cls}`}
                >
                  {badge.label}
                </span>
              </div>

              <p className="mt-4 text-white/70 text-sm leading-relaxed">{p.description}</p>

              <div className="mt-5 flex flex-wrap items-center gap-3 justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/55 bg-white/5 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="osd-button px-4 py-1.5 rounded-lg text-xs font-semibold"
                  >
                    {p.status === 'live' ? 'Live →' : 'View →'}
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass px-4 py-1.5 rounded-lg text-xs font-semibold text-white/90 hover:text-white"
                  >
                    Code
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
