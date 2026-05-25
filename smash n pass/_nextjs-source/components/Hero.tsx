"use client";

import { motion } from "framer-motion";
import { ChevronDown, Flame, Star } from "lucide-react";
import BurgerHero from "./BurgerHero";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-char-900 pt-28 sm:items-center"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-paper opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(245,184,46,0.25), transparent 80%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[700px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(230,57,70,0.20), transparent 80%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 sm:pb-0 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-cream-50/15 bg-char-800/60 px-3 py-1.5 backdrop-blur-md"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-mustard-500">
                <Flame className="h-3 w-3 text-char-900" />
              </span>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-200">
                Wolt rating · 8.8 / 10
              </span>
              <span className="h-1 w-1 rounded-full bg-cream-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-400">
                Sofia · Plovdiv · Sozopol
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(3.4rem,11vw,8.5rem)] font-normal leading-[0.86] tracking-tight2 text-cream-50"
            >
              СМАЧКАЙ.
              <br />
              <span className="text-mustard-500 shadow-text-fire">ИЗПАСИРАЙ.</span>
              <br />
              <span className="text-stroke-cream">ПОВТОРИ.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-cream-200 sm:text-lg"
            >
              Истинският <span className="text-mustard-400 font-semibold">smash burger</span> в България. Прясно телешко, разтопен чедър, белгийски картофки и ръчно правени сосове. Без преструвки. Само вкус.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#menu"
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-mustard-500 px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-char-900 shadow-smash transition-all hover:bg-mustard-400"
              >
                Виж менюто
                <span className="grid h-7 w-7 place-items-center rounded-full bg-char-900 text-mustard-400 transition-transform duration-300 group-hover:rotate-45">
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </a>
              <a
                href="#order"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-cream-50/20 bg-char-800/40 px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-cream-100 backdrop-blur-md transition-all hover:border-mustard-500 hover:text-mustard-400"
              >
                Поръчай онлайн
              </a>
            </motion.div>

            {/* social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-cream-400"
            >
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-mustard-500 text-mustard-500" />
                ))}
                <span className="ml-1 font-mono uppercase tracking-wider">Tripadvisor</span>
              </div>
              <span className="h-3 w-px bg-cream-50/15" />
              <span className="font-mono uppercase tracking-wider">
                <span className="text-cream-100">3</span> локации
              </span>
              <span className="h-3 w-px bg-cream-50/15" />
              <span className="font-mono uppercase tracking-wider">
                <span className="text-cream-100">Wolt</span> · <span className="text-cream-100">Glovo</span> доставка
              </span>
            </motion.div>
          </div>

          {/* RIGHT — burger */}
          <div className="relative lg:col-span-5">
            <BurgerHero className="mx-auto" />
            {/* big bg word */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-8 left-1/2 -z-10 -translate-x-1/2 select-none whitespace-nowrap font-display text-[18vw] leading-none text-cream-50/[0.025] sm:text-[12vw] lg:text-[10vw]"
            >
              SMASH
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-12 hidden items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-cream-400 sm:flex"
        >
          <span>Scroll</span>
          <ChevronDown className="h-3 w-3 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
