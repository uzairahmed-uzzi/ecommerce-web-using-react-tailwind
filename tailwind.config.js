/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'search-box-back':'#282828',
        'search-input-col':'#bbbbbb',
      }
    },
  },
  plugins: [],
}

