/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',

      gray: {
        100: '#E1E1E6',
        200: '#C4C4CC',
        300: '#8D8D99',
        400: '#5d5d65',
        500: '#323238',
        600: '#202024',
        700: '#121214',
      },

      green: {
        400: '#00B37E',
        500: '#00875F',
        700: '#015F43',
      },

      red: {
        500: '#F03847',
        600: '#991b1b',
        700: '#7A1921',
      },

      yellow: {
        500: '#FBA94C',
      },
    },
    extend: {
      fontFamily: {
        display: 'Roboto, sans-serif',
        timer: 'Roboto Mono, monospace',
      },
    },
  },
  plugins: [],
}
