"use client";

import { createContext, useContext, useEffect, useState } from "react";

type MotionContextValue = {
  motionOn: boolean;
  toggle: () => void;
};

const MotionContext = createContext<MotionContextValue>({
  motionOn: true,
  toggle: () => {},
});

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [motionOn, setMotionOn] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const stored = window.localStorage.getItem("motion-on");
      setMotionOn(stored !== null ? stored === "true" : !prefersReduced);
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  const toggle = () => {
    setMotionOn((prev) => {
      const next = !prev;
      window.localStorage.setItem("motion-on", String(next));
      return next;
    });
  };

  return (
    <MotionContext.Provider value={{ motionOn: hydrated ? motionOn : true, toggle }}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotionOn() {
  return useContext(MotionContext);
}
