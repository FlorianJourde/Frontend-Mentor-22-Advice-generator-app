/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'very-dark-blue': '#202732',
      'dark-blue': '#323a49',
      'very-light-blue': '#d0e2e8',
      'light-green': '#6ffcac',
    },
  },
  plugins: [],
}

