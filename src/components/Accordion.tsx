"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { CAPABILITIES } from "@/lib/data";

export function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {CAPABILITIES.map((cap, i) => {
        const open = openIndex === i;
        return (
          <div key={cap.title}>
            <button
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              aria-expanded={open}
            >
              <div>
                <span className="eyebrow">{cap.eyebrow}</span>
                <h3 className="font-display mt-2 text-xl font-medium text-fg sm:text-2xl">
                  {cap.title}
                </h3>
              </div>
              <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-border text-fg-muted">
                {open ? <Minus size={13} /> : <Plus size={13} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-7 pl-0 pr-10">
                    <p className="max-w-xl text-sm leading-relaxed text-fg-muted md:text-base">
                      {cap.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-xs font-medium text-fg-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
