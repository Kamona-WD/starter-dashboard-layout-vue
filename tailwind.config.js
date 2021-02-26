module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      overflow: ['hover'],
      display: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
