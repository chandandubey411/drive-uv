/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a0a0a",
          gold: "#f59e0b",
          "gold-dark": "#d97706",
          light: "#fafafa",
          muted: "#6b7280",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.12)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.22)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
