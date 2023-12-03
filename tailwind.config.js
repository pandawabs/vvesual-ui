const colors = require('tailwindcss/colors');

module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.slate,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow,
        info: colors.teal,
      }
    },
  },
  plugins: [],
}
