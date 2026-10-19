"use client";

import { motion, type TargetAndTransition, type Transition, type Variants } from "framer-motion";
import { useMotionOn } from "@/lib/motion-context";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  y?: number;
  /** Optional whileHover target, e.g. { y: -8, boxShadow: "..." } */
  hover?: TargetAndTransition;
  hoverTransition?: Transition;
};

export function Reveal({ children, className, style, delay = 0, y = 28, hover, hoverTransition }: RevealProps) {
  const { motionOn } = useMotionOn();

  const variants: Variants = {
    hidden: { opacity: 0, y: motionOn ? y : 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      whileHover={motionOn ? hover : undefined}
      transition={hover ? hoverTransition ?? { duration: 0.3, ease: [0.16, 1, 0.3, 1] } : undefined}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
  style,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
}) {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  style,
  y = 22,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  y?: number;
}) {
  const { motionOn } = useMotionOn();
  const variants: Variants = {
    hidden: { opacity: 0, y: motionOn ? y : 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  };
  return (
    <motion.div className={className} style={style} variants={variants}>
      {children}
    </motion.div>
  );
}
