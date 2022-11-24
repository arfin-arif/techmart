/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'arial': ["Arial", " Helvetica", "Bangla863", "sans-serif"]
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}