import { join } from 'path';
import { myCustomTheme } from './freecaret-theme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';

import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	,
	'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {      colors: {
			// flowbite-svelte
			primary: {
			  50: '#FFF5F2',
			  100: '#FFF1EE',
			  200: '#FFE4DE',
			  300: '#FFD5CC',
			  400: '#FFBCAD',
			  500: '#FE795D',
			  600: '#EF562F',
			  700: '#EB4F27',
			  800: '#CC4522',
			  900: '#A5371B'
			}
		  }}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'gold-nouveau',
						enhancements: true
					},
					{
						name: 'wintry',
						enhancements: true
					}
				],
				custom: [myCustomTheme]
			}
		})
	,
	flowbite]
};
