import Image from "next/image";
import Link from "next/link";
import {
  HoverLift,
  MotionFadeUp,
  MotionSection,
  StaggerIn,
  StaggerItem,
} from "@/components/ui/Stagger";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedPortfolio } from "@/lib/portfolio";

/**
 * Home teaser — spring-staggered cards + hover lift.
 */
export function FeaturedWork() {
  const featured = getFeaturedPortfolio(3);

  return (
    <MotionSection className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-10 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      <SectionGlow accentOpacity={0.26} whiteOpacity={0.12} />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Work"
          title="Selected projects"
          subtitle="A snapshot of recent productions. Explore the full archive for every case study."
        />

        <StaggerIn
          preset="spring"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
        >
          {featured.map((item) => (
            <StaggerItem key={item.slug}>
              <HoverLift className="h-full">
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="group block relative aspect-[4/5] rounded-xl overflow-hidden border border-white/[0.08] bg-zinc-900/40 shadow-lg shadow-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5b00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                >
                  <Image
                    src={item.coverImage}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <p className="text-[11px] uppercase tracking-wider text-[#ff5b00]/90 mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-lg font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerIn>

        <MotionFadeUp className="text-center" delay={0.06}>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-lg bg-[#ff5b00] text-white text-sm font-semibold px-6 py-3 shadow-[0_8px_32px_rgba(255,91,0,0.35)] hover:bg-[#ff7326] transition-colors"
          >
            View all portfolios
          </Link>
        </MotionFadeUp>
      </div>
    </MotionSection>
  );
}
