/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'sm': '736px',
    },
    colors: {
      'brandy-red': 'rgba(133, 70, 50, 1)',
      'dark-charcoal': 'rgba(49, 46, 44, 1)',
      'dark-raspberry': 'rgba(122, 40, 78, 1)',
      'eggshell': 'rgba(243, 229, 215, 1)',
      'snow': 'rgba(255, 247, 251, 1)',
      'wenge-brown': 'rgba(95, 86, 77, 1)',
      'white': 'rgba(255, 255, 255, 1)',
      'white-coffee': 'rgba(227, 221, 215, 1)',
    },
    fontFamily: {
      'outfit': ['"Outfit"'],
      'young-serif': ['"Young Serif"'],
    },
  },
  plugins: [],
}