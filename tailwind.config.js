/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        'xs': "350px",
        'xx':"250px"
      },
      height: {
        '10vh':'10vh',
        '5vh':'5vh',
        '8vh':'8vh',
        '20vh':'20vh',
        '50vh':'50vh',
        '70vh':'70vh',
        '80vh':'80vh',
        '90vh':'90vh',
        '100vh':'100vh',
        '30vh':'30vh',
        '40vh':'40vh',
        '60vh':'60vh',
        '50%':'50%',
      },
      fontFamily: {
        "Roboto": ["Roboto", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"],
        "RobotoCondensed": ["RobotoCondensed", "sans-serif"],
      }
    },
  },
  plugins: [],
}

