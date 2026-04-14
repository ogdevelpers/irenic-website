import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioDetailMotion } from "@/components/portfolio/PortfolioDetailMotion";
import { PortfolioHeroOverlay } from "@/components/portfolio/PortfolioHeroOverlay";
import { MotionFadeUp, StaggerIn, StaggerItem } from "@/components/ui/Stagger";
import {
  getAllPortfolioSlugs,
  getPortfolioBySlug,
} from "@/lib/portfolio";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPortfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Irenic Events`,
      description: project.summary,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) notFound();

  const blocks = [
    { label: "Overview", text: project.overview },
    { label: "Challenge", text: project.challenge },
    { label: "Solution", text: project.solution },
    { label: "Outcomes", text: project.outcomes },
  ];

  return (
    <article className="bg-[#050505]">
      <div className="relative h-[min(52vh,520px)] w-full">
        <Image
          src={project.coverImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/20" />
        <PortfolioHeroOverlay>
          <nav className="text-sm text-zinc-400 mb-4">
            <Link href="/portfolio" className="hover:text-[#ff5b00] transition-colors">
              Portfolio
            </Link>
            <span className="mx-2 text-zinc-600">/</span>
            <span className="text-white">{project.title}</span>
          </nav>
          <p className="text-xs uppercase tracking-wider text-[#ff5b00]/90 mb-2">
            {project.category} · {project.location} · {project.year}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight max-w-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-zinc-300 max-w-2xl leading-relaxed">
            {project.summary}
          </p>
        </PortfolioHeroOverlay>
      </div>

      <PortfolioDetailMotion>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-20">
          <StaggerIn
            preset="editorial"
            className="grid md:grid-cols-2 gap-10 md:gap-12 mb-16"
          >
            {blocks.map((b) => (
              <StaggerItem key={b.label}>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5b00]/85 mb-3">
                    {b.label}
                  </h2>
                  <p className="text-zinc-400 leading-relaxed">{b.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerIn>

          <MotionFadeUp>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5b00]/85 mb-6">
              Gallery
            </h2>
          </MotionFadeUp>
          <StaggerIn
            preset="spring"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {project.gallery.map((src) => (
              <StaggerItem key={src}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.08] bg-zinc-900">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerIn>

          <MotionFadeUp
            className="mt-14 pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            delay={0.06}
          >
            <Link
              href="/portfolio"
              className="text-sm font-medium text-zinc-400 hover:text-[#ff5b00] transition-colors"
            >
              ← Back to all projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#ff5b00] text-white text-sm font-semibold px-5 py-2.5 shadow-[0_8px_28px_rgba(255,91,0,0.35)] hover:bg-[#ff7326] transition-colors"
            >
              Discuss a similar project
            </Link>
          </MotionFadeUp>
        </div>
      </PortfolioDetailMotion>
    </article>
  );
}
