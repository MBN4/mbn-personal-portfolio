import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-balance text-base leading-relaxed text-fg-muted md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
