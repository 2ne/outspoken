require('dotenv').config();
const colors = require('tailwindcss/colors')
const enablePurge = process.env.ENABLE_PURGE || false;
module.exports = {
  purge: {
    enabled: enablePurge,
    content: [
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
  theme: {
    fontFamily: {
      sans: ['Circular', 'sans-serif'],
      mono: ['Menlo', 'ui-monospace', 'Courier New', 'monospace'],
    },
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        'brand-blue': '#5d87a1',
      },
    },
  },
  variants: {},
  plugins: [],
}
