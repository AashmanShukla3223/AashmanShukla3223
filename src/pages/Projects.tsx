import { projects } from '../data/projects';

export default function Projects() {
  return <div className="max-w-5xl mx-auto">
    <header className="max-w-2xl animate-slide-up">
      <p className="text-[10px] uppercase tracking-widest font-mono text-tahoe-mint">Selected work</p>
      <h1 className="mt-4 text-5xl sm:text-7xl font-bold tracking-[-0.06em] text-white">Things I’ve<br /><span className="text-white/35">made real.</span></h1>
      <p className="mt-6 text-lg text-white/60 leading-relaxed">Interfaces, simulators, and experiments that reward a second look.</p>
    </header>
    <div className="mt-16 space-y-5">
      {projects.map((p, i) => <article key={p.id} className="glass rounded-3xl p-6 sm:p-8 group animate-slide-up" style={{ animationDelay: `${i * 70}ms`, borderColor: p.accent ? `${p.accent}35` : undefined }}>
        <div className="flex items-start justify-between gap-6">
          <div><span className="text-4xl">{p.emoji}</span><h2 className="mt-10 text-3xl sm:text-4xl font-serif text-white group-hover:text-tahoe-mint transition-colors">{p.name}</h2><p className="mt-2 text-sm text-white/45">{p.tagline}</p></div>
          <span className="text-[10px] font-mono text-emerald-300">{p.status === 'live' ? 'LIVE' : p.status.toUpperCase()}</span>
        </div>
        <p className="mt-8 max-w-2xl text-white/65 leading-relaxed">{p.description}</p>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">{p.tech.slice(0, 5).map((t) => <span key={t} className="px-2 py-1 rounded-md text-[10px] font-mono text-white/45 bg-white/5">{t}</span>)}</div>
          <div className="flex gap-2">{!p.hideLive && <a href={p.url} target="_blank" rel="noopener noreferrer" className="osd-button px-4 py-2 rounded-lg text-xs">Open live ↗</a>}<a href={p.repo} target="_blank" rel="noopener noreferrer" className="glass px-4 py-2 rounded-lg text-xs text-white/70">Source ↗</a></div>
        </div>
      </article>)}
    </div>
  </div>;
}
