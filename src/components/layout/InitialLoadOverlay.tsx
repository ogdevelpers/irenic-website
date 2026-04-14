"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { BRAND } from "@/lib/constants";
import { EASE_OUT } from "@/lib/motion";

const MIN_VISIBLE_MS = 980;
const MAX_WAIT_MS = 3400;
const EXIT_DURATION = 0.82;
const EXIT_DURATION_REDUCED = 0.28;

/**
 * Full-viewport intro overlay on first document mount (not on client-side route changes).
 * Agency-style centered mark, then curtain exit. Respects reduced motion.
 */
export function InitialLoadOverlay() {
  const reduceMotion = useReducedMotion();
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  useEffect(() => {
    if (done) return;

    let cancelled = false;
    const minDelay = reduceMotion ? 280 : MIN_VISIBLE_MS;
    const maxCap = reduceMotion ? 900 : MAX_WAIT_MS;

    const minWait = new Promise<void>((r) => {
      setTimeout(r, minDelay);
    });
    const loadWait = new Promise<void>((r) => {
      if (document.readyState === "complete") r();
      else window.addEventListener("load", () => r(), { once: true });
    });
    const capWait = new Promise<void>((r) => {
      setTimeout(r, maxCap);
    });

    void Promise.all([minWait, Promise.race([loadWait, capWait])]).then(() => {
      if (!cancelled) setExiting(true);
    });

    return () => {
      cancelled = true;
    };
  }, [done, reduceMotion]);

  useEffect(() => {
    if (!exiting) return;
    const ms =
      (reduceMotion ? EXIT_DURATION_REDUCED : EXIT_DURATION) * 1000 + 100;
    const t = window.setTimeout(() => setDone(true), ms);
    return () => window.clearTimeout(t);
  }, [exiting, reduceMotion]);

  if (done) return null;

  const exitTransition = reduceMotion
    ? { duration: EXIT_DURATION_REDUCED, ease: EASE_OUT }
    : { duration: EXIT_DURATION, ease: [0.76, 0, 0.2, 1] as const };

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
      role="status"
      aria-live="polite"
      aria-busy={!exiting}
      aria-label={exiting ? "Finishing load" : "Loading site"}
      initial={false}
      animate={
        exiting
          ? reduceMotion
            ? { opacity: 0 }
            : { y: "-100%" }
          : { opacity: 1, y: 0 }
      }
      transition={exitTransition}
      style={{
        willChange: exiting ? "transform, opacity" : "auto",
      }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(120vw,720px)] w-[min(120vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(255, 91, 0, 0.22) 0%, rgba(255, 91, 0, 0.06) 38%, transparent 62%)",
          filter: "blur(40px)",
        }}
        aria-hidden
      />

      <div className="relative flex flex-col items-center px-6">
        <motion.div
          className="relative mb-10"
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.9, filter: "blur(10px)" }
          }
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={
            reduceMotion
              ? { duration: 0.2 }
              : { type: "spring", stiffness: 260, damping: 28, mass: 0.85 }
          }
        >
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 sm:h-[168px] sm:w-[168px]"
            aria-hidden
            animate={reduceMotion ? {} : { rotate: 360 }}
            transition={
              reduceMotion
                ? {}
                : { duration: 14, repeat: Infinity, ease: "linear" }
            }
          >
            <svg viewBox="0 0 100 100" className="h-full w-full opacity-[0.35]">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.35"
              />
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke={BRAND.accent}
                strokeWidth="0.85"
                strokeLinecap="round"
                strokeDasharray="72 218"
                opacity={0.85}
              />
            </svg>
          </motion.div>

          <p className="relative text-center font-semibold tracking-tight text-white text-2xl sm:text-3xl md:text-4xl">
            Irenic{" "}
            <span style={{ color: BRAND.accent }} className="font-semibold">
              Events
            </span>
          </p>
        </motion.div>

        <motion.div
          className="relative h-px w-[min(220px,70vw)] overflow-hidden rounded-full bg-white/[0.08]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 0.15, duration: 0.35 }}
        >
          <motion.div
            className="h-full origin-left rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${BRAND.accent}, ${BRAND.accentHover})`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={
              reduceMotion
                ? { duration: 0.25 }
                : { duration: 1.15, ease: EASE_OUT, delay: 0.2 }
            }
          />
        </motion.div>

        <motion.p
          className="mt-6 text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-zinc-500"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reduceMotion ? 0 : 0.35,
            duration: 0.45,
            ease: EASE_OUT,
          }}
        >
          Loading experience
        </motion.p>
      </div>
    </motion.div>
  );
}
