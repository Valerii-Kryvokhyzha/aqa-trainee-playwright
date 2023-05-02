import {Page, expect} from '@playwright/test';

export default class BasePageSteps {
	public page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	public async goToPage(url: string) {
		await this.page.goto(url);
	}
	public async checkPageURL(url: string) {
		await expect(this.page).toHaveURL(url);
	}
}
