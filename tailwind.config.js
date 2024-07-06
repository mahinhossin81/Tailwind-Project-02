/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'testimonial': ['url(/images/brooke-cagle-g1Kr4Ozfoac-unsplash\ 2.png)']
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      },
      fontFamily: {
        'plus': ['"Plus Jakarta Sans", sans-serif']
      },
      
    },
  },
  plugins: [],
}
