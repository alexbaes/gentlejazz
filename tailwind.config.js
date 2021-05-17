const colors = require('tailwindcss/colors');

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors:{
    		alex: '#f46',
    	},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
