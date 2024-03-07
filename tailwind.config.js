/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lilita: ["Lilita One"],
        bakbak: ["Bakbak One"],
      },
    },
  },
  plugins: [],
}