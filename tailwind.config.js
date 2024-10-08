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
        'app-yellow': {
          400: '#EEC32D',
          500: '#eec22c',
        },
        'app-orange': {
          500: '#F65A2A',
        },
        'app-blue': {
          500: '#4F93FF',
          600: '#1A73E8',
          700: '#1A15FF',
        },
        'app-gray': {
          50: '#FFFEFF',
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#9F9F9F',
          400: '#424242',
          500: '#757575',
          600: '#737373',
          700: '#9E9E9E',
          800: '#0F1127',
          900: '#212121',
        },
      }
    },
  },
  plugins: [],
}

