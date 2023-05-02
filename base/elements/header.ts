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
}
