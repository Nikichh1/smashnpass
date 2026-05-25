# Smash N' Pass — Landing Page

Стартирана като плосък сайт от 3 файла. Двойно кликни `index.html` и ще се отвори в браузъра.

## Структура

```
.
├── index.html          # цялата страница — секции, текст, SVG илюстрации
├── style.css           # custom стилове (грейн, гриди, keyframes, font helpers)
├── script.js           # интеракции + Framer Motion (anatomy, tabs, mobile menu)
├── assets/
│   ├── favicon.svg
│   └── photos/         # 14 професионални food снимки (01.jpg–14.jpg)
│                       # Замени с реални снимки от @smash.n.pass
└── _nextjs-source/     # стар Next.js проект (запазен, не е нужен)
```

## Технологии

- **Tailwind CSS** — през CDN (един `<script>` в `index.html`)
- **Framer Motion** — vanilla `motion` пакет от CDN, използван за scroll-driven анимацията на бургера
- **Lucide Icons** — SVG иконки от CDN
- **Google Fonts** — Oswald (display), Inter (body), JetBrains Mono (mono)

## Редактиране на съдържание

| Какво искаш да смениш | Къде |
|---|---|
| Текст в Hero, Story, CTA | `index.html` (търси секцията) |
| Менюто (артикули, цени) | `script.js` → `MENU_ITEMS` |
| Локациите | `script.js` → `LOCATIONS` |
| Слоевете на бургера | `script.js` → `ANATOMY_LAYERS` |
| Цветова палитра | `index.html` (вътре в `tailwind.config`) и `style.css` |
| Снимки на бургерите | Замени файловете в `assets/photos/` със същите имена (01.jpg, 02.jpg...) |
| Кои снимки къде | `script.js` → `MENU_ITEMS` (поле `img`) и `index.html` секция `#gallery` |

## Хостинг (когато си готов да го пуснеш онлайн)

Влачи цялата папка в [netlify.com/drop](https://app.netlify.com/drop) или [vercel.com](https://vercel.com) — публичен URL за по-малко от минута, безплатно.
