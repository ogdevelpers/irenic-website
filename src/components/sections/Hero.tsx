"use client";

import { Button } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { BRAND, SECTION_IDS } from "@/lib/constants";
import { heroContainer, heroLine, heroLineTight } from "@/lib/motion";

/**
 * Home hero — staggered spring entrance + layered backdrop.
 */
export function Hero() {
  return (
    <section
      id={SECTION_IDS.home}
      className="relative min-h-[100dvh] flex flex-col justify-center pt-20 pb-16 overflow-hidden bg-[#050505]"
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1540575467063-27aef4e9b1fe?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/88 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5b00]/12 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center"
        variants={heroContainer}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={heroLineTight}
          className="text-xs md:text-sm uppercase tracking-[0.22em] mb-5 font-medium"
        >
          <span className="text-white">Irenic</span>{" "}
          <span style={{ color: BRAND.accent }}>Events</span>
        </motion.p>
        <motion.h1
          variants={heroLine}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] mb-6 bg-gradient-to-b from-white via-white to-zinc-400 bg-clip-text text-transparent"
        >
          Corporate &amp; Experiential Event Management Agency
        </motion.h1>
        <motion.p
          variants={heroLine}
          className="max-w-2xl mx-auto text-base md:text-lg text-zinc-400 leading-relaxed mb-10"
        >
          We partner with you to create immersive events that engage, inspire,
          and connect — from conferences and launches to exhibitions and MICE
          programs worldwide.
        </motion.p>
        <motion.div
          variants={heroLineTight}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="primary"
              size="large"
              href="/portfolio"
              className="!h-12 !px-8 !rounded-lg !font-semibold"
            >
              View portfolio
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="large"
              href="/about"
              className="!h-12 !px-8 !rounded-lg !font-semibold !bg-transparent !text-white !border-white/25 hover:!border-[#ff5b00] hover:!text-[#ff5b00]"
            >
              Show reel
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
