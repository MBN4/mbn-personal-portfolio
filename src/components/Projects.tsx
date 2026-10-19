import { ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS, OTHER_PROJECTS, SITE } from "@/lib/data";
import { ProjectRow } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrowNumber="02"
          eyebrowLabel="Selected work"
          line1="Ideas are a start."
          line2="This is the work."
          description="A selection of real, built, and in most cases deployed projects — picked for what they actually demonstrate, not for even coverage of every repo."
        />

        <div className="mt-14">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>

        {OTHER_PROJECTS.length > 0 && (
          <div className="mt-4 border-t border-border pt-8">
            <Reveal>
              <span className="eyebrow">More ways I work</span>
            </Reveal>
            <div className="mt-5 divide-y divide-border">
              {OTHER_PROJECTS.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.06}>
                  <a
                    href={project.links[0]?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wide text-fg-faint">
                        {project.category}
                      </span>
                      <h3 className="font-display mt-1 text-xl font-medium text-fg transition-colors group-hover:text-cream md:text-2xl">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm text-fg-muted">{project.tagline}</p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="flex-shrink-0 text-fg-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                    />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <Reveal className="mt-8 flex justify-end">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-cream"
          >
            Explore all repositories
            <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
