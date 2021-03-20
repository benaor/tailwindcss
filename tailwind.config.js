module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      }, 
      fontFamily: {
        body: ['Nunito'],
      }, 
      fontSize: {
        'xxl': ['16rem', { lineHeight: '1' }],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
