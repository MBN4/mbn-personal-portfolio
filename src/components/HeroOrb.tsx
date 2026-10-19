"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useMotionOn } from "@/lib/motion-context";

export function HeroOrb() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { motionOn } = useMotionOn();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    if (!motionOn) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Solid inner core
    const coreGeom = new THREE.IcosahedronGeometry(1.4, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0c0a08,
      transparent: true,
      opacity: 0.6,
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    group.add(core);

    // Wireframe cage
    const wireGeom = new THREE.IcosahedronGeometry(1.9, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xff7033,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wire = new THREE.Mesh(wireGeom, wireMat);
    group.add(wire);

    // Orbit rings
    const ringMats = [
      new THREE.LineBasicMaterial({ color: 0xff7033, transparent: true, opacity: 0.5 }),
      new THREE.LineBasicMaterial({ color: 0xe6e2d8, transparent: true, opacity: 0.25 }),
    ];
    const rings: THREE.Line[] = [];
    [2.5, 3.1].forEach((radius, idx) => {
      const points: THREE.Vector3[] = [];
      const segments = 72;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
      }
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const ring = new THREE.Line(geom, ringMats[idx]);
      ring.rotation.x = idx * 0.9 + 0.4;
      ring.rotation.y = idx * 0.6 + 0.2;
      rings.push(ring);
      group.add(ring);
    });

    // Drifting particle field
    const particleCount = 420;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0xe6e2d8,
      transparent: true,
      opacity: 0.55,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onPointerMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onPointerMove);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      group.rotation.y = t * 0.18 + mouse.x * 0.4;
      group.rotation.x = Math.sin(t * 0.2) * 0.15 + mouse.y * 0.3;
      wire.rotation.z = t * 0.12;
      rings.forEach((ring, idx) => {
        ring.rotation.z = t * (0.15 + idx * 0.08) * (idx % 2 === 0 ? 1 : -1);
      });
      particles.rotation.y = t * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeom.dispose();
      coreMat.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      ringMats.forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, [motionOn]);

  if (!motionOn) return null;

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}
    />
  );
}
