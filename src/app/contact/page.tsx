import type { Metadata } from "next";
import { ScrollToContact } from "./ScrollToContact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Irenic Events — share your brief, ask about MICE and experiential programs, or start planning your next event.",
};

export default function ContactPage() {
  return <ScrollToContact />;
}
