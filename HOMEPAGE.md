# 🏠 Aashman Shukla — Digital Archaeologist

**18 years old. Kanpur, India. Builder of period-authentic simulators.**

Preserving systems from 2010–2011 (the boundary between broadcast and streaming eras) using 2026 technology. Retro-futurism as archival methodology.

---

## 🎯 Three Websites, One Vision

### 1. **Samsung C5000 LCD TV Simulator**
**Live:** https://samsung-lcd-tv.vercel.app  
**Repo:** https://github.com/AashmanShukla3223/Samsung-LCD-TV-Simulator

The exact 2010 hardware that defined an era. Full-featured DishTV DTH emulation with:
- **15 channels** (12 MP4 archives from 2010–2020 + 2 live HLS streams)
- **AI Channel Picker** (Gemini + Groq + DeepSeek R1, RAG-based, 7 modes)
- **Three-path firmware OTA** (Internet + USB + Broadcast, conflict resolver)
- **Virtual USB system** (7 profiles, FAT32 filesystem, localStorage persistence)
- **DishTV EPG/Guide** (full Electronic Programme Guide, v1.0.30 incoming)
- **Full OSD dialogs** (Picture settings, Sleep Timer, Closed Captions, Retail Mode, etc.)

**Current version:** v1.0.27.5 (HDMI 4 recursive embedding — macOS Tahoe loads inside TV as iframe)  
**Stress tested:** 2-level recursion confirmed on 4 GB ChromeOS (see STRESS.md)

---

### 2. **macOS 26 Tahoe Simulator**
**Live:** https://aashman-homepage.vercel.app (embedded on homepage)  
**Separate deploy:** macos-26-tahoe.vercel.app (planned)

A love letter to 2011 macOS aesthetics, built with 2026 tech. React 19 + Vite + Tailwind glassmorphism:
- **20+ apps** in the dock (Calendar, Notes, Mail, Safari, etc.)
- **Glassmorphic UI** (backdrop-filter blur, frosted glass aesthetic)
- **File system** with drag-and-drop (functional filesystem via localStorage)
- **52-track audio stress test** (pushes browser audio context limits)
- **Full window management** (drag, resize, minimize, fullscreen)

**Audio load:** Heavy deliberate stress (complements Samsung TV's media-heavy channels)

---

### 3. **aashman-homepage.vercel.app**
**Live:** https://aashman-homepage.vercel.app

Your production portfolio. Four main sections:

#### **Home**
Bio, current status, quick links to projects.

#### **Projects**
- Samsung C5000 Simulator (live URLs + feature breakdown)
- macOS 26 Tahoe (live iframe + technical specs)
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
- Current projects (v1.0.28, v1.0.29, v1.0.30 roadmap)
- Learning (browser internals, broadcast systems, archival methodology)
- Stressing (2-level recursion limits, swap thrashing at level 3)

---

## 🎨 Aesthetic: Retro + Futuristic

### Retro Layer (2010–2011)
- **Samsung C5000 bezel** (physical TV chassis rendered in CSS)
- **DishTV OSD** (2001–2016 broadcast UI language)
- **CRT scanlines** (visual artifact from analog era)
- **macOS Lion design language** (pre-Monterey, pre-Neumorphism)
- **AajTak archives** (2001–2020 Indian news broadcasts)

### Futuristic Layer (2026)
- **React 19 + TypeScript** (modern framework, strict typing)
- **AI Picker** (Gemini + Groq + DeepSeek R1 consensus inference)
- **Glassmorphism** (2020s UI trend, backdrop-filter)
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
| **JS heap fragmentation** | Two runtimes (vanilla JS + React 19) coexisting, repeated per level |
| **CSS layout & paint** | Tailwind rebuilt per iframe, glassmorphism `backdrop-filter` per layer (GPU-heavy) |
| **Audio context limits** | Chrome ~50 max, Firefox ~10, Safari ~6. Each level adds 1–2 contexts. |
| **Video decoder pipelines** | Each level can play MP4 + HLS via separate `HTMLVideoElement` decoders |

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
June 2–9, 2026:
├── Samsung C5000 (v1.0.27.1, production-ready)
├── macOS 26 Tahoe (React 19, full feature set)
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

**Quality didn't suffer.** Professional documentation (STRESS.md), honest system requirements, reproducible testing methodology — all week 1.

---

## 🚀 Built With

### Tech Stack
- **Frontend:** React 19, TypeScript, Tailwind CSS, Vite
- **Hosting:** Vercel (serverless, edge functions, auto-scaling)
- **Media:** HLS (HTTP Live Streaming), H.264 MP4s via GitHub Releases CDN
- **AI:** Gemini, Groq, DeepSeek R1 (multi-backend consensus)
- **Development:** Claude + OpenCode, GitHub, Vercel CLI

### Tools & Methodologies
- Browser stress testing (novel methodology)
- Recursive iframe embedding (architectural pattern)
- RAG (Retrieval-Augmented Generation) for AI Channel Picker
- Virtual filesystem (localStorage-backed FAT32 simulation)
- OTA firmware updates (three-path: Internet, USB, Broadcast)

---

## 📚 Roadmap

### v1.0.28 (Samsung TV)
- 3 new MP4 channels (2 AajTak + 1 India Today archive)
- India Today live HLS stream
- Enhanced EPG metadata

### v1.0.29 (Samsung TV)
- 2x Peppa Pig episodes (Hindi dubbed)
- 2x Paw Patrol episodes (Indian version)
- Kids mode (channel filter by age rating)

### v1.0.30 (Samsung TV) — **The Capstone**
- Full DishTV Programme Guide (140+ channels, 30-day schedule)
- 2x Chikoo Aur Bunty (Hindi original kids show)
- 2x Motu Paltu (Hindi comedy)
- Show metadata, ratings, synopsis
- Recording scheduler

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

You're not just being nostalgic. You're **documenting a historical transition.**

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

- **2026-06-09** — v1.0.27.5 ships with HDMI 4 recursive embedding. **This is when the stress test methodology was born.** HDMI 4 input loads macOS Tahoe as iframe; macOS can embed Samsung TV back, enabling infinite recursion. Recursive stress testing becomes possible.
- **2026-06-04** — Initial v1.0.27.0 published. Samsung sim, macOS Tahoe, homepage all live. STRESS.md methodology documented. Recursion tested: 2 levels stable on 4 GB ChromeOS (swap thrashing at level 3).

---

## 📜 Colophon

**Built:** June 2–9, 2026  
**Location:** Kanpur, India  
**Tools:** Claude + OpenCode, Vercel, GitHub, React 19, TypeScript  
**Deployed:** https://aashman-homepage.vercel.app

**Simulating:** 2010–2011 era systems  
**With:** 2026 technology  
**Goal:** Preserve the boundary between broadcast and streaming eras

---

*Reproducible results encouraged. Recursion depth submissions welcome.*
