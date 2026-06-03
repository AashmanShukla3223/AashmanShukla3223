import { Outlet, NavLink, Link } from 'react-router-dom';
import OTAUpdateBanner from './OTAUpdateBanner';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/writing', label: 'Writing' },
  { to: '/now', label: 'Now' },
];

export default function Layout() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      {/* ─── Top nav: macOS Tahoe menu bar feel ─── */}
      <header className="sticky top-0 z-30 px-4 sm:px-6 pt-4">
        <nav className="max-w-5xl mx-auto glass rounded-2xl px-4 py-2.5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="traffic-lights">
              <span className="traffic-light tl-red"></span>
              <span className="traffic-light tl-yellow"></span>
              <span className="traffic-light tl-green"></span>
            </span>
            <span className="text-sm font-semibold tracking-tight text-white/90 group-hover:text-white">
              Aashman Shukla
            </span>
          </Link>
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    [
                      'px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all',
                      isActive
                        ? 'bg-white/15 text-white shadow-glass'
                        : 'text-white/60 hover:text-white hover:bg-white/8',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ─── Main content area ─── */}
      <main className="flex-1 px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
        <Outlet />
      </main>

      {/* ─── Footer ─── */}
      <footer className="px-4 sm:px-6 pb-6 mt-auto">
        <div className="max-w-5xl mx-auto glass rounded-2xl px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span className="font-mono">
            © {new Date().getFullYear()} Aashman Shukla · Kanpur, India
          </span>
          <span className="font-mono flex items-center gap-2">
            <span>built with React 19 · Vite · Tailwind · TypeScript</span>
            <span className="text-white/30">·</span>
            <span className="text-tahoe-blue">v{typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.0.0'}</span>
          </span>
        </div>
      </footer>

      <OTAUpdateBanner />
    </div>
  );
}
