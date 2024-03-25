/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'Open Sans', 'Lato', 'Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

