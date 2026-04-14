"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  end: number;
  suffix?: string;
  label: string;
  durationMs?: number;
};

export function AnimatedCounter({
  end,
  suffix = "",
  label,
  durationMs = 1800,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs);
      const eased = 1 - (1 - p) ** 3;
      setValue(Math.round(eased * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [isInView, end, durationMs]);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="font-serif text-4xl md:text-5xl text-[#ff5b00] tabular-nums">
        {value}
        {suffix}
      </div>
      <p className="mt-2 text-xs uppercase tracking-widest text-zinc-500">
        {label}
      </p>
    </div>
  );
}
