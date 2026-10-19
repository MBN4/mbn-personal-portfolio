# Bilal Nadeem — Personal Portfolio

A premium, animated personal portfolio for Bilal Nadeem, Software Engineer and full-stack
developer at Clustox, pursuing an M.S. in Data Science and building toward AI automation.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling, with a small custom design-token layer in `src/app/globals.css`
- **Framer Motion** for scroll-triggered reveals, staggered hero text, hover microinteractions,
  and the mobile menu transition
- **Lenis** for smooth scrolling, with anchor-nav offset handling and full respect for
  `prefers-reduced-motion` (Lenis and all entrance animations are skipped entirely for users who
  request reduced motion)

## Structure

- `src/lib/data.ts` — all content (projects, experience, skills, education, profile links) in one
  place; update this file to change copy without touching components.
- `src/components/` — one component per section (`Hero`, `About`, `Experience`, `Skills`,
  `Projects`, `AIAutomation`, `Education`, `Contact`, `Footer`), plus shared primitives
  (`Reveal`/`RevealGroup` for scroll animation, `SectionHeading`, `Nav`, `SmoothScroll`,
  `BackToTop`, `Loader`).
- `src/components/ProjectCard.tsx` — the featured/other project card used in the Projects section.

## Content notes — what's verified vs. not

This site's content was written from direct research (cloning and reading the actual source of
each GitHub repository listed below — package.json, route/model files, and any committed
documentation — rather than guessing from repo names):

- **Madina Collar, Circle — The AI Universe, AI Business Analyst, ReelBite, Kitchens** are all
  presented based on their real, verified tech stack and structure.
- **health-portal** was intentionally left out of the featured list — it's a one-commit,
  backend-only repository with no frontend code yet, so there wasn't enough there to describe
  honestly as a finished project.
- The Master's in Data Science is described as **ongoing**, with no university, graduation date,
  or grades invented, per the brief.
- No email address, phone number, or resume file was supplied, so the Contact section links to
  GitHub, LinkedIn, and Fiverr only. Add a résumé PDF to `public/` and a "Download Résumé" link
  once one is supplied, and add a direct email `mailto:` link to `src/lib/data.ts` → `SITE.email`
  if you want one included.
- Job responsibilities at Clustox are described generically (full-stack engineering on a
  professional team) because no public source gave specific, verifiable project details beyond
  title and start year — update `EXPERIENCE` in `src/lib/data.ts` with specifics if you'd like
  them included.

### About the reference website

The brief named `https://sarthak-sharma-portfolio-six.vercel.app/` as the primary design
reference. **This environment's network policy blocks outbound access to `*.vercel.app` domains
(and also blocked `linkedin.com` and `fiverr.com`)** — confirmed via both `WebFetch` and a direct
proxy check, not assumed. The reference site could not be loaded, screenshotted, or inspected in
any way, so its layout, animation timing, and visual details were **not copied or reproduced** —
they were not observed. The design here was built from the brief's own written requirements
(smooth scrolling, scroll-triggered reveals, staggered hero text, hover microinteractions, a
sticky nav with active-section tracking, a brief load-in animation, reduced-motion support) using
general premium-portfolio best practices. If you can share screenshots or HTML/CSS of the
reference site, the visual design can be revisited against it directly.

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
- `npm run eslint` — passes with no errors or warnings.
- `npm run build` — production build succeeds, all routes statically prerendered.
- Manual Playwright pass at desktop (1440×900) and mobile (390×844) widths: zero console/page
  errors, all section anchors scroll correctly, active-nav-link tracking works, mobile menu opens
  and closes, back-to-top button appears after scrolling, and all external profile links
  (GitHub/LinkedIn/Fiverr) point to the correct URLs.

## Known limitations

- The reference website could not be inspected (see above) — the visual/animation design is an
  original interpretation of the brief's requirements, not a reproduction of that site.
- No résumé file or direct email address was supplied; see "Content notes" above for how to add
  them.
- Project screenshots/live previews are not embedded — most of the GitHub repos researched don't
  have public preview images, and only Madina Collar and Circle — The AI Universe have live,
  loadable demo URLs. Links are provided instead of screenshots to avoid showing unverified or
  placeholder imagery.
