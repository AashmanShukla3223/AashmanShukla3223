import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Writing() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return <div className="max-w-4xl mx-auto">
    <header className="max-w-2xl animate-slide-up"><p className="text-[10px] uppercase tracking-widest font-mono text-tahoe-orange">Notes from the workbench</p><h1 className="mt-4 text-5xl sm:text-7xl font-bold tracking-[-0.06em] text-white">Things I<br /><span className="text-white/35">keep noticing.</span></h1><p className="mt-6 text-lg text-white/60 leading-relaxed">Small essays about old interfaces, new tools, and the feeling between the two.</p></header>
    <div className="mt-16 border-t border-white/10">{sorted.map((post, i) => <Link key={post.slug} to={`/writing/${post.slug}`} className="group block py-7 border-b border-white/10 animate-slide-up" style={{ animationDelay: `${i * 70}ms` }}><div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2"><h2 className="text-2xl sm:text-3xl font-serif text-white group-hover:text-tahoe-mint transition-colors">{post.title}</h2><time className="text-[11px] font-mono text-white/35">{post.date}</time></div><p className="mt-3 max-w-2xl text-sm text-white/55">{post.excerpt}</p><span className="inline-block mt-4 text-[10px] uppercase tracking-widest font-mono text-tahoe-blue">Read note →</span></Link>)}</div>
  </div>;
}
