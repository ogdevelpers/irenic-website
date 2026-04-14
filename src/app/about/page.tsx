import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Irenic Events — our story, the value we bring to clients, mission and vision, and the team behind global experiential and MICE programs.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
