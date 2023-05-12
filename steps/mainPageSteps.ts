import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import MainPage from '../pages/mainPage';
import DeletePage from '../pages/deleteConfirmationPage';

export default class MainPageSteps {
	public mainPage: MainPage;
	public deletePage: DeletePage;

	constructor() {
		this.mainPage = new MainPage(driver.page);
		this.deletePage = new DeletePage(driver.page);
	}

	public async checkThatUserWithValidDataIsAddedToUsersTableOnMainPage(
		gender: string,
		userName: string,
		year: string
	) {
		await expect(this.mainPage.lastUserGenderInTable()).toHaveText(gender);
		await expect(this.mainPage.lastUserNameInTable()).toHaveText(userName);
		await expect(this.mainPage.lastUserYearInTable()).toHaveText(year);
	}

	public async deleteAddedUserFromUsersTableOnMainPage() {
		await this.mainPage.deleteLastUserButton().click();
		await this.deletePage.YesConfButton().click();
	}

	public async clickDeleteAddedUserButtonInUsersTable() {
		await this.mainPage.deleteLastUserButton().click();
	}

	public async clickYesConfirmationButtonInDeleteUserForm() {
		await this.deletePage.YesConfButton().click();
	}

	public async checkThatUserIsDeletedFromUsersTableOnMainPage(
		userName: string
	) {
		await expect(
			this.mainPage.checkRowInUsersTableWithUserName(userName)
		).toHaveCount(0);
	}

	public async clickEditNewUserButtonInUsersTable() {
		await this.mainPage.editLastUserButton().click();
	}

	public async checkThatAddressWithValidDataIsAddedToAddressesTableOnMainPage(
		street: string,
		city: string,
		state: string,
		zipCode: string
	) {
		await expect(this.mainPage.lastAddressStreetInTable()).toHaveText(
			street
		);
		await expect(this.mainPage.lastAddressCityInTable()).toHaveText(city);
		await expect(this.mainPage.lastAddressStateInTable()).toHaveText(state);
		await expect(this.mainPage.lastAddressZipCodeInTable()).toHaveText(
			zipCode
		);
	}

	public async deleteAddedAddressFromAddressesTableOnMainPage() {
		await this.mainPage.deleteLastAddressButton().click();
		await this.deletePage.YesConfButton().click();
	}

	public async clickDeleteAddedAddressButtonInAddressesTable() {
		await this.mainPage.deleteLastUserButton().click();
	}

	public async checkThatAddressIsDeletedFromAddressesTableOnMainPage(
		street: string
	) {
		await expect(
			this.mainPage.checkRowInAddressesTableWithAddressStreet(street)
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
