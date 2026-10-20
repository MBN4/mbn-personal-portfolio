"use client";

import { useEffect, useRef } from "react";
import { useMotionOn } from "@/lib/motion-context";

type Cell = {
  brightness: number;
  fade: number;
  phase: number;
  speed: number;
};

export function HeroHalftonePortrait({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { motionOn } = useMotionOn();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animate = motionOn && !reduceMotion;

    const COLS = 64;
    const ROWS = 78;

    let cells: Cell[] = [];
    let frameId = 0;
    let ro: ResizeObserver | null = null;
    let destroyed = false;

    const sampleCanvas = document.createElement("canvas");
    sampleCanvas.width = COLS;
    sampleCanvas.height = ROWS;
    const sampleCtx = sampleCanvas.getContext("2d", { willReadFrequently: true });

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    const buildCells = () => {
      if (!sampleCtx) return;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      if (!iw || !ih) return;

      const scale = Math.max(COLS / iw, ROWS / ih);
      const scaledW = iw * scale;
      const scaledH = ih * scale;
      const offsetX = (COLS - scaledW) * 0.5;
      const offsetY = (ROWS - scaledH) * 0.15;

      sampleCtx.clearRect(0, 0, COLS, ROWS);
      sampleCtx.drawImage(img, offsetX, offsetY, scaledW, scaledH);
      const data = sampleCtx.getImageData(0, 0, COLS, ROWS).data;

      const next: Cell[] = [];
      for (let j = 0; j < ROWS; j++) {
        for (let i = 0; i < COLS; i++) {
          const idx = (j * COLS + i) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          // Source photo is a dark subject on a white background — invert so the
          // subject (dark pixels) produces ink and the white background fades away.
          const brightness = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;

          const nx = (i + 0.5) / COLS - 0.5;
          const ny = (j + 0.5) / ROWS - 0.4;
          const dist = Math.sqrt((nx * 2.1) ** 2 + (ny * 2.7) ** 2);
          let fade = 1 - dist;
          fade = Math.max(0, Math.min(1, fade));
          fade = fade * fade * (3 - 2 * fade);

          next.push({
            brightness,
            fade,
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 0.5,
          });
        }
      }
      cells = next;
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = container.clientWidth;
      const h = container.clientHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      if (destroyed) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (!w || !h || cells.length === 0) {
        if (animate) frameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);
      const cellW = w / COLS;
      const cellH = h / ROWS;
      const maxR = Math.min(cellW, cellH) * 0.58;

      for (let j = 0; j < ROWS; j++) {
        for (let i = 0; i < COLS; i++) {
          const cell = cells[j * COLS + i];
          if (cell.fade <= 0.01) continue;

          let b = cell.brightness;
          if (animate) {
            b += Math.sin(t * 0.0012 * cell.speed + cell.phase) * 0.06;
          }
          b = Math.max(0, Math.min(1, b));

          const radius = maxR * Math.pow(b, 0.85) * cell.fade;
          if (radius < 0.25) continue;

          const cx = (i + 0.5) * cellW;
          const cy = (j + 0.5) * cellH;
          const alpha = 0.22 + b * 0.72 * cell.fade;

          ctx.beginPath();
          ctx.arc(cx, cy, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(234, 228, 218, ${alpha.toFixed(3)})`;
          ctx.fill();
        }
      }

      if (animate) frameId = requestAnimationFrame(draw);
    };

    const start = () => {
      resizeCanvas();
      buildCells();
      draw(0);
    };

    if (img.complete && img.naturalWidth) {
      start();
    } else {
      img.onload = start;
    }

    ro = new ResizeObserver(() => {
      resizeCanvas();
      buildCells();
      if (!animate) draw(0);
    });
    ro.observe(container);

    return () => {
      destroyed = true;
      cancelAnimationFrame(frameId);
      ro?.disconnect();
    };
  }, [src, motionOn]);

  return (
    <div ref={containerRef} style={{ position: "absolute", inset: 0 }}>
      <canvas ref={canvasRef} aria-hidden="true" style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
}
