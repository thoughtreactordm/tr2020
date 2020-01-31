module.exports = {
  theme: {
    colors: {
      red: {
        100: "#F8E8E6",
        200: "#EEC6C0",
        300: "#E4A49A",
        400: "#D0604F",
        500: "#BC1C03",
        600: "#A91903",
        700: "#711102",
        800: "#550D01",
        900: "#380801"
      },
      orange: {
        100: "#FBEDE8",
        200: "#F6D2C5",
        300: "#F0B6A2",
        400: "#E5805D",
        500: "#DA4917",
        600: "#C44215",
        700: "#832C0E",
        800: "#62210A",
        900: "#411607"
      },
      grey: {
        100: "#EBEBEB",
        200: "#CCCCCC",
        300: "#ADADAD",
        400: "#707070",
        500: "#333333",
        600: "#2E2E2E",
        700: "#1F1F1F",
        800: "#171717",
        900: "#0F0F0F"
      },
      black: "#000000",
      white: "#ffffff"
    },
    linearGradients: {
      colors: {
        brand: ["#F88227", "#BC1B08"],
        "dark-grey": ["#0F0F0F", "#333333"],
        "light-grey-white": ["#EBEBEB", "#ffffff"],
        "grey-white": ["#CCCCCC", "#ffffff"],
        footer: ["#402721", "#222222"]
      }
    },
    linearBorderGradients: {
      colors: {
        brand: ["#F88227", "#BC1B08"],
        "dark-grey": ["#0F0F0F", "#333333"],
        "light-grey-white": ["#EBEBEB", "#ffffff"],
        "grey-white": ["#CCCCCC", "#ffffff"]
      }
    }
  },
  variants: {},
  plugins: [
    require("tailwindcss-gradients")(),
    require("tailwindcss-border-gradients")()
  ]
};
