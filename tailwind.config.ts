import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#07090E",
        foreground: "#F8FAFC",
        surface: {
          50: "#131826",
          100: "#0E1320",
          200: "#090D17",
          border: "#1E293B",
          hover: "#1A2234",
        },
        brand: {
          50: "#EEF9FF",
          100: "#D8F1FF",
          200: "#B9E6FF",
          300: "#88D6FF",
          400: "#50BDFF",
          500: "#1E9EFF",
          600: "#0280F6",
          700: "#0064C7",
          800: "#0353A4",
          900: "#094582",
          accent: "#00F2FE",
          cyan: "#06B6D4",
          violet: "#6366F1",
          emerald: "#10B981",
          amber: "#F59E0B",
          rose: "#F43F5E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
