/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {
      'white':'#FFFFFF',
      'light': '#4285F3',
      'dark':'#156BCA'
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}