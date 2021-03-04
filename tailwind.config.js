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
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      'brand-blue': {
        50: '#f7f9fa',
        100: '#eff3f6',
        200: '#d7e1e8',
        300: '#becfd9',
        400: '#8eabbd',
        500: '#5d87a1',
        600: '#547a91',
        700: '#466579',
        800: '#385161',
        900: '#2e424f'
      },
      'brand-green': {
        50: '#fafbf3',
        100: '#f5f6e8',
        200: '#e7e9c5',
        300: '#d9dba2',
        400: '#bcc15c',
        500: '#9fa616',
        600: '#8f9514',
        700: '#777d11',
        800: '#5f640d',
        900: '#4e510b'
      },
      'brand-orange': {
        50: '#fef8f4',
        100: '#fdf0e9',
        200: '#f9dac7',
        300: '#f6c4a5',
        400: '#ef9862',
        500: '#e86c1f',
        600: '#d1611c',
        700: '#ae5117',
        800: '#8b4113',
        900: '#72350f'
      },
      gray: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
      },
      green: { // used for TrustPilot colour
        600: '#16A34A',
      }
    },
  },
  variants: {},
  plugins: [],
}
