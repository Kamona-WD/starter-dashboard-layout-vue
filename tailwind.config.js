import { addIconSelectors } from '@iconify/tailwind'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    addIconSelectors(['tabler']),
  ],
}
