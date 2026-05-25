"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const channels = [
  {
    name: "Wolt",
    href: "https://wolt.com/en/bgr/sofia/brand/smashnpass",
    note: "Безплатна доставка · 8.8 ★",
    bg: "bg-[#009DE0]",
    text: "text-white",
    icon: (
      <svg viewBox="0 0 100 100" className="h-7 w-7" fill="currentColor">
        <path d="M50 12 C 30 12 12 30 12 50 C 12 70 30 88 50 88 C 70 88 88 70 88 50 C 88 30 70 12 50 12 Z M 50 22 C 65 22 78 35 78 50 C 78 65 65 78 50 78 C 35 78 22 65 22 50 C 22 35 35 22 50 22 Z M 50 30 C 39 30 30 39 30 50 C 30 61 39 70 50 70 C 61 70 70 61 70 50 C 70 39 61 30 50 30 Z" />
      </svg>
    ),
  },
  {
    name: "Glovo",
    href: "https://glovoapp.com/en/bg/sofia/stores/smash-n-pass-sof",
    note: "За 25 минути · до вратата",
    bg: "bg-[#FFC244]",
    text: "text-black",
    icon: (
      <svg viewBox="0 0 100 100" className="h-7 w-7" fill="currentColor">
        <path d="M50 10 L 88 38 L 73 90 L 27 90 L 12 38 Z M 50 30 L 28 46 L 36 76 L 64 76 L 72 46 Z" />
      </svg>
    ),
  },
];

export default function OrderCTA() {
  return (
    <section id="order" className="relative isolate overflow-hidden bg-mustard-500 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grain opacity-25 mix-blend-multiply" aria-hidden />

      {/* huge bg word */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 left-1/2 -z-10 -translate-x-1/2 select-none whitespace-nowrap font-display text-[24vw] leading-none text-char-900/[0.06] sm:text-[16vw]"
      >
        SMASH
      </div>

      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-char-900/25 bg-char-900/10 px-3 py-1.5"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fire-500" />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-char-900">
            Отворено сега
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.85] tracking-tight2 text-char-900"
        >
          ГЛАДЕН?
          <br />
          <span className="text-stroke-char">ИМАМЕ</span> ЛЕК.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-char-900/80 sm:text-lg"
        >
          Поръчай за доставка или мини на място. Винаги пресен. Винаги smash.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2"
        >
          {channels.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${c.bg} ${c.text} p-6 text-left shadow-char transition-all hover:-translate-y-1 hover:shadow-2xl`}
            >
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-black/15">
                  {c.icon}
                </div>
                <div className="flex-1">
                  <div className="font-display text-3xl uppercase leading-none">
                    {c.name}
                  </div>
                  <div className="mt-1 text-xs opacity-80">{c.note}</div>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-black/15 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-char-900/20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-char-900/70">
            или
          </span>
          <div className="h-px flex-1 bg-char-900/20" />
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          href="tel:+359886688683"
          className="group mt-6 inline-flex cursor-pointer items-center gap-3 rounded-full bg-char-900 px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-cream-50 shadow-char transition-all hover:bg-char-800"
        >
          <Phone className="h-4 w-4" />
          Звънни · +359 88 668 8683
          <span className="grid h-7 w-7 place-items-center rounded-full bg-mustard-500 text-char-900 transition-transform group-hover:rotate-12">
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
              <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </motion.a>
      </div>
    </section>
  );
}
