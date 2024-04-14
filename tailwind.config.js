/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // we should add this to our cconfig so dhe dark mode is configurated
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'other' : {'min': '340px', 'max': '1200px' },
      },
      colors: {
        darkbg: '#1E293B',
      }
    },
  },
  plugins: [],
}

