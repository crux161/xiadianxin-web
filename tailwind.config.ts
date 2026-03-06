import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        harmony: ["HarmonyOS Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 18px 60px rgba(102, 126, 234, 0.22)",
      },
    },
  },
  plugins: [],
} satisfies Config;
