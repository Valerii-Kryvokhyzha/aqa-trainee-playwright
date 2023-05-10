import PageTitle from '../identifiers/pageTitle';
import MainTable from '../identifiers/tables/mainTable';
import TableButton from '../identifiers/butttons/mainTableButtons';

import BasePage from './basePage';
import UsersTable from '../identifiers/tables/usersTable';
import AddressesTable from '../identifiers/tables/addressesTable';

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
		return this.page.locator(UsersTable.addedUserGender);
	}

	public addedUserNameInTable() {
		return this.page.locator(UsersTable.addedUserName);
	}

	public addedUserYearInTable() {
		return this.page.locator(UsersTable.addedUserYear);
	}

	public checkRowInUsersTableWithUserName(userName: string) {
		return this.page.locator(
			`//td[contains(text(),"${userName}")]/parent::tr`
		);
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
		return this.page.locator(AddressesTable.addedAddressStreet);
	}

	public addedAddressCityInTable() {
		return this.page.locator(AddressesTable.addedAddressCity);
	}

	public addedAddressStateInTable() {
		return this.page.locator(AddressesTable.addedAddressState);
	}

	public addedAddressZipCodeInTable() {
		return this.page.locator(AddressesTable.addedAddressZipCode);
	}

	public checkRowInAddressesTableWithAddressStreet(street: string) {
		return this.page.locator(
			`//td[contains(text(),"${street}")]/parent::tr`
		);
	}

	public deleteNewAddressButton() {
		return this.addressesTable().locator(TableButton.lastDeleteAddressBtn);
	}
}
