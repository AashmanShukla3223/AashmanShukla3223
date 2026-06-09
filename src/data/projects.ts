export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  repo: string;
  tech: string[];
  status: 'live' | 'in-progress' | 'archived';
  highlight?: boolean;
  emoji: string;
  /** Optional accent color hex used in the project card border glow */
  accent?: string;
  /** Hide the Live/View button for this project */
  hideLive?: boolean;
};

export const projects: Project[] = [
  {
    id: 'samsung-c5000',
    name: 'Samsung C5000 LCD TV Simulator',
    tagline: 'Period-authentic 2010 Samsung TV in your browser',
    description:
      'Full simulator of a Samsung BN59 / UE32C5000 LCD TV — 32 channels across 3 tiers (News 121–142, Kids 221–228, Entertainment 321–322 with live HLS + MP4 archives), AI Channel Picker (Gemini + Groq + DeepSeek R1, RAG-based, 7 modes), three-path firmware OTA (Internet + USB + Broadcast, conflict resolver), virtual USB system (7 profiles, FAT32 filesystem, localStorage persistence), full DishTV EPG with 4 daypart blocks, and full OSD dialogs (Picture settings, Sleep Timer, Closed Captions, Retail Mode). Currently at v1.0.31 (Capstone — 33 channels, full EPG).',
    url: 'https://samsung-lcd-tv.vercel.app',
    repo: 'https://github.com/AashmanShukla3223/Samsung-LCD-TV-Simulator',
    tech: ['HTML', 'JS', 'Tailwind', 'Vercel Functions', 'TF-IDF', 'Tri-AI', 'RAG', 'HLS', 'EPG', 'Virtual USB', 'OTA'],
    status: 'live',
    highlight: true,
    emoji: '📺',
    accent: '#0a84ff',
  },
  {
    id: 'macos-tahoe',
    name: 'macOS 26 Tahoe Simulator',
    tagline: 'Apple\'s next-gen desktop, reimagined in the browser',
    description:
      'React 19 + Vite simulator of Apple\'s next-gen macOS — 20+ apps (Calendar, Notes, Mail, Safari, etc.), glassmorphic UI with backdrop-filter blur (frosted glass aesthetic), file system with drag-and-drop (functional filesystem via localStorage), 52-track audio stress test that pushes browser audio context limits, and full window management (drag, resize, minimize, fullscreen). Audio load: Heavy deliberate stress (complements Samsung TV\'s media-heavy channels). Built with Gemini CLI as the coding partner.',
    url: 'https://macos-26-tahoe.vercel.app',
    repo: 'https://github.com/AashmanShukla3223/macos-26-tahoe',
    tech: ['React 19', 'Vite', 'Tailwind', 'TypeScript'],
    status: 'live',
    emoji: '🖥️',
    accent: '#5e5ce6',
  },
  {
    id: 'macos-golden-gate',
    name: 'macOS 27 Golden Gate Simulator',
    tagline: 'Apple\'s latest macOS, now in your browser',
    description:
      'Browser-based simulator of macOS 27 Golden Gate — announced at WWDC 2026 on June 8. Features Siri AI with conversational interface and dedicated Siri app, Apple Intelligence 2.0, Visual Intelligence for on-screen content awareness, Liquid Glass design with adjustable opacity, unified toolbars and edge-to-edge sidebars, and comprehensive performance improvements under the hood. Apple Silicon only. Built with the same React 19 + Vite + Tailwind stack as macOS Tahoe, continuing the series of browser-native macOS simulators.',
    url: 'https://macos-27-golden-gate.vercel.app',
    repo: 'https://github.com/AashmanShukla3223/Antigravity-and-OpenCode-CLI-Prompts-and-Skills',
    tech: ['React 19', 'Vite', 'Tailwind', 'TypeScript', 'Siri AI', 'Apple Intelligence 2.0', 'Liquid Glass'],
    status: 'live',
    emoji: '🌉',
    accent: '#ff9f0a',
  },
  {
    id: 'antigravity-prompts',
    name: 'Antigravity & OpenCode Prompts',
    tagline: 'CLI prompts and skills library for AI coding agents',
    description:
      'Curated collection of OPENCODE.md and skill files used to ship features in the Samsung simulator. Public reference for anyone using OpenCode CLI / Antigravity as their coding agent. Also serves as the asset CDN for the simulator (GitHub Releases v1.0 → v1.0.7).',
    url: 'https://github.com/AashmanShukla3223/Antigravity-and-OpenCode-CLI-Prompts-and-Skills',
    repo: 'https://github.com/AashmanShukla3223/Antigravity-and-OpenCode-CLI-Prompts-and-Skills',
    tech: ['Markdown', 'OpenCode', 'Antigravity', 'GitHub Releases', 'CLI'],
    status: 'live',
    hideLive: true,
    emoji: '🛰️',
    accent: '#63e6e2',
  },
];
