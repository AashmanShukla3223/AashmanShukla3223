const tracks = [
  { icon: '📺', name: 'Samsung C5000 TV', current: 'v1.0.33 · active now', next: '30-day EPG & channel disambiguation', later: 'Virtual PVR, dual audio, dynamic OTA asset packs', accent: 'text-tahoe-blue' },
  { icon: '🌉', name: 'macOS Golden Gate', current: 'v27.5 · active next', next: 'Window snapping, Stage Manager, micro-Island controls', later: 'Migration Assistant, WebGPU glass, P2P Continuity', accent: 'text-tahoe-orange' },
  { icon: '🏠', name: 'Homepage & Stress Lab', current: 'v1.1.0 · standing here', next: 'Live in-browser recursion benchmark with FPS telemetry', later: 'Archival essays, community benchmark dashboard', accent: 'text-tahoe-mint' },
];

export default function Roadmap() {
  return <div className="max-w-4xl mx-auto">
    <header className="max-w-2xl animate-slide-up">
      <p className="text-[10px] uppercase tracking-widest font-mono text-tahoe-mint">where I am now</p>
      <h1 className="mt-4 text-5xl sm:text-7xl font-bold tracking-[-0.06em] text-white">The road<br /><span className="text-white/35">from here.</span></h1>
      <p className="mt-6 text-lg text-white/60 leading-relaxed">A living map of the simulators, tools, and experiments moving through the ecosystem.</p>
    </header>

    <section className="mt-12 glass-strong rounded-3xl p-6 sm:p-8 border border-tahoe-mint/25 animate-slide-up">
      <div className="flex items-center justify-between gap-4"><div><p className="text-[10px] uppercase tracking-widest font-mono text-tahoe-mint">current position</p><h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">Building the next layer.</h2></div><span className="rounded-full bg-emerald-400/15 px-3 py-1.5 text-[10px] font-mono text-emerald-300">Q3–Q4 2026</span></div>
      <p className="mt-5 max-w-2xl text-white/65 leading-relaxed">The flagship simulators are live. Right now the work is moving from polished surfaces toward measurable, recursive browser experiments and deeper system behavior.</p>
    </section>

    <section className="mt-8 grid gap-4">{tracks.map((track, index) => <article key={track.name} className="glass rounded-2xl p-6 animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}><div className="flex items-start gap-4"><span className="text-3xl">{track.icon}</span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center justify-between gap-3"><h2 className="text-xl font-bold text-white">{track.name}</h2><span className={`text-[10px] uppercase tracking-widest font-mono ${track.accent}`}>{track.current}</span></div><div className="mt-5 grid gap-4 sm:grid-cols-2"><div><p className="text-[10px] uppercase tracking-widest font-mono text-white/35">next milestone</p><p className="mt-2 text-sm leading-relaxed text-white/75">{track.next}</p></div><div><p className="text-[10px] uppercase tracking-widest font-mono text-white/35">on the horizon</p><p className="mt-2 text-sm leading-relaxed text-white/45">{track.later}</p></div></div></div></div></article>)}</section>

    <section className="mt-8 mb-8 border-t border-white/10 pt-7"><p className="text-[10px] uppercase tracking-widest font-mono text-white/35">guiding principle</p><p className="mt-4 max-w-2xl text-xl font-serif leading-relaxed text-white/80">Preserve the strange details. Push the browser until it tells you something back.</p></section>
  </div>;
}
