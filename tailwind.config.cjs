/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-red': 'hsl(0, 100%, 67%)',
        'light-red-bg': 'hsla(0, 100%, 67%, 0.1)',
        'orange-yellow': 'hsl(39, 100%, 56%)',
        'orange-yellow-bg': 'hsla(39, 100%, 56%, 0.1)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'green-teal-bg': 'hsla(166, 100%, 37%, 0.1)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',
        'cobalt-blue-bg': 'hsla(234, 85%, 45%, 0.1)',
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavander': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(223, 30%, 27%)',
        'dark-gray-blue-faded': 'hsla(209, 23%, 22%, 0.4)',
      },
      fontFamily: {
        'hanken-grotesk': ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
