import { SKILLS } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          description="Grouped by where they fit in the stack — demonstrated through the projects below, not abstract proficiency scores."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-accent/40">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-fg-muted">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-medium text-fg transition-colors hover:border-accent/60 hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
