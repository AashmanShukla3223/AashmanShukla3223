# 🏠 Aashman Shukla — Digital Archaeologist

**12 years old. Kanpur, India. Builder of period-authentic simulators.**

Preserving systems from 2010–2011 (the boundary between broadcast and streaming eras) using 2026 technology. Retro-futurism as archival methodology.

---

## 🎯 Three Websites, One Vision

### 1. **Samsung C5000 LCD TV Simulator**
**Live:** https://samsung-lcd-tv.vercel.app  
**Repo:** https://github.com/AashmanShukla3223/Samsung-LCD-TV-Simulator

The exact 2010 hardware that defined an era. Full-featured DishTV DTH emulation with:
- **32 channels** (News 121–142, Kids 221–228, Entertainment 321–322 with live HLS + MP4 archives)
- **AI Channel Picker** (Gemini + Groq + DeepSeek R1, RAG-based, 7 modes)
- **Three-path firmware OTA** (Internet + USB + Broadcast, conflict resolver)
- **Virtual USB system** (7 profiles, FAT32 filesystem, localStorage persistence)
- **DishTV EPG/Guide** (full Electronic Programme Guide with 4 daypart blocks: Late Night, Morning, Mid Morning, LIVE)
- **Full OSD dialogs** (Picture settings, Sleep Timer, Closed Captions, Retail Mode, etc.)

**Current version:** v1.0.31 (22 News + 8 Kids + 2 Entertainment LIVE channels, full EPG with daypart navigation)  
**Stress tested:** 2-level recursion confirmed on 4 GB ChromeOS (see STRESS.md)

---

### 2. **macOS 27 Golden Gate Simulator**
**Live:** https://macos-27-golden-gate.vercel.app  
**Repo:** https://github.com/AashmanShukla3223/Antigravity-and-OpenCode-CLI-Prompts-and-Skills

A production-grade operating system simulation that happens to run in a browser. React 18 + Vite + TypeScript + Framer Motion:

- **40+ apps** in the dock (Finder, Safari, Mail, Messages, FaceTime, Photos, Maps, Music, TV, Notes, Calendar, Contacts, Terminal, Xcode, Final Cut Pro, Logic Pro, Pixelmator Pro, Motion, GarageBand, iMovie, Chess, Minecraft, Books, Wallet, Calculator, Clock, Weather, Reminders, Stickies, Activity Monitor, Time Machine, Disk Utility, Phone, Photo Booth, Keynote, Numbers, Pages, GitHub, VMware Fusion Pro, Samsung LCD TV Simulator, VS Code, Freeform, App Store, Games, iPhone Mirroring, Siri, System Settings, About Me, Installer, and more)
- **Notification Center** with real-time toasts + Glass.mp3 sound (Mail 8s, Messages 12s, FaceTime 5s, PhotoBooth 2s cascade on desktop load)
- **OTA Software Update** pipeline — fetches version.json, semver-compares against App_Version, shows a download-progress banner with close (X) button, redirects to Vercel deploy on install
- **Virtual File System** (VFS) — nested nodes with parent IDs, trash system (move to trash, empty trash purges recursively), self-healing on corrupt state, persisted to localStorage under `golden_gate_v27_fs`
- **Dock with spring-physics magnification** — 6 configurable sliders (size, corner radius, magnifier toggle, scaler %, smoothness %, depth) with real macOS-style neighbor scaling via Framer Motion springs
- **126 app icons** (63 light + 63 dark, auto-generated via ImageMagick, graceful darkIconFailed fallback to light variant)
- **Wallpaper Engine** — image/video support, 3 modes (off/static/dynamic), auto day/night switching, and a file upload button (.png/.jpg/.jpeg/.webp/.mp4/.mov/.webm) processed via FileReader + URL.createObjectURL
- **Control Center** — Wi-Fi, Bluetooth, AirDrop toggles with icons, brightness slider, sound slider, mic status, battery percentage with charging indicator, appearance toggle that switches wallpaper + icons simultaneously
- **Hardware integration** — Battery Status API (level + charging), Performance.memory (heap size), Storage Estimation API, Low Power Mode
- **Boot lifecycle** — BootSequence with 432Hz sine wave chime, SetupAssistant with onboarding steps, LoginScreen with user selection + password, Recovery Mode triggered by resetSystem() or corrupt state
- **Silicon-Native Liquid Glass aesthetic** — glassmorphism + 50px backdrop-blur + 190% saturation + 120fps Framer Motion physics
- **Zero build errors** — `tsc --noEmit` passes clean at every commit
- **Window management** — z-index stacking via activeApp, minimize/maximize/close, persistent state

**Current version:** v27.2 (final shipping state)  
**Codebase:** 18,400+ lines of TypeScript, 127 components, 3 state machines, 210+ assets

---

### 3. **aashman-homepage.vercel.app**
**Live:** https://aashman-homepage.vercel.app

Your production portfolio. Four main sections:

#### **Home**
Bio, current status, quick links to projects.

#### **Projects**
- Samsung C5000 Simulator (live URLs + feature breakdown)
- macOS 27 Golden Gate (live iframe + technical specs)
- Antigravity + OpenCode CLI (coming soon)
- Links to GitHub repos + Vercel deploys

#### **Writing**
Technical essays on:
- Retro-futurism as archival practice
- Browser stress testing methodology
- Indian broadcast media history (AajTak, DishTV evolution)
- Building with AI-assisted development

#### **Now**
Living status page (nownownow.com style):
- Current projects (v1.0.31 shipped: 33 channels across News/Kids/Entertainment)
- Learning (browser internals, broadcast systems, archival methodology)
- Stressing (2-level recursion limits, swap thrashing at level 3)

---

## 🎨 Aesthetic: Retro + Futuristic

### Retro Layer (2010–2011)
- **Samsung C5000 bezel** (physical TV chassis rendered in CSS)
- **DishTV OSD** (2001–2016 broadcast UI language)
- **CRT scanlines** (visual artifact from analog era)
- **macOS Golden Gate glass** (silicon-native liquid glass, post-Aqua)
- **AajTak archives** (2001–2020 Indian news broadcasts)

### Futuristic Layer (2026)
- **React 18 + TypeScript** (modern framework, strict typing, zero build errors)
- **AI Picker** (Gemini + Groq + DeepSeek R1 consensus inference)
- **Glassmorphism** (50px backdrop-blur, 190% saturation, Framer Motion springs)
- **Vercel Edge** (serverless, globally distributed)
- **HLS streaming** (HTTP Live Streaming, modern broadcast protocol)
- **Stress testing methodology** (novel browser benchmarking approach)

**They coexist simultaneously.** Not nostalgia. **Archaeology with code.**

---

## 📊 Browser & Hardware Stress Testing

### The Methodology
Two simulators embedded recursively create measurable load that scales linearly per nesting level. Unlike synthetic benchmarks (Speedometer, MotionMark, JetStream), this stresses what real webapps hit:

| Subsystem | Why It Matters |
|-----------|----------------|
| **Iframe process isolation** | Site isolation forces separate processes per origin; recursion multiplies that |
| **JS heap fragmentation** | Two runtimes (vanilla JS + React 18) coexisting, repeated per level |
| **CSS layout & paint** | Tailwind rebuilt per iframe, glassmorphism `backdrop-filter` per layer (GPU-heavy) |
| **Audio context limits** | Chrome ~50 max, Firefox ~10, Safari ~6. Each level adds 1–2 contexts. Golden Gate plays Glass.mp3 on every notification. |
| **Video decoder pipelines** | Each level can play MP4 + HLS via separate `HTMLVideoElement` decoders. Golden Gate wallpaper engine adds MP4 + H.264 decode stress. |

### Empirically Confirmed Results
**Hardware:** 4 GB ChromeOS with Crostini (2 GB available to browser)  
**Browser:** Chrome 138+  
**Recursion ceiling:** **2 levels stable, 3 levels system-throttled**

| Level | JS Heap | FPS Drag | System Response | Failure Mode |
|-------|---------|----------|-----------------|--------------|
| 0     | 150 MB  | 60 FPS   | Instant         | Baseline |
| 1     | 280 MB  | 45 FPS   | Instant         | Smooth |
| 2     | 420 MB  | 20 FPS   | 1–2 sec delay   | Usable |
| 3     | ~580 MB | 2–5 FPS  | 5+ sec lag      | **Swap thrashing** |

**Full methodology in:** https://aashman-homepage.vercel.app/stress (STRESS.md)

---

## ⚡ Development Speed: 1 Week (2026) vs 6 Months (2011)

### What You Built in One Week
```
June 1–5, 2026:
├── Samsung C5000 (v1.0.31, production-ready)
├── macOS 27 Golden Gate (v27.2, final shipping state)
├── aashman-homepage (portfolio + documentation)
├── STRESS.md (methodology + empirical data)
├── GitHub repos with releases
└── 3 Vercel deployments live
```

### Equivalent 2011 Timeline
- 1 frontend engineer: 3 months
- 1 backend engineer: 2 months
- 1 designer: 1.5 months
- Testing/DevOps: 1 month
- **Total: 6 months, ~$80–120K labor**

### Speed Multiplier: **24x faster**

**Why?**
- OpenCode + Claude handled boilerplate instantly
- No design debates (aesthetic decided upfront)
- No merge conflicts (single developer workflow)
- No meetings or project management overhead
- Iterative refinement instead of waterfall planning

**Quality didn't suffer.** Professional documentation (STRESS.md), honest system requirements, reproducible testing methodology, zero build errors — all week 1.

---

## 🚀 Built With

### Tech Stack
- **Frontend:** React 18, TypeScript, Tailwind CSS, Framer Motion, Vite
- **Hosting:** Vercel (serverless, edge functions, auto-scaling)
- **Media:** HLS (HTTP Live Streaming), H.264 MP4s via GitHub Releases CDN
- **AI:** Gemini, Groq, DeepSeek R1 (multi-backend consensus)
- **Development:** Claude + OpenCode, GitHub, Vercel CLI
- **Image processing:** ImageMagick (dark icon auto-generation)

### Tools & Methodologies
- Browser stress testing (novel methodology)
- Recursive iframe embedding (architectural pattern)
- RAG (Retrieval-Augmented Generation) for AI Channel Picker
- Virtual filesystem (localStorage-backed node tree with self-healing)
- OTA firmware updates (three-path on Samsung, semver pipeline on Golden Gate)

---

## 📚 Roadmap

### Samsung TV (ongoing)
- New MP4 channels
- Live HLS stream expansion
- Enhanced EPG metadata
- Programme Guide with 30-day schedule
- Recording scheduler

### macOS Golden Gate (v27.2 — final)
- **Final shipping state.** No planned updates.
- App_Version and version.json both at 27.2 (in sync)
- OTA reports no update available
- All features complete and zero-error

### Homepage (Ongoing)
- Writing essays (broadcast history, archival methodology)
- Stress test contributions (community submissions welcome)
- Live recursion benchmark dashboard

---

## 🎯 Who This Is For

### Performance Engineers & Browser Teams
Real-world stress test that mimics actual heavy webapps. Reproduces iframe isolation, GC pressure, video decoder limits simultaneously.

### Hardware Reviewers
Linear scaling per recursion level gives cleaner benchmark than most browser tests (where everything peaks early).

### Web Developers
Lesson: single-page apps stacked together don't fail at SPA level — they fail at iframe boundary multiplication. Worth knowing.

### OS Enthusiasts
Open https://macos-27-golden-gate.vercel.app, watch 63 dark icons cascade in, hear Glass.mp3 chime on notifications, feel the 120fps spring dock. That's the whole experience.

### Curious People
Open https://samsung-lcd-tv.vercel.app, press `P`, switch to HDMI 4, see your hardware's limit. That's the whole experience.

---

## 🏛️ Philosophy: Archival as Code

**Why preserve 2010–2011 systems in 2026?**

That era represents the boundary:
- **Last moment of broadcast dominance** (before streaming)
- **Peak of feature phones** (before app stores)
- **Last Windows XP/macOS Lion generation** (before modern OS)
- **Peak of Indian DTH expansion** (DishTV, Airtel, Tata Sky competitive era)

**Why build a 2026 OS in a browser?**

Because the boundary cuts both ways:
- **Last moment of pure-web app limits** (before WebGPU/WebAssembly take everything native)
- **Peak of React SPA architecture** (before the next paradigm shift)
- **Glassmorphism as the final skeuomorphic gesture** (before flat design won)
- **Proof that a browser can be a full operating system** — 18,400 lines, zero errors, hardware APIs, file system, OTA updates

You're not just being nostalgic. You're **documenting a historical transition from both sides.**

The code itself is the artifact. Vercel is the museum. GitHub is the archive. Browser is the display case.

---

## 📝 Contact & Links

- **GitHub:** https://github.com/AashmanShukla3223
- **Twitter:** @AashamnS49638
- **Email:** [via GitHub]

**Contribution guidelines:**
- Found a browser/hardware combo not in STRESS.md? Run the test, submit results via GitHub issue.
- Have 2010–2011 media to archive? Submit via pull request (MP4s welcome via GitHub Releases).
- Want to extend the simulators? Fork and ship it.

---

## 📜 Changelog

- **2026-06-17** — macOS Golden Gate v27.2 final. Tahoe officially expired. Golden Gate ships with Notification Center toasts + Glass.mp3, wallpaper upload, 126 dark/light icons, dock magnification, OTA update pipeline, Control Center appearance toggle that switches wallpaper + icons, liquid glass Apps overlay, zero build errors.
- **2026-06-05 (v1.0.31)** — News LIVE expansion: India TV (141) + Republic Bharat (142). Entertainment tier added: 9XM Live (321) + Sony Kal HD LIVE (322). Total channels: 32 across 3 tiers (News, Kids, Entertainment). Full EPG with 4 daypart blocks live.
- **2026-06-04** — v1.0.27.5 ships with HDMI 4 recursive embedding. **This is when the stress test methodology was born.** HDMI 4 input loads macOS Tahoe as iframe; macOS can embed Samsung TV back, enabling infinite recursion. Recursive stress testing becomes possible.
- **2026-06-04** — Initial v1.0.27.0 published. Samsung sim, macOS Tahoe, homepage all live. STRESS.md methodology documented. Recursion tested: 2 levels stable on 4 GB ChromeOS (swap thrashing at level 3).

---

## 📜 Colophon

**Built:** June 1–17, 2026  
**Last updated:** June 17, 2026 (macOS Golden Gate v27.2 final)  
**Location:** Kanpur, India  
**Tools:** Claude + OpenCode, Vercel, GitHub, React 18 + Framer Motion, TypeScript  
**Deployed:** https://aashman-homepage.vercel.app

**Simulating:** 2010–2011 era broadcast systems + 2026-era operating system  
**With:** 2026 technology  
**Goal:** Preserve the boundary between broadcast and streaming eras — and prove a browser can be a full OS

---

*Reproducible results encouraged. Recursion depth submissions welcome. Glass.mp3 plays on every notification.*
