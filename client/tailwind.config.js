/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': ["Lora'", "serif"],
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'play': ['Playfair Display', 'serif'],
        'caveat': ['Caveat', 'cursive'],
        'Robot': ['Roboto', 'sans-serif'],
        'ysa': ['Ysabeau Office', 'sans-serif']
      },

      gridTemplateColumns: {

        'feat': 'minmax(300px, 500px)',
        'feat1': 'repeat(4, minmax(150px, 250px))',
        'footer': 'repeat(4,minmax(0, 280px))',
        'stretch' : 'minmax(300px, 1200px)'
      },
      gridTemplateRows: {
        
        'feat1': 'repeat(2, minmax(160px, 240px))',
        'feat2': 'repeat(2, minmax(160px, 270px))',
        'feat3': 'repeat(3, minmax(160px, 285px))',
        'feat4': 'repeat(4, minmax(160px, 285px))',
        'feat5': 'repeat(6, minmax(160px, 300px))',
        'auto' : 'grid-auto-rows: auto'
      },
      colors: {
        'primary': '#578297',
      },
    },
  },
  plugins: [],
}