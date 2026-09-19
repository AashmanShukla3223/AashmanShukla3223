import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { posts } from '../data/posts';

export default function Home() {
  const featured = projects.filter((project) => project.highlight).slice(0, 1);
  const latest = posts[0];

  return (
    <div className="max-w-5xl mx-auto">
      <section className="glass-strong rounded-3xl p-7 sm:p-12 animate-slide-up">
        <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-widest font-mono text-white/45">
          <span>personal archive / kanpur, india</span>
          <span className="text-emerald-300">Available for curious work</span>
        </div>

        <div className="mt-20 sm:mt-28 max-w-4xl">
          <p className="text-sm text-tahoe-mint font-mono mb-5">Hello, I’m Aashman.</p>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-[-0.06em] leading-[0.95] text-white">
            I build strange little worlds for the browser.
          </h1>
          <p className="mt-7 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/65">
            Mostly simulators, interfaces, and experiments that make old technology feel present again.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/projects" className="osd-button px-5 py-3 rounded-xl text-sm font-semibold">
            See what I’ve made →
          </Link>
          <a href="https://github.com/AashmanShukla3223" target="_blank" rel="noopener noreferrer" className="glass px-5 py-3 rounded-xl text-sm font-semibold text-white/80 hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </section>

      <section className="mt-20 grid gap-10 sm:grid-cols-[0.7fr_1.3fr] items-start">
        <div>
          <p className="text-[10px] uppercase tracking-widest font-mono text-white/40">The short version</p>
        </div>
        <p className="text-2xl sm:text-4xl leading-tight tracking-tight text-white/85">
          I care about the tiny details that make a digital thing feel like it has a past: a broadcast beep, a familiar menu, a window that moves with just the right weight.
        </p>
      </section>

      <section className="mt-20">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <p className="text-[10px] uppercase tracking-widest font-mono text-white/45">A few things I’ve shipped</p>
          <Link to="/projects" className="text-xs font-mono text-tahoe-blue hover:underline">All projects →</Link>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 group hover:-translate-y-1 transition-transform">
              <div className="flex items-start justify-between gap-4">
                <span className="text-3xl">{project.emoji}</span>
                <span className="text-[10px] font-mono text-emerald-300">LIVE ↗</span>
              </div>
              <h2 className="mt-16 text-2xl font-bold text-white group-hover:text-tahoe-blue transition-colors">{project.name}</h2>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{project.description}</p>
            </a>
          ))}
          <a href="https://macos-27-golden-gate.vercel.app" target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 group hover:-translate-y-1 transition-transform">
            <div className="flex items-start justify-between gap-4">
              <span className="text-3xl">🌉</span>
              <span className="text-[10px] font-mono text-emerald-300">LIVE ↗</span>
            </div>
            <h2 className="mt-16 text-2xl font-bold text-white group-hover:text-tahoe-blue transition-colors">macOS Golden Gate</h2>
            <p className="mt-2 text-sm text-white/55 leading-relaxed">A browser-sized operating system experiment: windows, apps, glass, and a little too much attention to detail.</p>
          </a>
        </div>
      </section>

      <section className="mt-20 grid gap-8 sm:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <p className="text-[10px] uppercase tracking-widest font-mono text-tahoe-orange">currently</p>
          <p className="mt-5 text-white/75 leading-relaxed">Making browser experiences, learning in public, and trying to leave every interface a little more considered than I found it.</p>
        </div>
        {latest && (
          <Link to={`/writing/${latest.slug}`} className="glass rounded-2xl p-6 group">
            <p className="text-[10px] uppercase tracking-widest font-mono text-tahoe-orange">Latest note · {latest.date}</p>
            <h2 className="mt-5 text-xl font-bold text-white group-hover:text-tahoe-blue transition-colors">{latest.title}</h2>
            <p className="mt-2 text-sm text-white/55">{latest.excerpt}</p>
            <span className="inline-block mt-5 text-xs text-tahoe-blue font-mono">Read it →</span>
          </Link>
        )}
      </section>

      <section className="mt-20 mb-10 border-t border-white/10 pt-10 flex flex-col sm:flex-row justify-between gap-5">
        <div>
          <p className="text-[10px] uppercase tracking-widest font-mono text-white/40">If this sounds like your kind of thing</p>
          <a href="mailto:aashmanshukla323@gmail.com" className="inline-block mt-3 text-xl text-white hover:text-tahoe-blue transition-colors">aashmanshukla323@gmail.com ↗</a>
        </div>
        <p className="text-sm text-white/40 max-w-xs sm:text-right">No grand studio. No content machine. Just a person making careful things.</p>
      </section>
    </div>
  );
}
