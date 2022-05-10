module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  plugins: [require('tw-elements/dist/plugin')],
  theme: {
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#000',
        primary: '#4B0CFF',
      },
    },
  },
};
