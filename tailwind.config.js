/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs:    ['14px', { lineHeight: '20px', letterSpacing: '-0.01em'  }],
      sm:    ['16px', { lineHeight: '24px', letterSpacing: '-0.01em'  }],
      md:    ['18px', { lineHeight: '28px', letterSpacing: '-0.01em'  }],
      lg:    ['20px', { lineHeight: '32px', letterSpacing: '-0.01em'  }],
      xl:    ['24px', { lineHeight: '36px', letterSpacing: '-0.01em'  }],
      '2xl': ['28px', { lineHeight: '40px', letterSpacing: '-0.01em' }],
      '3xl': ['36px', { lineHeight: '48px', letterSpacing: '-0.01em' }],
      '4xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.01em' }],
      '5xl': ['64px', { lineHeight: '72px', letterSpacing: '-0.01em' }],
    },
    colors:{
      "dark": "#202020",
      "light": "#EEEEEE",
      "light-gray": "#E2E2E2",
    },
    backgroundColor: {
      'primary': '#EEEEEE',
      'opposite': '#202020',
      'yellow': '#E8CC16',
      'maroon': '#8C2232',
    },
    textColor: {
      'primary': '#202020',
      'opposite': '#EEEEEE'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
