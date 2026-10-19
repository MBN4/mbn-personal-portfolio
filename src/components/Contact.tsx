"use client";

import { SITE } from "@/lib/data";

const CHANNELS = [
  { label: "GitHub", handle: "github.com/MBN4", href: SITE.github },
  { label: "LinkedIn", handle: "linkedin.com/in/bilal-nadeem", href: SITE.linkedin },
  { label: "Fiverr", handle: "fiverr.com/mbbiillaall", href: SITE.fiverr },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "7rem 2rem 5rem", maxWidth: "1360px", margin: "0 auto" }}>
      <div className="section-label">
        <div>
          <span className="square-bullet" />
          <span>06 / REACH OUT</span>
        </div>
        <span>AVAILABLE REMOTELY, GLOBALLY</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <h2 className="editorial-title">
            Have an idea to build?
            <br />
            <em>Let&apos;s start the conversation.</em>
          </h2>

          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "520px" }}>
            I&apos;m open to full-time roles, remote positions, and well-scoped freelance or AI
            automation projects. The fastest way to reach me is through LinkedIn or Fiverr.
          </p>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.1rem", borderRadius: "9999px", background: "rgba(34, 197, 94, 0.08)", border: "1px solid rgba(34, 197, 94, 0.25)", alignSelf: "flex-start" }}>
            <span className="live-dot" />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.76rem", letterSpacing: "0.1em", color: "#4ade80", textTransform: "uppercase" }}>
              AVAILABLE FOR NEW ROLES &amp; PROJECTS
            </span>
          </div>
        </div>

        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", boxShadow: "0 20px 50px rgba(0,0,0,0.4)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            CONNECT DIRECTLY
          </span>
          {CHANNELS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.25rem", background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border)", borderRadius: "8px", textDecoration: "none", color: "var(--text)", transition: "all 0.2s ease" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255, 255, 255, 0.06)";
                el.style.borderColor = "rgba(255, 255, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255, 255, 255, 0.02)";
                el.style.borderColor = "var(--border)";
              }}
            >
              <div>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.12em", color: "var(--text-muted)", textTransform: "uppercase" }}>
                  {item.label}
                </span>
                <span style={{ fontSize: "0.92rem", color: "#ffffff", fontWeight: 500 }}>{item.handle}</span>
              </div>
              <span style={{ color: "var(--cream)", fontSize: "0.9rem" }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
