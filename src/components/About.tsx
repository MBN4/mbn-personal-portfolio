import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionEyebrow } from "@/components/SectionHeading";

const TAGS = ["Build", "Learn", "Automate"];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="flex items-start justify-between gap-6">
          <SectionEyebrow number="01" label="The person behind the work" />
          <span className="hidden text-xs uppercase tracking-[0.2em] text-fg-faint md:inline">
            A grounded perspective
          </span>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/hero-portrait.jpg"
                alt="Bilal Nadeem"
                fill
                sizes="320px"
                className="halftone object-cover"
                style={{ objectPosition: "50% 15%" }}
              />
            </div>
            <div className="mt-5 flex gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-fg-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="font-display text-balance text-3xl font-medium leading-[1.1] sm:text-4xl md:text-5xl">
                Full-stack is the starting point.
                <br />
                <em className="italic text-fg-muted">AI automation is the point.</em>
              </h3>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-7 space-y-5 text-balance text-base leading-relaxed text-fg-muted md:text-lg">
                <p>
                  I completed my <span className="text-fg">B.S. in Computer Science in 2024</span>{" "}
                  and have been working since as a{" "}
                  <span className="text-fg">Software Engineer at Clustox</span>, building
                  full-stack web applications on the MERN stack — designing APIs, modeling data,
                  and shipping the interfaces that sit on top of them.
                </p>
                <p>
                  Alongside that, I&apos;m pursuing a{" "}
                  <span className="text-fg">Master&apos;s in Data Science</span>, which is the
                  bridge into what I&apos;m most excited about right now:{" "}
                  <span className="text-fg">AI automation</span> — wiring language models and
                  intelligent workflows into software that solves a concrete problem, not demos
                  that just look clever.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <a
                href="#work"
                className="mt-7 inline-flex items-center gap-1.5 border-b border-fg/40 pb-0.5 text-sm font-medium text-fg transition-colors hover:border-cream hover:text-cream"
              >
                Explore the projects →
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
