import BasePage from './basePage';

export default class MainPage extends BasePage {
	public titleText() {
		return this.page.locator('//h1[text()="Users and Addresses"]');
	}

	public usersTableHeader() {
		return this.page.locator('//th[contains(text(),"USERS")]');
	}
	public usersTable() {
		return this.page.locator('//table[@data-id="table-Users"]/tbody');
	}
	public usersTableRow() {
		return this.usersTable().locator('//tr');
	}
	public addedUserNameInTable() {
		return this.page.locator('//tr[last()]/td[@data-id="td-UserName"]');
	}
	public checkUserNameInTable(name: string) {
		return this.page.locator(`//tr[last()]/td[contains(text(),"${name}")]`);
	}
	public addedUserYearInTable() {
		return this.page.locator('//tr[last()]/td[@data-id="td-YearOfBirth"]');
	}
	public addedUserGenderInTable() {
		return this.page.locator('//tr[last()]/td[@data-id="td-Gender"]');
	}

	public editNewUserButton() {
		return this.page.locator('//tr[last()]/.//a[@data-id="button-Edit"]');
	}
	public deleteNewUserButton() {
		return this.editNewUserButton().locator(
			'//following-sibling::a[@data-id="button-Delete"]'
		);
	}

	public addressesTableHeader() {
		return this.page.locator('//th[contains(text(),"ADDRESSES")]');
	}
	public addressTable() {
		return this.page.locator('//table[@data-id="table-Addresses"]/tbody');
	}
	public addressesTableRow() {
		return this.addressTable().locator('//tr');
	}

	public addedAddressStreetInTable() {
		return this.page.locator(
			'//tr[last()]/td[@data-id="td-StreetAddress"]'
		);
	}
	public checkAddressSteetInTable(street: string) {
		return this.page.locator(
			`//tr[last()]/td[contains(text(),"${street}")]`
		);
	}
	public addedAddressCityInTable() {
		return this.page.locator('//tr[last()]/td[@data-id="td-City"]');
	}
	public addedAddressStateInTable() {
		return this.page.locator('//tr[last()]/td[@data-id="td-State"]');
	}
	public addedAddressZipCodeInTable() {
		return this.page.locator('//tr[last()]/td[@data-id="td-ZipCode"]');
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
