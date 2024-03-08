/** @type {import('@playwright/test').PlaywrightTestConfig} */
import { devices } from '@playwright/test';
const config = {
	projects: [
		{
		  name: 'chromium',
		  use: {
			...devices['Desktop FirFox'],
			isMobile: true,
		  },
		},
		{
		  name: 'Mobile Safari',
		  use: {
			...devices['iPhone 13 Pro Max'],
		  },
		},
	  ],
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
