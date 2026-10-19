import { SITE, NAV_LINKS } from "@/lib/data";

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <a href="#top" className="font-display text-lg font-semibold text-fg">
            BN<span className="text-accent">.</span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-fg-muted">
            {SITE.name} — Software Engineer and full-stack developer, building AI-powered
            products. {SITE.location}.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-fg-muted transition-colors hover:text-fg">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-fg-muted transition-colors hover:text-fg">
            GitHub
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-fg-muted transition-colors hover:text-fg">
            LinkedIn
          </a>
          <a href={SITE.fiverr} target="_blank" rel="noopener noreferrer" className="text-fg-muted transition-colors hover:text-fg">
            Fiverr
          </a>
        </div>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-border py-6 text-xs text-fg-faint sm:flex-row sm:items-center sm:justify-between">
        <span>© {YEAR} {SITE.name}. All rights reserved.</span>
        <span>Built with Next.js, Tailwind CSS &amp; Framer Motion.</span>
      </div>
    </footer>
  );
}
