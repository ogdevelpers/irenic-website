"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { springSoft } from "@/lib/motion";

/**
 * Soft route transition when navigating (App Router template re-mounts per navigation).
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springSoft, delay: 0.02 }}
    >
      {children}
    </motion.div>
  );
}
