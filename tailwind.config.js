/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.{ts,tsx,css}"
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      fontFamily: {
        sans: ["var(--font-inter)"]
      },
      colors: {
        brand: {
          50: "#F5F8FF",
          100: "#E9EFFF",
          200: "#D2DEFF",
          300: "#A6BDFF",
          400: "#7B9CFF",
          500: "#4F7BFF",
          600: "#285DFF",
          700: "#1E45C7",
          800: "#163392",
          900: "#0D215C"
        }
      },
      boxShadow: {
        soft: "0 10px 35px rgba(0,0,0,0.08)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" })
  ]
};
