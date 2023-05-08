import PageTitle from '../identifiers/pageTitle';
import MainTable from '../identifiers/tables/mainTable';
import TableButton from '../identifiers/butttons/mainTableButtons';

import BasePage from './basePage';

export default class MainPage extends BasePage {
	public titleText() {
		return this.page.locator(PageTitle.mainPage);
	}

	public usersTable() {
		return this.page.getByTestId(MainTable.usersTable);
	}
	public usersTableHeader() {
		return this.usersTable().locator(MainTable.subheader);
	}

	public addedUserGenderInTable() {
		return this.page.locator(MainTable.addedUserGender);
	}
	public addedUserNameInTable() {
		return this.page.locator(MainTable.addedUserName);
	}
	public addedUserYearInTable() {
		return this.page.locator(MainTable.addedUserYear);
	}

	public checkUserGenderInTable(gender: string) {
		return this.page.locator(
			`//tr[last()]/td[contains(text(),"${gender}")]`
		);
	}
	public checkUserNameInTable(name: string) {
		return this.page.locator(`//tr[last()]/td[contains(text(),"${name}")]`);
	}
	public checkUserYearInTable(year: string) {
		return this.page.locator(`//tr[last()]/td[contains(text(),"${year}")]`);
	}

	public editNewUserButton() {
		return this.page.locator(TableButton.lastEditUserBtn);
	}
	public deleteNewUserButton() {
		return this.editNewUserButton().locator(TableButton.lastDeleteUserBtn);
	}

	public addressesTable() {
		return this.page.getByTestId(MainTable.addressesTable);
	}
	public addressesTableHeader() {
		return this.addressesTable().locator(MainTable.subheader);
	}

	public addedAddressStreetInTable() {
		return this.page.locator(MainTable.addedAddressStreet);
	}
	public addedAddressCityInTable() {
		return this.page.locator(MainTable.addedAddressCity);
	}
	public addedAddressStateInTable() {
		return this.page.locator(MainTable.addedAddressState);
	}
	public addedAddressZipCodeInTable() {
		return this.page.locator(MainTable.addedAddressZipCode);
	}

	public checkAddressSteetInTable(street: string) {
		return this.page.locator(
			`//tr[last()]/td[contains(text(),"${street}")]`
		);
	}
	public checkAddressCityInTable(city: string) {
		return this.page.locator(`//tr[last()]/td[contains(text(),"${city}")]`);
	}
	public checkAddressStateInTable(state: string) {
		return this.page.locator(
			`//tr[last()]/td[contains(text(),"${state}")]`
		);
	}
	public checkAddressZipCodeInTable(zipCode: string) {
		return this.page.locator(
			`//tr[last()]/td[contains(text(),"${zipCode}")]`
		);
	}

	public deleteNewAddressButton() {
		return this.addressesTable().locator(TableButton.lastDeleteAddressBtn);
	}
}
