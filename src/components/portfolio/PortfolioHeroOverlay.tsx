"use client";

import { motion } from "framer-motion";
import { springSoft } from "@/lib/motion";

export function PortfolioHeroOverlay({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-10 md:pb-14"
      initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ ...springSoft, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
