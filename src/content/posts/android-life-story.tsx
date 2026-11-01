export default function AndroidLifeStory() {
  return (
    <article className="prose-aashman">
      <h1>The Android projects: a life story</h1>
      <p className="text-white/50 text-sm">November 1, 2026 · 14 min read</p>

      <p>
        This is the story of two Android apps that should not exist, and the reasons they do. One
        exists because I wanted the best Motorola RAZR V3i ever made. The other exists because I
        wanted to prank every contact in my phone without a single ad. Neither is a portfolio piece.
        Both are obsessions that happened to compile.
      </p>

      <h2>Part one — the phone that lived in my pocket</h2>
      <p>
        I never owned a RAZR V3i. That is the first thing to understand. By the time I was old
        enough to care about phones, the V3i was already a museum piece — a clamshell from 2005
        with a 176×220 inner screen, a 96×80 outer screen, and a keypad etched into a single
        brushed sheet of metal so thin it felt like a prop. I saw one in a YouTube teardown when I
        was twelve and it broke something in my head. Not nostalgia, exactly. More like recognition:
        this was a thing someone had <em>really</em> designed, every millimetre argued over, and
        the modern phone in my hand suddenly felt like a compromise.
      </p>
      <p>
        The V3i was the last phone that looked like it had been designed by someone who cared about
        being a phone. After it, everything became a slab. The iPhone arrived, Android arrived, and
        within five years every handset in every pocket was the same black rectangle with the same
        grid of apps. Functional. Interchangeable. Forgettable. The V3i was none of those things.
        It had a hinge. It had a chin. It had a keypad that clicked. It had an outer display that
        showed you the time and a missed-call count without you having to open anything. It was a
        small, perfect, self-contained world.
      </p>
      <p>
        I started collecting references. Photographs of the handset from every angle. The 128-page
        user manual, scanned and re-scanned until the pages were legible. Screenshots of the menus,
        the icons, the status bar with its signal and GPRS and roam indicators. I learned that the
        handset used Univers for its typeface, which is not redistributable, so I studied the
        letterforms and approximated them. I learned that the keypad legends mirror at the centre
        column — letters right of 2/5/8, left of 3/6/9 — which is the kind of detail nobody notices
        until it's wrong, and then it's all you see.
      </p>
      <p>
        The obsession sat in the back of my head for years. I was building web simulators by then —
        the Samsung TV, the macOS desktop — and the V3i kept tapping on the glass. <em>When are you
        going to build me?</em> The answer was always "soon," which is the word I use when I mean
        "I'm scared it won't be good enough."
      </p>

      <h2>Part two — the day I started</h2>
      <p>
        I started on a Tuesday. No plan, no spec, just a new Android Studio project and a
        screenshot of the V3i's home screen pinned to my second monitor. The first thing I drew was
        the inner display: 176×220, 4:5 aspect ratio, with the fine RGB subpixel stripe. Getting the
        subpixels right mattered to me in a way I cannot fully explain. It's three tiny columns of
        colour per pixel, and on a real LCD they're visible if you look closely. On a phone screen
        simulating a phone screen, they're a lie that tells the truth. I drew them with a custom
        Canvas renderer and spent an entire evening adjusting the stripe width by half a pixel until
        it felt right.
      </p>
      <p>
        Then the hinge. Tapping it opens or closes the clamshell. Closed, the inner panel disappears
        entirely and only the lower shell remains, carrying the wallpaper, clock, notifications, and
        message previews on the 96×80 outer display. This is the feature that makes the whole thing
        feel like a phone and not a picture of a phone. The hinge is a state machine with two
        states and a spring animation between them, and I rewrote it four times because the first
        three felt like a button press instead of a physical motion.
      </p>
      <p>
        The keypad came next, and it nearly broke me. The V3i's keypad is not a grid of keys. It
        is one continuous brushed sheet with the electric-blue laser etch cut into it, forming three
        vertical channels — outer two wide, centre one narrow — which is what gives the deck its
        waisted silhouette. Drawing that as a single Canvas path, with the etch as a negative space
        carved out of a gradient, took three days. Three days for a keypad. I have never been more
        proud of three days.
      </p>
      <p>
        The icons were the other mountain. Twenty-one pictograms, drawn as vector paths, not
        bitmaps. Each one is a small act of interpretation — the manual's diagrams are low-res and
        ambiguous, so I had to guess what the original designer intended and then commit. The
        electroluminescent blue chin grille slots went in last, and when they lit up for the first
        time I actually said "oh" out loud in an empty room.
      </p>

      <h2>Part three — the launcher that grew around it</h2>
      <p>
        The RAZR mode was supposed to be a single screen inside a larger launcher. The larger
        launcher was supposed to be five modes. I ended up with six, because the RAZR mode
        demanded its own navigation model — you don't launch apps from a clamshell the way you do
        from a grid, you open the flip, scroll with the d-pad, and select. Building that interaction
        meant building a focus system, which meant building an input abstraction, which meant the
        other five modes got better too. The RAZR mode dragged the whole project up by its collar.
      </p>
      <p>
        The other five modes each have their own personality. Industrial Rig is knobs and gauges
        and an amber OLED. Celestial OrbitOS is planets and gravity. Swiss Broadsheet is
        newspaper typography and a paper-grain shader. Cyberdeck HUD is oscilloscopes and CRT
        effects. Cinecam Rangefinder is a camera viewfinder with a real histogram. Each one is a
        different answer to the question "what if a home screen were a place instead of a list?"
      </p>
      <p>
        The customization system grew out of necessity. Six accent colours, four backgrounds, four
        font families, per-style tunables. I built it because I couldn't decide, and then
        discovered that the inability to decide was the feature — different people want different
        launchers, and the launcher should be able to become any of them. The RAZR mode has four
        Quartz finishes for the same reason: the original handset came in five themes, and picking
        one felt like a betrayal of the others.
      </p>
      <p>
        Telephony was the last piece. Real calls, through InCallService and TelecomManager, with a
        tariff system that accrues per-second minor units and per-minute major units and shows both
        line items. I built this because the RAZR was a phone, and a phone that can't make calls
        is a prop. The first time a real call rang on the simulated handset, with the 2G-styled
        "1 NEW MESSAGE RECEIVED" banner appearing exactly as the manual describes, I sat back and
        stared at it for a long time. It worked. The lie was complete.
      </p>

      <h2>Part four — the prank that needed no ads</h2>
      <p>
        Self Calling has a simpler origin. I wanted to prank call my friends. Not meanly — the
        friendly, stupid kind of prank call where you ring someone, put on a voice, and see how
        long they'll play along. The problem is that every app that lets you fake a call is
        garbage. They're covered in ads. They have watermarks. They require accounts. They show a
        fake dialer that looks nothing like your phone's real dialer, so the moment your friend
        sees the screen, the joke dies. I wanted a prank call that was indistinguishable from a
        real one, with zero ads, and I wanted it to work on every contact in my phone.
      </p>
      <p>
        The insight was Telecom. Android's Telecom framework lets an app register as a calling
        account, and when it places a call, the OS renders the ringing, connected, and ended states
        on the <em>real native dialer UI</em> — the same screen your phone shows for any call. No
        custom UI, no watermark, no ad. The OS does the rendering. The app just drives it. This is
        the trick, and it's not a trick at all — it's the API working as designed.
      </p>
      <p>
        The first version was a single screen: a button that placed a self-call. Press it, your
        phone rings, you answer, you hear yourself through the mic loopback, you hang up. That was
        enough for a prank. But the self-call had a problem: if you're pranking someone, you don't
        want to answer your own phone. You want the other person to think someone else is calling.
        So I added identity presets — saved name and number pairs — so the call appears to come
        from anyone. Teacher. Worker. Delivery driver. Boss. Newspaper deliverer. Each preset
        carries a name and a number, and the call shows up on the recipient's screen as if it's
        from that person.
      </p>
      <p>
        Then came the incoming-call simulator. You can schedule a fake incoming call from a preset,
        with a waiting time from immediately up to three hours, using AlarmManager exact alarms so
        the ring fires even if the process dies while waiting. This is the feature that makes the
        prank seamless: you set it up, put the phone in your pocket, and three hours later, in the
        middle of a conversation, it rings and shows "Boss" on the screen. The alarm survives
        process death because it's a real alarm, not a timer in a foreground service.
      </p>
      <p>
        The ring timeout — default 45 seconds, like a real telco — means the call auto-dismisses if
        nobody answers, which is exactly what a real missed call does. Hold, mute, speaker, and
        Bluetooth work from the native dialer because the connection advertises the right
        capabilities. Video calls advertise bidirectional video state and supply a standard Telecom
        VideoProvider, so on AOSP and Google dialers the video panes appear. Samsung's InCallUI
        won't render third-party video — that's an OEM limitation, not a bug, and I documented it
        honestly instead of pretending it works.
      </p>

      <h2>Part five — the voice problem</h2>
      <p>
        A prank call needs a voice. Silence is suspicious. So each identity preset carries a voice
        configuration: silence, live mic loopback, or a looping audio file. You can import an audio
        file through the system picker, or record one in-app with MediaRecorder. Playback uses
        MediaPlayer with USAGE_VOICE_COMMUNICATION on MODE_IN_COMMUNICATION, so it routes to the
        call/earpiece path and sounds like a person on the other end, not a speaker playing in a
        room.
      </p>
      <p>
        The first time I recorded a voice — "hello, this is the delivery driver, I'm outside with
        your package" — and heard it play through the earpiece during a self-call, I laughed so
        hard I had to put the phone down. It worked. It sounded real. The loopback engine,
        AudioRecord feeding AudioTrack in MODE_IN_COMMUNICATION, is the kind of plumbing nobody
        thinks about until it fails, and getting it to stop cleanly on hang-up took more debugging
        than the entire video-call feature.
      </p>

      <h2>Part six — what I learned</h2>
      <p>
        Both projects taught me the same lesson the web simulators did, in a different language.
        The details are the product. A keypad legend that mirrors at the centre column. A tariff
        that accrues per-second. A ring timeout of 45 seconds because that's what telcos use. A
        process-death-surviving alarm because a prank shouldn't fail when your phone goes to sleep.
        None of these are features anyone asked for. All of them are the difference between a demo
        and a thing.
      </p>
      <p>
        The other lesson is about honesty. Samsung's InCallUI won't render third-party video, and
        I say so in the README instead of hiding it. The RAZR mode is a rebuild from photographs
        and a manual, not a licensed reproduction, and I say that too. The Univers typeface is not
        redistributable, so I approximate it and note the approximation. Building things that feel
        real means being honest about where the realness stops.
      </p>

      <h2>Part seven — where they stand</h2>
      <p>
        Parallax Launcher supports Android 7+ and is in beta testing. Self Calling supports down to
        Android 6, up to Android 17, and is verified on a Pixel (API 37) and a Galaxy Nexus (API
        23). Both are open source, both are free, both have no ads — Self Calling specifically
        because ads were the entire reason it exists.
      </p>
      <p>
        They're not finished. The RAZR mode wants more polish. Self Calling wants more voices, more
        presets, more edge-case hardening. But they work. You can install them, open them, and feel
        something — a hinge clicking, a phone ringing, a voice that sounds like a person. That's
        the bar I set, and it's the bar I'll keep.
      </p>

      <p>
        Issues and bugs are welcome:{' '}
        <a href="https://github.com/AashmanShukla3223/AashmanShukla3223/issues">open an issue on GitHub</a>.
      </p>
    </article>
  );
}
