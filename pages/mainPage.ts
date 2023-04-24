import BasePage from './basePage';

export default class MainPage extends BasePage {
	public titleText() {
		return this.page.locator('//h1[text()="Users and Addresses"]');
	}

	public usersTableText() {
		return this.page.locator('//th[contains(text(),"USERS")]');
	}
	public addressesTableText() {
		return this.page.locator('//th[contains(text(),"ADDRESSES")]');
	}

	public usersTable() {
		return this.page.locator('//table[@data-id="table-Users"]/tbody');
	}
	public editNewUserButton() {
		return this.page.locator('//tr[last()]/.//a[@data-id="button-Edit"]');
	}
	public deleteNewUserButton() {
		return this.editNewUserButton().locator(
			'//following-sibling::a[@data-id="button-Delete"]'
		);
	}

	public addressTable() {
		return this.page.locator('//table[@data-id="table-Addresses"]/tbody');
	}
	public deleteNewAddressButton() {
		return this.addressTable().locator(
			'//.//tr[last()]/.//a[@data-id="button-Delete"]'
		);
	}

	public delYesConfButton() {
		return this.page.locator('//button[@data-id="button-Yes"]');
	}
}
