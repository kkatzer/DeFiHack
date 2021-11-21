const colors = require('tailwindcss/colors')
const dudaPic = 

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#191926',
        primary: {
          dark: '#589A5D',
          DEFAULT: '#6FC175',
          light: '#6FC375'
        }
      },
      fontFamily: {
        'sans': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
      },
      backgroundImage: {
        'dudaPic': "url('../assets/duda.jpeg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
