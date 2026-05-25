import type { Metadata } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Oswald({
  weight: ["600", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smash N' Pass — Български Smash Burger | Belgian Fries",
  description:
    "Истинският smash burger в България. Прясно телешко, белгийски картофки, ръчно правени сосове. София, Пловдив, Созопол.",
  keywords: [
    "smash burger",
    "бургер софия",
    "smash n pass",
    "пловдив бургер",
    "созопол бургер",
    "belgian fries",
    "белгийски картофки",
  ],
  openGraph: {
    title: "Smash N' Pass",
    description: "Smash. Pass. Repeat. Истински smash burger в 3 града.",
    type: "website",
    locale: "bg_BG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-char-900 text-cream-50 font-body antialiased">
        {children}
      </body>
    </html>
  );
}
