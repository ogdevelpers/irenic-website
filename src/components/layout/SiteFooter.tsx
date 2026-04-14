import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

/**
 * Shared end-of-page chrome: contact block + site footer on every route.
 */
export function SiteFooter() {
  return (
    <>
      <Contact />
      <Footer />
    </>
  );
}
