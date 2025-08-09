/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./pages/**/*.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'teal-primary': '#008080',
        'teal-light': '#e0f2f1',
        'teal-dark': '#006666',
        'teal-accent': '#4db6ac',
        'teal-hover': '#b2dfdb',
      },
      fontFamily: {
        sans: ['"Google Sans Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}
