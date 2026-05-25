"use client";

import { motion } from "framer-motion";
import { Beef, Flame, MapPin, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Beef,
    title: "100% прясно",
    body: "Никога замразено. Месото идва прясно всеки ден от проверени български доставчици.",
  },
  {
    icon: Flame,
    title: "250°C smash",
    body: "Кюфтата се притискат върху нажежената плоча — само така се случва карамелизираната коричка.",
  },
  {
    icon: Sparkles,
    title: "Ръчни сосове",
    body: "Smash sauce, специален пилешки, коктейл — всичко се прави в кухнята ни, нищо от бутилка.",
  },
  {
    icon: MapPin,
    title: "3 града",
    body: "Намираш ни в София, Пловдив и Созопол — едно и също качество, навсякъде.",
  },
];

export default function Story() {
  return (
    <section id="story" className="relative isolate overflow-hidden bg-cream-100 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grain opacity-40 mix-blend-multiply" aria-hidden />

      {/* huge bg word */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 left-1/2 -z-10 -translate-x-1/2 select-none whitespace-nowrap font-display text-[24vw] leading-none text-char-900/[0.04] sm:text-[18vw]"
      >
        N&apos; PASS
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-char-900/15 bg-char-900/5 px-3 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-fire-500" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-char-700">
                Историята · Since 2023
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.9] tracking-tight2 text-char-900"
            >
              Започнахме с
              <br />
              <span className="text-stroke-char">една плоча</span>
              <br />
              и една идея.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <p className="text-base leading-relaxed text-char-700 sm:text-lg">
              Защото бяхме уморени от бургери, които изглеждат добре на снимка, но не оправдават хайпа. Smash N&apos; Pass е нашият отговор — без театралности, без ненужни топинги. Прясно месо, истински чедър, белгийски картофки и сос, който помниш.
            </p>
            <p className="mt-4 text-base leading-relaxed text-char-700">
              За три години отворихме <span className="font-semibold text-char-900">три локации</span> в три различни града. Защото добрият smash burger не е лукс — той е право.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative cursor-default overflow-hidden rounded-2xl border border-char-900/10 bg-char-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-smash"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-mustard-500 text-char-900">
                  <Icon className="h-6 w-6" strokeWidth={2.5} />
                </div>
                <div className="font-display text-2xl uppercase leading-none text-cream-50">
                  {p.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-cream-200">{p.body}</p>
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-mustard-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
