import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import MainPage from '../pages/mainPage';
import BaseSteps from './basePageSteps';

let mainPage: MainPage;

export default class MainPageSteps extends BaseSteps {
	public async checkThatUserWithValidDataIsAddedToUsersTableOnMainPage(
		gender: string,
		userName: string,
		year: string
	) {
		mainPage = new MainPage(driver.page); // !!!

		await expect(mainPage.addedUserGenderInTable()).toHaveText(gender);
		await expect(mainPage.addedUserNameInTable()).toHaveText(userName);
		await expect(mainPage.addedUserYearInTable()).toHaveText(year);
	}

	public async deleteAddedUserFromUsersTableOnMainPage() {
		await mainPage.deleteNewUserButton().click();
		await mainPage.delYesConfButton().click();
	}

	public async checkThatUserIsDeletedFromUsersTableOnMainPage(
		gender: string,
		userName: string,
		year: string
	) {
		await expect(mainPage.checkUserGenderInTable(gender)).toHaveCount(0);
		await expect(mainPage.checkUserNameInTable(userName)).toHaveCount(0);
		await expect(mainPage.checkUserYearInTable(year)).toHaveCount(0);
	}

	public async checkThatAddressWithValidDataIsAddedToAddressesTableOnMainPage(
		street: string,
		city: string,
		state: string,
		zipCode: string
	) {
		mainPage = new MainPage(driver.page); // !!!

		await expect(mainPage.addedAddressStreetInTable()).toHaveText(street);
		await expect(mainPage.addedAddressCityInTable()).toHaveText(city);
		await expect(mainPage.addedAddressStateInTable()).toHaveText(state);
		await expect(mainPage.addedAddressZipCodeInTable()).toHaveText(zipCode);
	}

	public async deleteAddedAddressFromAddressesTableOnMainPage() {
		await mainPage.deleteNewAddressButton().click();
		await mainPage.delYesConfButton().click();
	}

	public async checkThatAddressIsDeletedFromAddressesTableOnMainPage(
		street: string,
		city: string,
		state: string,
		zipCode: string
	) {
		await expect(mainPage.checkAddressSteetInTable(street)).toHaveCount(0);
		await expect(mainPage.checkAddressCityInTable(city)).toHaveCount(0);
		await expect(mainPage.checkAddressStateInTable(state)).toHaveCount(0);
		await expect(mainPage.checkAddressZipCodeInTable(zipCode)).toHaveCount(
			0
		);
	}

	public async checkThatMainPageTitleHasText(text: string) {
		mainPage = new MainPage(driver.page); // !!!

		await expect(mainPage.titleText()).toHaveText(`${text}`);
	}
	public async checkThatMainPageTitleHasTextColor(textColor: string) {
		await expect(mainPage.titleText()).toHaveCSS('color', `${textColor}`);
	}

	public async checkThatUsersTableHeaderHasProperties(
		text: string,
		color: string
	) {
		mainPage = new MainPage(driver.page); // !!!

		await expect(mainPage.usersTableHeader()).toHaveText(`${text}`);
		await expect(mainPage.usersTableHeader()).toHaveCSS(
			'color',
			`${color}`
		);
	}
	public async checkThatAddressesTableHeaderHasProperties(
		text: string,
		color: string
	) {
		await expect(mainPage.addressesTableHeader()).toHaveText(`${text}`);
		await expect(mainPage.addressesTableHeader()).toHaveCSS(
			'color',
			`${color}`
		);
	}
}
