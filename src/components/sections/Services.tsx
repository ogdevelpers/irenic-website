"use client";

import Link from "next/link";
import {
  HoverLift,
  MotionFadeUp,
  MotionSection,
  StaggerIn,
  StaggerItem,
} from "@/components/ui/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/services";

export function Services() {
  return (
    <MotionSection className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-10 bg-[#080808] border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Services"
          subtitle="From strategy and creative through on-site delivery — one team for corporate events, congresses, and experiential programs worldwide."
        />

        <StaggerIn
          preset="spring"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12"
        >
          {SERVICES.map((item, i) => (
            <StaggerItem key={item.title}>
              <HoverLift className="h-full">
                <article className="group h-full rounded-xl border border-white/[0.08] bg-zinc-900/30 p-6 md:p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#ff5b00]/45 hover:shadow-[0_0_40px_-8px_rgba(255,91,0,0.25)]">
                  <span className="text-xs font-bold text-[#ff5b00] tabular-nums">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerIn>

        <MotionFadeUp delay={0.04}>
          <p className="text-center text-sm text-zinc-500">
            Want to go deeper on a specific program?{" "}
            <Link
              href="/portfolio"
              className="font-medium text-white underline decoration-[#ff5b00]/50 underline-offset-4 hover:text-[#ff5b00] hover:decoration-[#ff5b00] transition-colors"
            >
              Browse our work
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              className="font-medium text-white underline decoration-[#ff5b00]/50 underline-offset-4 hover:text-[#ff5b00] hover:decoration-[#ff5b00] transition-colors"
            >
              start a conversation
            </Link>
            .
          </p>
        </MotionFadeUp>
      </div>
    </MotionSection>
  );
}
