/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'prod-black': '#050505',
        'prod-gold': '#C5A059',
        'prod-gold-light': '#E2C285',
      },
    },
  },
  plugins: [],
}