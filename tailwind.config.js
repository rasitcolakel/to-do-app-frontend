const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
