import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { fireConfetti } from '../utils/confetti';

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Pages' | 'Flagships' | 'Actions';
  icon: string;
  badge?: string;
  action: () => void;
  keywords?: string[];
}

export default function Spotlight() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  // Global hotkey: Cmd+K / Ctrl+K / '/' (when not in an input)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      const isInputActive = activeTag === 'input' || activeTag === 'textarea';

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === '/' && !isInputActive && !isOpen) {
        e.preventDefault();
        handleOpen();
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, handleClose, handleOpen]);

  // Autofocus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const allCommands = useMemo<CommandItem[]>(() => {
    return [
      // Navigation
      {
        id: 'nav-home',
        title: 'Home',
        subtitle: 'Digital archaeology meets silicon runtimes',
        category: 'Pages',
        icon: '🏠',
        badge: '/',
        keywords: ['index', 'main', 'root'],
        action: () => navigate('/'),
      },
      {
        id: 'nav-projects',
        title: 'Work & Projects',
        subtitle: 'Production simulators, tools, and experiments',
        category: 'Pages',
        icon: '💼',
        badge: '/projects',
        keywords: ['portfolio', 'apps', 'engineering'],
        action: () => navigate('/projects'),
      },
      {
        id: 'nav-writing',
        title: 'Notes & Writing',
        subtitle: 'Engineering logs, retrospectives, and architecture',
        category: 'Pages',
        icon: '✍️',
        badge: '/writing',
        keywords: ['essays', 'blog', 'articles', 'posts'],
        action: () => navigate('/writing'),
      },
      {
        id: 'nav-now',
        title: 'Now',
        subtitle: 'Current focus, readings, and experiments',
        category: 'Pages',
        icon: '🧭',
        badge: '/now',
        keywords: ['status', 'activity', 'current'],
        action: () => navigate('/now'),
      },
      {
        id: 'nav-stress',
        title: 'Empirical Stress Lab',
        subtitle: '4 GB ChromeOS benchmark & iframe recursion testing',
        category: 'Pages',
        icon: '🧪',
        badge: '/stress',
        keywords: ['lab', 'benchmark', 'telemetry', 'memory', 'fps'],
        action: () => navigate('/stress'),
      },
      {
        id: 'nav-roadmap',
        title: 'Ecosystem Roadmap',
        subtitle: 'Master cross-simulator engineering timeline (2026-2027)',
        category: 'Pages',
        icon: '🗺️',
        badge: '/roadmap',
        keywords: ['timeline', 'future', 'milestones', 'planning'],
        action: () => navigate('/roadmap'),
      },
      {
        id: 'nav-credits',
        title: 'About & Credits',
        subtitle: 'Bio, philosophy, design influences, and credits',
        category: 'Pages',
        icon: '👤',
        badge: '/credits',
        keywords: ['about', 'bio', 'author', 'influences'],
        action: () => navigate('/credits'),
      },
      {
        id: 'nav-updates',
        title: 'Release Updates',
        subtitle: 'Live OTA release feed and version history',
        category: 'Pages',
        icon: '📦',
        badge: '/updates',
        keywords: ['changelog', 'releases', 'versions', 'ota'],
        action: () => navigate('/updates'),
      },

      // Flagship Simulators
      {
        id: 'sim-tv',
        title: 'Samsung C5000 LCD TV Simulator',
        subtitle: '32+ channels, tri-AI RAG picker, Web Audio synthesizers',
        category: 'Flagships',
        icon: '📺',
        badge: 'External',
        keywords: ['samsung', 'tv', 'crt', 'osd', 'channel', 'dishtv'],
        action: () => window.open('https://samsung-lcd-tv.vercel.app', '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'sim-goldengate',
        title: 'macOS 27 Golden Gate',
        subtitle: 'Silicon-native Liquid Glass 2.0 with 52 apps & VFS',
        category: 'Flagships',
        icon: '🌉',
        badge: 'External',
        keywords: ['macos', 'apple', 'golden gate', 'tahoe', 'desktop'],
        action: () => window.open('https://macos-27-golden-gate.vercel.app', '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'sim-tahoe',
        title: 'macOS 26 Tahoe Genesis',
        subtitle: 'The original React 19 operating system proving ground',
        category: 'Flagships',
        icon: '🏔️',
        badge: 'External',
        keywords: ['tahoe', 'archive', 'genesis', 'legacy'],
        action: () => window.open('https://macos-26-tahoe.vercel.app', '_blank', 'noopener,noreferrer'),
      },

      // Actions
      {
        id: 'act-confetti',
        title: 'Fire Confetti Cannon',
        subtitle: 'Erupt the celebratory 60fps canvas particle blast',
        category: 'Actions',
        icon: '🎊',
        badge: 'Action',
        keywords: ['celebrate', 'particles', 'blast', 'fire', 'party'],
        action: () => fireConfetti(),
      },
      {
        id: 'act-github',
        title: 'View GitHub Repository',
        subtitle: 'Inspect source code, releases, and commit history',
        category: 'Actions',
        icon: '💻',
        badge: 'GitHub',
        keywords: ['source', 'code', 'git', 'repo'],
        action: () => window.open('https://github.com/AashmanShukla3223/AashmanShukla3223', '_blank', 'noopener,noreferrer'),
      },
    ];
  }, [navigate]);

  // Filter commands
  const filteredCommands = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allCommands;
    return allCommands.filter((cmd) => {
      const matchTitle = cmd.title.toLowerCase().includes(q);
      const matchSubtitle = cmd.subtitle?.toLowerCase().includes(q);
      const matchCategory = cmd.category.toLowerCase().includes(q);
      const matchKeywords = cmd.keywords?.some((k) => k.toLowerCase().includes(q));
      return matchTitle || matchSubtitle || matchCategory || matchKeywords;
    });
  }, [query, allCommands]);

  // Clamp selection index
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation within the palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredCommands.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selected = filteredCommands[selectedIndex];
      if (selected) {
        selected.action();
        handleClose();
      }
    }
  };

  // Scroll selected item into view
  useEffect(() => {
    if (!listRef.current) return;
    const activeEl = listRef.current.children[selectedIndex] as HTMLElement;
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  return (
    <>
      {/* Navbar Trigger Button */}
      <button
        type="button"
        onClick={handleOpen}
        aria-label="Open Spotlight search (⌘K)"
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/55 hover:text-white border border-white/10 text-[11px] font-mono transition-all group shrink-0"
      >
        <svg
          className="w-3.5 h-3.5 text-white/40 group-hover:text-tahoe-mint transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="hidden md:inline">Spotlight</span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/60">
          ⌘K
        </kbd>
      </button>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] sm:pt-[16vh] px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
              onClick={handleClose}
            />

            {/* Spotlight HUD Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -16 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl rounded-2xl glass-strong border border-white/20 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[70vh]"
              onKeyDown={handleKeyDown}
            >
              {/* Search Header */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
                <span className="text-white/40 text-base select-none">🔍</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pages, flagships, or type an action..."
                  className="flex-1 bg-transparent text-white placeholder-white/40 text-sm sm:text-base outline-none font-sans"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                    className="text-white/40 hover:text-white text-xs px-1.5 py-0.5 rounded hover:bg-white/10"
                  >
                    ✕
                  </button>
                )}
                <kbd
                  onClick={handleClose}
                  className="cursor-pointer px-2 py-0.5 rounded bg-white/10 text-[11px] font-mono text-white/50 hover:text-white select-none"
                >
                  esc
                </kbd>
              </div>

              {/* Results List */}
              <ul
                ref={listRef}
                className="overflow-y-auto p-2 flex-1 space-y-1 divide-y divide-white/5"
              >
                {filteredCommands.length === 0 ? (
                  <li className="py-12 text-center text-white/40 text-sm font-mono">
                    No results for &ldquo;{query}&rdquo;
                  </li>
                ) : (
                  filteredCommands.map((cmd, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <li
                        key={cmd.id}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        onClick={() => {
                          cmd.action();
                          handleClose();
                        }}
                        className={`group flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-white/15 text-white shadow-sm border border-white/15'
                            : 'text-white/70 hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="text-lg shrink-0 select-none">{cmd.icon}</span>
                          <div className="min-w-0">
                            <div className="text-xs sm:text-sm font-medium tracking-tight truncate flex items-center gap-2">
                              <span>{cmd.title}</span>
                              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-white/50 uppercase">
                                {cmd.category}
                              </span>
                            </div>
                            {cmd.subtitle && (
                              <p className="text-[11px] text-white/40 truncate font-mono mt-0.5">
                                {cmd.subtitle}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {cmd.badge && (
                            <span className="text-[10px] font-mono text-white/40 px-1.5 py-0.5 rounded bg-white/5">
                              {cmd.badge}
                            </span>
                          )}
                          {isSelected && (
                            <span className="text-white/60 text-xs font-mono select-none">
                              ↵
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })
                )}
              </ul>

              {/* Footer Bar */}
              <div className="px-4 py-2 bg-black/20 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/35">
                <div className="flex items-center gap-3">
                  <span>
                    <kbd className="px-1 py-0.5 rounded bg-white/10 text-[10px]">↑↓</kbd> navigate
                  </span>
                  <span>
                    <kbd className="px-1 py-0.5 rounded bg-white/10 text-[10px]">↵</kbd> open
                  </span>
                </div>
                <span>macOS Tahoe Spotlight</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
