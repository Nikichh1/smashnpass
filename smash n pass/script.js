// =========================================================
//  Smash N' Pass — interactions & motion
//  Чист JS (работи при двойно кликане на index.html, без сървър).
//  Scroll-driven анимациите използват същата математика като
//  Framer Motion-овия `scroll()` (start start → end end).
// =========================================================

// pageScroll(callback, { target }) — мини-имплементация на
// motion.scroll() с offset ["start start", "end end"].
function pageScroll(callback, options) {
  const target = options.target;
  if (!target) return;
  let ticking = false;
  function update() {
    const rect = target.getBoundingClientRect();
    const sectionH = target.offsetHeight;
    const viewportH = window.innerHeight;
    const scrolled = -rect.top;
    const totalScrollable = Math.max(1, sectionH - viewportH);
    const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
    callback(progress);
    ticking = false;
  }
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}

// ---------- DATA ------------------------------------------

const ANATOMY_LAYERS = [
  {
    label: "Топ кифла",
    fg: "text-mustard-400",
    desc: "Brioche бунка с лек сладък финал и сусам отгоре.",
    h: "h-14",
    svg: `<svg viewBox="0 0 400 70" class="absolute inset-0 h-full w-full">
      <defs><radialGradient id="aTop" cx="50%" cy="40%"><stop offset="0%" stop-color="#E8A623"/><stop offset="100%" stop-color="#7A540A"/></radialGradient></defs>
      <path d="M5 65 Q5 5 200 5 Q395 5 395 65 Z" fill="url(#aTop)"/>
      <ellipse cx="80" cy="28" rx="6" ry="4" fill="#FBF6E8" opacity=".9"/>
      <ellipse cx="140" cy="28" rx="6" ry="4" fill="#FBF6E8" opacity=".9"/>
      <ellipse cx="200" cy="28" rx="6" ry="4" fill="#FBF6E8" opacity=".9"/>
      <ellipse cx="260" cy="28" rx="6" ry="4" fill="#FBF6E8" opacity=".9"/>
      <ellipse cx="320" cy="28" rx="6" ry="4" fill="#FBF6E8" opacity=".9"/>
    </svg>`,
  },
  {
    label: "Smash sauce",
    fg: "text-fire-400",
    desc: "Тайната ни рецепта — димно, лютиво, с тръпчинка.",
    h: "h-6",
    svg: `<svg viewBox="0 0 400 30" class="absolute inset-0 h-full w-full">
      <path d="M0 0 L400 0 L400 18 Q360 28 300 22 Q240 28 180 18 L180 26 L160 16 L140 26 L140 18 Q80 28 30 18 L0 24 Z" fill="#E63946"/>
    </svg>`,
  },
  {
    label: "Маринован лук",
    fg: "text-onion",
    desc: "Тънко нарязан, кисел, хрупкав — балансира мазнината.",
    h: "h-5",
    svg: `<svg viewBox="0 0 400 20" class="absolute inset-0 h-full w-full">
      <ellipse cx="200" cy="10" rx="195" ry="8" fill="#F3E9D8"/>
      <ellipse cx="200" cy="10" rx="195" ry="8" stroke="#C9BEA6" stroke-width=".8" fill="none"/>
      <ellipse cx="200" cy="10" rx="170" ry="6" stroke="#C9BEA6" stroke-width=".6" fill="none"/>
    </svg>`,
  },
  {
    label: "Айсберг",
    fg: "text-pickle",
    desc: "Леден, хрустящ, винаги пресен.",
    h: "h-8",
    svg: `<svg viewBox="0 0 400 40" class="absolute inset-0 h-full w-full">
      <path d="M0 20 Q30 4 60 18 Q90 2 120 16 Q150 0 180 16 Q210 2 240 18 Q270 4 300 16 Q330 2 360 18 Q380 6 400 22 L400 40 L0 40 Z" fill="#8AB14A"/>
    </svg>`,
  },
  {
    label: "Двоен Чедър",
    fg: "text-mustard-500",
    desc: "Две парчета истински чедър, разтопени върху горещата кюфта.",
    h: "h-10",
    svg: `<svg viewBox="0 0 400 50" class="absolute inset-0 h-full w-full">
      <path d="M0 5 L400 5 L390 38 Q300 50 200 45 Q100 50 10 38 Z" fill="#F5B82E"/>
      <path d="M60 38 Q66 50 62 60" stroke="#F5B82E" stroke-width="10" stroke-linecap="round" fill="none"/>
      <path d="M200 42 Q206 55 200 65" stroke="#F5B82E" stroke-width="13" stroke-linecap="round" fill="none"/>
      <path d="M340 38 Q346 50 340 60" stroke="#F5B82E" stroke-width="10" stroke-linecap="round" fill="none"/>
    </svg>`,
  },
  {
    label: "Прясно телешко 100гр",
    fg: "text-amber-700",
    desc: "Прясно мляно, смачкано на 250°C — карамелизирано отвън, сочно отвътре.",
    h: "h-12",
    svg: `<svg viewBox="0 0 400 60" class="absolute inset-0 h-full w-full">
      <defs><linearGradient id="aP1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4A2614"/><stop offset="100%" stop-color="#2A1409"/></linearGradient></defs>
      <path d="M5 8 Q200 -5 395 8 Q400 32 385 50 Q200 60 15 50 Q0 32 5 8 Z" fill="url(#aP1)"/>
      <path d="M30 12 Q200 2 370 12" stroke="#6B3318" stroke-width="1.5" fill="none" opacity=".6"/>
    </svg>`,
  },
  {
    label: "Двоен Чедър",
    fg: "text-mustard-500",
    desc: "Втори пласт. Защото един чедър никога не е достатъчно.",
    h: "h-10",
    svg: `<svg viewBox="0 0 400 50" class="absolute inset-0 h-full w-full">
      <path d="M0 5 L400 5 L390 38 Q300 50 200 45 Q100 50 10 38 Z" fill="#F5B82E"/>
      <path d="M120 38 Q126 52 122 62" stroke="#F5B82E" stroke-width="12" stroke-linecap="round" fill="none"/>
      <path d="M280 40 Q286 54 280 64" stroke="#F5B82E" stroke-width="12" stroke-linecap="round" fill="none"/>
    </svg>`,
  },
  {
    label: "Прясно телешко 100гр",
    fg: "text-amber-700",
    desc: "Втората кюфта. Двоен smash — не за плахи души.",
    h: "h-12",
    svg: `<svg viewBox="0 0 400 60" class="absolute inset-0 h-full w-full">
      <defs><linearGradient id="aP2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4A2614"/><stop offset="100%" stop-color="#2A1409"/></linearGradient></defs>
      <path d="M5 8 Q200 -5 395 8 Q400 32 385 50 Q200 60 15 50 Q0 32 5 8 Z" fill="url(#aP2)"/>
    </svg>`,
  },
  {
    label: "Долна кифла",
    fg: "text-mustard-700",
    desc: "Същата brioche — основата, която поема всичко.",
    h: "h-12",
    svg: `<svg viewBox="0 0 400 60" class="absolute inset-0 h-full w-full">
      <defs><linearGradient id="aBot" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#C68A14"/><stop offset="100%" stop-color="#5C3F08"/></linearGradient></defs>
      <path d="M5 3 L395 3 Q400 45 200 58 Q0 45 5 3 Z" fill="url(#aBot)"/>
    </svg>`,
  },
];

const MENU_ITEMS = [
  { cat: "Бургери", name: "Голям Смаш", desc: "3x прясно телешко, 3x чедър, лук, айсберг, мариновани краставички, smash сосче", w: "380г", price: 23.47, tag: "hot", accent: "mustard", img: "assets/photos/01.jpg" },
  { cat: "Бургери", name: "Класически Смаш", desc: "2x прясно телешко, 2x чедър, лук, айсберг, мариновани краставички, smash сосче", w: "300г", price: 17.60, accent: "fire", img: "assets/photos/02.jpg" },
  { cat: "Бургери", name: "Пилешки Бургер", desc: "Хрупкаво пилешко филе, разтопена моцарела, айсберг, краставички, специален сос", w: "280г", price: 17.60, accent: "cream", img: "assets/photos/03.jpg" },
  { cat: "Бургери", name: "Търф & Търф", desc: "Пилешко филе, прясно телешко, чедър, френска моцарела, лук, айсберг, краставички, коктейл & специален сос", w: "380г", price: 23.47, tag: "new", accent: "fire", img: "assets/photos/06.jpg" },

  { cat: "Картофки", name: "Smash картофки с телешко", desc: "Белгийски картофки с прясно телешко, чедър и smash сос", w: "320г", price: 13.69, tag: "hot", accent: "mustard", img: "assets/photos/05.jpg" },
  { cat: "Картофки", name: "Smash картофки с пилешко", desc: "Белгийски картофки с хрупкаво пилешко, френска моцарела и специален сос", w: "350г", price: 13.69, accent: "cream", img: "assets/photos/08.jpg" },
  { cat: "Картофки", name: "Картофки с трюфел & моцарела", desc: "Белгийски картофки с френска моцарела и тръфъл олио", w: "260г", price: 11.73, tag: "veg", accent: "pickle", img: "assets/photos/04.jpg" },
  { cat: "Картофки", name: "Картофки с чедър & моцарела", desc: "Белгийски картофки с двоен разтопен чедър и моцарела", w: "260г", price: 11.73, tag: "veg", accent: "mustard", img: "assets/photos/14.jpg" },
  { cat: "Картофки", name: "Белгийски картофки", desc: "Класически белгийски картофки с подправки. Към тях избираш сос.", w: "180г", price: 6.85, tag: "veg", accent: "cream", img: "assets/photos/04.jpg" },

  { cat: "Менюта", name: "Голям Смаш МЕНЮ", desc: "Голям Смаш + Белгийски картофки + сос по избор", w: "комплект", price: 25.43, tag: "hot", accent: "mustard", img: "assets/photos/05.jpg" },
  { cat: "Менюта", name: "Класически Смаш МЕНЮ", desc: "Класически Смаш + Белгийски картофки + сос по избор", w: "комплект", price: 21.51, accent: "fire", img: "assets/photos/09.jpg" },
  { cat: "Менюта", name: "Пилешко МЕНЮ", desc: "Пилешки Бургер + Белгийски картофки + сос по избор", w: "комплект", price: 19.56, accent: "cream", img: "assets/photos/08.jpg" },

  { cat: "Десерти", name: "Nutella Smash", desc: "Топъл шоколад, натрошени бисквити, ванилов крем", w: "180г", price: 7.04, accent: "fire" },

  { cat: "Напитки", name: "Coca-Cola", desc: "Класиката. Студена.", w: "330мл", price: 3.91, accent: "fire" },
  { cat: "Напитки", name: "Ayran Meggle", desc: "Освежаващ айран, традиционен вкус", w: "300мл", price: 3.91, accent: "cream" },
  { cat: "Напитки", name: "Burgas светла бира", desc: "Българската ни безалкохолна слабост", w: "500мл", price: 3.91, accent: "mustard" },
];

const TABS = ["Бургери", "Картофки", "Менюта", "Десерти", "Напитки"];

const LOCATIONS = [
  {
    city: "София",
    area: "Център · Ангел Кънчев",
    address: "ул. Ангел Кънчев 35",
    phone: "+359 88 668 8683",
    hours: "Пон – Нед · 12:00 – 23:00",
    mapsUrl: "https://maps.google.com/?q=Smash+N+Pass+Angel+Kanchev+35+Sofia",
    badge: "Ⅰ",
  },
  {
    city: "Пловдив",
    area: "Капана · Гео Бенковски",
    address: "ул. Г. Бенковски 4",
    hours: "Пон – Нед · 12:00 – 23:00",
    mapsUrl: "https://maps.google.com/?q=Smash+N+Pass+G.+Benkovski+4+Plovdiv",
    badge: "Ⅱ",
  },
  {
    city: "Созопол",
    area: "Стария Град",
    address: "ул. Републиканска 23",
    hours: "Сезонно · 11:00 – 00:00",
    mapsUrl: "https://maps.google.com/?q=Smash+N+Pass+Republikanska+23+Sozopol",
    badge: "Ⅲ",
  },
];

const ACCENT = {
  mustard: { bg: "bg-mustard-500", text: "text-mustard-400", border: "border-mustard-500/40", svg: "#F5B82E" },
  fire:    { bg: "bg-fire-500",    text: "text-fire-400",    border: "border-fire-500/40",    svg: "#E63946" },
  pickle:  { bg: "bg-pickle",      text: "text-pickle",      border: "border-pickle/40",      svg: "#7CA040" },
  cream:   { bg: "bg-cream-100",   text: "text-cream-100",   border: "border-cream-100/40",   svg: "#F5EFE3" },
};

const TAG_LABEL = { hot: "★ Хит", new: "✦ Ново", veg: "Веган" };

// ---------- ANATOMY: chips + burger layers ---------------

function renderAnatomy() {
  const desktopList = document.getElementById("anatomyChips");
  const mobileList = document.getElementById("anatomyChipsMobile");
  const burgerStack = document.getElementById("anatomyBurger");
  if (!desktopList || !burgerStack) return;

  // chips (desktop with descriptions)
  desktopList.innerHTML = ANATOMY_LAYERS.map((l, i) => `
    <li class="anatomy-chip flex items-center gap-3 rounded-xl border border-cream-50/10 bg-char-800/60 px-4 py-2.5 backdrop-blur-sm" data-chip-index="${i}">
      <span class="font-mono text-[10px] uppercase tracking-widest text-cream-400">${String(i + 1).padStart(2, "0")}</span>
      <div class="flex-1">
        <div class="font-display font-bold text-base uppercase leading-tight ${l.fg}">${l.label}</div>
        <p class="mt-0.5 text-[11px] leading-snug text-cream-300">${l.desc}</p>
      </div>
    </li>
  `).join("");

  // chips (mobile compact)
  mobileList.innerHTML = ANATOMY_LAYERS.map((l, i) => `
    <li class="rounded-full border border-cream-50/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${l.fg}">
      ${String(i + 1).padStart(2, "0")} · ${l.label}
    </li>
  `).join("");

  // burger stack
  const shadow = burgerStack.querySelector("div.blur-2xl");
  const layersHtml = ANATOMY_LAYERS.map((l, i) => `
    <div class="anatomy-layer relative mx-auto ${l.h} w-[96%] max-w-[420px]" data-anatomy-index="${i}">
      <div class="absolute inset-0 drop-shadow-2xl">${l.svg}</div>
    </div>
  `).join("");
  burgerStack.insertAdjacentHTML("afterbegin", layersHtml);
}

// ---------- MENU: tabs + grid ----------------------------

let activeTab = TABS[0];

function renderMenuTabs() {
  const tabsEl = document.getElementById("menuTabs");
  if (!tabsEl) return;
  tabsEl.innerHTML = TABS.map(t => {
    const count = MENU_ITEMS.filter(x => x.cat === t).length;
    const isActive = t === activeTab;
    return `<button data-tab="${t}" class="menu-tab cursor-pointer rounded-full border px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all ${
      isActive
        ? "border-mustard-500 bg-mustard-500 text-char-900 shadow-smash"
        : "border-cream-50/15 bg-char-800/40 text-cream-200 hover:border-mustard-500/50 hover:text-mustard-400"
    }">${t}<span class="ml-2 font-mono text-[10px] opacity-60">${count}</span></button>`;
  }).join("");

  tabsEl.querySelectorAll(".menu-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      activeTab = btn.dataset.tab;
      renderMenuTabs();
      renderMenuGrid();
    });
  });
}

function renderMenuGrid() {
  const gridEl = document.getElementById("menuGrid");
  if (!gridEl) return;
  const items = MENU_ITEMS.filter(x => x.cat === activeTab);

  gridEl.style.opacity = "0";
  gridEl.style.transform = "translateY(10px)";
  setTimeout(() => {
    gridEl.innerHTML = items.map((item, i) => {
      const a = ACCENT[item.accent];
      const tagHtml = item.tag ? `
        <span class="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full ${a.bg} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-char-900">
          ${item.tag === "hot" ? '<i data-lucide="flame" class="w-3 h-3" stroke-width="2.5"></i>' : ""}
          ${TAG_LABEL[item.tag]}
        </span>` : "";

      // Visual: real photo if available, else stylized SVG fallback
      const visualHtml = item.img
        ? `<img src="${item.img}" alt="${item.name}" loading="lazy"
             class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"/>
           <div class="absolute inset-0 bg-gradient-to-t from-char-900/80 via-char-900/20 to-transparent"></div>
           <div class="absolute inset-0 opacity-40" style="background: radial-gradient(circle at 70% 20%, ${a.svg}44, transparent 60%)"></div>`
        : `<div class="absolute inset-0 opacity-95" style="background: radial-gradient(circle at 70% 30%, ${a.svg}33, transparent 60%), radial-gradient(circle at 20% 80%, ${a.svg}22, transparent 70%), #1a1815"></div>
           <svg viewBox="0 0 200 150" class="absolute inset-0 m-auto h-[80%] w-[80%] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
             <defs><radialGradient id="card-bun-${activeTab}-${i}" cx="50%" cy="40%"><stop offset="0%" stop-color="#E8A623"/><stop offset="100%" stop-color="#7A540A"/></radialGradient></defs>
             <path d="M20 70 Q20 20 100 20 Q180 20 180 70 Z" fill="url(#card-bun-${activeTab}-${i})"/>
             <ellipse cx="70" cy="35" rx="3" ry="2" fill="#FBF6E8"/>
             <ellipse cx="100" cy="30" rx="3" ry="2" fill="#FBF6E8"/>
             <ellipse cx="130" cy="35" rx="3" ry="2" fill="#FBF6E8"/>
             <path d="M10 70 L190 70 L186 82 Q100 90 14 82 Z" fill="${a.svg}"/>
             <path d="M14 82 Q100 76 186 82 Q188 100 180 110 Q100 116 20 110 Q12 100 14 82 Z" fill="#2A1409"/>
             <path d="M16 110 L184 110 Q186 130 100 138 Q14 130 16 110 Z" fill="#7A540A"/>
           </svg>`;

      return `
        <article class="group relative flex cursor-default flex-col overflow-hidden rounded-2xl border border-cream-50/10 bg-char-800/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cream-50/25 hover:bg-char-800">
          <div class="relative aspect-[4/3] overflow-hidden bg-char-700">
            ${visualHtml}
            ${tagHtml}
            <span class="absolute right-3 top-3 rounded-full bg-char-900/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cream-200 backdrop-blur-sm">${item.w}</span>
          </div>
          <div class="flex flex-1 flex-col gap-3 p-5">
            <div>
              <h3 class="font-display font-bold text-2xl uppercase leading-none tracking-tight text-cream-50">${item.name}</h3>
              <p class="mt-2 text-sm leading-relaxed text-cream-200">${item.desc}</p>
            </div>
            <div class="mt-auto flex items-baseline justify-between border-t border-cream-50/10 pt-4">
              <div class="flex items-baseline gap-1">
                <span class="font-display font-bold text-3xl ${a.text}">${item.price.toFixed(2)}</span>
                <span class="font-mono text-xs uppercase tracking-wider text-cream-400">лв</span>
              </div>
              <a href="#order" class="inline-flex cursor-pointer items-center gap-1.5 rounded-full border ${a.border} px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${a.text} transition-all hover:bg-cream-50/5">
                Поръчай
                <svg viewBox="0 0 12 12" class="h-2.5 w-2.5" fill="none"><path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </a>
            </div>
          </div>
        </article>`;
    }).join("");

    if (window.lucide) lucide.createIcons();
    gridEl.style.transition = "opacity .4s, transform .4s";
    requestAnimationFrame(() => {
      gridEl.style.opacity = "1";
      gridEl.style.transform = "translateY(0)";
    });
  }, 50);
}

// ---------- LOCATIONS: cards -----------------------------

function renderLocations() {
  const grid = document.getElementById("locationsGrid");
  if (!grid) return;
  grid.innerHTML = LOCATIONS.map((loc, i) => `
    <article data-inview class="opacity-0 translate-y-10 transition-all duration-700 group relative overflow-hidden rounded-3xl border border-cream-50/10 bg-char-800/60 backdrop-blur-sm hover:-translate-y-1 hover:border-mustard-500/40 hover:bg-char-800" style="transition-delay: ${i * 100}ms">
      <div class="relative aspect-[5/3] overflow-hidden bg-char-700">
        <svg viewBox="0 0 400 240" class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="loc-grid-${i}" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="rgba(245,184,46,0.12)" stroke-width=".8"/>
            </pattern>
          </defs>
          <rect width="400" height="240" fill="#1a1815"/>
          <rect width="400" height="240" fill="url(#loc-grid-${i})"/>
          <path d="M0 ${80 + i * 20} L400 ${100 + i * 15}" stroke="rgba(245,184,46,0.20)" stroke-width="3"/>
          <path d="M${100 + i * 30} 0 L${140 + i * 30} 240" stroke="rgba(245,184,46,0.18)" stroke-width="2.5"/>
          <path d="M0 ${160 - i * 18} Q200 ${140 - i * 10} 400 ${170 - i * 12}" stroke="rgba(230,57,70,0.25)" stroke-width="2.5" fill="none"/>
          ${[0,1,2,3,4,5].map(j => `<rect x="${(j*70+i*15)%360}" y="${(j*50+i*25)%180+10}" width="35" height="28" fill="rgba(245,184,46,0.06)" stroke="rgba(245,184,46,0.18)" stroke-width=".8" rx="2"/>`).join("")}
        </svg>
        <div class="absolute inset-0 grid place-items-center">
          <div class="relative">
            <div class="absolute inset-0 -z-10 animate-ping rounded-full bg-mustard-500/30"></div>
            <div class="grid h-16 w-16 place-items-center rounded-full bg-mustard-500 text-char-900 shadow-smash">
              <i data-lucide="map-pin" class="w-7 h-7" stroke-width="2.5" fill="currentColor"></i>
            </div>
          </div>
        </div>
        <div class="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-mustard-500/40 bg-char-900/80 font-display font-bold text-lg text-mustard-400 backdrop-blur-md">${loc.badge}</div>
      </div>
      <div class="flex flex-col gap-5 p-6">
        <div>
          <div class="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-400">${loc.area}</div>
          <h3 class="font-display font-bold text-4xl uppercase leading-none tracking-tight text-cream-50">${loc.city}</h3>
        </div>
        <ul class="space-y-3 text-sm">
          <li class="flex items-start gap-3 text-cream-200">
            <i data-lucide="map-pin" class="w-4 h-4 shrink-0 mt-0.5 text-cream-400"></i>
            <span>${loc.address}</span>
          </li>
          ${loc.phone ? `<li class="flex items-start gap-3 text-cream-200">
            <i data-lucide="phone" class="w-4 h-4 shrink-0 mt-0.5 text-cream-400"></i>
            <a href="tel:${loc.phone.replace(/\s/g, "")}" class="cursor-pointer hover:text-mustard-400">${loc.phone}</a>
          </li>` : ""}
          <li class="flex items-start gap-3 text-cream-200">
            <i data-lucide="clock" class="w-4 h-4 shrink-0 mt-0.5 text-cream-400"></i>
            <span>${loc.hours}</span>
          </li>
        </ul>
        <div class="mt-2 flex gap-2">
          <a href="${loc.mapsUrl}" target="_blank" rel="noreferrer" class="group/btn inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-mustard-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-char-900 transition-all hover:bg-mustard-400">
            <i data-lucide="navigation" class="w-3.5 h-3.5 transition-transform group-hover/btn:rotate-12"></i>
            Към адреса
          </a>
          <a href="#order" class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-cream-50/15 px-5 py-3 text-xs font-bold uppercase tracking-wider text-cream-100 transition-all hover:border-mustard-500/50 hover:text-mustard-400">Поръчай</a>
        </div>
      </div>
    </article>
  `).join("");
}

// ---------- NAVBAR: scroll + mobile menu -----------------

function initNavbar() {
  const inner = document.getElementById("navbar-inner");
  const mobBtn = document.getElementById("mobileMenuBtn");
  const mobMenu = document.getElementById("mobileMenu");
  const mobIcon = document.getElementById("mobileMenuIcon");

  const onScroll = () => {
    const scrolled = window.scrollY > 32;
    if (scrolled) {
      inner.classList.add("bg-char-900/85", "shadow-char");
      inner.classList.remove("bg-char-900/40");
    } else {
      inner.classList.add("bg-char-900/40");
      inner.classList.remove("bg-char-900/85", "shadow-char");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (mobBtn) {
    mobBtn.addEventListener("click", () => {
      const isOpen = mobMenu.classList.toggle("is-open");
      mobIcon.setAttribute("data-lucide", isOpen ? "x" : "menu");
      if (window.lucide) lucide.createIcons();
    });

    mobMenu.querySelectorAll(".mob-link").forEach(a => {
      a.addEventListener("click", () => {
        mobMenu.classList.remove("is-open");
        mobIcon.setAttribute("data-lucide", "menu");
        if (window.lucide) lucide.createIcons();
      });
    });
  }
}

// ---------- HERO + INVIEW animations ---------------------

function initEntranceAnimations() {
  // Navbar reveal
  const nav = document.querySelector('[data-anim="navbar"]');
  if (nav) requestAnimationFrame(() => nav.classList.add("is-visible"));

  // Hero staggered reveal
  const heroSteps = [
    { sel: '[data-anim="hero-1"]', delay: 0 },
    { sel: '[data-anim="hero-2"]', delay: 80 },
    { sel: '[data-anim="hero-3"]', delay: 200 },
    { sel: '[data-anim="hero-4"]', delay: 320 },
    { sel: '[data-anim="hero-5"]', delay: 500 },
  ];
  heroSteps.forEach(({ sel, delay }) => {
    const el = document.querySelector(sel);
    if (!el) return;
    setTimeout(() => el.classList.add("is-visible"), delay);
  });

  // Hero burger layers (staggered cascade)
  document.querySelectorAll("[data-burger-layer]").forEach(layer => {
    const i = +layer.dataset.burgerLayer;
    setTimeout(() => layer.classList.add("is-visible"), 50 + i * 90);
  });

  // Callouts
  ["callout-1", "callout-2", "callout-3"].forEach((name, i) => {
    const el = document.querySelector(`[data-anim="${name}"]`);
    if (el) setTimeout(() => el.classList.add("is-visible"), 1200 + i * 200);
  });

  // IntersectionObserver for [data-inview]
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "-50px" });

  document.querySelectorAll("[data-inview]").forEach(el => io.observe(el));
}

// ---------- ANATOMY: scroll-driven 4D burger -------------

function initAnatomyScroll() {
  const section = document.getElementById("anatomy");
  if (!section) return;

  const layers = document.querySelectorAll(".anatomy-layer");
  const chips = document.querySelectorAll(".anatomy-chip");
  const total = ANATOMY_LAYERS.length;

  // Scroll-driven layer build-up (motion.scroll эквивалент).
  pageScroll(
    (progress) => {
      layers.forEach((layer, i) => {
        const start = i / total;
        const end = (i + 0.7) / total;
        const t = Math.max(0, Math.min(1, (progress - start) / (end - start)));
        const y = -160 * (1 - t);
        const rot = (i % 2 === 0 ? -6 : 6) * (1 - t);
        const scale = 0.9 + 0.1 * t;
        layer.style.opacity = t;
        layer.style.transform = `translateY(${y}px) rotate(${rot}deg) scale(${scale})`;
      });

      chips.forEach((chip, i) => {
        const start = i / total;
        const end = (i + 0.7) / total;
        const t = Math.max(0, Math.min(1, (progress - start) / (end - start)));
        const opacity = 0.25 + 0.75 * t;
        const x = -20 * (1 - t);
        chip.style.opacity = opacity;
        chip.style.transform = `translateX(${x}px)`;
      });
    },
    {
      target: section,
      offset: ["start start", "end end"],
    }
  );
}

// ---------- FOOTER details -------------------------------

function initFooterMeta() {
  const yearEl = document.getElementById("footerYear");
  const dateEl = document.getElementById("footerDate");
  const now = new Date();
  if (yearEl) yearEl.textContent = now.getFullYear();
  if (dateEl) dateEl.textContent = now.toLocaleDateString("bg-BG");
}

// ---------- BOOT -----------------------------------------

function boot() {
  renderAnatomy();
  renderMenuTabs();
  renderMenuGrid();
  renderLocations();
  initNavbar();
  initFooterMeta();

  // create Lucide icons after all DOM is in
  if (window.lucide) lucide.createIcons();

  // animations
  initEntranceAnimations();
  initAnatomyScroll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
