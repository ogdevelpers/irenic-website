"use client";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BRAND, NAV_LINKS, SECTION_IDS } from "@/lib/constants";

function isNavActive(pathname: string, href: string): boolean {
  if (href === "/portfolio") {
    return pathname === "/portfolio" || pathname.startsWith("/portfolio/");
  }
  if (href === "/about") return pathname === "/about";
  if (href === "/contact") return pathname === "/contact";
  if (href === `/#${SECTION_IDS.home}`) return pathname === "/";
  return false;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const blurPx = useTransform(scrollY, [0, 80], [0, 16]);
  const backdropFilter = useMotionTemplate`blur(${blurPx}px)`;
  const shellAlpha = useTransform(scrollY, [0, 120], [0.78, 0.94]);
  const backgroundColor = useMotionTemplate`rgba(5, 5, 5, ${shellAlpha})`;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[90] border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        style={{
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
          backgroundColor,
        }}
      >
        <div className="mx-auto flex h-16 md:h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold tracking-tight text-white"
          >
            Irenic <span style={{ color: BRAND.accent }}>Events</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((l) => {
              const active = isNavActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm transition-colors ${
                    active
                      ? "text-[#ff5b00] font-medium"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="inline-flex h-8 items-center justify-center rounded-lg bg-[#ff5b00] px-4 text-sm font-medium text-white shadow-[0_4px_20px_rgba(255,91,0,0.35)] transition-colors hover:bg-[#ff7a33] hover:text-white"
            >
              Get in touch
            </Link>
          </nav>

          <Button
            type="text"
            className="lg:!hidden !text-white !text-xl hover:!bg-white/10"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          />
        </div>
      </motion.header>

      <Drawer
        title={
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-semibold tracking-tight text-lg !text-white hover:!text-white"
          >
            <span className="text-white">Irenic</span>{" "}
            <span style={{ color: BRAND.accent }}>Events</span>
          </Link>
        }
        placement="right"
        width="min(100vw - 1.25rem, 20rem)"
        onClose={() => setOpen(false)}
        open={open}
        closeIcon={
          <span className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/[0.08] hover:text-white">
            <CloseOutlined className="text-base" />
          </span>
        }
        styles={{
          mask: {
            background: "rgba(5, 5, 5, 0.78)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          },
          wrapper: {
            boxShadow: "-16px 0 48px rgba(0, 0, 0, 0.55)",
          },
          section: {
            background: BRAND.bg,
          },
          header: {
            background: BRAND.surfaceElevated,
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "16px 20px",
          },
          title: {
            color: BRAND.text,
          },
          body: {
            background: BRAND.bg,
            padding: "16px 20px 20px",
            color: "#ffffff",
          },
          footer: {
            background: BRAND.surface,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "16px 20px 24px",
          },
        }}
        classNames={{
          header: "!items-center",
        }}
        footer={
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex h-12 w-full items-center justify-center rounded-lg bg-[#ff5b00] font-semibold text-white shadow-[0_4px_24px_rgba(255,91,0,0.3)] transition-colors hover:bg-[#ff7a33] hover:text-white"
          >
            Get in touch
          </Link>
        }
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map((l) => {
            const active = isNavActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={[
                  "rounded-xl px-4 py-3.5 text-[0.9375rem] font-medium transition-colors",
                  active
                    ? "bg-[rgba(255,91,0,0.12)] !text-[#ff5b00] ring-1 ring-[rgba(255,91,0,0.28)] hover:!text-[#ff5b00]"
                    : "!text-white hover:bg-white/[0.06] hover:!text-white",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </Drawer>
    </>
  );
}
