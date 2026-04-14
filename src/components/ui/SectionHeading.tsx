"use client";

import { motion, type Variants } from "framer-motion";
import {
  headingEyebrowSpring,
  headingLineSpring,
  springSoft,
  viewportOnce,
} from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.04,
    },
  },
};

const titleVariant: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)", scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { ...springSoft, delay: 0.02 },
  },
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={container}
    >
      {eyebrow ? (
        <motion.p
          variants={headingEyebrowSpring}
          className="text-xs font-semibold uppercase tracking-[0.25em] mb-3 text-[#ff5b00]/90"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        variants={titleVariant}
        className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium tracking-tight text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          variants={headingLineSpring}
          className="text-base md:text-lg leading-relaxed text-zinc-400 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
