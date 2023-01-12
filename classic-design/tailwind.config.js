/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shahil: '2s linear '
      },
      keyframes: {
        shahil: {
          '0%,100': { scale: '1.1' },
        }
      }
    }
  }
}
// plugins: [],

