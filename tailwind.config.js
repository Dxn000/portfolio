/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f7f7f5',
        surface: '#ffffff',
        text: '#111111',
        muted: '#777774',
        soft: '#e9e9e5',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
