"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT, springSoft, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  wide?: boolean;
  spring?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  wide = false,
  spring = true,
}: RevealProps) {
  const variants: Variants = {
    hidden: wide
      ? { opacity: 0, y: 52, scale: 0.96, filter: "blur(8px)" }
      : { opacity: 0, y: 32, scale: 0.98, filter: "blur(5px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: spring
        ? { ...springSoft, delay }
        : {
            duration: wide ? 0.85 : 0.68,
            delay,
            ease: EASE_OUT,
          },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
