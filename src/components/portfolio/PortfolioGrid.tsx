"use client";

import { Tabs } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { springReveal } from "@/lib/motion";
import { MotionFadeUp } from "@/components/ui/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_PROJECTS,
  type PortfolioFilter,
  type PortfolioProject,
} from "@/lib/portfolio";

function filterProjects(
  active: PortfolioFilter,
): PortfolioProject[] {
  if (active === "All Categories") return PORTFOLIO_PROJECTS;
  return PORTFOLIO_PROJECTS.filter((p) => p.category === active);
}

export function PortfolioGrid() {
  const [active, setActive] = useState<PortfolioFilter>("All Categories");
  const filtered = useMemo(() => filterProjects(active), [active]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 md:py-16">
      <SectionHeading
        eyebrow="Work"
        title="Our Portfolio"
        subtitle="We create immersive and impactful experiences — from conferences to brand activations. Our work transforms ideas into unforgettable moments that engage and inspire audiences."
      />

      <MotionFadeUp className="mb-10 w-full" delay={0.05}>
        <Tabs
          activeKey={active}
          onChange={(key) => setActive(key as PortfolioFilter)}
          centered
          size="large"
          items={PORTFOLIO_FILTERS.map((f) => ({ key: f, label: f }))}
          className="w-full max-w-5xl mx-auto [&_.ant-tabs-nav]:mb-0 [&_.ant-tabs-nav::before]:border-white/[0.08]"
          styles={{
            content: { display: "none", margin: 0, minHeight: 0, padding: 0 },
          }}
        />
      </MotionFadeUp>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.article
              layout
              key={item.slug}
              initial={{ opacity: 0, y: 28, scale: 0.94, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 20, scale: 0.96, filter: "blur(2px)" }}
              transition={springReveal}
              whileHover={{ y: -4 }}
            >
              <Link
                href={`/portfolio/${item.slug}`}
                className="group block relative aspect-[4/5] rounded-xl overflow-hidden border border-white/[0.08] bg-zinc-900/40 shadow-lg shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5b00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
              >
                <Image
                  src={item.coverImage}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <p className="text-[11px] uppercase tracking-wider text-[#ff5b00]/90 mb-1">
                    {item.category}
                  </p>
                  <h2 className="text-lg font-semibold text-white leading-snug">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm text-white/0 group-hover:text-white/90 transition-colors">
                    View project →
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
