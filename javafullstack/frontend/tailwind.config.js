/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Ensure Tailwind scans your JS/JSX/TS/TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
