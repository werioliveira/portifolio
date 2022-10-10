/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      '1xl': '1024px',
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants:{
    extend:{
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
    },
  },
}
