"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ACCORDION_ITEMS, EDUCATION, EXPERIENCE, PROCESS_STEPS } from "@/lib/data";
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

      {/* 04 / JOURNEY */}
      <section id="journey" style={{ padding: "7rem 2rem", maxWidth: "1360px", margin: "0 auto", borderBottom: "1px solid var(--border)" }}>
        <div className="section-label">
          <div>
            <span className="square-bullet" />
            <span>04 / PART OF THE BUILDING STORY</span>
          </div>
          <span>EDUCATION &amp; EXPERIENCE</span>
        </div>

        <Reveal style={{ marginBottom: "3rem" }}>
          <h2 className="editorial-title">
            From the classroom.
            <br />
            <em>To the engineering team.</em>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "480px", marginTop: "1rem" }}>
            Since 2024, I&apos;ve completed my degree, joined a professional engineering team, and started building toward data and AI alongside that work.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
          {EDUCATION.map((item, idx) => (
            <Reveal key={item.degree} delay={idx * 0.08} style={{ padding: "2rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.15em", color: "var(--accent)", textTransform: "uppercase" }}>
                {item.period}
              </span>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", color: "var(--cream)", margin: "0.5rem 0" }}>{item.degree}</h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>{item.description}</p>
            </Reveal>
          ))}

          {EXPERIENCE.map((job) => (
            <Reveal key={job.company} delay={0.16} style={{ padding: "2rem", background: "rgba(255, 112, 51, 0.04)", border: "1px solid rgba(255, 112, 51, 0.2)", borderRadius: "12px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.15em", color: "var(--accent)" }}>
                THE CURRENT ROLE
              </span>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", color: "#ffffff", margin: "0.5rem 0" }}>
                {job.title} · {job.company}
                <span style={{ color: "var(--cream)", fontFamily: "var(--font-sans)", fontSize: "0.7rem", marginLeft: "0.6rem" }}>{job.period}</span>
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>{job.summary}</p>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", padding: "3rem" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.15em", color: "var(--accent)", textTransform: "uppercase" }}>
              CAREER TIMELINE
            </span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, color: "#ffffff", marginTop: "0.5rem" }}>
              From completing the degree.
              <br />
              <em>To building what comes next.</em>
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem" }}>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--cream)", fontWeight: 600 }}>2024</span>
              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", color: "#ffffff", margin: "0.4rem 0" }}>Completed the degree, joined the team</h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                Finished a B.S. in Computer Science and joined Clustox as a Software Engineer, building full-stack web applications on the MERN stack.
              </p>
            </div>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--cream)", fontWeight: 600 }}>2024 — Present</span>
              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", color: "#ffffff", margin: "0.4rem 0" }}>Full-stack engineering, day to day</h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                Working across the stack in a professional engineering team — API design, data modeling, and frontend implementation on real client work.
              </p>
            </div>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--cream)", fontWeight: 600 }}>Ongoing</span>
              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", color: "#ffffff", margin: "0.4rem 0" }}>Building the next layer: data and AI</h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                Pursuing an M.S. in Data Science while shipping AI-powered side projects — a chat agent, a recommendation engine — to turn that study into real software.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
