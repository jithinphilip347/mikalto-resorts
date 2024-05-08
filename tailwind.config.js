/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'branch': ['DM Serif ','DM Sans', 'serif', 'Outfit', 'sans-serif'],
        },
    },
  },
  plugins: [],
}