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
      textColor: '#4D5F7A'
    },
    extend: {
      fontSize: {
        22: '1.375rem'
      },
      height: {
        '2px': '0.125rem'
      },
      lineHeight: {
        54: '3.375rem'
      },
      maxWidth: {
        '8xl': '90rem'
      },
      width: {
        inherit: 'inherit'
      }
    }
  }
};
