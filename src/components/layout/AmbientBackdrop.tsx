/**
 * Full-viewport ambient motion: CSS gradient orbs, drifting grid, sweep, grain.
 */
export function AmbientBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#050505]" />

      <div
        className="iren-ambient-orb iren-ambient-orb-a absolute -left-[15%] -top-[20%] z-[1] h-[min(85vw,640px)] w-[min(85vw,640px)] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255, 91, 0, 0.28) 0%, rgba(255, 91, 0, 0.06) 40%, transparent 68%)",
          filter: "blur(48px)",
        }}
      />
      <div
        className="iren-ambient-orb iren-ambient-orb-b absolute -right-[10%] top-[25%] z-[1] h-[min(75vw,520px)] w-[min(75vw,520px)] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(255, 122, 51, 0.18) 0%, rgba(255, 91, 0, 0.05) 45%, transparent 70%)",
          filter: "blur(56px)",
        }}
      />
      <div
        className="iren-ambient-orb iren-ambient-orb-c absolute left-[20%] bottom-[-15%] z-[1] h-[min(90vw,560px)] w-[min(90vw,560px)] rounded-full opacity-55"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 91, 0, 0.14) 0%, rgba(120, 60, 20, 0.05) 42%, transparent 68%)",
          filter: "blur(52px)",
        }}
      />
      <div
        className="iren-ambient-orb iren-ambient-orb-d absolute right-[15%] bottom-[10%] z-[1] h-[min(55vw,380px)] w-[min(55vw,380px)] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="iren-ambient-grid absolute inset-0 z-[2] opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 45%, black 10%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 45%, black 10%, transparent 72%)",
        }}
      />

      <div className="iren-ambient-sweep absolute top-0 left-[-25%] z-[2] h-full w-[45%]" />

      <div
        className="iren-ambient-noise absolute inset-0 z-[3] opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
