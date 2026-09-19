const items = [
  ['Building', 'A better second version of the Samsung simulator: fewer surfaces, more feeling.'],
  ['Learning', 'How to make browser interfaces that feel physical without becoming nostalgic wallpaper.'],
  ['Looking for', 'A small, thoughtful collaboration where the details matter.'],
];
export default function Now() {
  return <div className="max-w-4xl mx-auto"><header className="max-w-2xl animate-slide-up"><h1 className="mt-4 text-5xl sm:text-7xl font-bold tracking-[-0.06em] text-white">What’s<br /><span className="text-white/35">happening now.</span></h1><p className="mt-6 text-lg text-white/60">A few honest notes instead of a productivity theatre dashboard.</p></header><div className="mt-16 space-y-3">{items.map(([label, text], i) => <section key={label} className="glass rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5 animate-slide-up" style={{ animationDelay: `${i * 90}ms` }}><span className="w-24 shrink-0 text-[10px] uppercase tracking-widest font-mono text-tahoe-mint">{label}</span><p className="text-xl sm:text-2xl font-serif leading-snug text-white/85">{text}</p></section>)}</div><p className="mt-10 text-xs text-white/35 font-mono">Last updated: June 2026 · Kanpur, India</p></div>;
}
