/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif', // Adds a new `font-display` class
      }
    },
    screens: {
      sm: "640px",

      md: "768px",
      // => @media (min-width: 640px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",

      "2xl": "1536px",
    },
    container: {
      center: true,
    },
    "font-size": {
      // base: "30px",
    },
    "font-family": {
      base: "font-sans",
    },
  },
  plugins: [],
};
