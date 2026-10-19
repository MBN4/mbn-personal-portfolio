# Bilal Nadeem — Personal Portfolio

A premium, animated personal portfolio for Bilal Nadeem, Software Engineer and full-stack
developer at Clustox, pursuing an M.S. in Data Science and building toward AI automation.

## Design reference — now built from the actual source code

The brief named `https://sarthak-sharma-portfolio-six.vercel.app/` as the design reference, which
this environment's network policy blocks outbound access to. A screen recording of the live site
was supplied and used to study its structure, but a closer match was possible once the actual
**source code** was located: a public GitHub repo (`Bibekksah123/bibek_ksah`) built on top of the
exact same design system — its `<body>` literally carries the class `sarthak-theme`, and it
implements the same component set (`Hero`, `About`, `Work`, `Experience`, `Skills`, `Contact`,
`Footer`, `Nav`, plus a custom `Cursor` and `MotionToggle`) using the same color tokens, fonts, and
interaction patterns. That source was cloned (read-only, public repo, with explicit user
permission) and used to reproduce the real mechanism rather than an inferred one:

- **Fonts**: Instrument Serif (roman + italic, used for every two-line editorial headline —
  `Ideas are a start. *This is the work.*`) paired with DM Sans (UI text) and JetBrains Mono
  (section eyebrows, labels, meta text).
- **Palette**: near-black (`#050507`) background, warm off-white text, a cream accent for active
  states, and a single rust-orange accent (`#ff7033`) for small marks (bullets, numbers, borders).
- **A working custom cursor** (`src/components/Cursor.tsx`) — a small dot that tracks the mouse
  exactly, and a larger ring that lags behind it (lerp factor `0.12`) and enlarges with an accent
  tint on hover over any link or button. (The source repo's own cursor is wired to CSS classes
  that don't exist in its stylesheet — a real bug that makes it invisible on the live site — so
  this was corrected rather than copied.)
- **A functional Motion On/Off toggle** (`src/lib/motion-context.tsx`), matching the exact button
  UI, that disables entrance animations, scroll reveals, Lenis, and the 3D orb and custom cursor
  together.
- Section-for-section structure: a centered Hero with a masked grayscale portrait behind giant
  serif type; a ProofStrip stat bar; an About section with an interactive 3-tab "disciplines"
  switcher (Build / Automate / Learn) driving an animated SVG canvas; a Work section with
  browser-chrome-framed project cards, a compact list, and an expandable architecture accordion;
  an Expertise section with a numbered accordion of capabilities; a Journey timeline; a filterable
  Skills grid; and a Contact section with an availability badge and social-link rows.

### A second look at the actual reference, and three gaps that fix closed

After the first pass, the user reported the build still didn't match the reference: no smooth
scrolling, no scroll-triggered section animations, and no interactive 3D element — and supplied a
new, cleaner cutout of the hero photo. Re-examining the original screen recording frame-by-frame
found a glowing 3D orb/wireframe shape materializing behind the headline during the hero's
scroll-out transition — something the `Bibekksah123/bibek_ksah` clone used as the base (it has no
`three` dependency) doesn't reproduce. That gap was closed with three concrete additions:

- **Lenis** smooth scrolling is back (`src/components/SmoothScroll.tsx`), gated by the motion
  toggle and `prefers-reduced-motion`.
- **Scroll-triggered reveal animations** (`src/components/Reveal.tsx`, using Framer Motion
  `whileInView`) were added to every section's headings, cards, and list rows, so content fades
  and slides in as it enters the viewport rather than only animating once on page load.
- **A real interactive 3D element** (`src/components/HeroOrb.tsx`) — a Three.js wireframe
  icosahedron with orbit rings and a drifting particle field, rendered behind the hero portrait,
  rotating continuously and tilting toward the cursor on mouse move. It's an original
  implementation (not copied from any source file), built in the accent color to match the rest
  of the design, and is disabled along with everything else when Motion is switched off.
- The new hero photo (a cleaner cutout on a white background) is composited onto the dark theme
  with `mix-blend-mode: multiply`, which drops the white background against the page/orb behind
  it without needing an actual image mask.

Content, project selection, and copy are original and tailored to Bilal's real background and
verified GitHub repositories — only the design system and interaction mechanism were reproduced.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4**, with the design tokens and utility classes (`.editorial-title`,
  `.section-label`, `.pill-button`, `.browser-bar`, `.cursor-dot`/`.cursor-ring`, `.motion-button`,
  the grain overlay) in `src/app/globals.css`
- **Framer Motion** for the Hero/Nav entrance, scroll-triggered reveals, the About tab switcher,
  and the accordions
- **Lenis** for smooth scrolling; **Three.js** for the interactive hero orb
- `next/font/google`: **Instrument Serif**, **DM Sans**, **JetBrains Mono**

## Structure

- `src/lib/data.ts` — all content (projects, journey, capabilities, process steps, proof stats,
  skill groups, profile links) in one place.
- `src/lib/motion-context.tsx` — the Motion On/Off provider, persisted to `localStorage`.
- `src/components/` — `Hero`, `HeroOrb` (the Three.js element), `ProofStrip`, `About`, `Work`,
  `ExpertiseJourney` (combines the "How I Think & Work" accordion and the Journey timeline,
  mirroring the source repo's combined `Experience.tsx`), `Skills`, `Contact`, `Footer`, `Nav`,
  `Cursor`, `MotionToggle`, `SmoothScroll` (Lenis), `Reveal` (scroll-triggered entrance animation).
- `public/images/hero-portrait.png` — the supplied hero photo, composited into the Hero section
  with a grayscale filter and `mix-blend-mode: multiply` to drop its white background.

## Content notes — what's verified vs. not

Project content comes from directly cloning and reading the actual source of each GitHub
repository below (package.json, route/model files, committed docs) — not from repo names:

- **Madina Collar, Circle — The AI Universe, AI Business Analyst, ReelBite, Kitchens** are
  presented based on their real, verified tech stack and structure.
- **health-portal** was intentionally left out — it's a one-commit, backend-only repository with
  no frontend code yet.
- The ProofStrip only uses honestly countable numbers (5+ featured projects, 2 live-in-production
  projects, the 2024 start year) — no invented user counts, revenue, or performance metrics (the
  source repo's own stats, like "15,000+ users impacted", are specific to that other developer's
  real work and were not reused).
- The Master's in Data Science is described as **ongoing**, with no university, graduation date,
  or grades invented.
- No email address or résumé file was supplied, so Contact links to GitHub, LinkedIn, and Fiverr
  only. Add a résumé PDF to `public/` and an email `mailto:` via `src/lib/data.ts` → `SITE.email`
  once supplied.
- The Footer's "available remotely" status is a static line — the source repo's own footer shows
  a live clock in its author's timezone, which wasn't reused here since Bilal's location/timezone
  wasn't supplied.

## Running locally

```bash
npm install
npm run dev       # dev server
npm run build     # production build
npm run start     # serve the production build
npm run lint      # ESLint
```

## Testing performed

- `npx tsc --noEmit` — passes with no errors.
- `npm run lint` — passes with no errors or warnings.
- `npm run build` — production build succeeds, all routes statically prerendered.
- Manual Playwright pass at desktop (1440×900) and mobile (390×844) widths: zero console/page
  errors (including the WebGL canvas); all section anchors scroll correctly through Lenis; the
  About tab switcher, Work's expandable architecture accordion, the Expertise accordion, and the
  Skills filter pills were each clicked and verified to update correctly; the custom cursor was
  verified to track the mouse and enlarge on hovering a button; moving the mouse was verified to
  tilt the 3D orb; scroll-reveal animations were captured mid-transition to confirm they fire on
  viewport entry rather than only on page load; the Motion On/Off toggle was verified to disable
  the cursor, orb, and entrance/reveal animations together; the mobile menu opens and closes.

## Known limitations

- The reference site itself was never loaded live in a browser from this environment — its design
  was reproduced from a user-supplied screen recording and, more precisely, from a related public
  repository that shares its design system and literal `sarthak-theme` CSS class name.
- No résumé file or direct email address was supplied; see "Content notes" above for how to add
  them.
- Project links point to GitHub/live URLs rather than embedded screenshots — the live project
  domains (`almadina.site`, `circle-the-ai-universe.vercel.app`) are also blocked by this
  environment's network policy, so no real screenshot could be captured; the browser-chrome mockup
  cards show the real domain name with no image rather than a fabricated screenshot.
