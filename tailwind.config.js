/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dustyBlue': {
          light: '#4c86a8',
          dark: '#ced9df'
        },
        'greenWhite': '#e6e9ea',
        'geyser': '#dce0e1',
        'halfBlack': '#3a3a3a',
      },
      container: {
        screens: {
          '2xl': '1280px'
        }
      }
    },
  },
  corePlugins: {
    preflight: false
  },
  plugins: [
  ],
}

