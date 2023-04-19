import {test, expect} from '@playwright/test';

test.describe('Checks for home page of trainee website', () => {
	test.beforeEach(async ({page}) => {
		await page.goto('https://traineeautomation.azurewebsites.net/');
	});

	test('Check header text of main page', async ({page}) => {
		const centerText = await page.locator('//h1[@class="display-4"]');
		await expect(centerText).toHaveText(/Users and Addresses/);
		await expect(centerText).toHaveCSS('color', 'rgb(33, 37, 41)');
	});

	test.afterEach(async ({page}) => {
		page.close();
	});
});
