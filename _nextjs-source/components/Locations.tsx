"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

type Location = {
  city: string;
  area: string;
  address: string;
  phone?: string;
  hours: string;
  mapsUrl: string;
  emoji: string;
};

const LOCATIONS: Location[] = [
  {
    city: "София",
    area: "Център · Ангел Кънчев",
    address: "ул. Ангел Кънчев 35",
    phone: "+359 88 668 8683",
    hours: "Пон – Нед · 12:00 – 23:00",
    mapsUrl: "https://maps.google.com/?q=Smash+N+Pass+Angel+Kanchev+35+Sofia",
    emoji: "Ⅰ",
  },
  {
    city: "Пловдив",
    area: "Капана · Гео Бенковски",
    address: "ул. Г. Бенковски 4",
    hours: "Пон – Нед · 12:00 – 23:00",
    mapsUrl: "https://maps.google.com/?q=Smash+N+Pass+G.+Benkovski+4+Plovdiv",
    emoji: "Ⅱ",
  },
  {
    city: "Созопол",
    area: "Стария Град",
    address: "ул. Републиканска 23",
    hours: "Сезонно · 11:00 – 00:00",
    mapsUrl: "https://maps.google.com/?q=Smash+N+Pass+Republikanska+23+Sozopol",
    emoji: "Ⅲ",
  },
];

function LocationCard({ loc, i }: { loc: Location; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-cream-50/10 bg-char-800/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-mustard-500/40 hover:bg-char-800"
    >
      {/* map placeholder */}
      <div className="relative aspect-[5/3] overflow-hidden bg-char-700">
        {/* stylized "map" */}
        <svg
          viewBox="0 0 400 240"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id={`grid-${i}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="rgba(245,184,46,0.12)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="400" height="240" fill="#1a1815" />
          <rect width="400" height="240" fill={`url(#grid-${i})`} />
          {/* "streets" */}
          <path d={`M0 ${80 + i * 20} L400 ${100 + i * 15}`} stroke="rgba(245,184,46,0.20)" strokeWidth="3" />
          <path d={`M${100 + i * 30} 0 L${140 + i * 30} 240`} stroke="rgba(245,184,46,0.18)" strokeWidth="2.5" />
          <path d={`M0 ${160 - i * 18} Q200 ${140 - i * 10} 400 ${170 - i * 12}`} stroke="rgba(230,57,70,0.25)" strokeWidth="2.5" fill="none" />
          {/* blocks */}
          {[...Array(6)].map((_, j) => (
            <rect
              key={j}
              x={(j * 70 + i * 15) % 360}
              y={(j * 50 + i * 25) % 180 + 10}
              width="35"
              height="28"
              fill="rgba(245,184,46,0.06)"
              stroke="rgba(245,184,46,0.18)"
              strokeWidth="0.8"
              rx="2"
            />
          ))}
        </svg>

        {/* big pin */}
        <motion.div
          className="absolute inset-0 grid place-items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200, damping: 14 }}
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-mustard-500/30" />
            <div className="grid h-16 w-16 place-items-center rounded-full bg-mustard-500 text-char-900 shadow-smash">
              <MapPin className="h-7 w-7" strokeWidth={2.5} fill="currentColor" />
            </div>
          </div>
        </motion.div>

        {/* number badge */}
        <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-mustard-500/40 bg-char-900/80 font-display text-lg text-mustard-400 backdrop-blur-md">
          {loc.emoji}
        </div>
      </div>

      {/* info */}
      <div className="flex flex-col gap-5 p-6">
        <div>
          <div className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-400">
            {loc.area}
          </div>
          <h3 className="font-display text-4xl uppercase leading-none tracking-tight text-cream-50">
            {loc.city}
          </h3>
        </div>

        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3 text-cream-200">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cream-400" />
            <span>{loc.address}</span>
          </li>
          {loc.phone && (
            <li className="flex items-start gap-3 text-cream-200">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cream-400" />
              <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="cursor-pointer hover:text-mustard-400">
                {loc.phone}
              </a>
            </li>
          )}
          <li className="flex items-start gap-3 text-cream-200">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cream-400" />
            <span>{loc.hours}</span>
          </li>
        </ul>

        <div className="mt-2 flex gap-2">
          <a
            href={loc.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group/btn inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-mustard-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-char-900 transition-all hover:bg-mustard-400"
          >
            <Navigation className="h-3.5 w-3.5 transition-transform group-hover/btn:rotate-12" />
            Към адреса
          </a>
          <a
            href="#order"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-cream-50/15 px-5 py-3 text-xs font-bold uppercase tracking-wider text-cream-100 transition-all hover:border-mustard-500/50 hover:text-mustard-400"
          >
            Поръчай
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Locations() {
  return (
    <section id="locations" className="relative isolate overflow-hidden bg-char-900 py-24 sm:py-32">
      <div className="absolute inset-0 grid-paper opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(230,57,70,0.15), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-fire-500/30 bg-fire-500/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-fire-500" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-fire-400">
                Локации · 3 града
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.9] tracking-tight2 text-cream-50">
              Намери ни на
              <br />
              <span className="text-stroke-cream">картата</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-cream-300 sm:text-base">
            София · Пловдив · Созопол — едно и също меню, един и същ вкус.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {LOCATIONS.map((loc, i) => (
            <LocationCard key={loc.city} loc={loc} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
