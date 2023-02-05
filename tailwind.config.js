/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  variants: {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    },
  },
  plugins: [],
}
