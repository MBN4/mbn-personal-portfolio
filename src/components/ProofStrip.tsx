"use client";

import { PROOF_HIGHLIGHTS } from "@/lib/data";
import { CornerArrowIcon } from "@/components/icons/Icons";

export default function ProofStrip() {
  return (
    <section
      aria-label="Career highlights"
      style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--border)", width: "100%" }}
    >
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          alignItems: "stretch",
        }}
      >
        {PROOF_HIGHLIGHTS.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "2.5rem 2rem",
              borderRight: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <strong
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {item.stat}
            </strong>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "var(--text-muted)", lineHeight: 1.5, maxWidth: "220px" }}>
              {item.label}
            </p>
          </div>
        ))}

        <a
          href="#work"
          style={{
            padding: "2.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textDecoration: "none",
            color: "var(--text)",
            transition: "background 0.2s ease, color 0.2s ease",
            background: "rgba(255, 255, 255, 0.02)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "rgba(255, 255, 255, 0.06)";
            el.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "rgba(255, 255, 255, 0.02)";
            el.style.color = "var(--text)";
          }}
        >
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.74rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "0.25rem",
              }}
            >
              THE WORK.
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                fontWeight: 600,
                color: "var(--cream)",
                textTransform: "uppercase",
              }}
            >
              THE REAL-WORLD BUILD.
            </span>
          </div>
          <CornerArrowIcon width={24} height={24} />
        </a>
      </div>
    </section>
  );
}
