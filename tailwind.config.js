/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D9646A",
        sand: "#FAF4EE",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
      backgroundImage: {
        pattern: "url('src/assets/pattern.png')"
      },
    },
    plugins: [],
  },
};
