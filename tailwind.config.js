/** @type {import('tailwindcss').Config}  */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {},
    colors: {
      primary: '#3E8BFF',
      textColor: '#4D5F7A',
      description: '#8896AB',
      bgColor: '#F8F8F8'
    }
  }
};
