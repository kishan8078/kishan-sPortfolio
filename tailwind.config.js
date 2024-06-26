/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black:'#000000',          // Teal
        white: '#fafafa',       //orange
        qqq:'rgb(207 212 205)',
        grey: '#4d4d4d',
        blue: '#00009c',
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
      backgroundImage:{
        'mountain-dusk': "url('./src/assets/mountain-dusk.jpg')",
      },
      translate: {
        
      },
      fontFamily:{
        newOne:['Roboto Slab']
      }
    },
  },
  plugins: [],
}
