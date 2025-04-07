import type { Config } from 'tailwindcss';
import animatePlugin from 'tailwindcss-animate';

import internalPlugin from './tailwind.plugin';

const config: Config = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,css}', 'app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        ring: 'hsl(var(--ring))',
        border: 'hsl(var(--border))',
        brand: {
          primary: 'hsl(var(--brand-primary))',
          'primary-hover': 'hsl(var(--brand-primary-hover))',
          'primary-foreground': 'hsl(var(--brand-primary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
      },
      fontFamily: {
        poppins: 'var(--font-poppins)',
        sans: [
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        xs: [
          'var(--text-xs)',
          {
            lineHeight: 'var(--text-xs-line-height)',
            letterSpacing: 'var(--text-xs-letter-spacing)',
          },
        ],
        sm: [
          'var(--text-sm)',
          {
            lineHeight: 'var(--text-sm-line-height)',
            letterSpacing: 'var(--text-sm-letter-spacing)',
          },
        ],
        md: [
          'var(--text-md)',
          {
            lineHeight: 'var(--text-md-line-height)',
            letterSpacing: 'var(--text-md-letter-spacing)',
          },
        ],
        lg: [
          'var(--text-lg)',
          {
            lineHeight: 'var(--text-lg-line-height)',
            letterSpacing: 'var(--text-lg-letter-spacing)',
          },
        ],
        xl: [
          'var(--text-xl)',
          {
            lineHeight: 'var(--text-xl-line-height)',
            letterSpacing: 'var(--text-xl-letter-spacing)',
          },
        ],
      },
      aspectRatio: {
        square: '1 / 1',
        image: '4 / 3',
        video: '16 / 9',
      },
      boxShadow: {
        soft: 'var(--soft)',
        'soft-large': 'var(--soft-large)',
      },
      borderRadius: {
        xs: 'calc(var(--radius) - 8px)',
        sm: 'calc(var(--radius) - 4px)',
        md: 'var(--radius)',
        lg: 'calc(var(--radius) + 4px)',
      },
    },
    container: {
      center: true,
      padding: '40px',
      screens: { '2xl': '720px' },
    },
  },
  plugins: [animatePlugin, internalPlugin],
  darkMode: ['class'],
};

export default config;
