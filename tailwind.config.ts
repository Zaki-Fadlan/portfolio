import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"; // Import plugin dengan sintaks ES Module
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0d",
        text: "#e0e0e0",
        primary: "#00e5ff",
        secondary: "#ff007f",
        accent: "#00ff6e",
        link: "#00e5ff",
        hover: "#ff00ff",
        border: "#1f1f1f",
        cardBackground: "#1a1a1a",
        buttonBackground: "#2e2e2e",
        buttonHover: "#ff007f",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      gradientColorStops: {
        "cyberpunk-start": "#ff007f",
        "cyberpunk-end": "#00e5ff",
      },
      fontFamily: {
        sans: ["'Press Start 2P', sans-serif"],
        mono: ["'Roboto Mono', monospace"],
      },
    },
  },
  plugins: [tailwindcssAnimate], // Panggil plugin yang diimpor
};
export default config;
