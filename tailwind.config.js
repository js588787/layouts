/** @type {import('tailwindcss').Config} */
const dirs = ['components', 'pages', 'assets', 'composables', 'store', 'utils', 'layouts', 'plugins'];

export default {
  content: [
    ...dirs.map((dir) => `./**/${dir}/**/*.{vue,ts,css,scss}`),
  ],
  theme: {
    extend: {
      width: {
        'payment-vallet': 'calc(11.1% - 16px)',
        'payment-method-l': 'calc(20% - 16px)',
	'payment-method-m': 'calc(20% - 8px)',
      },
    },
    screens: {
      'md': '1080px',
    },
  },
  plugins: [],
}

