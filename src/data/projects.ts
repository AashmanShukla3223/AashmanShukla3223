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
      'Full simulator of a Samsung BN59 / UE32C5000 LCD TV — 32 channels across 3 tiers (News 121–142, Kids 221–228, Entertainment 321–322 with live HLS + MP4 archives), AI Channel Picker (Gemini + Groq + DeepSeek R1, RAG-based, 7 modes), three-path firmware OTA (Internet + USB + Broadcast, conflict resolver), virtual USB system (7 profiles, FAT32 filesystem, localStorage persistence), full DishTV EPG with 4 daypart blocks, and full OSD dialogs (Picture settings, Sleep Timer, Closed Captions, Retail Mode). Currently at v1.0.32 (Custom Picture Mode — manual slider adjustments auto-switch to Custom and persist across reloads).',
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
      'Full browser-based simulator of macOS 27 Golden Gate — announced at WWDC 2026. React 19 + Vite + TypeScript + Framer Motion. 52 working apps in the dock (Finder, Safari, Mail, Messages, FaceTime, Photos, Maps, Music, TV, Notes, Calendar, Contacts, Terminal, Xcode, Final Cut Pro, Logic Pro, and more), Dynamic Island, Siri routing, iPhone Mirroring, Notification Center with real-time toasts + Glass.mp3 sound, OTA Software Update pipeline with semver comparison (currently v27.4.1), Virtual File System with trash system and self-healing, Dock with spring-physics magnification (6 configurable sliders), 126 app icons (63 light + 63 dark, auto-generated via ImageMagick), Wallpaper Engine with image/video support and auto day/night switching, Control Center with Wi-Fi/Bluetooth/AirDrop toggles, real hardware telemetry via Battery Status / Performance.memory / Storage Estimation APIs, Boot lifecycle with 432Hz sine wave chime, Silicon-Native Liquid Glass aesthetic (50px backdrop-blur, 190% saturation, 120fps Framer Motion physics), a ships-its-own MCP server, and zero build errors — tsc --noEmit passes clean at every commit.',
    url: 'https://macos-27-golden-gate.vercel.app',
    repo: 'https://github.com/AashmanShukla3223/Antigravity-and-OpenCode-CLI-Prompts-and-Skills',
    tech: ['React 19', 'Vite', 'TypeScript', 'Framer Motion', 'Tailwind v4', 'Liquid Glass', 'VFS', 'OTA', 'MCP', 'ImageMagick'],
    status: 'live',
    emoji: '🌉',
    accent: '#ff9f0a',
  },
  {
    id: 'antigravity-prompts',
    name: 'Antigravity & OpenCode Prompts',
    tagline: 'CLI prompts and skills library for AI coding agents',
    description:
      'Curated collection of OPENCODE.md and skill files used to ship features in the Samsung simulator and macOS Golden Gate. Public reference for anyone using OpenCode / Antigravity CLI / Qoder (backup) as their coding agent. Also hosts the macOS Golden Gate build and serves as the asset CDN for the simulators (GitHub Releases v1.0.7 → v1.1.18, 17 release tags). Ships its own MCP server.',
    url: 'https://github.com/AashmanShukla3223/Antigravity-and-OpenCode-CLI-Prompts-and-Skills',
    repo: 'https://github.com/AashmanShukla3223/Antigravity-and-OpenCode-CLI-Prompts-and-Skills',
    tech: ['Markdown', 'OpenCode', 'Antigravity', 'Qoder', 'GitHub Releases', 'MCP', 'CLI'],
    status: 'live',
    hideLive: true,
    emoji: '🛰️',
    accent: '#63e6e2',
  },
  {
    id: 'parallax-launcher',
    name: 'Parallax Launcher',
    tagline: 'Enthusiast Android launcher with tactile instrument panels',
    description:
      'Android launcher built with Jetpack Compose featuring distinct, tactile instrument-panel home screens — Industrial Rig, Celestial OrbitOS, Swiss Broadsheet, Cyberdeck HUD, Cinecam Rangefinder — plus a pixel-exact Motorola RAZR V3i clamshell rebuild (Mode 7) with working flip hinge, etched keypad, and real telephony. AGSL shaders, sensor telemetry, CameraX, and 6 accent themes. Beta testing open.',
    url: 'https://github.com/AashmanShukla3223/Parallax-Launcher',
    repo: 'https://github.com/AashmanShukla3223/Parallax-Launcher',
    tech: ['Kotlin', 'Jetpack Compose', 'Material 3', 'AGSL', 'CameraX', 'Sensors'],
    status: 'live',
    hideLive: true,
    emoji: '📲',
    accent: '#a855f7',
  },
  {
    id: 'self-calling',
    name: 'Self Calling',
    tagline: 'Self-calls that ring on the real native dialer UI',
    description:
      'Android app that places self-calls through the Telecom framework (ConnectionService + PhoneAccount) so ringing, connected, and ended states render on the real native dialer UI. Mic loopback, per-identity voice presets (silence / live mic / audio file), video calls, in-call Hold/Mute/Speaker controls, alarm-based incoming-call scheduling that survives process death, ring timeout, and a self-call log. Targets Android 6.0+ up to Android 17.',
    url: 'https://github.com/AashmanShukla3223/self-calling',
    repo: 'https://github.com/AashmanShukla3223/self-calling',
    tech: ['Kotlin', 'Java', 'Telecom', 'AudioRecord', 'Camera2', 'Android'],
    status: 'live',
    hideLive: true,
    emoji: '📞',
    accent: '#22c55e',
  },
];
