/** @type {import('tailwindcss').Config}  */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    colors: {
      black: '#0F1221',
      description: '#8896AB',
      'light-grey': '#F8F8F8',
      primary: '#3E8BFF',
      textColor: '#4D5F7A',
      white: '#FFFFFF'
    },
    extend: {
      boxShadow: {
        card: '0px 3.37869px 6.75738px rgba(15, 18, 33, 0.1)'
      },
      fontSize: {
        '5.5a': '1.375rem',
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
        ]
      },
      height: {
        '0.5a': '0.125rem'
      },
      lineHeight: {
        '11a': '3.375rem'
      },
      maxWidth: {
        '8xl': '90rem'
      }
    },
    fontFamily: { serif: ['Montserrat', 'sans-serif'] }
  }
};
