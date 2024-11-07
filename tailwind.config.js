module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'antique-brass': {  DEFAULT: '#CD9473',  50: '#FDFBFA',  100: '#F8F0EB',  200: '#EDD9CD',  300: '#E2C2AF',  400: '#D8AB91',  500: '#CD9473',  600: '#BE744A',  700: '#995B37',  800: '#704228',  900: '#462A19',  950: '#321E12'},
        'storm-dust': {  DEFAULT: '#6B6B68',  50: '#C6C6C4',  100: '#BCBCBA',  200: '#A8A8A5',  300: '#949491',  400: '#80807C',  500: '#6B6B68',  600: '#4F4F4C',  700: '#323231',  800: '#161615',  900: '#000000',  950: '#000000'},
        'we-peep': {  DEFAULT: '#F7DDDC',  50: '#FFFFFF',  100: '#FFFFFF',  200: '#FFFFFF',  300: '#FFFFFF',  400: '#FFFDFD',  500: '#F7DDDC',  600: '#EDB1AE',  700: '#E28481',  800: '#D85853',  900: '#C5332D',  950: '#AF2D28'},
        'mandys-pink': {  DEFAULT: '#F3D0BD',  50: '#FFFFFF',  100: '#FFFFFF',  200: '#FFFFFF',  300: '#FFFFFF',  400: '#F9E9E0',  500: '#F3D0BD',  600: '#EAAE8E',  700: '#E28C5E',  800: '#D96B2F',  900: '#B05320',  950: '#98471C'},
        'mercury': {  DEFAULT: '#E1E1E1',  50: '#FFFFFF',  100: '#FFFFFF',  200: '#FFFFFF',  300: '#FFFFFF',  400: '#F5F5F5',  500: '#E1E1E1',  600: '#C5C5C5',  700: '#A9A9A9',  800: '#8D8D8D',  900: '#717171',  950: '#636363'}, 
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
