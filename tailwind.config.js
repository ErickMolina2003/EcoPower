/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/**/.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-blue': {
          500: '#4F93FF',
        },
        'app-gray': {
          500: '#757575',
          600: '#737373',
          800: '#0F1127',
        },
      }
    },
  },
  plugins: [],
}

