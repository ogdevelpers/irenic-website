"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MotionFadeUp, MotionSection } from "@/components/ui/Stagger";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLIENTS } from "@/lib/clients";

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const duration = 26;
  const loop = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
      aria-hidden
    >
      <motion.div
        className="flex w-max gap-3 py-2"
        animate={
          reduceMotion
            ? undefined
            : {
                x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration,
                ease: "linear",
                repeat: Infinity,
              }
        }
      >
        {loop.map((name, idx) => (
          <div
            key={`${name}-${idx}`}
            className="relative rounded-full border border-white/[0.10] bg-zinc-900/40 px-4 py-2 text-sm text-zinc-200 backdrop-blur-sm"
          >
            <span className="relative z-10 font-medium tracking-tight">
              {name}
            </span>
            <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 [background:radial-gradient(120px_60px_at_40%_30%,rgba(255,255,255,0.10),transparent_60%)] group-hover:opacity-100" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Home: clients/trust section — soft reveal + dual marquee rows.
 */
export function Clients() {
  const names = CLIENTS.map((c) => c.name);
  const top = names.slice(0, Math.max(6, Math.ceil(names.length / 2)));
  const bottom = names.slice(top.length);

  return (
    <MotionSection className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-10 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      <SectionGlow accentOpacity={0.3} whiteOpacity={0.15} />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trusted by"
          title="Clients & partners"
          subtitle="Teams rely on us for high-touch production, sharp execution, and calm delivery — from intimate leadership offsites to large-scale conferences."
        />

        <MotionFadeUp delay={0.06}>
          <div className="relative rounded-2xl border border-white/[0.08] bg-zinc-900/30 p-5 md:p-7 backdrop-blur-sm shadow-[0_0_60px_-18px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-0 rounded-2xl opacity-[0.18] [background:linear-gradient(120deg,transparent,rgba(255,91,0,0.25),transparent)]" />

            <div className="relative space-y-4">
              <MarqueeRow items={top} />
              {bottom.length ? <MarqueeRow items={bottom} reverse /> : null}
            </div>
          </div>
        </MotionFadeUp>
      </div>
    </MotionSection>
  );
}

