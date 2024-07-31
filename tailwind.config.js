/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    }, colors:{
      darkBackground: "#171725",
      lightBackground: "#EAECF8",
      softDarkText: "#767B88",
      white: "#F6F6FF",
      darkText: "#3C3C47",
      accent: "#54E27E"
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    }
  },
  plugins: [],
}