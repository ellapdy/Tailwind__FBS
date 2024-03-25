const { urlAlphabet } = require("nanoid");

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        vred:"#a33365",
        light:"#f5f5f5",
        dark: "#2b2b2b",
        dvred: "#6b103f",
        lgrey: "#dedede",
      },
      backgroundImage: {
        topBanner: "url(../dist/img/bg3.svg)",
        servicesBanner: "url(../dist/img/what-we-offer.jpg)",
      },
    },
  },
  plugins: [],
}

