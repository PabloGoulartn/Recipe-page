/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '128': '46rem',
        '256': '64rem',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'young-serif': ['Young Serif'],
      },
      borderRadius: {
        'lgp': '1rem',
      },
      boxSizing: {
        'border-box': 'border-box',
      },
      colors: {
        Nutmeg: 'hsl(14, 45%, 36%)',
        eggshell: 'hsl(30, 54%, 90%)',
        roseWhite: 'hsl(330, 100%, 98%)',
        raspberry: 'hsl(332, 51%, 32%)',
        wengeBrown: 'hsl(30, 10%, 34%)',
        darkCharcoal: 'hsl(24, 5%, 18%)'
      }
    },
  },
  plugins: [],
}

