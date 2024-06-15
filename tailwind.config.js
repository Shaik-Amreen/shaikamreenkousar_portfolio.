/** @type {import('tailwindcss').Config} */
import { themeColors } from './src/Colors'
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: themeColors,

    },
  },
  plugins: [],
}