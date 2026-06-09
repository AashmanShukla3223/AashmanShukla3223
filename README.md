## Hi there 👋

<!--
**AashmanShukla3223/AashmanShukla3223** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.
<!--
  This goes at:  github.com/AashmanShukla3223/AashmanShukla3223 → README.md
  Create a new repo with the EXACT same name as your username (case-sensitive),
  add this README, push. GitHub will auto-render it at the top of your profile.
-->

<div align="center">

# 👋 Hey, I'm Aashman

### **AI-assisted full-stack developer · Kanpur, India**
**Shipping period-authentic web simulators with production-grade architecture.**

[![Samsung TV Simulator](https://img.shields.io/badge/Live-Samsung%20C5000%20TV%20Simulator-blue?style=for-the-badge&logo=vercel)](https://samsung-lcd-tv.vercel.app)
[![macOS Golden Gate Simulator](https://img.shields.io/badge/Live-macOS%2027%20Golden%20Gate%20Simulator-gold?style=for-the-badge&logo=apple)](https://macos-27-golden-gate.vercel.app)
[![Toolkit](https://img.shields.io/badge/Toolkit-Antigravity%20%2B%20OpenCode-green?style=for-the-badge)](https://github.com/AashmanShukla3223/Antigravity-and-OpenCode-CLI-Prompts-and-Skills)

</div>

---

## 🎯 What I do

I build **web simulators that feel real** — not as front-end exercises, but as full systems with their own update mechanisms, asset CDNs, AI integrations, and disaster-recovery stories. I work primarily with AI coding agents (OpenCode CLI, Gemini CLI), treating them as fast implementation partners while I own the architecture, taste calls, and verification.

**My focus**: production-quality vanilla web (HTML / CSS / JS), React 19 + Vite for SPAs, serverless functions on Vercel, and multi-provider LLM integration with race-mode fallback for resilience.

---

## 🚀 Featured Projects

### 📺 [Samsung C5000 LCD TV Simulator](https://samsung-lcd-tv.vercel.app) &nbsp; [`source`](https://github.com/AashmanShukla3223/Samsung-LCD-TV-Simulator)

A faithful recreation of a **2010 Samsung BN59-series LCD TV**, rebuilt with 2026 architecture.

- **~4,200 lines vanilla HTML/JS**, no framework, single static file
- **Three-path firmware OTA system**: Internet (manifest polling), USB (virtual filesystem with 4 profiles), Broadcast (passive DishTV scanner with reception progress bar)
- **Cross-method conflict resolver** when two OTA paths offer different versions
- **Tri-provider AI Channel Picker**: races Groq (~500ms) + Gemini (~3s) + OpenRouter DeepSeek R1 (~5-8s), serverless function at `/api/ai-pick` hides keys
- **Client-side RAG pipeline** (TF-IDF cosine similarity over a bilingual channel-metadata corpus) before the LLM call
- **AajTak `:55` Hourly Exhale Window** — atmospheric feature that triggers a parasympathetic-friendly 220 Hz tone at the `:55` of every real-time hour
- **Decoupled asset architecture**: `APP_VERSION` is independent of asset-bundle release tags; GitHub Releases used as a free binary CDN to escape Vercel's 100 MB limit
- **Disaster-recovery tested**: survived a production folder override; full state restored via single-file move in under an hour
- **31 versions shipped** through one development arc, with atomic three-manifest deploys
- **Pinned to Mumbai region** (`bom1`) for low-latency to Indian users

> **Tech**: Vanilla HTML/CSS/JS · Tailwind (CDN) · Web Audio API · `hls.js` · Vercel Serverless Functions · GitHub Releases CDN · Google Gemini API · Groq API · OpenRouter API

### 🍎 [macOS 27 "Golden Gate" Simulator](https://macos-27-golden-gate.vercel.app)

A React 19 + Vite + Framer Motion recreation of Apple's macOS Tahoe.

- **~40 application surfaces** including Calculator, Apple TV+, Sound Test utility, Apple Intelligence with Siri AI App
- **Subscription state machine** with multi-tier paywall and localStorage persistence
- **Liquid Glass design language** implemented natively via CSS `backdrop-filter` + `saturate`
- **TV.app integration**: 24 hosted MP4 channels + live HLS news streams via GitHub Releases CDN
- **Window management primitives**: z-index stacking, drag, minimize, draggable surface system

> **Tech**: React 19 · Vite · Framer Motion · Tailwind v4 · TypeScript

### 🧰 [Antigravity & OpenCode CLI Prompts and Skills](https://github.com/AashmanShukla3223/Antigravity-and-OpenCode-CLI-Prompts-and-Skills)

The toolkit repo behind both simulators. Cross-tool prompts, SKILL.md recipes, and asset releases — the methodology that makes the velocity possible.

- **13 release tags** (`v1.0` through `v1.1.13`) carrying the MP4/MP3 binaries that power both flagship projects
- **High-efficiency agentic workflows** for OpenCode CLI and Gemini CLI
- **Showcase skills** including the macOS evolution demos

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
Languages:   JavaScript · TypeScript · HTML · CSS · Bash · Python
Frameworks:  React 19 · Vite · Framer Motion · Tailwind v4
Runtime:     Node.js · Vercel Serverless · Vercel Edge
AI:          Google Gemini · Groq (Llama 3.3 70B) · OpenRouter (DeepSeek R1)
Patterns:    Client-side RAG · TF-IDF retrieval · Multi-path OTA · Race-mode
             fallback · Web Audio synthesis · HLS live streaming
Hosting:     Vercel · GitHub Releases (used as free binary CDN)
Workflow:    OpenCode CLI · Gemini CLI · Antigravity (incoming)
```

---

---

## 🌐 Connect

- 🌐 **Live work**: [samsung-lcd-tv.vercel.app](https://samsung-lcd-tv.vercel.app) · [macos-26-tahoe.vercel.app](https://macos-26-tahoe.vercel.app) · [macos-27-golden-gate.vercel.app](https://macos-27-golden-gate.vercel.app)
- 🐦 **Twitter / X**: [@AashamnS49638](https://twitter.com/AashamnS49638)

---

## 🎯 Currently exploring

- **Antigravity CLI** as the next-generation AI coding workflow (switching from OpenCode mid-June)
- **Multi-region serverless** patterns for low-latency LLM proxies (currently pinned to Mumbai `bom1`)
- **Dynamic asset packs delivered via OTA** — extending the Samsung simulator to load new AajTak channels and regional ad layers without redeploying the HTML

---

<div align="center">

*Built fast, shipped real, verified always.*
**Open to collaboration on AI-tooling projects, web simulators, and creative web engineering work.**

</div>
