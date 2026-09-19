import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { posts } from '../data/posts';

export default function Home() {
  const featured = projects.filter((project) => project.highlight).slice(0, 1);
  const latest = posts[0];

  return <div className="max-w-5xl mx-auto">
    <section className="glass-strong rounded-3xl p-7 sm:p-10 animate-slide-up">
      <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-widest font-mono text-white/45">
        <span>personal archive / kanpur, india</span><span className="text-emerald-300">available for work</span>
      </div>
      <div className="mt-12 sm:mt-20 max-w-4xl">
        <p className="text-sm text-tahoe-mint font-mono mb-5">Aashman Shukla</p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-[-0.06em] leading-[0.95] text-white">I build strange little worlds for the browser.</h1>
        <p className="mt-7 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/65">Production simulators and interfaces with enough detail to feel like they have a past.</p>
      </div>
      <div className="mt-9 flex flex-wrap gap-3"><Link to="/projects" className="osd-button px-5 py-3 rounded-xl text-sm font-semibold">Explore the work →</Link><a href="https://github.com/AashmanShukla3223" target="_blank" rel="noopener noreferrer" className="glass px-5 py-3 rounded-xl text-sm font-semibold text-white/80 hover:text-white transition-colors">GitHub</a></div>
    </section>

    <section className="mt-20">
      <div className="flex items-end justify-between border-b border-white/10 pb-4"><div><p className="text-[10px] uppercase tracking-widest font-mono text-white/45">selected work</p><h2 className="mt-3 text-3xl sm:text-5xl font-serif text-white">Built, shipped, and live.</h2></div><Link to="/projects" className="text-xs font-mono text-tahoe-blue hover:underline">all work →</Link></div>
      <p className="mt-6 max-w-2xl text-white/55 leading-relaxed">These are not concept shots. They are working systems: interfaces with state, memory, edge cases, and a point of view.</p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {featured.map((project) => <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 group hover:-translate-y-1 transition-transform"><div className="flex items-start justify-between gap-4"><span className="text-3xl">{project.emoji}</span><span className="text-[10px] font-mono text-emerald-300">live ↗</span></div><h3 className="mt-16 text-2xl font-bold text-white group-hover:text-tahoe-blue transition-colors">{project.name}</h3><p className="mt-2 text-sm text-white/55 leading-relaxed">{project.description}</p></a>)}
        <a href="https://macos-27-golden-gate.vercel.app" target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 group hover:-translate-y-1 transition-transform"><div className="flex items-start justify-between gap-4"><span className="text-3xl">🌉</span><span className="text-[10px] font-mono text-emerald-300">live ↗</span></div><h3 className="mt-16 text-2xl font-bold text-white group-hover:text-tahoe-blue transition-colors">macOS Golden Gate</h3><p className="mt-2 text-sm text-white/55 leading-relaxed">A browser-sized operating system with windows, apps, glass, and a stubborn attention to detail.</p></a>
      </div>
    </section>

    <section className="mt-20 grid gap-8 sm:grid-cols-2">
      <div className="glass rounded-2xl p-6"><p className="text-[10px] uppercase tracking-widest font-mono text-tahoe-orange">currently</p><p className="mt-5 text-white/75 leading-relaxed">Making the next version of the work: quieter, sharper, and more convincing in the details.</p></div>
      {latest && <Link to={`/writing/${latest.slug}`} className="glass rounded-2xl p-6 group"><p className="text-[10px] uppercase tracking-widest font-mono text-tahoe-orange">latest note · {latest.date}</p><h2 className="mt-5 text-xl font-bold text-white group-hover:text-tahoe-blue transition-colors">{latest.title}</h2><p className="mt-2 text-sm text-white/55">{latest.excerpt}</p><span className="inline-block mt-5 text-xs text-tahoe-blue font-mono">read it →</span></Link>}
    </section>

    <section className="mt-20 mb-10 border-t border-white/10 pt-10 flex flex-col sm:flex-row justify-between gap-5"><div><p className="text-[10px] uppercase tracking-widest font-mono text-white/40">contact</p><a href="mailto:aashmanshukla323@gmail.com" className="inline-block mt-3 text-xl text-white hover:text-tahoe-blue transition-colors">aashmanshukla323@gmail.com ↗</a></div><p className="text-sm text-white/40 max-w-xs sm:text-right">Open to thoughtful collaborations and ambitious browser work.</p></section>
  </div>;
}
