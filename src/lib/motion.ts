import type { Transition, Variants } from "framer-motion";

/** Primary easing — smooth deceleration */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const transitionMedium: Transition = {
  duration: 0.55,
  ease: EASE_OUT,
};

export const transitionSlow: Transition = {
  duration: 0.72,
  ease: EASE_OUT,
};

/** Natural spring — cards & blocks */
export const springReveal: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 32,
  mass: 0.85,
};

/** Softer spring — large typography, sections */
export const springSoft: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 36,
  mass: 0.9,
};

/** Snappy micro-interactions */
export const springSnappy: Transition = {
  type: "spring",
  stiffness: 520,
  damping: 28,
};

export const viewportOnce = { once: true, margin: "-10% 0px" as const };

export const viewportOnceTight = { once: true, margin: "-5% 0px" as const };

export const viewportSection = { once: true, margin: "-8% 0px" as const };

/** ─── Stagger: default (tween) ─── */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: transitionMedium,
  },
};

/** ─── Stagger: spring cards (grids, team) ─── */
export const staggerContainerSpring: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerItemSpring: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.94, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: springReveal,
  },
};

/** ─── Stagger: editorial (text columns, case study blocks) ─── */
export const staggerContainerEditorial: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.04,
    },
  },
};

export const staggerItemSlide: Variants = {
  hidden: { opacity: 0, x: -28, filter: "blur(3px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: springSoft,
  },
};

/** ─── Section shell: subtle scale + fade ─── */
export const sectionShell: Variants = {
  hidden: { opacity: 0, scale: 0.985 },
  show: {
    opacity: 1,
    scale: 1,
    transition: springSoft,
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: transitionMedium,
  },
};

/** Heading lines: blur clear + spring */
export const headingLineSpring: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: springSoft,
  },
};

export const headingEyebrowSpring: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springSnappy,
  },
};

/** Home hero — orchestrated load sequence */
export const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
    },
  },
};

export const heroLine: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: springSoft,
  },
};

export const heroLineTight: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: springSnappy,
  },
};
