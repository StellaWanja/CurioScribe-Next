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
        darkblue: "#262642",
        dashboardblue: "#1E1E2D",
        pink: "#FF3399",
        yellow: "#F5DF4D",
        black: "#000000",
        darkgrey: "#333333",
        lightgrey: "#D3D3D3",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        mono: ["var(--font-nunito-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;