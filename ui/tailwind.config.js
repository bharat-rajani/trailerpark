const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	variants: {
		placeholderOpacity: ['responsive', 'focus', 'hover', 'active'],
	},
	safelist: [
		'col-span-1',
		'col-span-2',
		'col-span-3',
		'col-span-4',
		'col-span-5',
		'col-span-6',
		'col-span-7',
		'col-span-8',
		'col-span-9',
		'col-span-10',
		'col-span-11',
		'col-span-12',
		'grid-cols-1',
		'grid-cols-2',
		'grid-cols-3',
		'grid-cols-4',
		'grid-cols-5',
		'grid-cols-6',
		'grid-cols-7',
		'grid-cols-8',
		'grid-cols-9',
		'grid-cols-10',
		'grid-cols-11',
		'grid-cols-12',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: colors.indigo['50'],
					100: colors.indigo['100'],
					200: colors.indigo['200'],
					300: colors.indigo['300'],
					400: colors.indigo['400'],
					500: colors.indigo['500'],
					600: colors.indigo['600'],
					700: colors.indigo['700'],
					800: colors.indigo['800'],
					900: colors.indigo['900'],
				},
				neutral: {
					50: colors.gray['50'],
					100: colors.gray['100'],
					200: colors.gray['200'],
					300: colors.gray['300'],
					400: colors.gray['400'],
					500: colors.gray['500'],
					600: colors.gray['600'],
					700: colors.gray['700'],
					800: colors.gray['800'],
					900: colors.gray['900'],
				},
				redaccent: {
					50: colors.red['50'],
					100: colors.red['100'],
					200: colors.red['200'],
					300: colors.red['300'],
					400: colors.red['400'],
					500: colors.red['500'],
					600: colors.red['600'],
					700: colors.red['700'],
					800: colors.red['800'],
					900: colors.red['900'],
				},
				yellowaccent: {
					50: colors.yellow['50'],
					100: colors.yellow['100'],
					200: colors.yellow['200'],
					300: colors.yellow['300'],
					400: colors.yellow['400'],
					500: colors.yellow['500'],
					600: colors.yellow['600'],
					700: colors.yellow['700'],
					800: colors.yellow['800'],
					900: colors.yellow['900'],
				},
				greenaccent: {
					50: colors.green['50'],
					100: colors.green['100'],
					200: colors.green['200'],
					300: colors.green['300'],
					400: colors.green['400'],
					500: colors.green['500'],
					600: colors.green['600'],
					700: colors.green['700'],
					800: colors.green['800'],
					900: colors.green['900'],
				}
			},
		}
	},
	plugins: [],
}