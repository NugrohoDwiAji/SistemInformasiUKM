/** @type {import('tailwindcss').Config} */



export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "lexend":["Lexend"],
        "sans":["Montserrat", "sans-serif"]

      },
      colors:{
        "primary":"#FFE845",
        "secondary" : "#131212",
        "black": "#131212"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
