import { BRAND } from "@/lib/constants";

type SectionGlowProps = {
  /**
   * Accent glow opacity.
   * Keep subtle; this is meant to be felt, not seen.
   */
  accentOpacity?: number;
  /** White secondary glow opacity. */
  whiteOpacity?: number;
};

export function SectionGlow({
  accentOpacity = 0.28,
  whiteOpacity = 0.14,
}: SectionGlowProps) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div
        className="absolute -top-24 left-1/2 h-64 w-[44rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          opacity: accentOpacity,
          background: `radial-gradient(circle at center, ${BRAND.accent} 0%, transparent 60%)`,
        }}
      />
      <div
        className="absolute -bottom-24 left-1/2 h-64 w-[44rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          opacity: whiteOpacity,
          background: "radial-gradient(circle at center, white 0%, transparent 55%)",
        }}
      />
    </div>
  );
}

