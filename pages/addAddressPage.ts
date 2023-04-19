import {expect} from '@playwright/test';
import {URLs} from '../websiteURLs';
import MainPage from './mainPage';

class AddAddressPage extends MainPage {
	constructor(page) {
		super(page);
		this.page = page;
	}

	async goToPage() {
		await this.page.goto(URLs.addAddressURL);
	}
	async checkPageURL() {
		await expect(this.page).toHaveURL(URLs.addAddressURL);
	}
}
