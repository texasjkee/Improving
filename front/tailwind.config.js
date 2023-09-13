/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web', 'sans-serif']
      },
      colors: {
        theme: {
          green: '#5CB85C'
        },
      },
      spacing: {
        navItem: '0.425rem'
      },
      boxShadow: {
        banner: 'rgba(0, 0, 0, 0.3) 0px 1px 3px'
      },
      dropShadow: {
        logo: '0px 1px 3px rgba(0, 0, 0, 0.3)'
      },
      fontSize: {
        logo: '3.5rem'
      }
    },
  },
  plugins: [],
}

