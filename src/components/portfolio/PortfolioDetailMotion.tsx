"use client";

import { motion } from "framer-motion";
import { springReveal } from "@/lib/motion";

export function PortfolioDetailMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={springReveal}
    >
      {children}
    </motion.div>
  );
}
