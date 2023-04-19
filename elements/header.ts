import {Page} from '@playwright/test';

export default class Header {
	private page: Page;

	constructor(page) {
		this.page = page;
	}

	public get logoBtn() {
		const logoBtn = this.page.locator('//a[@class="navbar-brand"]');
		return logoBtn;
	}
	public get homeBtn() {
		const homeBtn = this.page.getByRole('link', {name: /Home/});
		return homeBtn;
	}
	public get addUserBtn() {
		const addUserBtn = this.page.getByRole('link', {name: /Add User/});
		return addUserBtn;
	}
	public get addAddressBtn() {
		const addAddressBtn = this.page.getByRole('link', {
			name: /Add Address/,
		});
		return addAddressBtn;
	}

	public async clickLogoBtn() {
		const elem = this.logoBtn;
		await elem.click();
	}
	public async clickAddUserBtn() {
		const elem = this.addUserBtn;
		await elem.click();
	}
	public async clickHomeBtn() {
		const elem = this.homeBtn;
		await elem.click();
	}
	public async clickAddAddressBtn() {
		const elem = this.addAddressBtn;
		await elem.click();
	}
}
