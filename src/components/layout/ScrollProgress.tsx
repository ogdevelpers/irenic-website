"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Minimal scroll indicator — thin accent line (light theme). */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left bg-[#ff5b00] shadow-[0_0_12px_rgba(255,91,0,0.6)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
