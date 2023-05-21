/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      thunder: {
        100: "#383638",
        200: "#2B2A2B",
        300: "#201F20",
        400: "#181719",
      },
      white: "#fff",
    },
    fontSize: {
      11: "1.1rem",
      13: "1.3rem",
      15: "1.6rem",
      20: "2rem",
      21: "2.1rem",
      22: "2.2rem",
      35: "3.2rem",
      51: "5.1rem",
      65: "6.5rem",
    },
    extend: {},
  },
  plugins: [],
};
