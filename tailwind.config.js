/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        manatime_light_blue: '#0090F5',
        manatime_dark_blue: '#094694',
        manatime_mid_blue: '#0281E3',
        manatime_border_grey: '#0489E0',
        manatime_border_blue: '#0569C2',
        manatime_light_grey: '#E3E3E3',
        manatime_dark_grey: '#646464',
        manatime_darker_grey: '#494949',
        manatime_mid_grey: '#F2F2F2'
      }
    }
  },
  plugins: []
};
