import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        giex: {
          yellow: "#FACC15",
          "yellow-hover": "#EAB308",
          gold: "#E5A900",
          black: "#0F0F0F",
          charcoal: "#1A1A1A",
          muted: "#2C2C2C",
          surface: "#FBFBFA",
          card: "#F4F3EE",
          subtle: "#EAE8E1",
          border: "#E2E0D8",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        pill: "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 4px 10px -2px rgba(0, 0, 0, 0.02)",
        glow: "0 0 24px rgba(250, 204, 21, 0.25)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
