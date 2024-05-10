/** @type {import('tailwindcss').Config} */



export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "pitch":["Pitch Sans"],
        "sans":["Montserrat", "sans-serif"]

      },
      colors:{
        "primary":"#FFE845",
        "secondary" : "#2B2929"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
