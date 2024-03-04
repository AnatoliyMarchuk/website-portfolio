import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',

  variants: {
    extend: {
      fontWeight: ['responsive', 'hover', 'focus'],
      opacity: ['hover'],
      borderColor: ['hover', 'focus'],
      margin: ['first', 'last'],
      backgroundColor: ['odd', 'even'],
      scale: ['hover', 'active', 'group-hover'],
      translate: ['group-hover'],
    },
  },
};
export default config;
