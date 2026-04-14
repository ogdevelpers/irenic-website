import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { InitialLoadOverlay } from "@/components/layout/InitialLoadOverlay";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irenicevents.example.com"),
  title: {
    default:
      "Irenic Events | Corporate & Experiential Event Management Agency",
    template: "%s | Irenic Events",
  },
  description:
    "Corporate and experiential event management — immersive events, exhibitions, and MICE experiences that engage, inspire, and connect.",
  openGraph: {
    title: "Irenic Events",
    description:
      "Transforming creative concepts into unforgettable realities — experiential events, exhibitions, and MICE.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irenic Events",
    description:
      "Global experiential event management with a luxury, cinematic edge.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full scroll-smooth`}
    >
      <body className="relative min-h-full antialiased bg-[#050505] text-zinc-100">
        <AppProviders>
          <InitialLoadOverlay />
          <AmbientBackdrop />
          <div className="relative z-[1]">
            {children}
            <SiteFooter />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
