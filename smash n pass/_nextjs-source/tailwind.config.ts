import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        char: {
          DEFAULT: "#0E0D0B",
          900: "#0E0D0B",
          800: "#171513",
          700: "#211E1A",
          600: "#2B2723",
        },
        cream: {
          DEFAULT: "#F5EFE3",
          50: "#FBF6E8",
          100: "#F5EFE3",
          200: "#E8E0CE",
          300: "#C9BEA6",
          400: "#8C8478",
        },
        mustard: {
          DEFAULT: "#F5B82E",
          400: "#FFC94D",
          500: "#F5B82E",
          600: "#D99B19",
          700: "#A8740D",
        },
        fire: {
          DEFAULT: "#E63946",
          400: "#F25F6A",
          500: "#E63946",
          600: "#C12530",
        },
        pickle: "#7CA040",
        onion: "#F3E9D8",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontWeight: {
        display: "700",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tight2: "-0.02em",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        "smash": "0 30px 60px -20px rgba(245, 184, 46, 0.35), 0 18px 36px -18px rgba(0,0,0,0.6)",
        "char": "0 24px 60px -24px rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
