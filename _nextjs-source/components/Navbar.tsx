"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, Instagram } from "lucide-react";
import SmashLogo from "./SmashLogo";

const links = [
  { href: "#menu", label: "Меню" },
  { href: "#anatomy", label: "Анатомия" },
  { href: "#story", label: "За нас" },
  { href: "#locations", label: "Локации" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl"
      >
        <div
          className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border-cream-50/10 bg-char-900/85 backdrop-blur-xl shadow-char"
              : "border-cream-50/5 bg-char-900/40 backdrop-blur-md"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 cursor-pointer">
            <SmashLogo className="h-9 w-auto" />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-cream-100 transition-colors hover:text-mustard-400"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://www.instagram.com/smash.n.pass/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-cream-50/10 text-cream-100 transition-colors hover:border-mustard-500 hover:text-mustard-400"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#order"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-mustard-500 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-char-900 shadow-smash transition-all hover:bg-mustard-400"
            >
              Поръчай
              <span className="grid h-5 w-5 place-items-center rounded-full bg-char-900 text-mustard-400 transition-transform group-hover:rotate-45">
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
                  <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-cream-50/10 text-cream-100 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 rounded-2xl border border-cream-50/10 bg-char-800/95 p-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-lg font-bold uppercase tracking-wide text-cream-100 transition-colors hover:bg-char-700 hover:text-mustard-400"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#order"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-mustard-500 px-4 py-3 text-base font-bold uppercase tracking-wider text-char-900"
              >
                Поръчай сега
              </a>
              <a
                href="https://www.instagram.com/smash.n.pass/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cream-50/10 px-4 py-3 text-sm font-semibold text-cream-100"
              >
                <Instagram className="h-4 w-4" /> @smash.n.pass
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
