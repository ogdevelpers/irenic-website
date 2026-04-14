import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

/**
 * Home: hero, services, featured work. Portfolio, About, and Contact are dedicated routes.
 */
export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedWork />
      </main>
    </>
  );
}
