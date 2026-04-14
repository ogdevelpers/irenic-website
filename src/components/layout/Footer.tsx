"use client";

import { InstagramOutlined, YoutubeOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { springSoft, springSnappy, viewportOnce } from "@/lib/motion";

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const social = [
  {
    icon: <YoutubeOutlined className="text-xl" />,
    href: "https://youtube.com",
    label: "Youtube",
  },
  {
    icon: <InstagramOutlined className="text-xl" />,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: <WhatsappIcon className="w-5 h-5" />,
    href: "https://wa.me/0000000000",
    label: "Whatsapp",
  },
];

const staggerLinks = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const linkItem = {
  hidden: { opacity: 0, x: -16, filter: "blur(3px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: springSnappy,
  },
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="relative z-10 border-t border-white/[0.08] bg-[#030303]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ ...springSoft, delay: 0.02 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 md:py-18">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5b00]/80 mb-4"
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={viewportOnce}
          transition={springSnappy}
        >
          Connect With Us
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-6 mb-12"
          variants={staggerLinks}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {social.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={linkItem}
              whileHover={{ x: 4 }}
              transition={springSnappy}
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#ff5b00] transition-colors"
            >
              {s.icon}
              <span className="text-sm font-medium">{s.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:justify-between lg:items-start">
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={viewportOnce}
            transition={{ ...springSoft, delay: 0.04 }}
          >
            <Link
              href="/"
              className="text-xl font-semibold text-white inline-block mb-3"
            >
              Irenic <span style={{ color: BRAND.accent }}>Events</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Corporate &amp; experiential event management — from strategy and
              design to flawless on-site delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={viewportOnce}
            transition={{ ...springSoft, delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-3">
              Quick links
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-zinc-400 hover:text-[#ff5b00] text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between gap-4 text-xs text-zinc-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ ...springSoft, delay: 0.06 }}
        >
          <span>© {year} Irenic Events. All rights reserved.</span>
        </motion.div>
      </div>
    </motion.footer>
  );
}
