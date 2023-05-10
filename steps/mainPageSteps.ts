import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import MainPage from '../pages/mainPage';

export default class MainPageSteps {
	public mainPage: MainPage;

	constructor() {
		this.mainPage = new MainPage(driver.page);
	}

	public async checkThatUserWithValidDataIsAddedToUsersTableOnMainPage(
		gender: string,
		userName: string,
		year: string
	) {
		await expect(this.mainPage.addedUserGenderInTable()).toHaveText(gender);
		await expect(this.mainPage.addedUserNameInTable()).toHaveText(userName);
		await expect(this.mainPage.addedUserYearInTable()).toHaveText(year);
	}

	public async deleteAddedUserFromUsersTableOnMainPage() {
		await this.mainPage.deleteNewUserButton().click();
		await this.mainPage.delYesConfButton().click();
	}

	public async checkThatUserIsDeletedFromUsersTableOnMainPage(
		userName: string
	) {
		await expect(
			this.mainPage.checkRowInTableWithUserName(userName)
		).toHaveCount(0);
	}

	public async checkThatAddressWithValidDataIsAddedToAddressesTableOnMainPage(
		street: string,
		city: string,
		state: string,
		zipCode: string
	) {
		await expect(this.mainPage.addedAddressStreetInTable()).toHaveText(
			street
		);
		await expect(this.mainPage.addedAddressCityInTable()).toHaveText(city);
		await expect(this.mainPage.addedAddressStateInTable()).toHaveText(
			state
		);
		await expect(this.mainPage.addedAddressZipCodeInTable()).toHaveText(
			zipCode
		);
	}

	public async deleteAddedAddressFromAddressesTableOnMainPage() {
		await this.mainPage.deleteNewAddressButton().click();
		await this.mainPage.delYesConfButton().click();
	}

	public async checkThatAddressIsDeletedFromAddressesTableOnMainPage(
		street: string
	) {
		await expect(
			this.mainPage.checkAddressSteetInTable(street)
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
