import {expect, test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import AddUserPage from '../pages/addUserPage';
import Header from '../base/elements/header';
import MainPage from '../pages/mainPage';
import {
	UserSelector,
	UserValidData,
} from '../base/inputDataValues/userInputData';
import {tableRows} from '../base/mainPageTableRows/mainPageTableRows';

let addUserPage: AddUserPage;
let header: Header;
let mainPage: MainPage;

test.beforeEach(async () => {
	await driver.start();

	addUserPage = new AddUserPage(driver.page);
	await addUserPage.goToPage(URLs.addUserURL);
	await addUserPage.checkPageURL(URLs.addUserURL);

	header = new Header(driver.page);
	mainPage = new MainPage(driver.page);
});

test('Create User with valid data', async () => {
	await addUserPage.genderSelector().selectOption(`${UserSelector.male}`);
	await addUserPage.userNameInput().fill(`${UserValidData.nameMIN}`);
	await addUserPage.yearOfBirthInput().fill(`${UserValidData.yearMIN}`);
	await addUserPage.createButton().press('Enter');

	await mainPage.checkPageURL(URLs.homeURL);
	await mainPage.editNewUserButton().isVisible();
	await mainPage.deleteNewUserButton().isVisible();
	await expect(mainPage.usersTableRow()).toHaveCount(tableRows.addedAcc);
});

test.afterEach(async () => {
	await mainPage.deleteNewUserButton().click();
	await mainPage.delYesConfButton().click();
	await expect(mainPage.addedUserTableRow()).toBeHidden();
	await expect(mainPage.usersTableRow()).toHaveCount(tableRows.standard);

	driver.close();
});
