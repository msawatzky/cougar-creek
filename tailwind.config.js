module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  theme: {
    extend: {
      colors:{
        primary: "rgb(12 64 35  / <alpha-value>)",
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};
