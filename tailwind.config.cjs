/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	corePlugins: {
		container: false
	},

	theme: {
		extend: {
			colors: {
				'base-purple': '#683EFC',
				gray: '#A4A4A4',
				'base-gray': '#636363',
				'secondary-gray': '#696969',
				'counter-gray': '#565656',
				'base-black': '#34313F',
				'black-lighter': '#3D3D3D',
				dark: '#363639',
				'light-purple': '#EFF1FF',
				green: '#32CD9F',
				orange: '#F59778',
				'dirty-white': '#F5F5F5',
				blue: '#14A8D6'
			},
			fontFamily: {
				'display-medium': ['BeVietnamMedium', 'ui-serif'],
				'display-bold': ['BeVietnamBold', 'ui-serif'],
				'display-regular': ['BeVietnamRegular', 'ui-serif'],
				body: ['DMSansRegular', ...defaultTheme.fontFamily.sans],
				title: ['Anton', 'ui-serif'],
				'secondary-title': ['DMSansBold', 'ui-serif'],
				'dmsans-medium': ['DMSansMedium', 'ui-serif']
			}
		}
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				'.container': {
					maxWidth: '100%',
					padding: '1rem',
					'@screen sm': {
						maxWidth: '640px'
					},
					'@screen md': {
						maxWidth: '768px'
					},
					'@screen lg': {
						maxWidth: '1024px'
					},
					'@screen xl': {
						maxWidth: '1232px'
					}
				}
			});
		}
	]
};
