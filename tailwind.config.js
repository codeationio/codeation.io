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
        primary: "#86c4e8",
        secondary: "rgb(75 85 99 / 0.5)",
        textPrimary: "#636363",
        dark: "#100052",
      },
      fontSize: {
        big: "45px",
      },
      height: {
        500: " 32rem",
        440: "27rem",
      },
      margin: {
        12: "12%",
      },
      width: {
        30: "30%",
      },
    },
  },
};
