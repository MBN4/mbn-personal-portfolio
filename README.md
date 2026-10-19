# Bilal Nadeem — Personal Portfolio

A premium, animated personal portfolio for Bilal Nadeem, Software Engineer and full-stack
developer at Clustox, pursuing an M.S. in Data Science and building toward AI automation.

## Design reference

The visual design directly follows **a screen recording of the actual reference site**
(`sarthak-sharma-portfolio-six.vercel.app`) the user supplied, since this environment's network
policy blocks outbound access to that domain (and to `linkedin.com`/`fiverr.com` — confirmed via
`WebFetch` and a direct proxy check). Frames were extracted from that recording and used to
reproduce its real layout, typography, and interaction patterns:

- A serif display font (Fraunces) mixing roman and italic within the same two-line headline
  (`Ideas are a start. *This is the work.*`), used for every section heading.
- Numbered section eyebrows (`02 / SELECTED WORK`) with a small square accent dot.
- A warm cream-on-near-black palette instead of a generic dark/neon theme.
- A halftone/grayscale portrait treatment in the hero and About section (CSS `grayscale` +
  `contrast` + a dot-pattern overlay blended with `mix-blend-mode`).
- A stat bar, an accordion capability list (`+`/`−` expand), numbered process steps, a
  project-row layout with eyebrow numbering and an "Explore the story"-style link, a unified
  timeline ("journey"), and a closing full-bleed CTA line, all modeled on the recording's actual
  section rhythm.
- A functional **"Motion On/Off" toggle** in the hero's bottom meta row, matching the reference's
  own toggle — it disables Lenis smooth scroll and switches all Framer Motion entrance offsets to
  zero, on top of (not instead of) honoring the OS `prefers-reduced-motion` setting.

Content, project selection, and copy are original and tailored to Bilal's real background — only
the layout/typography/interaction system was reproduced from the recording, per the brief's
instruction to adapt rather than copy.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4**, with design tokens (color, the halftone utility classes, the `eyebrow` label
  style) in `src/app/globals.css`
- **Framer Motion** for scroll-triggered reveals, the hero entrance, the accordion, and the mobile
  menu transition
- **Lenis** for smooth scrolling, gated by the motion toggle and `prefers-reduced-motion`
- `next/font/google`: **Fraunces** (serif display, roman + italic) and **Inter** (UI text)

## Structure

- `src/lib/data.ts` — all content (projects, journey, capabilities, process steps, stats, skills,
  profile links) in one place; update this file to change copy without touching components.
- `src/lib/motion-context.tsx` — the Motion On/Off provider, persisted to `localStorage`.
- `src/components/` — one component per section: `Hero`, `Stats`, `About`, `Projects` (+
  `ProjectCard.tsx`'s `ProjectRow`), `HowIWork` (+ `Accordion`), `AIAutomation`, `Journey`,
  `Contact`, `Footer` — plus shared primitives (`Reveal`, `SectionHeading`'s `SectionEyebrow`,
  `Nav`, `SmoothScroll`, `BackToTop`, `Loader`).
- `public/images/hero-portrait.jpg` — the supplied hero photo, used in both the hero and About
  sections with the halftone treatment.

## Content notes — what's verified vs. not

This site's project content comes from directly cloning and reading the actual source of each
GitHub repository below (package.json, route/model files, committed docs) — not from repo names:

- **Madina Collar, Circle — The AI Universe, AI Business Analyst, ReelBite, Kitchens** are
  presented based on their real, verified tech stack and structure.
- **health-portal** was intentionally left out of the featured list — it's a one-commit,
  backend-only repository with no frontend code yet.
- The stat bar uses only honestly countable numbers (5 featured projects, 2 live-in-production
  projects, the 2024 start year) — no invented user counts, revenue, or traffic figures.
- The Master's in Data Science is described as **ongoing**, with no university, graduation date,
  or grades invented.
- No email address, phone number, or résumé file was supplied, so Contact links to GitHub,
  LinkedIn, and Fiverr only. Add a résumé PDF to `public/` and a "Download Résumé" link, and an
  email `mailto:` via `src/lib/data.ts` → `SITE.email`, once supplied.
- Clustox responsibilities are described generically (full-stack engineering on a professional
  team) since no public source gave more specific, verifiable detail — update `EXPERIENCE` /
  `JOURNEY` in `src/lib/data.ts` if you'd like specifics included.

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
  errors, all section anchors scroll correctly, active-nav-link tracking works, the mobile menu
  opens/closes, the Motion On/Off toggle flips state and persists, back-to-top appears after
  scrolling, and all external profile links (GitHub/LinkedIn/Fiverr) point to the correct URLs.

## Known limitations

- The reference site itself was still never loaded live in a browser from this environment —
  only frames from the user-supplied screen recording were available, so some real-time behavior
  (exact scroll-reveal timing, cursor interactions, the browser-chrome project mockups) is
  approximated rather than pixel-matched.
- No résumé file or direct email address was supplied; see "Content notes" above for how to add
  them.
- Project links point to GitHub rather than embedded screenshots — only Madina Collar and
  Circle — The AI Universe have live, loadable demo URLs, and the repos don't carry public
  preview images.
