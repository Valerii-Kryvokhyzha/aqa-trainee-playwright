import {test, expect} from '@playwright/test';
import {URLs} from '../websiteURLs';

test.describe('Add Address functionality checks', () => {
	test.beforeEach(async ({page}) => {
		await page.goto(URLs.addAddressURL);
	});

	test('Adding the Address', async ({page}) => {
		const StreetAddressInput = page.getByPlaceholder('Street Address');
		const CityInput = page.getByPlaceholder('City');
		const StateInput = page.getByPlaceholder('State');
		const ZipCodeInput = page.getByPlaceholder('Zip Code');

		await StreetAddressInput.fill('addRess 12');
		await CityInput.fill('FirsT');
		await StateInput.fill('State03');
		await ZipCodeInput.fill('44568');

		await page.locator('//button[@data-id="button-Create"]').click();
		await expect(page).toHaveURL(URLs.homeURL);
		await expect(
			page.locator('//td[contains(text(),"addRess 12")]')
		).toHaveText('addRess 12');
		await expect(
			page.locator('//td[contains(text(),"FirsT")]')
		).toBeVisible();
		await expect(
			page.locator('//td[contains(text(),"State03")]')
		).toBeVisible();
		await expect(
			page.locator('//td[contains(text(),"44568")]')
		).toBeVisible();
	});

	test.afterEach(async ({page}) => {
		const deleteAddressButton = page.locator(
			'//td[contains(text(),"44568")]/following-sibling::td/a'
		);
		await deleteAddressButton.click();
		await page.locator('//button[@data-id="button-Yes"]').click();
		await expect(page).toHaveURL(URLs.homeURL);
		page.close();
	});
});
