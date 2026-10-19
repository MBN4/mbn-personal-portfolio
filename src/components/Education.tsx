import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36">
      <div className="container-page">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {EDUCATION.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-surface/60 p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg text-accent">
                  <GraduationCap size={18} />
                </span>
                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-fg">{item.degree}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-fg-muted">{item.institution}</p>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
