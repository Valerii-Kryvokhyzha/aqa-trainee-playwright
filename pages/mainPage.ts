import BasePage from './basePage';

export default class MainPage extends BasePage {
	public titleText() {
		return this.page.locator('//h1[text()="Users and Addresses"]');
	}

	public usersTable() {
		return this.page.locator('//table[@data-id="table-Users"]');
	}

	public usersTableHeader() {
		return this.usersTable().locator('//th[@colspan="5"]');
	}

	public addedUserGenderInTable() {
		return this.page.locator('//tr[last()]/td[@data-id="td-Gender"]');
	}

	public addedUserNameInTable() {
		return this.page.locator('//tr[last()]/td[@data-id="td-UserName"]');
	}

	public addedUserYearInTable() {
		return this.page.locator('//tr[last()]/td[@data-id="td-YearOfBirth"]');
	}

	public checkRowInTableWithUserName(name: string) {
		return this.page.locator(`//td[contains(text(),"${name}")]/parent::tr`);
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
		return this.page.locator('//table[@data-id="table-Addresses"]');
	}

	public addressesTableHeader() {
		return this.addressTable().locator('//th[@colspan="5"]');
	}

	public addedAddressStreetInTable() {
		return this.page.locator(
			'//tr[last()]/td[@data-id="td-StreetAddress"]'
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

	public checkAddressSteetInTable(street: string) {
		return this.page.locator(
			`//tr[last()]/td[contains(text(),"${street}")]`
		);
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
