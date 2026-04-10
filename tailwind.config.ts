import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0A0A",
          secondary: "#111111",
          card: "#161616",
        },
        ink: {
          primary: "#FAF7F5",
          secondary: "#7A7572",
          muted: "#4A4845",
        },
        accent: {
          DEFAULT: "#E07A5F",
          soft: "#F4D1C3",
          glow: "rgba(224, 122, 95, 0.15)",
        },
        line: "#252525",
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
        pill: "100px",
      },
      boxShadow: {
        card: "0 32px 64px rgba(0, 0, 0, 0.4)",
        accent: "0 12px 32px rgba(224, 122, 95, 0.4)",
      },
      keyframes: {
        gentleSlideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        gentleFade: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.1)" },
        },
      },
      animation: {
        "gentle-up": "gentleSlideUp 0.8s ease-out forwards",
        "gentle-fade": "gentleFade 0.8s ease-out forwards",
        float: "float 2s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
