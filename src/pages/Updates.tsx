import { useOTAUpdate } from '../hooks/useOTAUpdate';

export default function Updates() {
  const { current, latest, loading, error, buildTime, check } = useOTAUpdate();
  const upToDate = latest !== null && latest === current;

  return <div className="max-w-4xl mx-auto">
    <header className="max-w-2xl animate-slide-up">
      <p className="text-[10px] uppercase tracking-widest font-mono text-tahoe-mint">system utility</p>
      <h1 className="mt-4 text-5xl sm:text-7xl font-bold tracking-[-0.06em] text-white">Check for<br /><span className="text-white/35">updates.</span></h1>
      <p className="mt-6 text-lg text-white/60 leading-relaxed">See whether this archive is running the latest version.</p>
    </header>
    <section className="mt-12 glass-strong rounded-3xl p-6 sm:p-8 animate-slide-up">
      <div className="flex items-start justify-between gap-5">
        <div><p className="text-[10px] uppercase tracking-widest font-mono text-white/40">installed version</p><p className="mt-3 text-4xl font-bold text-white">v{current}</p></div>
        <span className={`rounded-full px-3 py-1.5 text-[10px] font-mono ${upToDate ? 'bg-emerald-400/15 text-emerald-300' : 'bg-white/10 text-white/55'}`}>{loading ? 'checking…' : upToDate ? 'up to date' : latest ? `v${latest} available` : 'not checked'}</span>
      </div>
      {buildTime && <p className="mt-6 text-xs text-white/40 font-mono">Last checked · {new Date(buildTime).toLocaleString()}</p>}
      {error && <p className="mt-5 text-sm text-red-300">Couldn’t check right now. {error}</p>}
      <button onClick={check} disabled={loading} className="osd-button mt-7 px-4 py-2.5 rounded-xl text-sm font-semibold disabled:opacity-50">{loading ? 'Checking…' : 'Check for updates'}</button>
    </section>
  </div>;
}
