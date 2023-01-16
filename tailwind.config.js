/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fire: ['"Fire Sans"', 'sans-serif'],
        comic: ['"Comic Neue"', 'cursive'],
      },
    },
  },
  plugins: [],
}
