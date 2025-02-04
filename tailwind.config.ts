import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#262642",
        pink: "#FF3399",
        yellow: "#F5DF4D",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        mono: ["var(--font-nunito-sans)"],
      }
    },
  },
  plugins: [],
} satisfies Config;
