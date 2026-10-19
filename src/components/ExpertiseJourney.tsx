"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ACCORDION_ITEMS, PROCESS_STEPS } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export default function ExpertiseJourney() {
  const [expandedId, setExpandedId] = useState<string>("exp-1");

  return (
    <>
      {/* Chapter index strip */}
      <div style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "1.25rem 2rem", display: "flex", flexWrap: "wrap", gap: "2.5rem", fontFamily: "var(--font-mono)", fontSize: "0.76rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          <a href="#work" style={{ color: "var(--cream)", textDecoration: "none" }}>All work ↗</a>
          <a href="#about" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Engineering philosophy ↗</a>
          <a href="#expertise" style={{ color: "var(--text-muted)", textDecoration: "none" }}>How I think &amp; work ↗</a>
          <a href="#journey" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Journey &amp; education ↗</a>
        </div>
      </div>

      {/* 03 / HOW I THINK & WORK */}
      <section id="expertise" style={{ padding: "7rem 2rem", maxWidth: "1360px", margin: "0 auto", borderBottom: "1px solid var(--border)" }}>
        <div className="section-label">
          <div>
            <span className="square-bullet" />
            <span>03 / HOW I THINK &amp; WORK</span>
          </div>
          <span>DEPTH MEETS PERSPECTIVE</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "start" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <h2 className="editorial-title">
              How I work.
              <br />
              <em>From idea to impact.</em>
            </h2>

            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", margin: 0 }}>Choose a discipline. Follow the process.</p>

            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem", borderLeft: "1px solid var(--border)", paddingLeft: "1.5rem" }}>
              {PROCESS_STEPS.map((step, idx) => (
                <div key={step.step} style={{ display: "flex", alignItems: "center", gap: "1rem", fontFamily: "var(--font-sans)", fontSize: "0.98rem", color: idx === 0 ? "var(--cream)" : "var(--text-muted)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)" }}>{step.step}</span>
                  <span>{step.title}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1rem" }}>
              <a href="#work" className="editorial-link" style={{ fontSize: "0.92rem", color: "var(--cream)" }}>
                <span>Explore the engineering work</span>
                <span style={{ fontSize: "0.8rem" }}>↗</span>
              </a>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {ACCORDION_ITEMS.map((item, idx) => {
              const isExpanded = expandedId === item.id;
              return (
                <Reveal key={item.id} delay={idx * 0.08} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", transition: "border-color 0.25s ease" }}>
                  <button
                    onClick={() => setExpandedId(isExpanded ? "" : item.id)}
                    aria-expanded={isExpanded}
                    style={{ width: "100%", padding: "1.5rem 1.75rem", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left", cursor: "pointer", gap: "1rem" }}
                  >
                    <div>
                      <small style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.4rem" }}>
                        {item.number} / {item.category}
                      </small>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.65rem", fontWeight: 400, color: "#ffffff", margin: 0 }}>{item.title}</h3>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.4rem", color: "var(--cream)", fontWeight: 300 }}>{isExpanded ? "−" : "+"}</span>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: "hidden" }}>
                        <div style={{ padding: "0 1.75rem 1.75rem", borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                          <p style={{ fontSize: "0.94rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{item.description}</p>
                          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "var(--cream-dim)", margin: 0, lineHeight: 1.5 }}>{item.strengths}</p>
                          <a href="#skills" className="editorial-link" style={{ fontSize: "0.85rem", color: "var(--cream)", alignSelf: "flex-start" }}>
                            <span>Full skills breakdown ↗</span>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
