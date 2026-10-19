"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { GithubMark } from "@/components/icons/Brand";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-border py-10 first:pt-0 last:border-0"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <span className="eyebrow">
          {String(index + 1).padStart(2, "0")} — {project.category}
        </span>
        <div className="flex gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-fg-muted transition-colors hover:text-fg"
            >
              {link.label.toLowerCase().includes("code") ? (
                <GithubMark width={13} height={13} />
              ) : null}
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-6 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <div>
          <h3 className="font-display text-2xl font-medium text-fg md:text-3xl">{project.name}</h3>
          <p className="mt-2 text-sm font-medium text-fg-muted md:text-base">{project.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">{project.description}</p>
        </div>

        <div>
          <ul className="space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-fg-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
