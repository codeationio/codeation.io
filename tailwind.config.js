module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#000",
        primary: "#07689F",
        secondary: "#A2D5F2",
        textPrimary: "#636363",
        dark: "#0E185F",
      },
      fontSize: {
        big: "45px",
      },
      height: {
        500: " 32rem",
        400: "27rem",
      },
      margin: {
        12: "12%",
      },
      width: {
        30: "30%",
      },
      boxShadow: {
        // '5xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '5xl': '0 2px 8px 0 rgb(99 99 99 / 20%)',
      }
    },
  },
};
