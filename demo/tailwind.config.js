module.exports = {
  prefix: '',
  important: true,
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },

  corePlugins: {
    preflight: false,
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
