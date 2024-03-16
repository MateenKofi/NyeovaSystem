/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },

    },
  },
  varients: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [require("daisyui")],
}