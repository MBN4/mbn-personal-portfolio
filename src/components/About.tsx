"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DISCIPLINES, type DisciplineKey } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export default function About() {
  const [activeTab, setActiveTab] = useState<DisciplineKey>("build");
  const current = DISCIPLINES[activeTab];

  return (
    <section id="about" style={{ padding: "7rem 2rem", maxWidth: "1360px", margin: "0 auto", borderBottom: "1px solid var(--border)" }}>
      <div className="section-label">
        <div>
          <span className="square-bullet" />
          <span>02 / THE PERSON BEHIND THE WORK</span>
        </div>
        <span>A CONNECTED PERSPECTIVE</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "start" }}>
        {/* Left Column */}
        <Reveal style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <h2 className="editorial-title">
            Full-stack is
            <br />
            the starting point.
            <br />
            <em>AI automation is the point.</em>
          </h2>

          <p style={{ fontSize: "1.25rem", color: "var(--cream)", fontWeight: 400, lineHeight: 1.5 }}>
            I connect full-stack engineering, AI automation, and an ongoing study of data science.
          </p>

          <p style={{ fontSize: "1.02rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "520px" }}>
            Since 2024, I&apos;ve worked as a{" "}
            <strong style={{ color: "#ffffff", fontWeight: 500 }}>Software Engineer at Clustox</strong>
            {" "}— building full-stack web applications on the MERN stack while pursuing an M.S. in Data
            Science and shipping AI-powered side projects on my own.
          </p>

          <div>
            <a href="#journey" className="editorial-link" style={{ fontSize: "1rem", fontWeight: 500, color: "var(--cream)" }}>
              <span>Read my journey</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginTop: "1.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              color: "var(--text-dim)",
            }}
          >
            <span style={{ border: "1px solid var(--border)", padding: "0.35rem 0.75rem", borderRadius: "4px" }}>ENGINEERING MIND.</span>
            <span style={{ border: "1px solid var(--border)", padding: "0.35rem 0.75rem", borderRadius: "4px" }}>BUILDER&apos;S FOLLOW-THROUGH.</span>
            <span style={{ border: "1px solid var(--border)", padding: "0.35rem 0.75rem", borderRadius: "4px" }}>STUDENT OF DATA.</span>
          </div>
        </Reveal>

        {/* Right Column: Interactive Signal Explorer */}
        <Reveal
          delay={0.15}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            <span>THREE DISCIPLINES. ONE PRACTICE.</span>
            <span style={{ color: "var(--cream)" }}>{current.index}</span>
          </div>

          <div
            style={{
              position: "relative",
              height: "240px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "12px",
              background: "rgba(5, 5, 7, 0.6)",
              overflow: "hidden",
            }}
          >
            <AnimatePresence mode="wait">
              {activeTab === "build" && (
                <motion.div
                  key="build-canvas"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                    <rect x="20" y="20" width="140" height="140" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                    <rect x="35" y="35" width="110" height="110" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                    <rect x="50" y="50" width="80" height="80" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                    <rect x="65" y="65" width="50" height="50" stroke="rgba(255, 112, 51, 0.8)" strokeWidth="1.5" />
                    <line x1="90" y1="20" x2="90" y2="160" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                    <line x1="20" y1="90" x2="160" y2="90" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                  </svg>
                </motion.div>
              )}

              {activeTab === "automate" && (
                <motion.div
                  key="automate-canvas"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <svg width="240" height="180" viewBox="0 0 240 180" fill="none">
                    <path d="M20 90 Q60 30 120 90 T220 90" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
                    <path d="M20 90 Q60 150 120 90 T220 90" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />
                    <circle cx="60" cy="60" r="4" fill="var(--accent)" />
                    <circle cx="120" cy="90" r="5" fill="#ffffff" />
                    <circle cx="180" cy="120" r="4" fill="var(--accent)" />
                    <line x1="60" y1="60" x2="180" y2="120" stroke="rgba(255, 112, 51, 0.4)" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                </motion.div>
              )}

              {activeTab === "learn" && (
                <motion.div
                  key="learn-canvas"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <svg width="200" height="180" viewBox="0 0 200 180" fill="none">
                    <circle cx="100" cy="90" r="25" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <circle cx="100" cy="90" r="48" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="100" cy="90" r="70" stroke="rgba(255, 112, 51, 0.6)" strokeWidth="1.2" />
                    <circle cx="100" cy="90" r="6" fill="#ffffff" />
                    <circle cx="50" cy="50" r="3" fill="rgba(255,255,255,0.6)" />
                    <circle cx="150" cy="50" r="3" fill="rgba(255,255,255,0.6)" />
                    <circle cx="50" cy="130" r="3" fill="rgba(255,255,255,0.6)" />
                    <circle cx="150" cy="130" r="3" fill="rgba(255,255,255,0.6)" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>

            <span
              style={{
                position: "relative",
                zIndex: 2,
                background: "rgba(12, 12, 16, 0.85)",
                border: "1px solid var(--border)",
                padding: "0.35rem 0.85rem",
                borderRadius: "9999px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.15em",
                color: "var(--cream)",
              }}
            >
              {current.label}
            </span>
          </div>

          <div
            role="group"
            aria-label="Explore my disciplines"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.5rem",
              background: "rgba(5, 5, 7, 0.5)",
              padding: "0.35rem",
              borderRadius: "8px",
              border: "1px solid var(--border)",
            }}
          >
            {(Object.keys(DISCIPLINES) as DisciplineKey[]).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  aria-pressed={isActive}
                  style={{
                    padding: "0.65rem 0.5rem",
                    background: isActive ? "var(--cream)" : "transparent",
                    color: isActive ? "#050507" : "var(--text-muted)",
                    border: "none",
                    borderRadius: "6px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.3rem",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>{DISCIPLINES[tab].name}</span>
                  <span style={{ fontSize: "0.75rem", opacity: isActive ? 1 : 0.6 }}>↗</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
            >
              <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.2rem", fontWeight: 600, color: "#ffffff" }}>
                {current.headline}
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{current.description}</p>
              <a href={current.linkHref} className="editorial-link" style={{ marginTop: "0.5rem", fontSize: "0.88rem", color: "var(--cream)" }}>
                <span>{current.linkText}</span>
                <span style={{ fontSize: "0.8rem" }}>↗</span>
              </a>
            </motion.div>
          </AnimatePresence>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--text-dim)",
              letterSpacing: "0.08em",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              paddingTop: "0.75rem",
              margin: 0,
            }}
          >
            Choose a discipline.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
