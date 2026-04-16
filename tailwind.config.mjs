/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Dark tones — used sparingly
        void: '#070b07',
        forest: '#0e1a0e',
        'forest-mid': '#162416',
        'card-bg': '#111a11',
        // Light backgrounds — new
        'warm-beige': '#f5f3ee',
        'soft-green': '#e8efe6',
        'warm-beige-deep': '#ede9e1',
        // Text on light
        'ink': '#1c2118',
        'ink-mid': '#3a4035',
        'ink-light': '#6b7264',
        // Gold — softer, not shiny
        gold: '#a07c3a',
        'gold-light': '#c9a85c',
        'gold-pale': '#dfc99a',
        'gold-muted': '#8a6b2e',
        // On dark backgrounds
        ivory: '#f0ebe0',
        'warm-gray': '#8a8278',
        'warm-gray-dark': '#5a554e',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cormorant', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.22em',
        mega: '0.4em',
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '0.9' }],
      },
    },
  },
  plugins: [],
};
