import {tableRows} from '../base/mainPageTableRows/mainPageTableRows';
import BasePage from './basePage';

export default class MainPage extends BasePage {
	public titleText() {
		return this.page.locator('//h1[text()="Users and Addresses"]');
	}

	public usersTableHeader() {
		return this.page.locator('//th[contains(text(),"USERS")]');
	}
	public addressesTableHeader() {
		return this.page.locator('//th[contains(text(),"ADDRESSES")]');
	}

	public usersTable() {
		return this.page.locator('//table[@data-id="table-Users"]/tbody');
	}
	public usersTableRow() {
		return this.usersTable().locator('//tr');
	}
	public addedUserTableRow() {
		return this.usersTable().locator(`//tr[${tableRows.addedAcc}]`);
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
	public addressesTableRow() {
		return this.addressTable().locator('//tr');
	}
	public addedAddressTableRow() {
		return this.addressTable().locator(`//tr[${tableRows.addedAcc}]`);
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
