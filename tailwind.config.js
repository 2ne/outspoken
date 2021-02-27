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
        'brand-blue': {
          '50': '#f7f9fa',
          '100': '#eff3f6',
          '200': '#d7e1e8',
          '300': '#becfd9',
          '400': '#8eabbd',
          '500': '#5d87a1',
          '600': '#547a91',
          '700': '#466579',
          '800': '#385161',
          '900': '#2e424f'
        }
      },
    },
  },
  variants: {},
  plugins: [],
}
