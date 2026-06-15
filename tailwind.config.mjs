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
        // Warm light palette — redesign (see claude/VEDA_redesign_plan.md)
        linen: '#FEFCF7',
        sand: '#F5EFE2',
        bone: '#EDE8DC',
        sandstone: '#8B7355',
        earth: '#2C2016',
        'earth-mid': '#5C4A2E',
        // Text on light
        'ink': '#1c2118',
        'ink-mid': '#3a4035',
        'ink-light': '#6b7264',
        // Gold — softer, not shiny. Channel-based so it can be re-tinted per-page
        // via --gold-rgb (default below = #a07c3a; home overrides to Nile Gold #B8945A).
        gold: 'rgb(var(--gold-rgb) / <alpha-value>)',
        // Sage green — primary action colour (echoes the green logo)
        sage: '#5e8a5e',
        'sage-dark': '#4f7a52',
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
