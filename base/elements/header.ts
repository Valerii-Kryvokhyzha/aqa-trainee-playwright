import BaseHeader from './baseHeader';

export default class Header extends BaseHeader {
	public logoButton() {
		return this.page.locator('//a[@class="navbar-brand"]');
	}
	public homeButton() {
		return this.page.getByRole('link', {name: /Home/});
	}
	public addUserButton() {
		return this.page.getByRole('link', {name: /Add User/});
	}
	public addAddressButton() {
		return this.page.getByRole('link', {
			name: /Add Address/,
		});
	}

	public async clickLogoBtn() {
		await this.logoButton().click();
	}
	public async clickHomeBtn() {
		await this.homeButton().click();
	}
	public async clickAddUserBtn() {
		await this.addUserButton().click();
	}
	public async clickAddAddressBtn() {
		await this.addAddressButton().click();
	}
}
