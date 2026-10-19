import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/data";
import { FiverrMark, GithubMark, LinkedinMark } from "@/components/icons/Brand";
import { Reveal } from "@/components/Reveal";
import { SectionEyebrow } from "@/components/SectionHeading";

const CHANNELS = [
  {
    label: "GitHub",
    href: SITE.github,
    icon: GithubMark,
    description: "Browse my code and project history",
  },
  {
    label: "LinkedIn",
    href: SITE.linkedin,
    icon: LinkedinMark,
    description: "Connect or message me directly",
  },
  {
    label: "Fiverr",
    href: SITE.fiverr,
    icon: FiverrMark,
    description: "Hire me for a project-based engagement",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionEyebrow number="06" label="The next chapter" />

        <Reveal delay={0.08}>
          <h2 className="font-display mt-6 max-w-3xl text-balance text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl">
            Something great
            <br />
            starts with <em className="italic text-fg-muted">a hello.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <a
            href="#contact-channels"
            className="mt-8 inline-flex items-center gap-2 border-b border-fg/40 pb-1 text-base font-medium text-fg transition-colors hover:border-cream hover:text-cream"
          >
            Let&apos;s connect
            <ArrowUpRight size={17} />
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
            Open to full-time roles, remote positions, and well-scoped freelance or AI automation
            projects.
          </p>
        </Reveal>

        <div id="contact-channels" className="mt-16 grid gap-5 scroll-mt-28 sm:grid-cols-3">
          {CHANNELS.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 0.08}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:border-cream/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-fg transition-colors group-hover:border-accent/60 group-hover:text-accent">
                  <channel.icon />
                </span>
                <h3 className="font-display mt-5 text-lg font-medium text-fg">
                  {channel.label}
                </h3>
                <p className="mt-1 text-sm text-fg-muted">{channel.description}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
