const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
        mk: colors.cyan,
        opinion: colors.violet,
        topic: colors.fuchsia,
      },
    },
  },
  plugins: [],
};
