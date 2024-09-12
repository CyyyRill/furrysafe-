/** @type {import('tailwindcss').Config} */
module.exports = {
content: [,
   "./index.html",
   "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: 'rgb(227, 237, 242)',
        darkblue: 'rgb(21, 34, 56)'
      },
    },
  },
  plugins: [],
}

