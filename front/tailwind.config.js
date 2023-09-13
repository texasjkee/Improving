/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Bebas Neue', 'sans-serif']
      },
      colors: {
        theme: {
          green: '#5CB85C'
        },
      },
        spacing: {
          navItem: '0.425rem'
        }
    },
  },
  plugins: [],
}

