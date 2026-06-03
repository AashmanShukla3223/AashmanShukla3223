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
};

export const projects: Project[] = [
  {
    id: 'samsung-c5000',
    name: 'Samsung C5000 LCD TV Simulator',
    tagline: 'Period-authentic 2010 Samsung TV in your browser',
    description:
      'Full simulator of a Samsung BN59 / UE32C5000 LCD TV — DishTV broadcast, USB filesystem, OSD menus, tri-provider AI Picker (Groq + Gemini + OpenRouter), OTA firmware updates, multiple USB profiles. Currently at v1.0.27 (Bronze Tier). 15 channels, real Hindi news content (AajTak + NDTV), period-accurate animations.',
    url: 'https://samsung-lcd-tv.vercel.app',
    repo: 'https://github.com/AashmanShukla3223/Samsung-LCD-TV-Simulator',
    tech: ['HTML', 'JS', 'Tailwind', 'Vercel Functions', 'TF-IDF', 'Tri-AI'],
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
      'React 19 + Vite simulator of macOS 26 Tahoe — glassmorphic windows, dock, traffic-lights, Spotlight. Built with Gemini CLI as the coding partner. Has analytics installed for visit tracking.',
    url: 'https://macos-26-tahoe.vercel.app',
    repo: 'https://github.com/AashmanShukla3223/macos-26-tahoe',
    tech: ['React 19', 'Vite', 'Tailwind', 'TypeScript'],
    status: 'live',
    emoji: '🖥️',
    accent: '#5e5ce6',
  },
  {
    id: 'antigravity-prompts',
    name: 'Antigravity & OpenCode Prompts',
    tagline: 'CLI prompts and skills library for AI coding agents',
    description:
      'Curated collection of OPENCODE.md and skill files used to ship features in the Samsung simulator. Public reference for anyone using OpenCode CLI / Antigravity as their coding agent. Also serves as the asset CDN for the simulator (GitHub Releases v1.0 → v1.0.7).',
    url: 'https://github.com/AashmanShukla3223/Antigravity-and-OpenCode-CLI-Prompts-and-Skills',
    repo: 'https://github.com/AashmanShukla3223/Antigravity-and-OpenCode-CLI-Prompts-and-Skills',
    tech: ['Markdown', 'OpenCode', 'Antigravity', 'GitHub Releases'],
    status: 'live',
    emoji: '🛰️',
    accent: '#63e6e2',
  },
];
