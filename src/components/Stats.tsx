import { STATS } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Stats() {
  return (
    <section className="border-y border-border py-16 md:py-20">
      <div className="container-page grid gap-10 sm:grid-cols-3">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="font-display text-5xl font-medium tracking-tight text-fg md:text-6xl">
              {stat.value}
              <span className="text-accent">{stat.accent}</span>
            </div>
            <p className="mt-3 text-sm font-semibold text-fg">{stat.label}</p>
            <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-fg-muted">
              {stat.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
