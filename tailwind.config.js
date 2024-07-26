/** @type {import('tailwindcss').Config} */
const dirs = ['components', 'pages', 'assets', 'composables', 'store', 'utils', 'layouts', 'plugins'];

export default {
  content: [
    ...dirs.map((dir) => `./**/${dir}/**/*.{vue,ts,css,scss}`),
  ],
  theme: {
    extend: {
      width: {
        'payment-currency-2xl': 'calc(11.1% - 16px)',
        'payment-currency-xl': 'calc(12.5% - 16px)',
        'payment-currency-l': 'calc(14.3% - 16px)',
        'payment-currency-m': 'calc(14.3% - 8px)',
        'payment-currency-s': 'calc(20% - 8px)',
        'payment-currency-xs': 'calc(33.3% - 8px)',
        'payment-method-2xl': 'calc(20% - 16px)',
	      'payment-method-xl': 'calc(25% - 16px)',
        'payment-method-l': 'calc(33.3% - 16px)',
        'payment-method-m': 'calc(25% - 8px)',
        'payment-method-s': 'calc(33.3% - 8px)',
        'payment-method-xs': 'calc(50% - 6px)',
      },
    },
  },
  plugins: [],
}

