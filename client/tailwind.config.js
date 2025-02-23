module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        esther: 'rgb(var(--color-esther) / <alpha-value>)',
        maximus: 'rgb(var(--color-maximus) / <alpha-value>)',
        linx: 'rgb(var(--color-linx) / <alpha-value>)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      createThemes({
          default: {
            'primary': 'pink',
            'secondary': 'indigo'
          }
      })
  ],
}