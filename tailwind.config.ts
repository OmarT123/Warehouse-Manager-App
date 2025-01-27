import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#ffffff",
          secondary: "#f3f4f6",
          text: "#1f2937",
        },
        dark: {
          bg: "#121212",
          secondary: "#1f1f1f",
          text: "#e5e7eb",
          "text-secondary": "#9ca3af",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
