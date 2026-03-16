/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontSize: {
      xs: ['0.875rem', { lineHeight: '1.5' }],
      sm: ['1rem', { lineHeight: '1.5' }],
      md: ['1.125rem', { lineHeight: '1.5' }],
      lg: ['1.25rem', { lineHeight: '1.5' }],
      xl: ['1.25rem', { lineHeight: '1.5' }],
      '2xl': ['1.375rem', { lineHeight: '1.5' }],
      '3xl': ['1.875rem', { lineHeight: '1.3' }],
      '4xl': ['3.25rem', { lineHeight: '1.3' }],
      '5xl': ['3.75rem', { lineHeight: '1.3' }]
    },
    borderRadius: { // Reset
      none: '0px',
      sm: '0px',
      DEFAULT: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
      '2xl': '4rem',
      '3xl': '5rem',
      full: '9999px',
    },
    fontFamily: {
      sans: ['NeueSwiss', 'system-ui', '-apple-system', 'sans-serif'],
      serif: ['Aveburg Grande Condensed', 'Georgia', 'serif'],
    },
    extend: {
      colors: {
        'ct-dark':     '#333333',  // text, buttons
        'ct-darker':   '#434343',  // dark bg boxes
        'ct-gray':     '#f0efed',  // light gray bg
        'ct-lightgray':'#faf9f7',  // very light gray bg
        'ct-btn-light':'#ababab',  // light gray button bg
        'ct-accent1':  '#4c8b90',  // teal – icons
        'ct-accent2':  '#b5623a',  // rust – register button
      },
    },
  },
  plugins: [],
}
