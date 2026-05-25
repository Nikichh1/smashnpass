"use client";

import { motion } from "framer-motion";
import { Instagram, MapPin } from "lucide-react";
import SmashLogo from "./SmashLogo";

const cities = ["София", "Пловдив", "Созопол"];

const navCols = [
  {
    title: "Меню",
    links: [
      { label: "Бургери", href: "#menu" },
      { label: "Картофки", href: "#menu" },
      { label: "Менюта", href: "#menu" },
      { label: "Напитки", href: "#menu" },
    ],
  },
  {
    title: "За нас",
    links: [
      { label: "Историята", href: "#story" },
      { label: "Анатомия", href: "#anatomy" },
      { label: "Локации", href: "#locations" },
    ],
  },
  {
    title: "Поръчка",
    links: [
      { label: "Wolt", href: "https://wolt.com/en/bgr/sofia/brand/smashnpass" },
      { label: "Glovo", href: "https://glovoapp.com/en/bg/sofia/stores/smash-n-pass-sof" },
      { label: "Тел: +359 88 668 8683", href: "tel:+359886688683" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-char-900 pt-20">
      <div className="absolute inset-0 grid-paper opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Insta CTA */}
        <motion.a
          href="https://www.instagram.com/smash.n.pass/"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="group block cursor-pointer rounded-3xl border border-cream-50/10 bg-gradient-to-br from-char-800/80 to-char-700/40 p-8 backdrop-blur-sm transition-all hover:border-mustard-500/40 sm:p-12"
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cream-50/15 px-3 py-1">
                <Instagram className="h-3 w-3 text-mustard-400" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-200">
                  Последвай ни
                </span>
              </div>
              <div className="font-display text-[clamp(2rem,6vw,4.5rem)] leading-none uppercase tracking-tight2 text-cream-50">
                @smash.n.pass
              </div>
              <p className="mt-2 text-sm text-cream-300 sm:text-base">
                Нови бургери, събития, тайни менюта — пускаме всичко първо там.
              </p>
            </div>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-mustard-500 text-char-900 shadow-smash transition-transform group-hover:rotate-45 sm:h-20 sm:w-20">
              <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8" fill="none">
                <path d="M5 19L19 5M19 5H7M19 5V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </motion.a>

        {/* main */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SmashLogo className="h-12 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream-300">
              Истинският smash burger в България. Без преструвки. Без театралности. Само вкус, който помниш.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {cities.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-cream-50/15 bg-char-800/40 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-cream-200"
                >
                  <MapPin className="h-3 w-3 text-mustard-400" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            {navCols.map((col) => (
              <div key={col.title}>
                <div className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-400">
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="cursor-pointer text-sm text-cream-200 transition-colors hover:text-mustard-400"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* huge wordmark */}
        <div className="mt-16 border-t border-cream-50/10 pt-12">
          <div
            aria-hidden
            className="select-none text-center font-display leading-none tracking-tight2 text-cream-50/[0.06]"
            style={{ fontSize: "clamp(4rem, 18vw, 16rem)" }}
          >
            SMASH N&apos; PASS
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 py-6 sm:flex-row">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-400">
            © {new Date().getFullYear()} Smash N&apos; Pass · BG · Всички права запазени
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/smash.n.pass/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-cream-50/15 text-cream-200 transition-colors hover:border-mustard-500 hover:text-mustard-400"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-400">
              Site demo · {new Date().toLocaleDateString("bg-BG")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
