/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      anta:[ '"Anta"', 'sans-serif'],
      poppins:["'Poppins'", 'sans-serif'],
      madimi_one:["'Madimi One'", "sans-serif"]
    }
  },
  plugins: [nextui()],
}