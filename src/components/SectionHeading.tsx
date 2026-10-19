import { Reveal } from "@/components/Reveal";

export function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <Reveal>
      <span className="eyebrow">
        {number} / {label}
      </span>
    </Reveal>
  );
}

export function SectionHeading({
  eyebrowNumber,
  eyebrowLabel,
  line1,
  line2,
  description,
  align = "left",
}: {
  eyebrowNumber: string;
  eyebrowLabel: string;
  line1: string;
  line2?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-balance text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
          {line1}
          {line2 && (
            <>
              <br />
              <em className="italic text-fg-muted">{line2}</em>
            </>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-balance text-base leading-relaxed text-fg-muted md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
