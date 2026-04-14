import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { MotionSection } from "@/components/ui/Stagger";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Irenic Events portfolio — immersive conferences, brand activations, exhibitions, and multimedia productions.",
};

export default function PortfolioPage() {
  return (
    <MotionSection>
      <PortfolioGrid />
    </MotionSection>
  );
}
