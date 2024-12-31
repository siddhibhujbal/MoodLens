/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#9f7aea', // Custom purple shade
        },
        red: {
          400: '#fc8181', // Custom red shade
        },
        gray: {
          100: '#f7fafc', // Custom gray shade
        },
      },
    },
  },
  plugins: [],
};
