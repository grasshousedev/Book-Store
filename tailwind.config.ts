import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

export default config;
