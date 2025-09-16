/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#DAF0FF",
        brandingBlue: "#0071BC",
        blue60: "#62A6D3",
        brandingYellow: "#FDC500",
        yello50: "#F8DC7A",
        purple: "#9B63D8",
        darkPurple: "#6D15CD",
        darkBlue: "#003D65",
        brandingGray: "#A5A5A5"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #9B63D8 0%, #62A6D3 48%, #1B90DD 100%)',
      }
    },
  },
  plugins: [],
}