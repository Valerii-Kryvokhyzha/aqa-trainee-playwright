import MainTable from '../identifiers/tableFields/mainTable';
import BasePage from './basePage';
import UsersTable from '../identifiers/tableFields/usersTable';
import AddressesTable from '../identifiers/tableFields/addressesTable';
import TableButtons from '../identifiers/buttons/mainTableButtons';

export default class MainPage extends BasePage {
	public titleText() {
		return this.page.locator('//h1[text()="Users and Addresses"]');
	}

	public usersTable() {
		return this.page.getByTestId(MainTable.usersTable);
	}

	public usersTableHeader() {
		return this.usersTable().locator('//th[@colspan="5"]');
	}

	public lastUserGenderInTable() {
		return this.page.getByTestId(UsersTable.userGender).last();
	}

	public lastUserNameInTable() {
		return this.page.getByTestId(UsersTable.userName).last();
	}

	public lastUserYearInTable() {
		return this.page.getByTestId(UsersTable.userYear).last();
	}

	public checkRowInUsersTableWithUserName(userName: string) {
		return this.page.locator(
			`//td[contains(text(),"${userName}")]/parent::tr`
		);
	}

	public editLastUserButton() {
		return this.usersTable().getByTestId(TableButtons.editButton).last();
	}

	public deleteLastUserButton() {
		return this.usersTable().getByTestId(TableButtons.deleteButton).last();
	}

	public addressesTable() {
		return this.page.getByTestId(MainTable.addressesTable);
	}

	public addressesTableHeader() {
		return this.addressesTable().locator('//th[@colspan="5"]');
	}

	public lastAddressStreetInTable() {
		return this.page.getByTestId(AddressesTable.streetAddress).last();
	}

	public lastAddressCityInTable() {
		return this.page.getByTestId(AddressesTable.city).last();
	}

	public lastAddressStateInTable() {
		return this.page.getByTestId(AddressesTable.state).last();
	}

	public lastAddressZipCodeInTable() {
		return this.page.getByTestId(AddressesTable.zipCode).last();
	}

	public checkRowInAddressesTableWithAddressStreet(street: string) {
		return this.page.locator(
			`//td[contains(text(),"${street}")]/parent::tr`
		);
	}

	public deleteLastAddressButton() {
		return this.addressesTable()
			.getByTestId(TableButtons.deleteButton)
			.last();
	}
}
