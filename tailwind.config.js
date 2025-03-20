/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#8B5A2B',
        secondary: '#FC754D',
        gray: '#F0F0F0',
        'dark-gray': '#A1A1A1',
      },
      fontFamily: {
        poppins: ['Poppins_Regular'],
        'poppins-semibold': ['Poppins_Semi_Bold'],
        'poppins-bold': ['Poppins_Bold'],
      },
    },
  },
  plugins: [],
}
