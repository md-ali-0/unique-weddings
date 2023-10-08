/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif', // Adds a new `font-display` class
      },
      colors: {
        primary: {
          DEFAULT: '#D62E6A',
        },
      },
    },
  },
  plugins: [],
}
