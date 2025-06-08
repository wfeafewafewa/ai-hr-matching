/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#2C7BE5',
          secondary: '#5C6AC4',
          accent: '#FFB116',
          success: '#38C172',
          error: '#E3342F',
        },
      },
    },
    plugins: [],
  }