"use client";

const YEAR = 2026;

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)", padding: "3rem 2rem 4rem", width: "100%" }}>
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.74rem",
          letterSpacing: "0.1em",
          color: "var(--text-muted)",
          textTransform: "uppercase",
        }}
      >
        <div>
          <span style={{ color: "#ffffff", fontWeight: 500 }}>BILAL NADEEM</span>
          <span style={{ margin: "0 0.5rem", color: "var(--text-dim)" }}>/</span>
          <span>SOFTWARE ENGINEER</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span className="live-dot" />
          <span>AVAILABLE REMOTELY</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span>ALL RIGHTS RESERVED &copy; {YEAR}</span>
          <a
            href="#top"
            style={{ color: "var(--cream)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.3rem", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
          >
            <span>TOP</span>
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
