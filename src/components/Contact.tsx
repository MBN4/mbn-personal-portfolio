import { SITE } from "@/lib/data";
import { FiverrMark, GithubMark, LinkedinMark } from "@/components/icons/Brand";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

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
    <section id="contact" className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[640px] -translate-x-1/2 rounded-full opacity-[0.1] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Open to full-time roles, remote positions, and well-scoped freelance or AI automation projects. The fastest way to reach me is through LinkedIn or Fiverr."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {CHANNELS.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 0.08}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6 transition-all hover:-translate-y-1 hover:border-accent/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg text-fg transition-colors group-hover:border-accent/60 group-hover:text-accent">
                  <channel.icon />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold text-fg">
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
