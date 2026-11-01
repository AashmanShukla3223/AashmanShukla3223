export default function V1_0_10() {
  return (
    <article className="prose-aashman">
      <h1>v1.0.10: one story, every project, and what comes next</h1>
      <p className="text-white/50 text-sm">November 1, 2026 · 15 min read</p>

      <p>
        This is the note I have been avoiding writing, because it requires holding the entire
        portfolio in my head at once and being honest about what it is. Five repositories. Four
        shipped simulators. Two operating systems — one real, one simulated. A launcher that
        rebuilds a 2005 phone. An app that makes your phone ring for you. And a homepage that
        tries to make sense of all of it. This is the story of how they connect, and the new
        features that are coming to each of them.
      </p>

      <h2>Part one — the through-line</h2>
      <p>
        Every project in this portfolio answers the same question: what if software felt like a
        place instead of a tool? The Samsung TV is a place — a living room in 2010, with a remote
        and a channel guide and a firmware update that takes three seconds. Golden Gate is a
        place — a desktop with windows and a dock and a wallpaper that changes with the time of
        day. Parallax Launcher is a place — six different rooms you can switch between, one of
        which is a 2005 clamshell. Self Calling is a place too, in a stranger way: it is the
        place where a phone call comes from, and you get to decide who is calling.
      </p>
      <p>
        The through-line is not nostalgia. Nostalgia is wanting things to be the way they were.
        This is different. This is taking things the way they were and asking what they would
        look like if someone cared about them now, with the tools we have now, and the taste we
        have now. The RAZR V3i was a great phone. The Samsung C5000 was a great TV. macOS is a
        great operating system. None of them needed to be rebuilt. I rebuilt them anyway, because
        rebuilding is how I understand things, and understanding is the point.
      </p>

      <h2>Part two — the web simulators</h2>
      <h3>Samsung C5000 — v1.0.32, heading to v1.1</h3>
      <p>
        The Samsung simulator is the oldest project and the most complete. It is a single static
        HTML file that has its own firmware, its own asset CDN, its own AI brain, and its own
        disaster-recovery story. It is, in miniature, a real product. The new features coming to
        it extend the same philosophy: more realness, more depth, more of the strange details
        that make a TV a TV.
      </p>
      <ul>
        <li>
          <strong>30-day EPG.</strong> The current guide shows four daypart blocks. The next
          version shows thirty days, with programme metadata, cast, and genre. A real TV guide,
          not a demo of one.
        </li>
        <li>
          <strong>Virtual PVR.</strong> Record, schedule, and play back. The TV had a recording
          feature in some markets; the simulator will have one everywhere.
        </li>
        <li>
          <strong>Dual audio.</strong> SAP language toggle, the button nobody pressed, implemented
          properly with two audio tracks and a switch.
        </li>
        <li>
          <strong>Dynamic OTA asset packs.</strong> New AajTak channels and regional ad layers
          delivered without redeploying the HTML. The OTA system already exists; this extends
          it to content, not just firmware.
        </li>
        <li>
          <strong>Channel disambiguation.</strong> The AI picker's position-bias fix, applied to
          the EPG itself, so "show me Halla Bol" always resolves to the right edition.
        </li>
      </ul>

      <h3>macOS Golden Gate — v27.4.1, heading to v27.5</h3>
      <p>
        Golden Gate is the bigger, newer, more ambitious project. It is an operating system in
        a browser tab, and it is getting closer to feeling like one every week. The new features
        are the ones that turn a demo OS into a usable one.
      </p>
      <ul>
        <li>
          <strong>Window snapping and Stage Manager.</strong> Drag a window to an edge and it
          snaps. Group windows into stages. The window manager already exists; this makes it
          feel like macOS.
        </li>
        <li>
          <strong>Migration Assistant.</strong> Import settings, files, and preferences from a
          previous "system." A welcome wizard for returning visitors.
        </li>
        <li>
          <strong>WebGPU glass.</strong> The liquid-glass aesthetic, accelerated by the GPU
          instead of backdrop-filter. Smoother, cheaper, more faithful.
        </li>
        <li>
          <strong>P2P Continuity.</strong> Two browser tabs, one desktop. Hand off a window from
          one tab to another. Absurd and delightful.
        </li>
        <li>
          <strong>Micro-Island controls.</strong> The Dynamic Island, expanded into a control
          surface for media, timers, and notifications.
        </li>
      </ul>

      <h2>Part three — the native experiments</h2>
      <h3>Parallax Launcher — Android 7+</h3>
      <p>
        Parallax is the launcher that should not exist and does. Six instrument-panel home
        screens, a RAZR V3i rebuild, and a customization system that lets it become any of them.
        The next version deepens each panel instead of adding new ones.
      </p>
      <ul>
        <li>
          <strong>More instrument panels.</strong> A retro CRT terminal, a brutalist grid, a
          blueprint drafting table. Each one a different answer to the same question.
        </li>
        <li>
          <strong>Shared design system.</strong> The six panels share nothing right now. A
          common token layer would let themes cross panel boundaries.
        </li>
        <li>
          <strong>RAZR V3i polish.</strong> More icons, better keypad feel, smoother hinge
          animation, and a few more Quartz finishes.
        </li>
        <li>
          <strong>Telephony edge cases.</strong> Call forwarding, call waiting, and conference
          calls through the Telecom framework.
        </li>
      </ul>

      <h3>Self Calling — Android 6 through 17</h3>
      <p>
        Self Calling is the prank app that became a real app. It places self-calls through the
        Telecom framework, so the OS renders the real dialer UI. The next version makes it more
        capable and more honest.
      </p>
      <ul>
        <li>
          <strong>More voices.</strong> A library of voice presets, importable and shareable.
        </li>
        <li>
          <strong>More presets.</strong> A community preset pack — teachers, workers, delivery
          drivers, bosses, and whatever else people invent.
        </li>
        <li>
          <strong>Edge-case hardening.</strong> Battery saver, doze mode, and OEM-specific
          Telecom quirks.
        </li>
        <li>
          <strong>Samsung video fix.</strong> Documented, not fixed — Samsung's InCallUI will not
          render third-party video. But better fallbacks and clearer messaging.
        </li>
      </ul>

      <h2>Part four — the homepage</h2>
      <p>
        The homepage is the glue. It is where the projects are listed, the notes are written, the
        stress lab lives, and the portfolio value is explained. The next version makes it more
        useful and more honest.
      </p>
      <ul>
        <li>
          <strong>Live recursion benchmark.</strong> FPS telemetry per recursion level, in the
          browser, with real numbers instead of field notes.
        </li>
        <li>
          <strong>Community benchmark dashboard.</strong> Submit your hardware's recursion ceiling.
        </li>
        <li>
          <strong>More essays.</strong> Broadcast history, archival methodology, building with AI.
        </li>
        <li>
          <strong>Search.</strong> Full-text search across notes and projects.
        </li>
      </ul>

      <h2>Part five — the philosophy</h2>
      <p>
        All of these features point in the same direction: more realness, more depth, more of the
        strange details that make software feel like a place. The Samsung TV gets a 30-day EPG
        because a real TV has one. Golden Gate gets window snapping because a real OS has it.
        Parallax gets more panels because a real launcher is a collection of places. Self Calling
        gets more voices because a real prank needs a voice.
      </p>
      <p>
        The philosophy is simple and I will keep saying it until it is obvious: the details are
        the product. Not the features. Not the tech stack. The details. The subpixel stripe on a
        RAZR keypad. The 45-second ring timeout. The 220 Hz tone at the :55 of every hour. The
        tariff that accrues per-second minor units. These are the things that make software feel
        real, and they are the things that are worth building.
      </p>

      <h2>Part six — the cost</h2>
      <p>
        I have paid $0.000000000000000000 for all of this. The tools are free. The hosting is
        free. The agents are cheap. The only input is time, and time is not money — it is just
        time. The output is worth ~$500K by any honest market estimate. That gap — between $0
        input and $500K output — is the whole point. It is the proof that the barrier to building
        real software has collapsed, and that the people who figure this out first will produce
        outsized value at near-zero cost.
      </p>

      <p>
        Issues and bugs are welcome:{' '}
        <a href="https://github.com/AashmanShukla3223/AashmanShukla3223/issues">open an issue on GitHub</a>.
      </p>
    </article>
  );
}
