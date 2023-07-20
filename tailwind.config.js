/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#C5D2DF',
          200: '#9CB3C9',
          500: '#1A2946',
          700: '#0F1D36',
          800: '#081220'
        }
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
