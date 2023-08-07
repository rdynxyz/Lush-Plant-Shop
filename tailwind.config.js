/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'primary' : '#285A43',
        'secondary' : '#121212',
        'third' : '#337A5B',
        'forth' : '#939597',
        'footer' : '#676A6C',
        'accent' : '#F66F4D',
        'background' : '#FAF8ED'
      },
    },
    fontFamily: {
      'Sen' : ['Sen', 'sans-serif'],
      'Poppins' : ['Poppins' , 'sans-serif'],
      'Inter' : ['Inter' , 'sans-serif'],
      'Lato' : ['Lato', 'sans-serif']
    },
  },
  plugins: [],

}

