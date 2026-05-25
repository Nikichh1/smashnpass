"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type LayerData = {
  label: string;
  bg: string;
  fg: string;
  desc: string;
  height: string;
  svg: React.ReactNode;
};

const LAYERS: LayerData[] = [
  {
    label: "Топ кифла",
    bg: "from-mustard-600 to-mustard-700",
    fg: "text-mustard-400",
    desc: "Brioche бунка с лек сладък финал и сусам отгоре.",
    height: "h-14",
    svg: (
      <svg viewBox="0 0 400 70" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="aTop" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#E8A623" />
            <stop offset="100%" stopColor="#7A540A" />
          </radialGradient>
        </defs>
        <path d="M5 65 Q5 5 200 5 Q395 5 395 65 Z" fill="url(#aTop)" />
        {[80, 140, 200, 260, 320].map((x, i) => (
          <ellipse key={i} cx={x} cy={28} rx="6" ry="4" fill="#FBF6E8" opacity="0.9" />
        ))}
      </svg>
    ),
  },
  {
    label: "Smash sauce",
    bg: "from-fire-500 to-fire-600",
    fg: "text-fire-400",
    desc: "Тайната ни рецепта — димно, лютиво, с тръпчинка.",
    height: "h-6",
    svg: (
      <svg viewBox="0 0 400 30" className="absolute inset-0 h-full w-full">
        <path
          d="M0 0 L400 0 L400 18 Q360 28 300 22 Q240 28 180 18 L180 26 L160 16 L140 26 L140 18 Q80 28 30 18 L0 24 Z"
          fill="#E63946"
        />
      </svg>
    ),
  },
  {
    label: "Маринован лук",
    bg: "from-onion to-cream-200",
    fg: "text-onion",
    desc: "Тънко нарязан, кисел, хрупкав — балансира мазнината.",
    height: "h-5",
    svg: (
      <svg viewBox="0 0 400 20" className="absolute inset-0 h-full w-full">
        <ellipse cx="200" cy="10" rx="195" ry="8" fill="#F3E9D8" />
        <ellipse cx="200" cy="10" rx="195" ry="8" stroke="#C9BEA6" strokeWidth="0.8" fill="none" />
        <ellipse cx="200" cy="10" rx="170" ry="6" stroke="#C9BEA6" strokeWidth="0.6" fill="none" />
      </svg>
    ),
  },
  {
    label: "Айсберг",
    bg: "from-pickle to-pickle/70",
    fg: "text-pickle",
    desc: "Леден, хрустящ, винаги пресен.",
    height: "h-8",
    svg: (
      <svg viewBox="0 0 400 40" className="absolute inset-0 h-full w-full">
        <path
          d="M0 20 Q30 4 60 18 Q90 2 120 16 Q150 0 180 16 Q210 2 240 18 Q270 4 300 16 Q330 2 360 18 Q380 6 400 22 L400 40 L0 40 Z"
          fill="#8AB14A"
        />
      </svg>
    ),
  },
  {
    label: "Двоен Чедър",
    bg: "from-mustard-500 to-mustard-600",
    fg: "text-mustard-500",
    desc: "Две парчета истински чедър, разтопени върху горещата кюфта.",
    height: "h-10",
    svg: (
      <svg viewBox="0 0 400 50" className="absolute inset-0 h-full w-full">
        <path d="M0 5 L400 5 L390 38 Q300 50 200 45 Q100 50 10 38 Z" fill="#F5B82E" />
        <path d="M60 38 Q66 50 62 60" stroke="#F5B82E" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M200 42 Q206 55 200 65" stroke="#F5B82E" strokeWidth="13" strokeLinecap="round" fill="none" />
        <path d="M340 38 Q346 50 340 60" stroke="#F5B82E" strokeWidth="10" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    label: "Прясно телешко 100гр",
    bg: "from-[#4A2614] to-[#2A1409]",
    fg: "text-amber-700",
    desc: "Прясно мляно, смачкано на 250°C — карамелизирано отвън, сочно отвътре.",
    height: "h-12",
    svg: (
      <svg viewBox="0 0 400 60" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="aPatty" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A2614" />
            <stop offset="100%" stopColor="#2A1409" />
          </linearGradient>
        </defs>
        <path d="M5 8 Q200 -5 395 8 Q400 32 385 50 Q200 60 15 50 Q0 32 5 8 Z" fill="url(#aPatty)" />
        <path d="M30 12 Q200 2 370 12" stroke="#6B3318" strokeWidth="1.5" fill="none" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: "Двоен Чедър",
    bg: "from-mustard-500 to-mustard-600",
    fg: "text-mustard-500",
    desc: "Втори пласт. Защото един чедър никога не е достатъчно.",
    height: "h-10",
    svg: (
      <svg viewBox="0 0 400 50" className="absolute inset-0 h-full w-full">
        <path d="M0 5 L400 5 L390 38 Q300 50 200 45 Q100 50 10 38 Z" fill="#F5B82E" />
        <path d="M120 38 Q126 52 122 62" stroke="#F5B82E" strokeWidth="12" strokeLinecap="round" fill="none" />
        <path d="M280 40 Q286 54 280 64" stroke="#F5B82E" strokeWidth="12" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    label: "Прясно телешко 100гр",
    bg: "from-[#4A2614] to-[#2A1409]",
    fg: "text-amber-700",
    desc: "Втората кюфта. Двоен smash — не за плахи души.",
    height: "h-12",
    svg: (
      <svg viewBox="0 0 400 60" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="aPatty2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A2614" />
            <stop offset="100%" stopColor="#2A1409" />
          </linearGradient>
        </defs>
        <path d="M5 8 Q200 -5 395 8 Q400 32 385 50 Q200 60 15 50 Q0 32 5 8 Z" fill="url(#aPatty2)" />
      </svg>
    ),
  },
  {
    label: "Долна кифла",
    bg: "from-mustard-700 to-[#5C3F08]",
    fg: "text-mustard-700",
    desc: "Същата brioche — основата, която поема всичко.",
    height: "h-12",
    svg: (
      <svg viewBox="0 0 400 60" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="aBot" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C68A14" />
            <stop offset="100%" stopColor="#5C3F08" />
          </linearGradient>
        </defs>
        <path d="M5 3 L395 3 Q400 45 200 58 Q0 45 5 3 Z" fill="url(#aBot)" />
      </svg>
    ),
  },
];

function AnatomyLayer({
  layer,
  index,
  progress,
  total,
}: {
  layer: LayerData;
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  const start = index / total;
  const end = (index + 0.7) / total;

  const y = useTransform(progress, [start, end], [-160, 0]);
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const rotate = useTransform(progress, [start, end], [index % 2 === 0 ? -6 : 6, 0]);
  const scale = useTransform(progress, [start, end], [0.9, 1]);

  return (
    <motion.div
      style={{ y, opacity, rotate, scale }}
      className={`relative mx-auto ${layer.height} w-[96%] max-w-[420px]`}
    >
      <div className="absolute inset-0 drop-shadow-2xl">{layer.svg}</div>
    </motion.div>
  );
}

function AnatomyChip({
  layer,
  index,
  progress,
  total,
}: {
  layer: LayerData;
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  const start = index / total;
  const end = (index + 0.7) / total;
  const opacity = useTransform(progress, [start, end], [0.25, 1]);
  const x = useTransform(progress, [start, end], [-20, 0]);

  return (
    <motion.li
      style={{ opacity, x }}
      className="flex items-center gap-3 rounded-xl border border-cream-50/10 bg-char-800/60 px-4 py-2.5 backdrop-blur-sm"
    >
      <span className="font-mono text-[10px] uppercase tracking-widest text-cream-400">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1">
        <div className={`font-display text-base uppercase leading-tight ${layer.fg}`}>
          {layer.label}
        </div>
        <p className="mt-0.5 text-[11px] leading-snug text-cream-300">{layer.desc}</p>
      </div>
    </motion.li>
  );
}

export default function BurgerAnatomy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="anatomy" className="relative bg-char-900">
      <div ref={ref} style={{ position: "relative", height: `${LAYERS.length * 80 + 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* bg accents */}
          <div className="absolute inset-0 grid-paper opacity-30" aria-hidden />
          <div
            className="pointer-events-none absolute right-0 top-1/2 -z-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(245,184,46,0.10), transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-5 pt-24 pb-10 sm:px-8 lg:flex-row lg:items-center lg:gap-8 lg:pb-0">
            {/* LEFT — header + chips */}
            <div className="lg:flex-1">
              <div className="mb-5 max-w-lg">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-mustard-500/30 bg-mustard-500/10 px-3 py-1">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-400">
                    Анатомия · 4D
                  </span>
                </div>
                <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.9] tracking-tight2 text-cream-50">
                  Какво има <span className="text-stroke-cream">вътре</span>
                </h2>
                <p className="mt-3 max-w-md text-sm text-cream-200 sm:text-base">
                  Скролни и разпиши истинския smash слой по слой.
                </p>
              </div>

              <ol className="hidden grid-cols-1 gap-1.5 lg:grid">
                {LAYERS.map((layer, i) => (
                  <AnatomyChip
                    key={i}
                    layer={layer}
                    index={i}
                    progress={scrollYProgress}
                    total={LAYERS.length}
                  />
                ))}
              </ol>

              {/* mobile compact list */}
              <ul className="mt-4 flex flex-wrap gap-1.5 lg:hidden">
                {LAYERS.map((l, i) => (
                  <li
                    key={i}
                    className={`rounded-full border border-cream-50/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${l.fg}`}
                  >
                    {String(i + 1).padStart(2, "0")} · {l.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — stacked burger */}
            <div className="relative mt-8 flex-1 lg:mt-0">
              <div
                className="relative mx-auto flex w-full max-w-[440px] flex-col items-center justify-end gap-[2px]"
                style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
              >
                {LAYERS.map((layer, i) => (
                  <AnatomyLayer
                    key={i}
                    layer={layer}
                    index={i}
                    progress={scrollYProgress}
                    total={LAYERS.length}
                  />
                ))}
                {/* shadow */}
                <div className="mx-auto mt-2 h-5 w-[55%] rounded-[50%] bg-mustard-500/20 blur-2xl" />
              </div>

              {/* scroll indicator */}
              <div className="mt-6 hidden items-center justify-center gap-2 lg:flex">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream-400">
                  Scroll
                </span>
                <div className="h-px w-12 bg-cream-50/15" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mustard-400">
                  Build the burger
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
