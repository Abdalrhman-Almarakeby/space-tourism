/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        BarlowCondensed: "'Barlow Condensed', sans-serif",
      },
      backgroundImage: {
        "background-home-desktop":
          "url('./src/assets/home/background-home-desktop.jpg')",
        "background-home-tablet":
          "url('./src/assets/home/background-home-tablet.jpg')",
        "background-home-mobile":
          "url('./src/assets/home/background-home-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
