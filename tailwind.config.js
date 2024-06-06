/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: { screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

    },  
  fontFamily: {
    helvetica:['Arial', 'Helvetica', 'sans-serif']
  },
  container: {
    center: true,
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      'xl': '1240px',
      '2xl' : '1440px',
    },},

  
  },
  },
  plugins: [],
}
