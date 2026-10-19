"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useMotionOn } from "@/lib/motion-context";

const NAME_LINE1 = "Bilal";
const NAME_LINE2 = "Nadeem";

export function Hero() {
  const { motionOn, toggle } = useMotionOn();

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-[120px] md:pt-[140px]">
      {/* top meta row */}
      <div className="container-page flex flex-wrap items-center justify-between gap-3">
        <span className="eyebrow">Engineer · Full-Stack · AI Automation</span>
        <span className="eyebrow !text-fg-faint">Open to remote &amp; project work</span>
      </div>

      <div className="container-page mt-10 grid items-center gap-12 md:mt-16 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
        {/* text column */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: motionOn ? 28 : 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-balance text-[3.1rem] font-medium leading-[0.98] tracking-tight sm:text-7xl md:text-[5.2rem]"
          >
            {NAME_LINE1}
            <br />
            <em className="italic text-fg-muted">{NAME_LINE2}</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: motionOn ? 18 : 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-md text-balance text-lg leading-relaxed text-fg-muted"
          >
            Software Engineer at Clustox. I build full-stack products on the MERN stack, and I&apos;m
            growing into AI automation while pursuing an M.S. in Data Science.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: motionOn ? 18 : 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-fg/80 px-6 py-3.5 text-sm font-medium text-fg transition-colors hover:border-cream hover:text-cream"
            >
              Explore my work
              <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
            >
              Start a conversation
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* portrait column */}
        <motion.div
          initial={{ opacity: 0, scale: motionOn ? 0.96 : 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border md:max-w-none"
        >
          <Image
            src="/images/hero-portrait.jpg"
            alt="Portrait of Bilal Nadeem"
            fill
            priority
            sizes="(min-width: 768px) 40vw, 90vw"
            className="halftone object-cover"
            style={{ objectPosition: "50% 20%" }}
          />
          <div className="halftone-fade absolute inset-0" />
        </motion.div>
      </div>

      {/* bottom meta row */}
      <div className="container-page mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 md:mt-24">
        <a
          href="#about"
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-fg-muted transition-colors hover:text-fg"
        >
          Scroll to discover
          <ArrowDown size={13} className="transition-transform group-hover:translate-y-0.5" />
        </a>
        <span className="hidden text-xs uppercase tracking-[0.2em] text-fg-faint sm:inline">
          Engineering since 2024
        </span>
        <button
          onClick={toggle}
          className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-fg-muted transition-colors hover:text-fg"
          aria-pressed={motionOn}
        >
          <span
            className={`relative inline-flex h-4 w-8 items-center rounded-full transition-colors ${
              motionOn ? "bg-accent" : "bg-border"
            }`}
          >
            <motion.span
              className="inline-block h-3 w-3 rounded-full bg-bg"
              animate={{ x: motionOn ? 16 : 2 }}
              transition={{ duration: 0.2 }}
            />
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={motionOn ? "on" : "off"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Motion {motionOn ? "On" : "Off"}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
    </section>
  );
}
