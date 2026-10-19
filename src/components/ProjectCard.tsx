"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import { GithubMark } from "@/components/icons/Brand";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col rounded-3xl border border-border bg-surface/60 p-7 transition-colors hover:border-accent/50 md:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-accent">
            {project.category}
          </span>
          <h3 className="font-display mt-2 text-2xl font-semibold text-fg">{project.name}</h3>
        </div>
        <div className="flex gap-2">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} for ${project.name}`}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border text-fg-muted transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
            >
              {link.label.toLowerCase().includes("code") ? (
                <GithubMark width={16} height={16} />
              ) : (
                <ArrowUpRight size={16} />
              )}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-3 text-sm font-medium text-fg-muted">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-fg-muted">{project.description}</p>

      <div className="mt-5 space-y-2">
        {project.highlights.map((h) => (
          <div key={h} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
            <span>{h}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-bg px-2.5 py-1 text-[11px] font-medium text-fg-muted transition-colors group-hover:border-border"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
