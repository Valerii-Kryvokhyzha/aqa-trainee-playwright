import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import Header from '../base/elements/header';

export default class HeaderSteps {
	public header: Header;

	constructor() {
		this.header = new Header(driver.page);
	}

	public async checkThatHeaderButtonsHaveText(
		logoText: string,
		homeText: string,
		userText: string,
		addressText: string
	) {
		await expect(this.header.logoButton()).toBeVisible();
		await expect(this.header.homeButton()).toBeVisible();
		await expect(this.header.addUserButton()).toBeVisible();
		await expect(this.header.addAddressButton()).toBeVisible();

		await expect(this.header.logoButton()).toHaveText(logoText);
		await expect(this.header.homeButton()).toHaveText(homeText);
		await expect(this.header.addUserButton()).toHaveText(userText);
		await expect(this.header.addAddressButton()).toHaveText(addressText);
	}

	public async clickLogoButton() {
		await this.header.logoButton().click();
	}
	public async clickHomeButton() {
		await this.header.homeButton().click();
	}
	public async clickAddUserButton() {
		await this.header.addUserButton().click();
	}
	public async clickAddAddressButton() {
		await this.header.addAddressButton().click();
	}
}
