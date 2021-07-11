module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '320px',
      sm: '600px',
      md: '768px',
      lg: '1080px',
      xl: '1200px',
      xxl: '1440px',
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
