/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C8A96E',
          hover: '#A88B50',
          light: '#E8D5A3',
        },
        dark: {
          DEFAULT: '#1E1A14',
          surface: '#2A2520',
          border: '#3A3530',
        }
      },
      fontFamily: {
        heading: ['"Lora"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
