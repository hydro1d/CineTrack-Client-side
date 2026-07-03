/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0F',
        card: '#1A1A24',
        accent: '#E50914',
        secondary: '#FFFFFF',
        muted: '#808080'
      }
    },
  },
  plugins: [],
}
