/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    //path tremor node_modules
    "./node_modules/@tremor/**/*.{js,tsjsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

