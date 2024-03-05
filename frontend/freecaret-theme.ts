
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #1c71d8 
		"--color-primary-50": "221 234 249", // #ddeaf9
		"--color-primary-100": "210 227 247", // #d2e3f7
		"--color-primary-200": "198 220 245", // #c6dcf5
		"--color-primary-300": "164 198 239", // #a4c6ef
		"--color-primary-400": "96 156 228", // #609ce4
		"--color-primary-500": "28 113 216", // #1c71d8
		"--color-primary-600": "25 102 194", // #1966c2
		"--color-primary-700": "21 85 162", // #1555a2
		"--color-primary-800": "17 68 130", // #114482
		"--color-primary-900": "14 55 106", // #0e376a
		// secondary | #77767b 
		"--color-secondary-50": "235 234 235", // #ebeaeb
		"--color-secondary-100": "228 228 229", // #e4e4e5
		"--color-secondary-200": "221 221 222", // #ddddde
		"--color-secondary-300": "201 200 202", // #c9c8ca
		"--color-secondary-400": "160 159 163", // #a09fa3
		"--color-secondary-500": "119 118 123", // #77767b
		"--color-secondary-600": "107 106 111", // #6b6a6f
		"--color-secondary-700": "89 89 92", // #59595c
		"--color-secondary-800": "71 71 74", // #47474a
		"--color-secondary-900": "58 58 60", // #3a3a3c
		// tertiary | #3584e4 
		"--color-tertiary-50": "225 237 251", // #e1edfb
		"--color-tertiary-100": "215 230 250", // #d7e6fa
		"--color-tertiary-200": "205 224 248", // #cde0f8
		"--color-tertiary-300": "174 206 244", // #aecef4
		"--color-tertiary-400": "114 169 236", // #72a9ec
		"--color-tertiary-500": "53 132 228", // #3584e4
		"--color-tertiary-600": "48 119 205", // #3077cd
		"--color-tertiary-700": "40 99 171", // #2863ab
		"--color-tertiary-800": "32 79 137", // #204f89
		"--color-tertiary-900": "26 65 112", // #1a4170
		// success | #26a269 
		"--color-success-50": "222 241 233", // #def1e9
		"--color-success-100": "212 236 225", // #d4ece1
		"--color-success-200": "201 232 218", // #c9e8da
		"--color-success-300": "168 218 195", // #a8dac3
		"--color-success-400": "103 190 150", // #67be96
		"--color-success-500": "38 162 105", // #26a269
		"--color-success-600": "34 146 95", // #22925f
		"--color-success-700": "29 122 79", // #1d7a4f
		"--color-success-800": "23 97 63", // #17613f
		"--color-success-900": "19 79 51", // #134f33
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #c01c28 
		"--color-error-50": "246 221 223", // #f6dddf
		"--color-error-100": "242 210 212", // #f2d2d4
		"--color-error-200": "239 198 201", // #efc6c9
		"--color-error-300": "230 164 169", // #e6a4a9
		"--color-error-400": "211 96 105", // #d36069
		"--color-error-500": "192 28 40", // #c01c28
		"--color-error-600": "173 25 36", // #ad1924
		"--color-error-700": "144 21 30", // #90151e
		"--color-error-800": "115 17 24", // #731118
		"--color-error-900": "94 14 20", // #5e0e14
		// surface | #141414 
		"--color-surface-50": "220 220 220", // #dcdcdc
		"--color-surface-100": "208 208 208", // #d0d0d0
		"--color-surface-200": "196 196 196", // #c4c4c4
		"--color-surface-300": "161 161 161", // #a1a1a1
		"--color-surface-400": "91 91 91", // #5b5b5b
		"--color-surface-500": "20 20 20", // #141414
		"--color-surface-600": "18 18 18", // #121212
		"--color-surface-700": "15 15 15", // #0f0f0f
		"--color-surface-800": "12 12 12", // #0c0c0c
		"--color-surface-900": "10 10 10", // #0a0a0a
		
	}
}