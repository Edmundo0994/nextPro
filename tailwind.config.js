const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*{html,js,jsx}'],
  content: [],
  theme: {
    colors: {
      ...colors,
    },
  },
}
