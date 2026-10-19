import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const PILLARS = [
  {
    title: "Full-stack engineering",
    body: "Building complete products end to end — from PostgreSQL/MongoDB data models and Express APIs to React, Next.js, and React Native clients — primarily on the MERN stack.",
  },
  {
    title: "AI automation",
    body: "Integrating LLM APIs (OpenAI, Gemini) into real applications — chat agents, recommendation logic, and automated summarization — to make software do more of the work.",
  },
  {
    title: "Data-driven thinking",
    body: "An ongoing Master's in Data Science is sharpening how I reason about data, modeling, and decision-making — and how that connects back to the products I build.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="A full-stack engineer, expanding toward AI and data"
        />

        <div className="mt-14 grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <Reveal>
            <div className="space-y-5 text-balance text-lg leading-relaxed text-fg-muted">
              <p>
                I completed my{" "}
                <span className="text-fg">B.S. in Computer Science in 2024</span> and have been
                working since as a{" "}
                <span className="text-fg">Software Engineer at Clustox</span>, building full-stack
                web applications on the MERN stack — designing APIs, modeling data, and shipping
                the interfaces that sit on top of them.
              </p>
              <p>
                Alongside that, I&apos;m pursuing a{" "}
                <span className="text-fg">Master&apos;s in Data Science</span>, which is pushing
                me to think more rigorously about data and the systems built on it. It&apos;s also
                the bridge into the area I&apos;m most excited about right now:{" "}
                <span className="text-fg">AI automation</span> — wiring language models and
                intelligent workflows into software that solves a concrete problem, not just demos
                that look clever.
              </p>
              <p>
                My approach stays practical: understand the actual requirement, break it into
                buildable pieces, and ship something that works reliably — then look for the parts
                of that process that could be automated or made smarter next time.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-accent/40">
                  <h3 className="font-display text-base font-semibold text-fg">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
