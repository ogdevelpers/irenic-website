"use client";

import { motion, type Variants } from "framer-motion";
import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import {
  EASE_OUT,
  springReveal,
  staggerContainer,
  staggerContainerEditorial,
  staggerContainerSpring,
  staggerItem,
  staggerItemSlide,
  staggerItemSpring,
  viewportOnce,
} from "@/lib/motion";

const presets = {
  default: { container: staggerContainer, item: staggerItem },
  spring: { container: staggerContainerSpring, item: staggerItemSpring },
  editorial: { container: staggerContainerEditorial, item: staggerItemSlide },
} as const;

export type StaggerPreset = keyof typeof presets;

const StaggerPresetContext = createContext<StaggerPreset>("default");

type StaggerInProps = {
  children: ReactNode;
  className?: string;
  margin?: string;
  preset?: StaggerPreset;
};

export function StaggerIn({
  children,
  className,
  margin = "-10% 0px",
  preset = "default",
}: StaggerInProps) {
  const { container } = presets[preset];
  return (
    <StaggerPresetContext.Provider value={preset}>
      <motion.div
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin }}
        variants={container}
      >
        {children}
      </motion.div>
    </StaggerPresetContext.Provider>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  /** Overrides parent `StaggerIn` preset when set */
  preset?: StaggerPreset;
};

export function StaggerItem({
  children,
  className,
  variants,
  preset: presetProp,
}: StaggerItemProps) {
  const parentPreset = useContext(StaggerPresetContext);
  const preset = presetProp ?? parentPreset;
  const v = variants ?? presets[preset].item;
  return (
    <motion.div className={className} variants={v}>
      {children}
    </motion.div>
  );
}

type MotionFadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  spring?: boolean;
};

export function MotionFadeUp({
  children,
  className,
  delay = 0,
  spring = true,
}: MotionFadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32, scale: 0.98, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={viewportOnce}
      transition={
        spring
          ? { ...springReveal, delay }
          : { duration: 0.58, ease: EASE_OUT, delay }
      }
    >
      {children}
    </motion.div>
  );
}

type HoverLiftProps = {
  children: ReactNode;
  className?: string;
};

export function HoverLift({ children, className }: HoverLiftProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      transition={springReveal}
    >
      {children}
    </motion.div>
  );
}

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function MotionSection({ children, className, id }: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ ...springReveal, delay: 0.02 }}
    >
      {children}
    </motion.section>
  );
}
