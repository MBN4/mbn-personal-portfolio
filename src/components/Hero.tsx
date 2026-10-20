"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMotionOn } from "@/lib/motion-context";
import { ArrowDownIcon, CornerArrowIcon, PlusIcon } from "@/components/icons/Icons";
import { HeroHalftonePortrait } from "@/components/HeroHalftonePortrait";

export default function Hero() {
  const { motionOn } = useMotionOn();
  const [halftoneDone, setHalftoneDone] = useState(false);

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6rem 2rem 2.5rem",
        overflow: "hidden",
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--bg)",
      }}
    >
      {/* Background Central Portrait — halftone entrance dissolves into the sharp photo */}
      <motion.div
        role="img"
        aria-label="Bilal Nadeem — Software Engineer"
        initial={{ opacity: 0, scale: motionOn ? 1.04 : 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          top: "1.25rem",
          left: "50%",
          x: "-50%",
          width: "min(720px, 82vw)",
          height: "min(780px, 74vh)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {motionOn && !halftoneDone && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => setHalftoneDone(true)}
            style={{ position: "absolute", inset: 0, zIndex: 2 }}
          >
            <HeroHalftonePortrait src="/images/hero-portrait.png" />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: motionOn ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={
            motionOn
              ? { duration: 1.1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }
              : { duration: 0 }
          }
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            maskImage:
              "radial-gradient(ellipse 42% 46% at 50% 40%, black 45%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 42% 46% at 50% 40%, black 45%, transparent 82%)",
          }}
        >
          <Image
            src="/images/hero-portrait.png"
            alt=""
            fill
            priority
            sizes="(max-width: 720px) 82vw, 720px"
            style={{
              objectFit: "cover",
              objectPosition: "50% 15%",
              filter: "contrast(1.08) brightness(1.02) grayscale(100%)",
              mixBlendMode: "multiply",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Topline Metadata Bar */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1360px",
          margin: "0 auto",
          paddingTop: "1rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.74rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span className="live-dot" />
          <span>ENGINEER. FULL-STACK. AI AUTOMATION.</span>
        </div>
        <div className="hidden-sm" style={{ color: "var(--text-muted)" }}>
          OPEN TO REMOTE WORK · THINKING BEYOND
        </div>
      </div>

      {/* Left Vertical Annotation (Desktop only) */}
      <div
        className="hidden-sm"
        style={{
          position: "absolute",
          left: "2.5rem",
          top: "46%",
          transform: "translateY(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          color: "var(--text-dim)",
          textTransform: "uppercase",
        }}
      >
        <span style={{ color: "var(--text-muted)" }}>01 / PRESENCE</span>
        <span style={{ color: "var(--accent)" }}>
          <PlusIcon />
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
          <span>FULL-STACK</span>
          <span>AI AUTOMATION</span>
          <span>DATA SCIENCE</span>
        </div>
      </div>

      {/* Center Main Stage Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "1080px",
          margin: "auto auto",
          padding: "2rem 1rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: motionOn ? 15 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "1.25rem",
          }}
        >
          A Practical Approach to Software
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: motionOn ? 30 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4.2rem, 11vw, 9.5rem)",
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: "-0.025em",
            color: "#ffffff",
            margin: "0 0 1.75rem 0",
          }}
        >
          Bilal <em style={{ fontStyle: "italic", color: "var(--cream)", fontWeight: 400 }}>Nadeem</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: motionOn ? 20 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "var(--text-muted)",
            maxWidth: "640px",
            margin: "0 auto 2.25rem",
          }}
        >
          Software Engineer at Clustox. I build full-stack products on the MERN stack,
          <br className="desktop-break" /> and I&apos;m growing into AI automation and data science.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: motionOn ? 15 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#work"
            className="pill-button-dark"
            style={{
              padding: "0.75rem 1.75rem",
              borderRadius: "9999px",
              fontSize: "0.9rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span>Explore my work</span>
            <ArrowDownIcon />
          </a>

          <a href="#contact" className="editorial-link" style={{ fontSize: "0.92rem", fontWeight: 500 }}>
            <span>Start a conversation</span>
            <CornerArrowIcon />
          </a>
        </motion.div>
      </div>

      {/* Bottom Status & Discover Bar */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1360px",
          margin: "0 auto",
          paddingTop: "2rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-dim)",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <a
          href="#about"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--text-muted)",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
        >
          <span style={{ display: "inline-block", width: "18px", height: "1px", background: "currentColor" }} />
          <span>SCROLL TO DISCOVER</span>
          <ArrowDownIcon width={12} height={12} />
        </a>

        <div className="hidden-sm" style={{ color: "var(--text-muted)" }}>
          ENGINEERING SINCE 2024
        </div>

        <a
          href="#work"
          style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s ease" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
        >
          AN ONGOING EXPLORATION ↗
        </a>
      </div>
    </section>
  );
}
