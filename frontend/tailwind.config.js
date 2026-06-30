/** @type {import('tailwindcss').default} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        ink: '#1d1d1f',
        graphite: '#6e6e73',
        mist: '#f5f5f7',
        accent: '#0071e3',
        'accent-dark': '#0058b3',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        content: '980px',
        wide: '1200px',
      },
    },
  },
  plugins: [],
}
