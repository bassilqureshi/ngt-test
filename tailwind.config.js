/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 90s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
        
      },
      fontFamily: {
        'light-regular': ['Light Regular', 'sans-serif'],
        'light-bold': ['Light Bold', 'sans-serif'],
        'light-italic': ['Light Italic', 'sans-serif'],
        'light-light': ['Light Light', 'sans-serif'],
        'light-medium': ['Light Medium', 'sans-serif'],
      },
      fontWeight: {
        'lite': 100,
        'light': 300,
        'regular': 400,
        'bold': 700,
        'medium': 500,
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '100': '100',
    
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

