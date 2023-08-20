/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pgreen: "#1B5B31",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { transform: "translateX(-50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-in": "slide-in 1s ease-out",
      },
    },
  },
  plugins: [],
};
