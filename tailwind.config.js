/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xs': '320px',
        '2xs': '440px',
        'xs': '550px',
        'sm': '640px',
        'md': '768px',
        'lg': '915px',
        'xl': '1120px',
        '2xl': '1380px',
      },
    },
  },
  plugins: [],
}

