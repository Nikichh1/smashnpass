"use client";

const items = [
  "100% БЪЛГАРСКО ТЕЛЕШКО",
  "БЕЛГИЙСКИ КАРТОФКИ",
  "СМАЧКАН НА ПЛОЧАТА",
  "ДВОЕН ЧЕДЪР",
  "РЪЧНО ПРАВЕНИ СОСОВЕ",
  "ПРЯСНО ВСЕКИ ДЕН",
  "СОФИЯ · ПЛОВДИВ · СОЗОПОЛ",
];

const Dot = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-fire-500">
    <path
      d="M12 2L14.39 9.27L22 9.27L15.81 13.97L18.21 21.24L12 16.54L5.79 21.24L8.19 13.97L2 9.27L9.61 9.27L12 2Z"
      fill="currentColor"
    />
  </svg>
);

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="relative isolate overflow-hidden border-y border-cream-50/10 bg-mustard-500 py-5">
      <div className="flex animate-marquee gap-10 whitespace-nowrap will-change-transform">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl uppercase tracking-tight text-char-900 sm:text-3xl">
              {item}
            </span>
            <Dot />
          </div>
        ))}
      </div>
    </section>
  );
}
