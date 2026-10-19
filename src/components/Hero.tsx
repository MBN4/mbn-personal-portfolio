"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CircleDot } from "lucide-react";
import { ROLES, SITE } from "@/lib/data";

const headline = "Software Engineer & Full-Stack Developer";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const words = headline.split(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="gradient-fade pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-fg-muted"
        >
          <CircleDot size={13} className="text-accent" />
          Open to full-time, remote &amp; project-based opportunities
        </motion.div>

        <h1 className="font-display max-w-4xl text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          {words.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: reduceMotion ? 0 : 0.08 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-7 max-w-xl text-balance text-lg text-fg-muted md:text-xl"
        >
          I&apos;m <span className="text-fg">Bilal Nadeem</span> — I build full-stack products
          on the MERN stack at{" "}
          <span className="text-fg">Clustox</span>, I&apos;m pursuing an{" "}
          <span className="text-fg">M.S. in Data Science</span>, and I&apos;m growing a focused
          practice in <span className="text-fg">AI automation</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-sm text-fg-muted"
        >
          <span>Currently positioning for:</span>
          <span className="relative inline-flex h-6 min-w-[9rem] items-center overflow-hidden sm:min-w-[11rem]">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIndex]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 text-accent"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            View My Work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-accent/60"
          >
            Discuss a Project
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
          >
            Explore My Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
