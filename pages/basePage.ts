import {/* Locator, */ Page, expect} from '@playwright/test';

export default class BasePage {
	protected page: Page;
	// readonly usersAndAddressesText: Locator; // as in Playwright doc - question)

	constructor(page: Page) {
		this.page = page;
		// this.usersAndAddressesText = page.locator('//h1[@class="display-4"]'); // as in Playwright doc - question)
	}

	public async goToPage(url: string) {
		await this.page.goto(url);
	}
	public async checkPageURL(url: string) {
		await expect(this.page).toHaveURL(url);
	}
}
