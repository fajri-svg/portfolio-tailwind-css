/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './*.html',
    './**/*.html',
  ],
  theme: {
    container:{
      center: true,
      padding:  '16px',
    },
    listStyleType:{
      none:'none',
      disc:'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
        link: '#3b82f6',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

