/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
    content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './constants/**/*.{js,ts,jsx,tsx,mdx}',
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
    extend: {
      colors:{
        "dark": "#202020",
        "light": "#EEEEEE",
        'primary': '#EEEEEE',
        'opposite': '#202020',
      },
      backgroundColor: {
        'yellow': '#E8CC16',
        'maroon': '#8C2232',
        "gray-accent": "#D5D5D5",
      },
      textColor: {
        'primary':  '#202020',
        'opposite': '#EEEEEE',
        'maroon': '#8C2232',
      }
    },
    variants: {
      extend: {
        backgroundColor: ['dark'],
        textColor: ['dark'],
      },
    },
  },
  plugins: [],
}
