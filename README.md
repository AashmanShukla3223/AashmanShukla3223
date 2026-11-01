## Hello Boys and Girls! 👋

<!--
**AashmanShukla3223/AashmanShukla3223** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.
-->

<div align="center">

# 👋 Hey, I'm Aashman

### **AI-assisted full-stack developer · Kanpur, India**
**Shipping period-authentic web simulators and native experiments with production-grade architecture.**

[![Samsung TV Simulator](https://img.shields.io/badge/Live-Samsung%20C5000%20TV%20Simulator-blue?style=for-the-badge&logo=vercel)](https://samsung-lcd-tv.vercel.app)
[![macOS Golden Gate Simulator](https://img.shields.io/badge/Live-macOS%2027%20Golden%20Gate%20Simulator-gold?style=for-the-badge&logo=apple)](https://macos-27-golden-gate.vercel.app)
[![Homepage](https://img.shields.io/badge/Live-aashman--homepage.vercel.app-teal?style=for-the-badge&logo=vercel)](https://aashman-homepage.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-AashmanShukla3223-black?style=for-the-badge&logo=github)](https://github.com/AashmanShukla3223)

</div>

---

## 🎯 What I do

I build **software that feels real** — not as front-end exercises, but as full systems with their own update mechanisms, asset CDNs, AI integrations, and disaster-recovery stories. Most of it is period-authentic web simulators (2010 broadcast hardware, a 2026-era operating system in a browser tab), plus a couple of native Android experiments. I work primarily with AI coding agents (OpenCode, Antigravity CLI, Qoder as backup), treating them as fast implementation partners while I own the architecture, taste calls, and verification.

**My focus**: production-quality vanilla web (HTML / CSS / JS), React 19 + Vite for SPAs, Jetpack Compose for Android, serverless functions on Vercel, and multi-provider LLM integration with race-mode fallback for resilience.

---

## 🚀 Featured Projects

### 📺 [Samsung C5000 LCD TV Simulator](https://samsung-lcd-tv.vercel.app) &nbsp; [`source`](https://github.com/AashmanShukla3223/Samsung-LCD-TV-Simulator)

A faithful recreation of a **2010 Samsung BN59-series LCD TV**, rebuilt with 2026 architecture. Currently at **v1.0.32** (Custom Picture Mode — manual slider adjustments auto-switch to Custom and persist across reloads).

- **~4,200 lines vanilla HTML/JS**, no framework, single static file
- **Three-path firmware OTA system**: Internet (manifest polling), USB (virtual filesystem with 4 profiles), Broadcast (passive DishTV scanner with reception progress bar)
- **Cross-method conflict resolver** when two OTA paths offer different versions
- **Tri-provider AI Channel Picker**: races Groq (~500ms) + Gemini (~3s) + OpenRouter DeepSeek R1 (~5-8s), serverless function at `/api/ai-pick` hides keys
- **Client-side RAG pipeline** (TF-IDF cosine similarity over a bilingual channel-metadata corpus) before the LLM call
- **AajTak `:55` Hourly Exhale Window** — atmospheric feature that triggers a parasympathetic-friendly 220 Hz tone at the `:55` of every real-time hour
- **Decoupled asset architecture**: `APP_VERSION` is independent of asset-bundle release tags; GitHub Releases used as a free binary CDN to escape Vercel's 100 MB limit
- **Disaster-recovery tested**: survived a production folder override; full state restored via single-file move in under an hour
- **32 channels** across 3 tiers (News 121–142, Kids 221–228, Entertainment 321–322 with live HLS + MP4 archives)
- **Pinned to Mumbai region** (`bom1`) for low-latency to Indian users

> **Tech**: Vanilla HTML/CSS/JS · Tailwind (CDN) · Web Audio API · `hls.js` · Vercel Serverless Functions · GitHub Releases CDN · Google Gemini API · Groq API · OpenRouter API

### 🍎 [macOS 27 "Golden Gate" Simulator](https://macos-27-golden-gate.vercel.app) &nbsp; [`source`](https://github.com/AashmanShukla3223/Antigravity-and-OpenCode-CLI-Prompts-and-Skills)

A React 19 + Vite + Framer Motion recreation of Apple's macOS Golden Gate, running entirely in a browser tab. Currently at **v27.4.1**.

- **52 working apps** including Finder, Safari, Mail, Messages, FaceTime, Photos, Maps, Music, TV, Notes, Calendar, Contacts, Terminal, Xcode, Final Cut Pro, Logic Pro, Pixelmator Pro, Motion, GarageBand, iMovie, Chess, Minecraft, and more
- **Dynamic Island**, Siri routing, and **iPhone Mirroring**
- **Subscription state machine** with multi-tier paywall and localStorage persistence
- **Liquid Glass design language** implemented natively via CSS `backdrop-filter` + `saturate`
- **Real telemetry** — battery, memory, and storage readouts come from the browser's device APIs, not mocked values
- **TV.app integration**: 24 hosted MP4 channels + live HLS news streams via GitHub Releases CDN
- **Window management primitives**: z-index stacking, drag, minimize, draggable surface system
- **Dock with spring-physics magnification** (6 configurable sliders) and 126 app icons (63 light + 63 dark)
- **Wallpaper Engine** with image/video support, auto day/night switching, and file upload
- **OTA Software Update** pipeline with semver comparison
- **Virtual File System** with trash system and self-healing, persisted to localStorage
- **Boot lifecycle** with 432 Hz sine-wave chime, Setup Assistant, Login Screen, Recovery Mode
- **Ships its own MCP server** (`npm run mcp-server`)
- **Zero build errors** — `tsc --noEmit` passes clean at every commit

> **Tech**: React 19 · Vite · Framer Motion · Tailwind v4 · TypeScript · MCP

### 🧰 [Antigravity & OpenCode CLI Prompts and Skills](https://github.com/AashmanShukla3223/Antigravity-and-OpenCode-CLI-Prompts-and-Skills)

The toolkit repo behind both simulators — it also hosts the macOS Golden Gate build and its asset releases. Cross-tool prompts, SKILL.md recipes, and 17 release tags (`v1.0.7` through `v1.1.18`) carrying the MP4/MP3 binaries that power the simulators.

- **17 release tags** carrying the media binaries that power both flagship projects
- **High-efficiency agentic workflows** for OpenCode, Antigravity CLI, and Qoder (backup)
- **Showcase skills** including the macOS evolution demos
- **MCP server** exposing the simulator to AI agents

---

## 📱 More projects

### 📲 [Parallax Launcher](https://github.com/AashmanShukla3223/Parallax-Launcher)

An enthusiast **Android launcher** built with Jetpack Compose, featuring distinct, tactile instrument-panel home screens — Industrial Rig, Celestial OrbitOS, Swiss Broadsheet, Cyberdeck HUD, Cinecam Rangefinder, and a pixel-exact **Motorola RAZR V3i clamshell** rebuild (Mode 7) with working flip hinge, etched keypad, and real telephony. AGSL shaders, sensor telemetry, and 6 accent themes. Supports Android 7+. Beta testing open — see `TESTING.md`.

> **Tech**: Kotlin · Jetpack Compose · Material 3 · AGSL · CameraX · Sensors

### 📞 [Self Calling](https://github.com/AashmanShukla3223/self-calling)

An **Android app** that places self-calls through the Telecom framework so ringing, connected, and ended states render on the **real native dialer UI**. Mic loopback, per-identity voice presets, video calls, in-call Hold/Mute/Speaker controls, alarm-based incoming-call scheduling, and a self-call log. Targets Android 6.0+ up to Android 17. Tested on a Pixel (API 37), a Galaxy Nexus (API 23), and a Samsung SM-J700F (Galaxy J7).

> **Tech**: Kotlin · Java · Telecom/ConnectionService · AudioRecord/AudioTrack · Camera2

---

## 🛠️ How I work

A few principles that show up across my projects:

| Principle | What it looks like in practice |
|---|---|
| **Decouple early** | Asset versioning separate from app versioning. Source separate from CDN. Manifest separate from runtime. Pays off every time something breaks. |
| **Race for resilience** | Multi-provider LLM calls in parallel with `Promise.any()`. Fastest response wins, automatic failover when providers throttle. |
| **Verify before patching** | When something looks broken, check the actual data layer first. Most "code bugs" turn out to be one corrupted byte in a static file. |
| **Ship + roll back, fearlessly** | Atomic three-manifest deploys. Backups before every patch. `--revert` flags on every script. Surviving accidents is a feature. |
| **AI as collaborator, not crutch** | I architect, the agents implement, I verify. Catching the agent's mistakes is part of the workflow, not a sign it failed. |

---

## 🧰 Stack signals

```
Languages:   JavaScript · TypeScript · Kotlin · Java · HTML · CSS · Bash · Python
Frameworks:  React 19 · Vite · Framer Motion · Tailwind v4 · Jetpack Compose · Material 3
Runtime:     Node.js · Vercel Serverless · Vercel Edge · Android (Parallax 7+, Self Calling 6+)
AI:          Google Gemini · Groq (Llama 3.3 70B) · OpenRouter (DeepSeek R1)
Patterns:    Client-side RAG · TF-IDF retrieval · Multi-path OTA · Race-mode
             fallback · Web Audio synthesis · HLS live streaming · Telecom self-calls
Hosting:     Vercel · GitHub Releases (used as free binary CDN)
Workflow:    OpenCode · Antigravity CLI · Qoder (backup)
```

---

## 📊 At a glance

- **5 public repositories** · **~15 followers** on GitHub
- **2 live web simulators** on Vercel (Samsung C5000, macOS Golden Gate) + **aashman-homepage**
- **2 native Android projects** (Parallax Launcher, Self Calling)
- **~18,000+ lines** across the flagship simulators, shipped in a single development arc
- **Portfolio value: ~$1M-ish** (paid: $0.000000000000000000)

---

## 🌐 Connect

- 🌐 **Live work**: [samsung-lcd-tv.vercel.app](https://samsung-lcd-tv.vercel.app) · [macos-27-golden-gate.vercel.app](https://macos-27-golden-gate.vercel.app) · [aashman-homepage.vercel.app](https://aashman-homepage.vercel.app)
- 🐦 **Twitter / X**: [@AashmanS49638](https://twitter.com/AashmanS49638)
- 📧 **Email**: aashmanshukla323@gmail.com
- 🐛 **Issues / bugs**: [Open an issue on GitHub](https://github.com/AashmanShukla3223/AashmanShukla3223/issues) — open to any issues or bugs through GitHub

---

## 🎯 Currently exploring

- **Antigravity CLI** as part of my workflow alongside OpenCode and Qoder (backup)
- **Multi-region serverless** patterns for low-latency LLM proxies (currently pinned to Mumbai `bom1`)
- **Dynamic asset packs delivered via OTA** — extending the Samsung simulator to load new AajTak channels and regional ad layers without redeploying the HTML
- **Android Telecom + Compose experiments** — Parallax Launcher's RAZR V3i mode and the Self Calling app

---

<div align="center">

*Built fast, shipped real, verified always.*
**Open to collaboration on AI-tooling projects, web simulators, native experiments, and creative web engineering work.**

</div>
