/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  important: true,
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "1/3": "calc(100% / 3)",
      "3/4": "75%",
      full: "100%",
      "4rem": "4rem"
    },
    fontFamily: {
      rubik: "Rubik",
      raleway: "Raleway",
      pacifico: "Pacifico",
    },
    extend: {
      margin: {
        "50vh": "50vh",
      },
      colors: {
        lime: "#35ED76",
        sky: "#018FF4",
        royalb: "#3047EC",
        royalbHov: "#1E32C2"
      },
      transitionProperty: {
        visibility: "visibility",
      },
      gridTemplateColumns: {
        "1-auto": "1fr auto",
      },
      height: {
        "25vh": "25vh",
        "50vh": "50vh",
        "75vh": "75vh",
        "25rem": "25rem"
      },
      width: {
        "25vw": "25vw",
        "50vw": "50vw",
        "75vw": "75vw",
        "18rem": "18rem"
      },
      spacing: {
        "55vh": "55vh",
        "50vw": "50vw",
        m100vw: "-100vw",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-debug-screens")],
};
