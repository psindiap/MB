/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen60': '60vh',
        'screen80': '80vh',
        'screen90': '90vh',
        'screen40':'40vh',
        'screen70': '70vh',
      }
    },
  },
  plugins: [],
}