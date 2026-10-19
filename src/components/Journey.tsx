import { EDUCATION, EXPERIENCE, JOURNEY } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function JourneySection() {
  return (
    <section id="journey" className="relative py-24 md:py-32">
      <div className="container-page grid gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <SectionHeading
            eyebrowNumber="05"
            eyebrowLabel="Part of the building story"
            line1="From the classroom."
            line2="To the engineering team."
            description="Since 2024, I've completed my degree, joined a professional engineering team, and started building toward data and AI alongside that work."
          />

          <Reveal delay={0.1} className="mt-9 space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-fg-faint">
                Education
              </h3>
              <div className="mt-3 space-y-4">
                {EDUCATION.map((item) => (
                  <div key={item.degree}>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-display text-base font-medium text-fg">
                        {item.degree}
                      </span>
                      <span className="text-xs font-medium text-accent">{item.period}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-fg-faint">
                Experience
              </h3>
              <div className="mt-3 space-y-2">
                {EXPERIENCE.map((job) => (
                  <div key={job.company}>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-display text-base font-medium text-fg">
                        {job.title} · {job.company}
                      </span>
                      <span className="text-xs font-medium text-accent">{job.period}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-fg-muted">{job.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="space-y-0 divide-y divide-border border-y border-border md:border-0 md:pt-[4.5rem]">
          {JOURNEY.map((entry, i) => (
            <Reveal key={entry.year} delay={0.1 + i * 0.1} className="flex gap-6 py-6 first:pt-0">
              <span className="w-24 flex-shrink-0 font-display text-sm font-medium text-accent">
                {entry.year}
              </span>
              <div>
                <h4 className="font-display text-lg font-medium text-fg">{entry.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                  {entry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
