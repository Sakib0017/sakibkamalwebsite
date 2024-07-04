module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        sand: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        sand: 'sand 10s linear infinite',
      },
    },
    
  },
  variants: {},
  plugins: [],
}
