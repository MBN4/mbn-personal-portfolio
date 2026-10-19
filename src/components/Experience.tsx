import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been building"
          description="Professional experience building production software as part of an engineering team."
        />

        <div className="relative mt-16 max-w-3xl">
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-border md:left-[22px]" />
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="relative pl-12 pb-12 last:pb-0 md:pl-16">
              <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 bg-bg text-accent md:h-11 md:w-11">
                <Briefcase size={16} />
              </span>

              <div className="rounded-2xl border border-border bg-surface/60 p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {job.title} · {job.company}
                  </h3>
                  <span className="text-sm font-medium text-accent">{job.period}</span>
                </div>
                <p className="mt-3 text-fg-muted leading-relaxed">{job.summary}</p>
                <ul className="mt-5 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
