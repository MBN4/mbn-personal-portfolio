"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/data";
import { useMotionOn } from "@/lib/motion-context";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{
        position: "relative",
        textDecoration: "none",
        padding: "0.2rem 0.3rem",
        display: "inline-flex",
        fontSize: "0.84rem",
        fontWeight: 400,
        letterSpacing: "0.01em",
      }}
    >
      <motion.span
        variants={{ rest: { color: "var(--text-muted)" }, hover: { color: "#ffffff" } }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
      <motion.span
        aria-hidden
        variants={{
          rest: { scaleX: 0, opacity: 0 },
          hover: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          left: "0.3rem",
          right: "0.3rem",
          bottom: "-1px",
          height: "1px",
          background: "var(--accent)",
          transformOrigin: "left",
        }}
      />
    </motion.a>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { motionOn } = useMotionOn();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          zIndex: 1000,
          padding: scrolled ? "1.25rem 1rem 0" : "0",
          pointerEvents: "none",
          transition: "padding 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <motion.div
          layout
          initial={{ y: motionOn ? -30 : 0, opacity: motionOn ? 0 : 1 }}
          animate={{
            y: 0,
            opacity: 1,
            backgroundColor: scrolled ? "rgba(12, 12, 16, 0.82)" : "rgba(0, 0, 0, 0)",
            borderRadius: scrolled ? 9999 : 0,
            boxShadow: scrolled
              ? "0 12px 36px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)"
              : "0 0 0 rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.75rem",
            width: scrolled ? "auto" : "100%",
            padding: scrolled ? "0.5rem 0.6rem 0.5rem 1.4rem" : "1.1rem 2rem",
            backdropFilter: scrolled ? "blur(24px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
            border: scrolled ? "1px solid rgba(255, 255, 255, 0.11)" : "1px solid transparent",
            maxWidth: "100%",
          }}
        >
          <a href="#top" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "0.92rem",
                letterSpacing: "-0.01em",
                color: "#ffffff",
              }}
            >
              Bilal Nadeem
            </span>
          </a>

          <nav className="nav-desktop-links" style={{ display: "flex", alignItems: "center", gap: "1.4rem" }}>
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.45rem 1rem",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "0.82rem",
                fontWeight: 500,
                letterSpacing: "0.01em",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#ffffff";
                el.style.color = "#000000";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255, 255, 255, 0.08)";
                el.style.color = "#ffffff";
              }}
            >
              <span>Let&apos;s talk</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav-mobile-btn"
              aria-label="Toggle navigation menu"
              style={{
                background: "none",
                border: "none",
                color: "var(--text)",
                cursor: "pointer",
                padding: "0.4rem",
                display: "none",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "5rem",
              left: "1rem",
              right: "1rem",
              background: "rgba(14, 14, 18, 0.96)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "24px",
              padding: "1.5rem",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "var(--text)",
                  fontSize: "1.1rem",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  padding: "0.5rem 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{link.label}</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>↗</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: "0.5rem",
                textAlign: "center",
                padding: "0.8rem",
                borderRadius: "12px",
                background: "var(--cream)",
                color: "#050507",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              Let&apos;s talk
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                textAlign: "center",
                padding: "0.5rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.85rem",
              }}
            >
              GitHub ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .nav-desktop-links {
            display: none !important;
          }
          .nav-mobile-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
