module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '540px',
			md: '768px',
			lg: '1048px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			grayscale: ['hover', 'focus'],
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				lg: '2rem',
				xl: '6rem',
				'2xl': '12rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
