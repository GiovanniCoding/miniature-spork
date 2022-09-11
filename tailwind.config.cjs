/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    screens: {
      'mobile': {'max': '510px'}
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
