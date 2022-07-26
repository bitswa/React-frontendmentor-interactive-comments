/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        mBlue: 'hsl(238, 40%, 52%)',
        sRed: 'hsl(358, 79%, 66%)',
        lGrayBlue: 'hsl(239, 57%, 85%)',
        pRed: 'hsl(357, 100%, 86%)',
        dBlue: 'hsl(212, 24%, 26%)',
        gBlue: 'hsl(211, 10%, 45%)',
        lGray: 'hsl(223, 19%, 93%)',
        vLightGray: 'hsl(228, 33%, 97%)',
      }
    },
  },
  plugins: [],
}
