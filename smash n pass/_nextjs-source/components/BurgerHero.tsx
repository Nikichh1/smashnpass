"use client";

import { motion } from "framer-motion";

type LayerProps = {
  className?: string;
  delay?: number;
  children: React.ReactNode;
};

function Layer({ className = "", delay = 0, children }: LayerProps) {
  return (
    <motion.div
      initial={{ y: -60, opacity: 0, rotateX: 25 }}
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

export default function BurgerHero({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full max-w-[520px] ${className}`}
      style={{ perspective: "1400px" }}
    >
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* TOP BUN */}
        <Layer delay={0.05} className="relative mx-auto w-[88%]">
          <svg viewBox="0 0 400 160" className="w-full drop-shadow-2xl">
            <defs>
              <radialGradient id="bunTop" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#E8A623" />
                <stop offset="60%" stopColor="#D99B19" />
                <stop offset="100%" stopColor="#A8740D" />
              </radialGradient>
            </defs>
            <path
              d="M20 150 Q20 10 200 10 Q380 10 380 150 Z"
              fill="url(#bunTop)"
            />
            {/* sesame seeds */}
            {[
              [120, 60],
              [170, 40],
              [220, 50],
              [275, 45],
              [150, 90],
              [210, 85],
              [265, 90],
              [320, 70],
              [95, 100],
              [330, 110],
              [195, 120],
            ].map(([x, y], i) => (
              <ellipse
                key={i}
                cx={x}
                cy={y}
                rx="5"
                ry="3.4"
                fill="#FBF6E8"
                transform={`rotate(${(i * 23) % 60 - 30} ${x} ${y})`}
              />
            ))}
            {/* highlight */}
            <path
              d="M60 60 Q140 25 220 30"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </Layer>

        {/* SAUCE DRIP */}
        <Layer delay={0.15} className="-mt-3 mx-auto w-[92%] relative">
          <svg viewBox="0 0 400 40" className="w-full">
            <path
              d="M10 5 Q40 25 80 8 Q120 28 160 6 Q200 26 240 8 Q280 26 320 6 Q360 24 390 8 L390 30 Q360 38 320 32 Q280 38 240 30 L240 38 L220 26 L200 36 L180 26 L160 38 L160 30 Q120 38 80 30 Q40 38 10 30 Z"
              fill="#E63946"
            />
          </svg>
        </Layer>

        {/* LETTUCE */}
        <Layer delay={0.2} className="-mt-6 mx-auto w-[96%] relative">
          <svg viewBox="0 0 400 60" className="w-full">
            <path
              d="M5 30 Q25 8 50 25 Q75 5 100 22 Q125 4 150 24 Q175 6 200 20 Q225 4 250 23 Q275 7 300 25 Q325 6 350 24 Q375 8 395 28 L395 55 L5 55 Z"
              fill="#8AB14A"
            />
            <path
              d="M5 30 Q25 8 50 25 Q75 5 100 22 Q125 4 150 24 Q175 6 200 20 Q225 4 250 23 Q275 7 300 25 Q325 6 350 24 Q375 8 395 28"
              stroke="#557A22"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
        </Layer>

        {/* CHEESE */}
        <Layer delay={0.28} className="-mt-2 mx-auto w-[98%] relative">
          <svg viewBox="0 0 400 70" className="w-full drop-shadow-lg">
            <path
              d="M0 5 L400 5 L390 50 Q300 65 200 60 Q100 65 10 50 Z"
              fill="#F5B82E"
            />
            {/* dripping cheese */}
            <path
              d="M40 50 Q44 60 42 68"
              stroke="#F5B82E"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M180 58 Q186 70 184 80"
              stroke="#F5B82E"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M330 56 Q335 68 332 76"
              stroke="#F5B82E"
              strokeWidth="11"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </Layer>

        {/* PATTY 1 */}
        <Layer delay={0.36} className="-mt-4 mx-auto w-[94%] relative">
          <svg viewBox="0 0 400 60" className="w-full drop-shadow-xl">
            <defs>
              <linearGradient id="patty1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4A2614" />
                <stop offset="60%" stopColor="#3A1F12" />
                <stop offset="100%" stopColor="#2A1409" />
              </linearGradient>
            </defs>
            <path
              d="M10 10 Q200 -8 390 10 Q400 35 380 50 Q200 60 20 50 Q0 35 10 10 Z"
              fill="url(#patty1)"
            />
            {/* charred edges */}
            <path
              d="M30 14 Q200 0 370 14"
              stroke="#5E2F18"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
            />
          </svg>
        </Layer>

        {/* ONION RING */}
        <Layer delay={0.42} className="-mt-3 mx-auto w-[88%] relative">
          <svg viewBox="0 0 400 18" className="w-full">
            <ellipse cx="200" cy="9" rx="180" ry="6" fill="#F3E9D8" />
            <ellipse
              cx="200"
              cy="9"
              rx="180"
              ry="6"
              fill="none"
              stroke="#D7C9AE"
              strokeWidth="1"
            />
          </svg>
        </Layer>

        {/* BOTTOM BUN */}
        <Layer delay={0.5} className="-mt-2 mx-auto w-[90%] relative">
          <svg viewBox="0 0 400 110" className="w-full drop-shadow-2xl">
            <defs>
              <linearGradient id="bunBot" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C68A14" />
                <stop offset="100%" stopColor="#7A540A" />
              </linearGradient>
            </defs>
            <path
              d="M10 5 L390 5 Q400 75 200 100 Q0 75 10 5 Z"
              fill="url(#bunBot)"
            />
          </svg>
        </Layer>

        {/* shadow under */}
        <div className="mx-auto mt-2 h-6 w-[60%] rounded-[50%] bg-mustard-500/30 blur-2xl" />
      </motion.div>

      {/* floating callouts */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute -left-2 top-12 hidden rotate-[-6deg] rounded-full border border-mustard-500/40 bg-char-800/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-mustard-400 backdrop-blur-md sm:block"
      >
        ⌁ 100% Прясно
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute -right-4 top-1/3 hidden rotate-[6deg] rounded-full border border-fire-500/50 bg-char-800/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-fire-400 backdrop-blur-md sm:block"
      >
        ✶ Двоен Чедър
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-12 left-4 hidden rotate-[-3deg] rounded-full border border-cream-50/20 bg-char-800/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-cream-100 backdrop-blur-md sm:block"
      >
        ✱ Smash Sauce
      </motion.div>
    </div>
  );
}
