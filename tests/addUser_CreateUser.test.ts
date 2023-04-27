import {expect, test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import AddUserPage from '../pages/addUserPage';
import MainPage from '../pages/mainPage';
import {
	UserSelector,
	UserValidData,
} from '../base/inputDataValues/userInputData';

let addUserPage: AddUserPage;
let mainPage: MainPage;

test.beforeEach(async () => {
	await driver.start();

	addUserPage = new AddUserPage(driver.page);
	await addUserPage.goToPage(URLs.addUserURL);
	await addUserPage.checkPageURL(URLs.addUserURL);

	mainPage = new MainPage(driver.page);
});

test('Check that new User is created using valid data on "Add User" page', async () => {
	await addUserPage.genderSelector().selectOption(`${UserSelector.male}`);
	await addUserPage.userNameInput().fill(`${UserValidData.nameMIN}`);
	await addUserPage.yearOfBirthInput().fill(`${UserValidData.yearMIN}`);

	await addUserPage.createButton().press('Enter');

	await mainPage.checkPageURL(URLs.homeURL);

	await expect(mainPage.addedUserNameInTable()).toHaveText(
		UserValidData.nameMIN
	);
	await expect(mainPage.addedUserYearInTable()).toHaveText(
		UserValidData.yearMIN
	);
	await expect(mainPage.addedUserGenderInTable()).toHaveText(
		UserSelector.male
	);

	await expect(
		mainPage.checkUserNameInTable(UserValidData.nameMIN)
	).toBeVisible();
});

test.afterEach(async () => {
	await mainPage.deleteNewUserButton().click();
	await mainPage.delYesConfButton().click();

	await expect(
		mainPage.checkUserNameInTable(UserValidData.nameMIN)
	).toHaveCount(0);

	driver.close();
});
