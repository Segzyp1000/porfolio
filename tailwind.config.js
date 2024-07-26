/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
     
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
      colors: {
        darkBlue: "rgb(114, 255, 255)",
        bgBackground:  "rgb(0, 123, 255)",
        colorButton: "#E1DDDB",
        navColor: "#0C4A60"
      },
    },
  },
  plugins: [],
}