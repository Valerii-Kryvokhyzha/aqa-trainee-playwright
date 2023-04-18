import {test, expect} from '@playwright/test';
import {URLs} from '../websiteURLs';

test.describe('Navbar elements checks @NavigationHeader', async () => {
	test.beforeEach(async ({page}) => {
		await page.goto(URLs.homeURL);
	});

	test('Redirection via navbar checks @NavigationHeader', async ({page}) => {
		const logoTW = page.locator('//a[@class="navbar-brand"]');

		const homeHeaderButton = page.getByRole('link', {name: /Home/});
		const addUserHeaderButton = page.getByRole('link', {
			name: /Add User/,
		});
		const addAddressHeaderButton = page.getByRole('link', {
			name: /Add Address/,
		});

		await expect(logoTW).toBeVisible();
		await logoTW.click();
		await expect(page).toHaveURL(URLs.homeURL);

		await homeHeaderButton.click();
		await expect(page).toHaveURL(URLs.homeURL);

		await addUserHeaderButton.click();
		await expect(page).toHaveURL(URLs.addUserURL);

		await addAddressHeaderButton.click();
		await expect(page).toHaveURL(URLs.addAddressURL);
		await page.goBack();
	});

	test.afterEach(async ({page}) => {
		page.close();
	});
});
