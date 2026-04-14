"use client";

import { useEffect } from "react";
import { SECTION_IDS } from "@/lib/constants";

/** On `/contact`, scroll the global contact section into view below the fixed header. */
export function ScrollToContact() {
  useEffect(() => {
    const id = SECTION_IDS.contact;
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, []);

  return null;
}
