import { SITE } from "@/lib/data";

const YEAR = 2026;

const SOCIALS = [
  { label: "GitHub", href: SITE.github },
  { label: "LinkedIn", href: SITE.linkedin },
  { label: "Fiverr", href: SITE.fiverr },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-display text-base font-medium text-fg">{SITE.name}</span>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {social.label} ↗
            </a>
          ))}
        </nav>

        <span className="text-xs text-fg-faint">© {YEAR} {SITE.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
