"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionOn } from "@/lib/motion-context";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);
  const { motionOn } = useMotionOn();

  useEffect(() => {
    if (!motionOn) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [data-cursor="hover"]')) {
        setIsHovering(true);
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [data-cursor="hover"]')) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(animRef.current);
    };
  }, [motionOn]);

  if (!motionOn) return null;

  return (
    <div aria-hidden="true">
      <div ref={dotRef} className="cursor-dot" style={{ position: "fixed", top: 0, left: 0 }} />
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovering ? "hover" : ""}`}
        style={{ position: "fixed", top: 0, left: 0 }}
      />
    </div>
  );
}
