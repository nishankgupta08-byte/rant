/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        matrix: {
          bg: '#050505',
          dark: '#0a0a0c',
          card: '#121216',
          hover: '#1a1a22',
          border: '#272730',
          green: '#39FF14',
          'green-dark': '#28c70d',
          'green-light': '#70ff54',
          cyan: '#00e5ff',
          purple: '#b55fe6',
          text: '#f4f4f5',
          muted: '#94a3b8',
        }
      },
      fontFamily: {
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      boxShadow: {
        'neon-green': '0 0 15px rgba(57, 255, 20, 0.4), 0 0 30px rgba(57, 255, 20, 0.2)',
        'neon-green-strong': '0 0 25px rgba(57, 255, 20, 0.7), 0 0 50px rgba(57, 255, 20, 0.3)',
        'neon-cyan': '0 0 15px rgba(0, 229, 255, 0.4), 0 0 30px rgba(0, 229, 255, 0.2)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(57, 255, 20, 0.15)',
      },
      animation: {
        'matrix-scan': 'scanline 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'led-blink': 'ledBlink 1.5s steps(2, start) infinite',
        'terminal-cursor': 'blink 1s step-end infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.9', filter: 'drop-shadow(0 0 10px rgba(57, 255, 20, 0.6))' },
          '50%': { opacity: '0.4', filter: 'drop-shadow(0 0 2px rgba(57, 255, 20, 0.2))' }
        },
        ledBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}
