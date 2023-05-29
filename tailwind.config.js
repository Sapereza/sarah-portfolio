/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '400':'400px',
        '425':'425px',
        '450':'450px',
        '475':'475px',
        '500':'500px',
        '525':'525px',
        '550':'550px',
        '575':'575px',
        '600':'600px',
        '625':'625px',
        '650':'650px',
        '675':'675px',
        '700':'700px',
        '950':'950px',
        '975':'975px',
        '1000':'1000px',
      },
      fontFamily:{
        signature: 'Cookie'
      },
    },
  },
  plugins: [],
}