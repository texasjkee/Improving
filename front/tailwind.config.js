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
          green: '#5CB85C',
          darkGreen: '#3d8b3d',
          lightenGray: '#ddd',
          gray: '#bbb',
          darkestGray: '#373a3c',
          darkenGray: '#999',
          tag: '#aaa'
        },
      },
      spacing: {
        navItem: '0.425rem',
        tag: '0.6rem',
        '0.3': '0.3rem'
      },
      boxShadow: {
        banner: 'rgba(0, 0, 0, 0.3) 0px 1px 3px'
      },
      dropShadow: {
        logo: '0px 1px 3px rgba(0, 0, 0, 0.3)'
      },
      fontSize: {
        logo: '3.5rem',
        date: '0.8rem',
      },
      borderRadius: {
        buttonSm: '0.2rem',
        tag: '10rem',
      }
    },
  },
  plugins: [],
}

