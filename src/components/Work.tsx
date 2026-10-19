"use client";

import { useState } from "react";
import { PROJECTS, SITE } from "@/lib/data";
import { ArrowRightIcon, CornerArrowIcon } from "@/components/icons/Icons";
import { Reveal } from "@/components/Reveal";
import { useMotionOn } from "@/lib/motion-context";

const CARD_HOVER = { y: -8, boxShadow: "0 32px 70px rgba(0,0,0,0.6)" };

function glowVars(motionOn: boolean): React.CSSProperties {
  return { "--glow-state": motionOn ? "running" : "paused" } as React.CSSProperties;
}

const [madinaCollar, circle, aiAnalyst, reelBite, kitchens] = PROJECTS;

function hostnameOf(url: string) {
  try {
    return new URL(url).hostname + new URL(url).pathname.replace(/\/$/, "");
  } catch {
    return url;
  }
}

export default function Work() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const { motionOn } = useMotionOn();

  return (
    <section id="work" style={{ padding: "7rem 2rem", maxWidth: "1360px", margin: "0 auto", borderBottom: "1px solid var(--border)" }}>
      <div className="section-label">
        <div>
          <span className="square-bullet" />
          <span>01 / SELECTED WORK</span>
        </div>
        <span>BUILT. DEPLOYED. VERIFIED.</span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem", marginBottom: "4.5rem" }}>
        <h2 className="editorial-title">
          Ideas are a start.
          <br />
          <em>This is the work.</em>
        </h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "380px", margin: 0 }}>
          A selection of real, built, and in most cases deployed projects — picked for what they actually demonstrate, not for even coverage of every repo.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
        {/* Flagship project */}
        <Reveal
          className="project-card"
          hover={CARD_HOVER}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
          }}
        >
          <div className="browser-bar">
            <div className="browser-dots">
              <span />
              <span />
              <span />
            </div>
            <span>{hostnameOf("https://almadina.site")}</span>
            <CornerArrowIcon width={13} height={13} />
          </div>

          <div
            className="glow-sweep"
            style={{
              ...glowVars(motionOn),
              position: "relative",
              width: "100%",
              minHeight: "160px",
              display: "flex",
              alignItems: "center",
              padding: "1.75rem 2rem 0",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                background: "rgba(9, 9, 13, 0.85)",
                backdropFilter: "blur(12px)",
                padding: "0.4rem 0.85rem",
                borderRadius: "6px",
                border: "1px solid var(--border)",
                color: "var(--cream)",
                textTransform: "uppercase",
              }}
            >
              LIVE IN PRODUCTION &middot; MOBILE + WEB + ADMIN
            </span>
          </div>

          <div style={{ padding: "0.25rem 2rem 2.25rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "2rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: "1.75rem", alignItems: "flex-start", flex: 1 }}>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--text-dim)", lineHeight: 1 }}>01</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "720px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)" }}>
                  Full-Stack Platform
                </span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 400, color: "#ffffff", letterSpacing: "-0.01em", margin: 0 }}>
                  {madinaCollar.name} — {madinaCollar.tagline}
                </h3>
                <p style={{ fontSize: "0.96rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                  {madinaCollar.description}
                </p>
              </div>
            </div>

            <a href={madinaCollar.links[0].href} target="_blank" rel="noopener noreferrer" className="editorial-link" style={{ fontSize: "0.92rem", fontWeight: 500, color: "var(--cream)", alignSelf: "center" }}>
              <span>Explore the architecture</span>
              <CornerArrowIcon width={18} height={18} />
            </a>
          </div>
        </Reveal>

        {/* Secondary 2-up grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2.5rem" }}>
          {[circle, aiAnalyst].map((project, i) => {
            const demoLink = project.links.find((l) => l.label.toLowerCase().includes("demo"));
            const codeLink = project.links.find((l) => l.label.toLowerCase().includes("code")) ?? project.links[0];
            return (
              <Reveal
                key={project.slug}
                delay={i * 0.1}
                className="project-card"
                hover={CARD_HOVER}
                style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 20px 45px rgba(0,0,0,0.4)" }}
              >
                <div className="browser-bar">
                  <div className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span>{hostnameOf((demoLink ?? codeLink).href)}</span>
                  <CornerArrowIcon width={12} height={12} />
                </div>

                <div
                  className="glow-sweep"
                  style={{ ...glowVars(motionOn), position: "relative", width: "100%", minHeight: "140px", display: "flex", alignItems: "flex-end", padding: "1.25rem" }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.64rem", letterSpacing: "0.1em", background: "rgba(9, 9, 13, 0.85)", backdropFilter: "blur(8px)", padding: "0.3rem 0.65rem", borderRadius: "4px", color: "var(--cream)", textTransform: "uppercase" }}>
                    {project.category}
                  </span>
                </div>

                <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)" }}>
                      {project.tagline}
                    </span>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--text-dim)" }}>{String(i + 2).padStart(2, "0")}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.7rem", fontWeight: 400, color: "#ffffff", margin: 0 }}>{project.name}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>{project.description}</p>
                  <div style={{ paddingTop: "0.5rem" }}>
                    <a href={(demoLink ?? codeLink).href} target="_blank" rel="noopener noreferrer" className="editorial-link" style={{ fontSize: "0.88rem", color: "var(--cream)" }}>
                      <span>{demoLink ? "View live demo" : "Explore the code"}</span>
                      <CornerArrowIcon width={15} height={15} />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* More ways I build */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "3.5rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            MORE WAYS I BUILD
          </span>

          {[reelBite, kitchens].map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <a
                href={project.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 0", borderBottom: "1px solid var(--border)", textDecoration: "none", color: "#ffffff", transition: "padding-left 0.2s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0.75rem")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0")}
              >
                <div>
                  <small style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.15em", color: "var(--text-dim)", marginBottom: "0.35rem" }}>
                    {String(i + 4).padStart(2, "0")} / {project.category.toUpperCase()}
                  </small>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", fontWeight: 400 }}>{project.name}</span>
                </div>
                <CornerArrowIcon width={22} height={22} />
              </a>
            </Reveal>
          ))}

          {/* Expandable architecture details */}
          <Reveal style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", marginTop: "0.5rem" }}>
            <button
              onClick={() => setDetailsOpen(!detailsOpen)}
              style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", color: "var(--text)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.96rem", fontWeight: 500 }}
            >
              <span>Inside the Madina Collar architecture</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "var(--cream)" }}>{detailsOpen ? "−" : "+"}</span>
            </button>

            {detailsOpen && (
              <div style={{ padding: "0 1.5rem 1.5rem", color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, borderTop: "1px solid var(--border)" }}>
                <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                  A single Express + Sequelize (PostgreSQL) API serves three independent clients: a React Native (Expo) mobile app, a Next.js web app, and a React + Vite admin panel. Auth runs on JWT with OTP verification and a blacklisted-token model. The backend is deployed on a DigitalOcean droplet behind Nginx, with PM2 managing the Node processes and Let&apos;s Encrypt SSL across three subdomains.
                </p>
                <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                  {madinaCollar.stack.map((t) => (
                    <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", padding: "0.25rem 0.6rem", borderRadius: "4px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--cream)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Reveal>

          <div style={{ marginTop: "1rem" }}>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="editorial-link" style={{ fontSize: "0.95rem", color: "var(--cream)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <span>Explore all repositories on GitHub</span>
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
