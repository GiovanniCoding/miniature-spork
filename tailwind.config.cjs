/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    screens: {
      'mobile': {'max': '580px'}
    },
  },
  plugins: [],
  purge: {
    enabled: true,
    content: [
      './src/**/*.{js,jsx}'
    ]
  },
}
