# 🧪 STRESS — Browser & Hardware Stress Testing Guide

> **Live across two simulators on `aashman-homepage.vercel.app`.**
> Stress-test your browser engine, hardware, and OS with two real production webapps stacked recursively. No benchmark synthetic — these are working simulators with full feature sets, exercised at scale.

**For:** Web developers, browser engineers, performance engineers, hardware reviewers, and anyone curious how their setup handles real-world JS-heavy workloads.

---

## 📋 What You're Testing

Two simulators that can be embedded inside each other recursively, creating a measurable load that scales linearly per nesting level. Unlike synthetic benchmarks (Speedometer, MotionMark, JetStream), this stresses things real web apps actually hit:

| Subsystem stressed | Why it matters |
|---|---|
| **Iframe process isolation** | Site isolation forces separate processes per origin; recursion multiplies that |
| **JS heap fragmentation** | Two different runtimes (vanilla JS + React 19) coexisting, repeated per level |
| **CSS layout & paint** | Tailwind rebuilt per iframe, glassmorphism `backdrop-filter` per layer (notoriously GPU-heavy) |
| **Audio context limits** | Chrome ~50 max, Firefox ~10, Safari ~6. Each level adds 1–2 contexts. |
| **Video decoder pipelines** | Each level can play MP4 + HLS via separate `HTMLVideoElement` decoders. Hardware decoder slots are limited per tab. |
| **WebGL context cap** | Browsers cap at 8–16 concurrent contexts. Recursion can overflow. |
| **GC under pressure** | V8, SpiderMonkey, and JavaScriptCore behave very differently under sustained memory pressure |
| **HTTP/2 multiplexing** | Each level independently fetches MP4s from GitHub Releases CDN |

No synthetic benchmark hits all of these simultaneously. This one does.

---

## 🖥️ System Requirements

### 📺 Samsung C5000 LCD TV Simulator

Production-grade web app: vanilla HTML/JS, ~300 KB single file, 15 channels, 7 USB profiles, tri-provider AI Picker, three-path firmware OTA.

**Browser baseline:** Chrome 138+ (or equivalent Blink-based engine). Empirically tested across Chrome 138 → Chrome 149 (current stable as of June 2026).

| Tier | OS | Browser | CPU | RAM | Display | Network |
|---|---|---|---|---|---|---|
| **Minimum** | Windows 10 · macOS 12 · Ubuntu 22.04 · ChromeOS · Android 12 | Chrome 138+ · Edge 138+ · Firefox 130+ · Safari 17+ | Dual-core 2.0 GHz | 2 GB | 1280×720 | 5 Mbps (HLS streaming) |
| **Recommended** | Windows 11 · macOS 13 · Ubuntu 24.04 · ChromeOS · Android 14 | Chrome 140–144 · Edge 140–144 · Firefox 135+ · Safari 18+ | Quad-core 2.5 GHz | 4 GB | 1366×768 | 15 Mbps |
| **Ultra (all features simultaneous)** | Windows 11 · macOS 14+ · Ubuntu 24.04 | Chrome 145–149 · Edge 145–149 · Firefox 138+ · Safari 18+ | 6-core 3.0 GHz | 8 GB | 1920×1080 | 25 Mbps |
| **Legacy (via Supermium)** | Windows XP · Vista · 7 · 8 · 8.1 | Supermium (any recent build) | Dual-core 2.0 GHz | 2 GB | 1280×720 | 5 Mbps |

**Codecs required:** H.264 (AVC), AAC, HLS (HTTP Live Streaming for channels 134 & 135)
**Storage:** ~5 MB browser cache (asset bundle pointers cached via GitHub Releases CDN)
**Permissions:** Audio output. Optional: clipboard read for OTA URL paste flow.
**Not supported:** Internet Explorer (any version). IE11 lacks ES6 modules, `backdrop-filter`, modern audio context APIs, and hasn't received updates since 2022.

### 🖥️ macOS 26 Tahoe Simulator

React 19 + Vite + Tailwind. ~820 KB JS bundle. Glassmorphic window management, dock, traffic lights, file system.

**Browser baseline:** Chrome 138+ (or equivalent Blink-based engine). Empirically tested across Chrome 138 → Chrome 149. React 19 + glassmorphism is heavier than the Samsung sim — older browsers struggle even where they technically run.

| Tier | OS | Browser | CPU | RAM | GPU | Display |
|---|---|---|---|---|---|---|
| **Minimum** | Windows 10 · macOS 12 · Ubuntu 22.04 · ChromeOS (newer) | Chrome 138+ · Edge 138+ · Firefox 130+ · Safari 17+ | Dual-core 2.4 GHz | 4 GB | Any GPU with hardware compositing | 1366×768 |
| **Recommended** | Windows 11 · macOS 13 · Ubuntu 24.04 | Chrome 140–144 · Edge 140–144 · Firefox 135+ · Safari 18+ | Quad-core 3.0 GHz | 8 GB | Integrated graphics ≤ 5 years old | 1920×1080 |
| **Ultra** | Windows 11 · macOS 14+ | Chrome 145–149 · Edge 145–149 · Firefox 138+ · Safari 18+ | 8-core 3.5 GHz | 16 GB | Dedicated GPU or Apple Silicon | 2560×1440 |
| **Legacy (via Supermium)** | Windows XP · Vista · 7 · 8 · 8.1 | Supermium (recent builds) | Dual-core 2.4 GHz | 4 GB | Any GPU with hardware compositing | 1366×768 |

**GPU note:** `backdrop-filter: blur()` is GPU-accelerated in Chrome/Edge/Safari, partially in Firefox. Without GPU compositing, expect ~10–15 FPS during window drag.
**Not supported:** Internet Explorer (any version).

### 🪞 Recursive Mode (HDMI 4 = PC/Mac on Samsung sim)

The stress-test scenario. Powering on HDMI 4 inside the Samsung sim loads the macOS Tahoe simulator as an embedded iframe. The macOS sim *also* embeds the Samsung TV as an app — meaning recursion is possible.

| Tier | RAM required | Realistic depth ceiling | Notes |
|---|---|---|---|
| **Minimum** | 4 GB | 1 level (just open HDMI 4) | Confirmed working on 4 GB Chromebook |
| **Recommended** | 8 GB | 2 levels (TV → macOS → TV) | Confirmed working; the canonical "loop closes" view |
| **Ultra** | 16 GB | 3–4 levels | Predicted; not empirically verified at every browser |
| **Theoretical max** | 32 GB+ | ~5–6 levels | Browser-dependent; iframe-spawn cap kicks in around this point |

**Per-level cost:** ~250 MB JS heap, +1 audio context, +1–2 video elements, +1 React fiber tree

---

### 🎯 Effective Tier = Browser × Hardware

System requirements tables make it look like there are 3 cleanly-separated tiers. In practice, **your real tier is a function of two axes** — your browser version and your hardware quality — and they can pull each other in opposite directions.

Use this matrix to figure out which row in the requirements table actually applies to you:

| Chrome Version → | **138–139** (Baseline-era) | **140–144** (Recommended-era) | **145–149** (Ultra-era, current stable) |
|---|---|---|---|
| **Ultra hardware** (8+ core, 16+ GB, dedicated GPU) | → Recommended effective | → Ultra effective | → **Ultra effective** |
| **Recommended hardware** (4+ core, 8 GB, modern integrated GPU) | → Baseline effective | → **Recommended effective** | → Ultra effective |
| **Baseline hardware** (dual-core, 2–4 GB, any GPU with compositing) | → **Baseline effective** | → Baseline effective | → Recommended effective |

**Reading the rules:**

- ✅ **Hardware can boost your tier by +1.** Chrome 138 + Ultra hardware → Recommended (you get smoother feature surface than the table alone suggests).
- ✅ **Hardware can drop your tier by –1.** Chrome 149 + Baseline hardware → Recommended (browser is great, hardware is the bottleneck).
- ❌ **Hardware cannot boost/drop by 2 tiers.** Chrome 138 + Ultra hardware ≠ Ultra. Chrome 149 + Baseline hardware ≠ Baseline. There's a floor and ceiling the other axis sets.
- 🪞 **Why the floor exists:** V8 (Chrome's JS engine) ships meaningful performance upgrades every ~6 versions. Newer Chrome has GC improvements, better parser/compiler heuristics, and updated GPU compositing. Hardware can't compensate for missing engine work.
- 🪞 **Why the ceiling exists:** Modern Chrome on weak hardware still fundamentally hits the iframe/audio/video decoder limits of the hardware. Software optimization isn't infinite.

**Worked examples:**

| Setup | Effective tier | Why |
|---|---|---|
| Chrome 149 · M3 MacBook Pro · 36 GB RAM | Ultra | Both axes maxed — recursion to 4+ levels likely |
| Chrome 149 · 4 GB Chromebook | Recommended | Ultra browser, baseline hardware → middle (2 levels confirmed) |
| Chrome 138 · Ryzen 9 + 64 GB | Recommended | Baseline browser, ultra hardware → middle (browser is the cap) |
| Chrome 142 · 8 GB i5 laptop | Recommended | Both axes mid-tier → cleanly Recommended |
| Chrome 138 · 4 GB old machine | Baseline | Both axes minimum — Baseline experience, 1 recursion level |
| Chrome 149 · gaming desktop | Ultra | Both maxed |

**The pattern:** look at both your Chrome version and your hardware. Take the lower of the two as your starting tier, then bump up by 1 if the other axis is at Ultra. That's your real-world expectation.

---

### 🕰️ Legacy OS Support via Supermium

**[Supermium](https://win32subsystem.live/supermium/)** is a Chromium fork by win32ss that backports current Blink engine + V8 to Windows XP/Vista/7/8/8.1. If you're on a legacy OS — or running a retro hardware test rig — this is the *only* way to run these simulators properly.

| Your OS | Native Chrome status | Use Supermium? |
|---|---|---|
| Windows 11 | Latest (current) | No — use native Chrome/Edge |
| Windows 10 | Latest (current) | No — use native Chrome/Edge |
| Windows 8.1 | ❌ Frozen at v109 (Jan 2023) | ✅ Yes — Supermium runs current Blink |
| Windows 8 | ❌ Frozen at v109 (Jan 2023) | ✅ Yes |
| Windows 7 | ❌ Frozen at v109 (Jan 2023) | ✅ Yes |
| Windows Vista | ❌ Frozen at v49 (2016) | ✅ Yes (Supermium is your only modern option) |
| Windows XP | ❌ Frozen at v49 (2016) | ✅ Yes (Supermium is your only modern option) |

**Why this matters for the test:**
Running modern webapps on legacy OSes is itself a stress test — of Supermium's backport quality, of the Win32 graphics stack, of legacy hardware that's still functional. If you have a Pentium 4 / XP machine and want to know "does the modern web still work here?" — this gives you a definitive answer.

**Caveats:**
- Supermium audio output uses WaveOut on XP/Vista — may not handle multiple `AudioContext`s as cleanly as WASAPI on Win10+
- HLS playback (channels 134 & 135) depends on `<video>` element MSE support, which Supermium provides but with higher CPU overhead
- Recursion ceiling on Supermium is RAM-bound first (often XP machines have ≤4 GB) and may cap at 1 level

**Internet Explorer (any version): NOT supported.**
IE11 lacks ES6 modules, `backdrop-filter`, modern Audio API features, and CSS Grid behavior the simulators rely on. IE has not received updates since 2022 and is end-of-life on every supported Windows version. Even on Windows 7, use Supermium instead of IE.

---

## 🌐 Browser Compatibility Matrix

Verified behavior. **Test results below are empirical from device testing — not extrapolated.**

| Browser | Engine | Samsung TV solo | macOS Tahoe solo | Recursion ceiling | Notes |
|---|---|---|---|---|---|
| **Chrome 138+** (Win/Mac/Linux) | Blink/V8 | ✅ Excellent | ✅ Excellent | _to be measured_ | Reference target |
| **Edge 138+** (Win) | Blink/V8 | ✅ Excellent | ✅ Excellent | _to be measured_ | Identical to Chrome |
| **Firefox 130+** (Win/Mac/Linux) | Gecko/SpiderMonkey | ✅ Good | ⚠️ Some `backdrop-filter` jank | _to be measured_ | Lower audio context cap (~10) |
| **Safari 18+** (Mac/iOS) | WebKit/JSC | ✅ Good | ✅ Good | _to be measured_ | Strictest memory throttling |
| **ChromeOS Chrome** (4 GB Chromebook) | Blink/V8 | ✅ Works fine | ⚠️ Slower window drag | **2 levels max** | ✅ Empirically confirmed by author |
| **Samsung Internet** (mobile) | Blink/V8 | ✅ Works | ⚠️ Window UX cramped on small screens | 1 level | Mobile RAM constraints |
| **Brave** | Blink/V8 | ✅ Excellent | ✅ Excellent | _to be measured_ | Same as Chrome |
| **Opera GX** | Blink/V8 | ✅ Excellent | ✅ Excellent | _to be measured_ | RAM limiter helps; ironic given the use case |

> **Note:** This matrix is incomplete. If you test the recursion ceiling on hardware/browser not listed above, please open an issue at the repo with your config + max levels reached. Contributions welcome.

---

## 🏃 How To Run The Test

### Quick test (5 minutes)

1. Open `https://samsung-lcd-tv.vercel.app` in your target browser
2. Press `P` to power on the TV
3. Navigate: **Input List → HDMI 4 (PC/Mac)**
4. Click the power button on the splash screen
5. macOS 26 Tahoe loads inside the TV at 1366×768 (real iframe, fully interactive)
6. Inside macOS, find and open the **Samsung LCD TV** app
7. Power on *that* TV → switch to HDMI 4 again → recursion deepens

### Measurement test (15 minutes)

Open DevTools (F12) before starting. Track these per recursion level:

| Metric | Where to find it | What to record |
|---|---|---|
| **JS heap size** | DevTools → Memory → Take heap snapshot | MB used |
| **FPS during window drag** | DevTools → Rendering → FPS meter | min FPS while dragging a macOS window |
| **Audio context count** | Console: `(window.AudioContext.__count__ \|\| '?')` | Integer |
| **Tab process memory** | Chrome: `chrome://memory-internals` | MB total |
| **Time to interactive** | DevTools → Performance | Seconds from iframe load to first interaction |
| **Network requests** | DevTools → Network | Count of requests, total bytes |

Record one row per recursion level. Stop when:
- FPS drops below 10
- JS heap exceeds 1.5 GB
- Browser becomes unresponsive for >5 seconds
- Tab crashes

### Stress test (30 minutes)

Run all of the above on every browser you have access to. Tabulate. Post results.

---

## 📊 Reporting Format

If you run this and want to contribute results, use this template:

```
Device:         [e.g. ThinkPad X1 Carbon Gen 11]
OS:             [e.g. Windows 11 24H2]
CPU:            [e.g. Intel i7-1365U]
RAM:            [e.g. 16 GB]
GPU:            [e.g. Intel Iris Xe integrated]
Browser:        [e.g. Chrome 140.0.7339.82]

Recursion ceiling reached: [N levels]

Per-level metrics:
| Level | JS heap | FPS drag | Audio ctx | Notes |
|-------|---------|----------|-----------|-------|
| 0     |         |          |           |       |
| 1     |         |          |           |       |
| 2     |         |          |           |       |
| ...   |         |          |           |       |

Failure mode: [crash / freeze / unresponsive / hit own limit]
```

Open an issue at `github.com/AashmanShukla3223/Samsung-LCD-TV-Simulator` with the results.

---

## ⚠️ Known Limitations & Honest Caveats

**Things this test is good for:**
- Comparing browsers on a workload that mimics real heavy webapps
- Stressing iframe isolation, video decode, audio contexts, GC simultaneously
- Generating real-world data for browser engineering teams
- Discovering memory leaks in browser implementations

**Things this test is *not* good for:**
- Comparing GPUs (GPU usage is modest)
- Comparing CPUs in isolation (browser overhead dominates)
- Replacing Speedometer/MotionMark for synthetic benchmark scores
- Anything that requires repeated, deterministic runs (browser GC timing varies)

**Caveats on the data:**
- Recursion depth is RAM-bound first, then browser-implementation-bound second. Same hardware, different browser → very different ceilings.
- Some metrics (audio context counts) are not exposed by all browsers, requiring approximation
- The simulators are real production webapps — they receive updates. A result from v1.0.27.5 may not match a result from v1.0.28+. Always note the version tested.
- Different MP4 codecs may behave differently. Hardware H.264 decoders are common; Hardware H.265/AV1 are less so.

---

## 🎯 What I'm Hoping People Do With This

If you're a **performance engineer or browser engineer:** treat this as a real-world test case your synthetic benchmarks may miss. Comparing GC behavior, paint pipeline, or iframe isolation across browser engines on this workload would be genuinely informative.

If you're a **hardware reviewer:** this could be an unusual addition to your browser-perf section. It scales linearly with RAM, which gives you a cleaner test than most browser benchmarks where everything peaks early.

If you're a **web developer:** the lesson is that single-page-apps stacked together don't fail at the SPA level — they fail at iframe boundary multiplication. Worth knowing if you ever embed third-party widgets.

If you're **curious:** open `samsung-lcd-tv.vercel.app`, press `P`, switch to HDMI 4, and see your hardware's limit. That's the whole experience.

---

## 🛠️ Repo & Links

- **Samsung sim (live):** `samsung-lcd-tv.vercel.app`
- **macOS Tahoe sim (live):** `macos-26-tahoe.vercel.app`
- **Homepage:** `aashman-homepage.vercel.app`
- **Samsung sim source:** `github.com/AashmanShukla3223/Samsung-LCD-TV-Simulator`
- **macOS Tahoe source:** `github.com/AashmanShukla3223/macos-26-tahoe`
- **This document lives at:** `aashman-homepage.vercel.app/stress` (planned) or this file in repo

---

## 📝 Changelog

- **2026-06-04** — Initial publication. Samsung sim at v1.0.27.5, macOS Tahoe at v26.0.0, homepage v1.0.0. Recursion confirmed working at 2 levels on 4 GB ChromeOS hardware. Chrome 138+ confirmed as baseline via Windows 10 cloud VM testing.
- **2026-06-04 (revision 2)** — Added Legacy OS support tier via Supermium. Adjusted browser version floors based on empirical tested baseline. Explicitly noted Internet Explorer unsupported.
- **2026-06-04 (revision 3)** — Added "Effective Tier = Browser × Hardware" matrix. Made Chrome version ranges explicit (138–139 / 140–144 / 145–149) instead of open-ended "+". Verified Chrome 149 as current stable (released May 29, 2026).

---

*Built and tested in Kanpur, India. Reproducible results encouraged.*
