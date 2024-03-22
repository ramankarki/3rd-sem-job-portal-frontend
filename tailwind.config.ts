import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-cta':
					'linear-gradient(150deg, rgba(215,252,255,1) 0%, rgba(255,255,255,1) 50%, rgba(211,251,233,1) 100%)',
			},
			colors: {
				primary: '#3490b0',
				'dark-1': '#6B7280',
				'dark-2': '#1F2937',
			},
		},
	},
	plugins: [],
}
export default config
