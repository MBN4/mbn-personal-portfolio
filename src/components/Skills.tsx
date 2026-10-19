"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILL_GROUPS, type SkillFilter } from "@/lib/data";

const FILTERS: { id: SkillFilter; label: string }[] = [
  { id: "all", label: "All disciplines" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & Data" },
  { id: "ai", label: "AI & Automation" },
  { id: "mobile", label: "Mobile & Tooling" },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>("all");

  const filteredGroups =
    activeFilter === "all" ? SKILL_GROUPS : SKILL_GROUPS.filter((g) => g.category === activeFilter);

  return (
    <section id="skills" style={{ padding: "7rem 2rem", maxWidth: "1360px", margin: "0 auto", borderBottom: "1px solid var(--border)" }}>
      <div className="section-label">
        <div>
          <span className="square-bullet" />
          <span>05 / TECHNICAL EXPERTISE</span>
        </div>
        <span>STACKS. TOOLS. CAPABILITIES.</span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem", marginBottom: "3.5rem" }}>
        <div>
          <h2 className="editorial-title">
            Engineered with rigor.
            <br />
            <em>Built to ship.</em>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "480px", marginTop: "1rem", lineHeight: 1.6 }}>
            A breakdown of the languages, frameworks, and platforms I actually use — demonstrated through the projects above, not an abstract proficiency score.
          </p>
        </div>

        <div role="group" aria-label="Filter capabilities" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", background: "var(--surface)", padding: "0.4rem", borderRadius: "9999px", border: "1px solid var(--border)" }}>
          {FILTERS.map((btn) => {
            const isActive = activeFilter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                style={{
                  padding: "0.5rem 1.1rem",
                  borderRadius: "9999px",
                  background: isActive ? "var(--cream)" : "transparent",
                  color: isActive ? "#050507" : "var(--text-muted)",
                  border: "none",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: "2rem" }}>
        <AnimatePresence>
          {filteredGroups.map((group) => (
            <motion.div
              key={group.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2.25rem", display: "flex", flexDirection: "column", gap: "1.5rem", boxShadow: "0 12px 36px rgba(0,0,0,0.3)" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.15em", color: "var(--accent)", textTransform: "uppercase" }}>
                  {group.categoryTitle}
                </span>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--text-dim)" }}>{group.number}</span>
              </div>

              <p style={{ fontSize: "0.94rem", color: "var(--cream)", fontWeight: 400, margin: 0 }}>{group.highlight}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "1.25rem" }}>
                {group.skills.map((s) => (
                  <div key={s.name} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 600, color: "#ffffff" }}>{s.name}</span>
                    <span style={{ fontSize: "0.84rem", color: "var(--text-muted)", lineHeight: 1.4 }}>{s.context}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
