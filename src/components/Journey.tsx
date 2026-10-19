"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { JOURNEY_STORY } from "@/lib/data";
import { useMotionOn } from "@/lib/motion-context";

function StoryBeat({
  beat,
  index,
}: {
  beat: (typeof JOURNEY_STORY)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { motionOn } = useMotionOn();
  const isRight = index % 2 === 1;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.45"],
  });

  const dotScale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const dotGlow = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const dotShadow = useTransform(
    dotGlow,
    (v) => `0 0 ${v * 24}px rgba(255, 112, 51, ${v * 0.75})`
  );

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr",
        padding: "2.5rem 0",
      }}
      className="journey-beat"
    >
      {/* Center dot on the spine */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          left: "calc(50% - 7px)",
          top: "3.1rem",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          background: "var(--accent)",
          scale: motionOn ? dotScale : 1,
          boxShadow: motionOn ? dotShadow : "0 0 12px rgba(255, 112, 51, 0.5)",
          zIndex: 3,
        }}
        className="journey-dot"
      />

      <motion.div
        initial={{ opacity: 0, x: motionOn ? (isRight ? 60 : -60) : 0, y: motionOn ? 20 : 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="journey-card"
        style={{
          gridColumn: "1 / -1",
          justifySelf: isRight ? "end" : "start",
          width: "100%",
          maxWidth: "min(46%, 480px)",
          textAlign: isRight ? "right" : "left",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "0.5rem",
          }}
        >
          {beat.marker}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)",
            fontWeight: 400,
            color: "#ffffff",
            margin: "0 0 0.6rem",
            lineHeight: 1.15,
          }}
        >
          {beat.title}
        </h3>
        <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
          {beat.body}
        </p>
        <span
          style={{
            display: "inline-block",
            marginTop: "0.9rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.66rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-dim)",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            padding: "0.3rem 0.6rem",
          }}
        >
          {beat.tag}
        </span>
      </motion.div>
    </div>
  );
}

export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { motionOn } = useMotionOn();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.4"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section
      id="journey"
      style={{ padding: "7rem 2rem", maxWidth: "1360px", margin: "0 auto", borderBottom: "1px solid var(--border)" }}
    >
      <div className="section-label">
        <div>
          <span className="square-bullet" />
          <span>04 / PART OF THE BUILDING STORY</span>
        </div>
        <span>EDUCATION &amp; EXPERIENCE</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: motionOn ? 24 : 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <h2 className="editorial-title">
          From the classroom.
          <br />
          <em>To the engineering team.</em>
        </h2>
        <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "520px", margin: "1rem auto 0" }}>
          Since 2024, I&apos;ve completed my degree, joined a professional engineering team, and
          started building toward data and AI alongside that work.
        </p>
      </motion.div>

      <div ref={sectionRef} style={{ position: "relative" }}>
        {/* Static track */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "var(--border)",
            transform: "translateX(-50%)",
          }}
          className="journey-track"
        />
        {/* Scroll-linked fill */}
        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: "2px",
            height: "100%",
            background: "linear-gradient(to bottom, var(--accent), var(--cream))",
            transform: "translateX(-50%)",
            transformOrigin: "top",
            scaleY: motionOn ? lineProgress : 1,
          }}
          className="journey-track"
        />

        {JOURNEY_STORY.map((beat, i) => (
          <StoryBeat key={beat.marker} beat={beat} index={i} />
        ))}
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .journey-track {
            left: 18px !important;
          }
          .journey-dot {
            left: 11px !important;
          }
          .journey-card {
            max-width: 100% !important;
            justify-self: stretch !important;
            text-align: left !important;
            padding-left: 2.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
