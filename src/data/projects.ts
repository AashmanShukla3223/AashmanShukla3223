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
    id: 'macos-golden-gate',
    name: 'macOS 27 Golden Gate Simulator',
    tagline: 'A production-grade OS that happens to run in a browser',
    description:
      'Full browser-based simulator of macOS 27 Golden Gate — announced at WWDC 2026. React 18 + Vite + TypeScript + Framer Motion. 40+ apps in the dock (Finder, Safari, Mail, Messages, FaceTime, Photos, Maps, Music, TV, Notes, Calendar, Contacts, Terminal, Xcode, Final Cut Pro, Logic Pro, and more), Notification Center with real-time toasts + Glass.mp3 sound, OTA Software Update pipeline with semver comparison, Virtual File System with trash system and self-healing, Dock with spring-physics magnification (6 configurable sliders), 126 app icons (63 light + 63 dark, auto-generated via ImageMagick), Wallpaper Engine with image/video support and auto day/night switching, Control Center with Wi-Fi/Bluetooth/AirDrop toggles, Hardware integration via Battery Status API, Performance.memory, Storage Estimation, Boot lifecycle with 432Hz sine wave chime, Silicon-Native Liquid Glass aesthetic (50px backdrop-blur, 190% saturation, 120fps Framer Motion physics), and zero build errors — tsc --noEmit passes clean at every commit.',
    url: 'https://macos-27-golden-gate.vercel.app',
    repo: 'https://github.com/AashmanShukla3223/Antigravity-and-OpenCode-CLI-Prompts-and-Skills',
    tech: ['React 18', 'Vite', 'TypeScript', 'Framer Motion', 'Tailwind', 'Liquid Glass', 'VFS', 'OTA', 'ImageMagick'],
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
