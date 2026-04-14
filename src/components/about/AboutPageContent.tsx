"use client";

import { Button } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  HoverLift,
  MotionFadeUp,
  StaggerIn,
  StaggerItem,
} from "@/components/ui/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ABOUT_INTRO,
  CAPABILITIES_MARQUEE,
  CUSTOMER_VALUES,
  ORG_PILLARS,
  TEAM_MEMBERS,
} from "@/lib/about-content";
import { springReveal } from "@/lib/motion";

export function AboutPageContent() {
  return (
    <div className="bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 md:py-16">
        <SectionHeading
          eyebrow={ABOUT_INTRO.eyebrow}
          title={ABOUT_INTRO.title}
          subtitle={ABOUT_INTRO.lead}
        />

        <MotionFadeUp className="relative rounded-xl overflow-hidden border border-[#ff5b00]/25 bg-zinc-900 aspect-video max-w-5xl mx-auto mb-14 shadow-[0_0_60px_-12px_rgba(255,91,0,0.35)]">
          <Image
            src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            className="object-cover opacity-75"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/45">
            <Button
              type="primary"
              size="large"
              className="!rounded-full !px-8 !font-semibold"
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Show Reel
            </Button>
          </div>
        </MotionFadeUp>

        <StaggerIn
          preset="editorial"
          className="max-w-3xl mx-auto mb-16 space-y-5 text-zinc-400 leading-relaxed"
        >
          {ABOUT_INTRO.paragraphs.map((p) => (
            <StaggerItem key={p.slice(0, 24)}>
              <p className="text-base md:text-lg">{p}</p>
            </StaggerItem>
          ))}
        </StaggerIn>

        <div className="mb-20 -mx-4 sm:mx-0 border-y border-white/[0.08] bg-[#080808] py-4 overflow-hidden">
          <div className="flex w-max animate-marquee-x">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex items-center gap-10 px-6 shrink-0 text-sm font-medium text-zinc-500 uppercase tracking-wider"
              >
                {CAPABILITIES_MARQUEE.map((label) => (
                  <span key={`${copy}-${label}`} className="whitespace-nowrap">
                    {label}
                    <span className="ml-10 text-[#ff5b00]/40">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <SectionHeading
          eyebrow="For our clients"
          title="What Irenic brings you"
          subtitle="Concrete outcomes and ways of working you can expect when we lead your next event, congress, or activation."
          align="center"
        />

        <StaggerIn
          preset="spring"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        >
          {CUSTOMER_VALUES.map((v, i) => (
            <StaggerItem key={v.title}>
              <HoverLift className="h-full">
                <div className="h-full border border-white/[0.08] rounded-xl p-6 bg-zinc-900/30 hover:border-[#ff5b00]/35 transition-colors">
                  <span className="text-xs font-bold text-[#ff5b00] tabular-nums">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerIn>

        <SectionHeading
          eyebrow="How we think"
          title="Mission, vision & impact"
          subtitle="The principles that guide how we show up for your teams and audiences."
          align="center"
        />

        <StaggerIn
          preset="spring"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {ORG_PILLARS.map((p) => (
            <StaggerItem key={p.title}>
              <HoverLift className="h-full">
                <div className="h-full border border-white/[0.08] rounded-xl p-6 bg-zinc-900/40">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5b00] mb-4">
                    {p.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerIn>

        <SectionHeading
          eyebrow="People"
          title="Our team"
          subtitle="Passionate creatives, strategists, and experience designers dedicated to making every journey unforgettable."
          align="center"
        />

        <StaggerIn
          preset="spring"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {TEAM_MEMBERS.map((m) => (
            <StaggerItem key={m.name}>
              <motion.article
                className="rounded-xl border border-white/[0.08] p-6 bg-zinc-900/25 h-full hover:border-[#ff5b00]/30"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={springReveal}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 ring-2 ring-[#ff5b00]/30 mx-auto mb-4" />
                <h3 className="font-semibold text-white text-center">
                  {m.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#ff5b00] text-center mt-1">
                  {m.role}
                </p>
                <p className="mt-4 text-sm text-zinc-400 leading-relaxed text-center">
                  {m.bio}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerIn>

        <MotionFadeUp className="text-center max-w-xl mx-auto border-t border-white/[0.08] pt-14">
          <p className="text-lg md:text-xl text-zinc-200 font-medium mb-6">
            Let&apos;s shape your next experience into something unforgettable.
          </p>
          <Button
            type="primary"
            size="large"
            href="/contact"
            className="!rounded-lg !font-semibold"
          >
            Contact Us
          </Button>
        </MotionFadeUp>
      </div>
    </div>
  );
}
