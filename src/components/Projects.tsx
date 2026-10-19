import { FEATURED_PROJECTS, OTHER_PROJECTS, SITE } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured Projects"
            title="What I've built"
            description="A selection of real, built, and in most cases deployed projects — picked for what they actually demonstrate, not for even coverage of every repo."
          />
          <Reveal delay={0.1}>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent/60 hover:text-fg md:inline-flex"
            >
              All repositories →
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {OTHER_PROJECTS.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <h3 className="font-display text-xl font-semibold text-fg">More Projects</h3>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {OTHER_PROJECTS.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
