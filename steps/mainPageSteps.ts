import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import MainPage from '../pages/mainPage';
import DeletePage from '../pages/deletePage';
import UserDto from '../dto/userDto';
import AddressDto from '../dto/addressDto';

export default class MainPageSteps {
	public mainPage: MainPage;
	public deletePage: DeletePage;

	constructor() {
		this.mainPage = new MainPage(driver.page);
		this.deletePage = new DeletePage(driver.page);
	}

	public async checkThatUserWithValidDataIsAddedToUsersTableOnMainPage(
		user: UserDto
	) {
		await expect(this.mainPage.lastUserGenderInTable()).toHaveText(
			user.gender
		);
		await expect(this.mainPage.lastUserNameInTable()).toHaveText(user.name);
		await expect(this.mainPage.lastUserYearInTable()).toHaveText(user.year);
	}

	public async deleteAddedUserFromUsersTableOnMainPage() {
		await this.mainPage.deleteLastUserButton().click();
		await this.deletePage.YesConfirmationButton().click();
	}

	public async clickDeleteLastUserButtonInUsersTable() {
		await this.mainPage.deleteLastUserButton().click();
	}
	public async clickDeleteUserButtonInUsersTable(userName: UserDto) {
		await this.mainPage.deleteUserButton(userName).click();
	}

	public async clickYesConfirmationButtonInDeleteUserForm() {
		await this.deletePage.YesConfirmationButton().click();
	}

	public async checkThatUserIsDeletedFromUsersTableOnMainPage(user: UserDto) {
		await expect(
			this.mainPage.checkRowInUsersTableWithUserName(user.name)
		).toHaveCount(0);
	}

	public async clickEditNewUserButtonInUsersTable() {
		await this.mainPage.editLastUserButton().click();
	}

	public async checkThatAddressWithValidDataIsAddedToAddressesTableOnMainPage(
		address: AddressDto
	) {
		await expect(this.mainPage.lastAddressStreetInTable()).toHaveText(
			address.street
		);
		await expect(this.mainPage.lastAddressCityInTable()).toHaveText(
			address.city
		);
		await expect(this.mainPage.lastAddressStateInTable()).toHaveText(
			address.state
		);
		await expect(this.mainPage.lastAddressZipCodeInTable()).toHaveText(
			address.zipCode
		);
	}

	public async deleteAddedAddressFromAddressesTableOnMainPage() {
		await this.mainPage.deleteLastAddressButton().click();
		await this.deletePage.YesConfirmationButton().click();
	}

	public async clickDeleteAddedAddressButtonInAddressesTable() {
		await this.mainPage.deleteLastUserButton().click();
	}

	public async checkThatAddressIsDeletedFromAddressesTableOnMainPage(
		address: AddressDto
	) {
		await expect(
			this.mainPage.checkRowInAddressesTableWithAddressStreet(
				address.street
			)
		).toHaveCount(0);
	}

	public async checkThatMainPageTitleHasText(text: string) {
		await expect(this.mainPage.titleText()).toHaveText(`${text}`);
	}

	public async checkThatMainPageTitleHasTextColor(textColor: string) {
		await expect(this.mainPage.titleText()).toHaveCSS(
			'color',
			`${textColor}`
		);
	}

	public async checkThatUsersTableHeaderHasProperties(
		text: string,
		color: string
	) {
		await expect(this.mainPage.usersTableHeader()).toHaveText(`${text}`);
		await expect(this.mainPage.usersTableHeader()).toHaveCSS(
			'color',
			`${color}`
		);
	}

	public async checkThatAddressesTableHeaderHasProperties(
		text: string,
		color: string
	) {
		await expect(this.mainPage.addressesTableHeader()).toHaveText(
			`${text}`
		);
		await expect(this.mainPage.addressesTableHeader()).toHaveCSS(
			'color',
			`${color}`
		);
	}
}
