import { PROCESS_STEPS, SKILLS } from "@/lib/data";
import { Accordion } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { SectionEyebrow } from "@/components/SectionHeading";

export function HowIWork() {
  return (
    <section id="how-i-work" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionEyebrow number="03" label="How I think & work" />

        <div className="mt-8 grid gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <Reveal delay={0.06}>
              <h2 className="font-display text-balance text-4xl font-medium leading-[1.08] sm:text-5xl">
                How I work.
                <br />
                <em className="italic text-fg-muted">From idea to impact.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-balance text-base text-fg-muted">
                Choose a discipline. Follow the thinking.
              </p>
            </Reveal>

            <div className="mt-10 space-y-7">
              {PROCESS_STEPS.map((step, i) => (
                <Reveal key={step.step} delay={0.1 + i * 0.08}>
                  <div className="flex gap-5">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border text-xs font-medium text-fg-muted">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium text-fg">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal delay={0.1}>
              <Accordion />
            </Reveal>

            <Reveal delay={0.2} className="mt-10">
              <h3 className="eyebrow">Skills &amp; tools</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {SKILLS.map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-fg-faint">
                      {group.category}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                      {group.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
