import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import Header from '../base/elements/header/header';

export default class HeaderSteps {
	public header: Header;

	constructor() {
		this.header = new Header(driver.page);
	}

	public async checkThatLogoButtonInHeaderHasText(logoText: string) {
		await expect(this.header.logoButton()).toBeVisible();
		await expect(this.header.logoButton()).toHaveText(logoText);
	}

	public async checkThatHomeButtonInHeaderHasText(homeText: string) {
		await expect(this.header.homeButton()).toBeVisible();
		await expect(this.header.homeButton()).toHaveText(homeText);
	}

	public async checkThatAddUserButtonInHeaderHasText(userText: string) {
		await expect(this.header.addUserButton()).toBeVisible();
		await expect(this.header.addUserButton()).toHaveText(userText);
	}

	public async checkThatAddAddressButtonInHeaderHasText(addressText: string) {
		await expect(this.header.addAddressButton()).toBeVisible();
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
