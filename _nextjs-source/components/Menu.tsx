"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";

type Item = {
  name: string;
  desc: string;
  weight: string;
  price: number;
  tag?: "hot" | "new" | "veg";
  category: "Бургери" | "Картофки" | "Менюта" | "Десерти" | "Напитки";
  accent: "mustard" | "fire" | "pickle" | "cream";
};

const ITEMS: Item[] = [
  // BURGERS
  {
    name: "Голям Смаш",
    desc: "3x прясно телешко, 3x чедър, лук, айсберг, мариновани краставички, smash сосче",
    weight: "380г",
    price: 23.47,
    tag: "hot",
    category: "Бургери",
    accent: "mustard",
  },
  {
    name: "Класически Смаш",
    desc: "2x прясно телешко, 2x чедър, лук, айсберг, мариновани краставички, smash сосче",
    weight: "300г",
    price: 17.6,
    category: "Бургери",
    accent: "fire",
  },
  {
    name: "Пилешки Бургер",
    desc: "Хрупкаво пилешко филе, разтопена моцарела, айсберг, краставички, специален сос",
    weight: "280г",
    price: 17.6,
    category: "Бургери",
    accent: "cream",
  },
  {
    name: "Търф & Търф",
    desc: "Пилешко филе, прясно телешко, чедър, френска моцарела, лук, айсберг, краставички, коктейл & специален сос",
    weight: "380г",
    price: 23.47,
    tag: "new",
    category: "Бургери",
    accent: "fire",
  },

  // FRIES
  {
    name: "Smash картофки с телешко",
    desc: "Белгийски картофки с прясно телешко, чедър и smash сос",
    weight: "320г",
    price: 13.69,
    tag: "hot",
    category: "Картофки",
    accent: "mustard",
  },
  {
    name: "Smash картофки с пилешко",
    desc: "Белгийски картофки с хрупкаво пилешко, френска моцарела и специален сос",
    weight: "350г",
    price: 13.69,
    category: "Картофки",
    accent: "cream",
  },
  {
    name: "Картофки с трюфел & моцарела",
    desc: "Белгийски картофки с френска моцарела и тръфъл олио",
    weight: "260г",
    price: 11.73,
    tag: "veg",
    category: "Картофки",
    accent: "pickle",
  },
  {
    name: "Картофки с чедър & моцарела",
    desc: "Белгийски картофки с двоен разтопен чедър и моцарела",
    weight: "260г",
    price: 11.73,
    tag: "veg",
    category: "Картофки",
    accent: "mustard",
  },
  {
    name: "Белгийски картофки",
    desc: "Класически белгийски картофки с подправки. Към тях избираш сос.",
    weight: "180г",
    price: 6.85,
    tag: "veg",
    category: "Картофки",
    accent: "cream",
  },

  // MENUS
  {
    name: "Голям Смаш МЕНЮ",
    desc: "Голям Смаш + Белгийски картофки + сос по избор",
    weight: "комплект",
    price: 25.43,
    tag: "hot",
    category: "Менюта",
    accent: "mustard",
  },
  {
    name: "Класически Смаш МЕНЮ",
    desc: "Класически Смаш + Белгийски картофки + сос по избор",
    weight: "комплект",
    price: 21.51,
    category: "Менюта",
    accent: "fire",
  },
  {
    name: "Пилешко МЕНЮ",
    desc: "Пилешки Бургер + Белгийски картофки + сос по избор",
    weight: "комплект",
    price: 19.56,
    category: "Менюта",
    accent: "cream",
  },

  // DESSERTS
  {
    name: "Nutella Smash",
    desc: "Топъл шоколад, натрошени бисквити, ванилов крем",
    weight: "180г",
    price: 7.04,
    category: "Десерти",
    accent: "fire",
  },

  // DRINKS
  {
    name: "Coca-Cola",
    desc: "Класиката. Студена.",
    weight: "330мл",
    price: 3.91,
    category: "Напитки",
    accent: "fire",
  },
  {
    name: "Ayran Meggle",
    desc: "Освежаващ айран, традиционен вкус",
    weight: "300мл",
    price: 3.91,
    category: "Напитки",
    accent: "cream",
  },
  {
    name: "Burgas светла бира",
    desc: "Българската ни безалкохолна слабост",
    weight: "500мл",
    price: 3.91,
    category: "Напитки",
    accent: "mustard",
  },
];

const TABS = ["Бургери", "Картофки", "Менюта", "Десерти", "Напитки"] as const;

const accentMap: Record<Item["accent"], { bg: string; text: string; border: string; svg: string }> = {
  mustard: {
    bg: "bg-mustard-500",
    text: "text-mustard-400",
    border: "border-mustard-500/40",
    svg: "#F5B82E",
  },
  fire: {
    bg: "bg-fire-500",
    text: "text-fire-400",
    border: "border-fire-500/40",
    svg: "#E63946",
  },
  pickle: {
    bg: "bg-pickle",
    text: "text-pickle",
    border: "border-pickle/40",
    svg: "#7CA040",
  },
  cream: {
    bg: "bg-cream-100",
    text: "text-cream-100",
    border: "border-cream-100/40",
    svg: "#F5EFE3",
  },
};

const tagLabels: Record<NonNullable<Item["tag"]>, string> = {
  hot: "★ Хит",
  new: "✦ Ново",
  veg: "Веган",
};

function MenuCard({ item, i }: { item: Item; i: number }) {
  const a = accentMap[item.accent];
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
      className="group relative flex cursor-default flex-col overflow-hidden rounded-2xl border border-cream-50/10 bg-char-800/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cream-50/25 hover:bg-char-800"
    >
      {/* visual */}
      <div className="relative aspect-[4/3] overflow-hidden bg-char-700">
        {/* gradient bg */}
        <div
          className="absolute inset-0 opacity-95"
          style={{
            background: `radial-gradient(circle at 70% 30%, ${a.svg}33, transparent 60%), radial-gradient(circle at 20% 80%, ${a.svg}22, transparent 70%), #1a1815`,
          }}
        />
        {/* burger silhouette */}
        <svg
          viewBox="0 0 200 150"
          className="absolute inset-0 m-auto h-[80%] w-[80%] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
        >
          <defs>
            <radialGradient id={`bun-${i}`} cx="50%" cy="40%">
              <stop offset="0%" stopColor="#E8A623" />
              <stop offset="100%" stopColor="#7A540A" />
            </radialGradient>
          </defs>
          {/* top bun */}
          <path d="M20 70 Q20 20 100 20 Q180 20 180 70 Z" fill={`url(#bun-${i})`} />
          <ellipse cx="70" cy="35" rx="3" ry="2" fill="#FBF6E8" />
          <ellipse cx="100" cy="30" rx="3" ry="2" fill="#FBF6E8" />
          <ellipse cx="130" cy="35" rx="3" ry="2" fill="#FBF6E8" />
          {/* cheese */}
          <path d="M10 70 L190 70 L186 82 Q100 90 14 82 Z" fill={a.svg} />
          {/* patty */}
          <path d="M14 82 Q100 76 186 82 Q188 100 180 110 Q100 116 20 110 Q12 100 14 82 Z" fill="#2A1409" />
          {/* bottom bun */}
          <path d="M16 110 L184 110 Q186 130 100 138 Q14 130 16 110 Z" fill="#7A540A" />
        </svg>

        {/* tag pill */}
        {item.tag && (
          <span
            className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full ${a.bg} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-char-900`}
          >
            {item.tag === "hot" && <Flame className="h-3 w-3" strokeWidth={2.5} />}
            {tagLabels[item.tag]}
          </span>
        )}
        {/* weight */}
        <span className="absolute right-3 top-3 rounded-full bg-char-900/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cream-200 backdrop-blur-sm">
          {item.weight}
        </span>
      </div>

      {/* text */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-2xl uppercase leading-none tracking-tight text-cream-50">
            {item.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-cream-200">{item.desc}</p>
        </div>
        <div className="mt-auto flex items-baseline justify-between border-t border-cream-50/10 pt-4">
          <div className="flex items-baseline gap-1">
            <span className={`font-display text-3xl ${a.text}`}>{item.price.toFixed(2)}</span>
            <span className="font-mono text-xs uppercase tracking-wider text-cream-400">лв</span>
          </div>
          <a
            href="#order"
            className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border ${a.border} px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${a.text} transition-all hover:bg-cream-50/5`}
          >
            Поръчай
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
              <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Menu() {
  const [active, setActive] = useState<(typeof TABS)[number]>("Бургери");
  const filtered = ITEMS.filter((i) => i.category === active);

  return (
    <section id="menu" className="relative isolate overflow-hidden bg-char-900 py-24 sm:py-32">
      <div className="absolute inset-0 grid-paper opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(245,184,46,0.12), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-mustard-500/30 bg-mustard-500/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-mustard-500" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-400">
                Менюто
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.9] tracking-tight2 text-cream-50">
              Това, заради което
              <br />
              <span className="text-mustard-500">идваш отново</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-cream-300 sm:text-base">
            Кратко меню. Всеки артикул минава тест — ако не е перфектен, не влиза.
          </p>
        </div>

        {/* tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all ${
                active === t
                  ? "border-mustard-500 bg-mustard-500 text-char-900 shadow-smash"
                  : "border-cream-50/15 bg-char-800/40 text-cream-200 hover:border-mustard-500/50 hover:text-mustard-400"
              }`}
            >
              {t}
              <span className="ml-2 font-mono text-[10px] opacity-60">
                {ITEMS.filter((x) => x.category === t).length}
              </span>
            </button>
          ))}
        </div>

        {/* grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((item, i) => (
              <MenuCard key={`${active}-${item.name}`} item={item} i={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="mt-10 text-center font-mono text-xs uppercase tracking-widest text-cream-400">
          * Цените са в български лева. Алергените са налични по запитване.
        </p>
      </div>
    </section>
  );
}
