module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        "blueCustom": "#051287",
        "disabledColor": "#C4C4C4",
        "blueMedium": "#1C2ECD",
        "blueButton": "#6875F2",
        "blueSoft": "#F5F6FF"
      }
    },
  },
  plugins: [],
};