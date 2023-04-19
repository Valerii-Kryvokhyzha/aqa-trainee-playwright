import {Page, expect} from '@playwright/test';
import {URLs} from '../websiteURLs';

export default class MainPage {
	protected page: Page;

	constructor(page) {
		this.page = page;
	}

	async goToPage() {
		await this.page.goto(URLs.homeURL);
	}
	async checkPageURL() {
		await expect(this.page).toHaveURL(URLs.homeURL);
	}
}
