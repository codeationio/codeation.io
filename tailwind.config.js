module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/tw-elements/dist/js/**/*.js",
    // "./node_modules/flowbite/**/*.js"
  ],
  // plugins: [require('tw-elements/dist/plugin')],
  // plugins: [require("flowbite/plugin")],
  // plugins: [require("daisyui")],

  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#000",
        primary: "#4B0CFF",
        secondary: "rgb(75 85 99 / 0.5)",
        textPrimary:"#636363"
      },
      fontSize: {
        big: "45px"
      },
      fontWeight:{
        

      },
    },
  },
};
