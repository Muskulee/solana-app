/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        bottom: "bottom",
      },
      width: {
        "device-width": "360px",
      },
      height: {
        "device-height": "640px",
      },
    },
    colors: {
      swatch_1: "#040404",
      swatch_2: "#0f5204",
      swatch_3: "#4e1802",
      swatch_4: "#3a4157",
      swatch_5: "#1e8c05",
      swatch_6: "#be3d05",
      swatch_7: "#81848c",
      swatch_8: "#54ad26",
      swatch_9: "white",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
