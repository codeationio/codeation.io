/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config}  */

const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('alternate', '.alternate &');
    })
  ],
  theme: {
    colors: {
      black: '#0F1221',
      description: '#8896AB',
      grey: '#4D5F7A',
      'light-grey': '#F8F8F8',
      primary: '#3E8BFF',
      secondary: '#192E4D',
      white: '#FFFFFF'
    },
    extend: {
      boxShadow: {
        card: '0px 3.37869px 6.75738px rgba(15, 18, 33, 0.1)'
      },
      fontSize: {
        5.5: '1.375rem',
        '5xl': ['3rem', '3.375rem'],
        'card-description': [
          '1rem',
          {
            fontWeight: 400,
            lineHeight: '1.25rem'
          }
        ],
        'card-title': [
          '1.625rem',
          {
            fontWeight: 700,
            lineHeight: '2rem'
          }
        ],
        'card-title-sm': [
          '1.125rem',
          {
            fontWeight: 700,
            lineHeight: '1.375rem'
          }
        ]
      },
      lineHeight: {
        11: '3.375rem'
      },
      maxWidth: {
        '8xl': '90rem'
      },
      width: {
        inherit: 'inherit'
      }
    },
    fontFamily: {
      khula: ['Khula', ...defaultTheme.fontFamily.serif],
      mono: ['Montserrat', ...defaultTheme.fontFamily.mono],
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      serif: ['Montserrat', ...defaultTheme.fontFamily.serif]
    }
  }
};
