/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pgreen: "#1B5B31",
      },
    },
  },
  plugins: [],
};
