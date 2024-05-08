/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B4E73",
        secondary: "#1B4265",
        lightBlue: "#283F63",
        maroon: "#A13434",
        dvBlue: "#133363",
        darkBlue: "#192833",
        darkerBlue: "#01050C",
        dvGray: "#666666",
      },
      width: {
        founderUnderline: "12%",
      },
    },
  },
  plugins: [],
};
