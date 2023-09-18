/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1000px",
      xl: "1440px",
    },
    extend: {
      colors: {
        main: "#0b0d17",
        light: "#d0d6f9",
      },
      fontFamily: {
        BarlowCondensed: "'Barlow Condensed', sans-serif",
        Bellefair: "'Bellefair', serif",
        Barlow: "'Barlow', sans-serif",
      },
    },
  },
  plugins: [],
};
