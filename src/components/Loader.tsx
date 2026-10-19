"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMotionOn } from "@/lib/motion-context";

export function Loader() {
  const [loading, setLoading] = useState(true);
  const { motionOn } = useMotionOn();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), motionOn ? 900 : 0);
    return () => clearTimeout(timer);
  }, [motionOn]);

  if (!motionOn) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.01em" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl font-medium text-fg"
          >
            Bilal <em className="italic text-fg-muted">Nadeem</em>
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
