import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import Header from '../base/elements/header';
import BasePageSteps from './basePageSteps';

let header: Header;

export default class HeaderSteps extends BasePageSteps {
	public async checkThatHeaderButtonsHaveText(
		logoText: string,
		homeText: string,
		userText: string,
		addressText: string
	) {
		header = new Header(driver.page); // !!!
		await expect(header.logoButton()).toBeVisible();
		await expect(header.homeButton()).toBeVisible();
		await expect(header.addUserButton()).toBeVisible();
		await expect(header.addAddressButton()).toBeVisible();

		await expect(header.logoButton()).toHaveText(logoText);
		await expect(header.homeButton()).toHaveText(homeText);
		await expect(header.addUserButton()).toHaveText(userText);
		await expect(header.addAddressButton()).toHaveText(addressText);
	}

	public async clickLogoButton() {
		await header.logoButton().click();
	}
	public async clickHomeButton() {
		await header.homeButton().click();
	}
	public async clickAddUserButton() {
		await header.addUserButton().click();
	}
	public async clickAddAddressButton() {
		await header.addAddressButton().click();
	}
}
