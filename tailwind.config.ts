import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: {
      void: '#030308',
      obsidian: '#0a0a14',
      iris: { DEFAULT: '#6a6aff', glow: '#a8a8ff' },
      plasma: { DEFAULT: '#ff3d8c', glow: '#ff8fbf' },
      neon: { DEFAULT: '#5eead4', glow: '#a7f3d0' },
      bone: '#f4f0e8'
    },
    fontFamily: {
      display: ['var(--font-display)','serif'],
      sans: ['var(--font-sans)','system-ui'],
      mono: ['var(--font-mono)','monospace']
    },
    keyframes: {
      glow: { '0%,100%':{opacity:'0.5'}, '50%':{opacity:'1'} },
      scan: { '0%':{transform:'translateY(-100%)'}, '100%':{transform:'translateY(100%)'} }
    },
    animation: { glow:'glow 3s ease-in-out infinite', scan:'scan 4s linear infinite' }
  }},
  plugins: []
} satisfies Config;
