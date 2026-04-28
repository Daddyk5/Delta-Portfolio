import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#141414",
        surface2: "#1C2A1C",
        primary: "#4A5A2A",
        red: "#CC2200",
        ember: "#CC4400",
        gold: "#C8A44A",
        text: "#F0EDE8",
        muted: "#B0A898",
        border: "#2E3A2E",
      },
      fontFamily: {
        heading: ["Rajdhani", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;