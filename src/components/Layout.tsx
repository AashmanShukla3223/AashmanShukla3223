import { Outlet, NavLink, Link } from 'react-router-dom';
import OTAUpdateBanner from './OTAUpdateBanner';
import PageTransition from './PageTransition';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Work' },
  { to: '/writing', label: 'Notes' },
  { to: '/now', label: 'Now' },
  { to: '/stress', label: 'Lab' },
  { to: '/credits', label: 'About' },
];

export default function Layout() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 px-4 sm:px-6 pt-4">
        <nav className="max-w-5xl mx-auto glass rounded-2xl px-4 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <span className="traffic-lights"><span className="traffic-light tl-red" /><span className="traffic-light tl-yellow" /><span className="traffic-light tl-green" /></span>
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-tahoe-mint transition-colors">Aashman</span>
          </Link>
          <ul className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto">
            {navItems.map((item) => <li key={item.to}><NavLink to={item.to} end={item.end} className={({ isActive }) => `px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono transition-all whitespace-nowrap ${isActive ? 'bg-white/15 text-white' : 'text-white/45 hover:text-white'}`}>{item.label}</NavLink>)}
          </ul>
        </nav>
      </header>
      <main className="flex-1 px-4 sm:px-6 py-8 sm:py-12"><PageTransition><Outlet /></PageTransition></main>
      <footer className="px-4 sm:px-6 pb-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-[10px] text-white/35 font-mono border-t border-white/10 pt-4">
          <span>© {new Date().getFullYear()} Aashman Shukla · Kanpur</span>
          <span>Made with React 19 · Vite · too much curiosity</span>
        </div>
      </footer>
      <OTAUpdateBanner />
    </div>
  );
}
