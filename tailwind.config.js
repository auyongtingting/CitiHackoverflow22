/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        primaryLight: "#93c5fd",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif", "Inter var"],
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/forms")],
}
