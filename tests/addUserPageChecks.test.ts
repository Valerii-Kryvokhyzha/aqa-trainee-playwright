import {expect, test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import AddUserPage from '../pages/addUserPage';
import Header from '../base/elements/header';
import MainPage from '../pages/mainPage';
import {UserValidationMessage} from '../base/validationMessages/userValidationMessages';
import {pageTitles, titleProperties} from '../base/pageTextTitles/textTitle';
import {ButtonColor, ButtonText} from '../base/buttons/buttonProperties';
import {
	UserInvalidData,
	UserSelector,
	UserValidData,
} from '../base/inputDataValues/userInputData';

let addUserPage: AddUserPage;
let header: Header;
let mainPage: MainPage;

test.describe('UI Checks for "Add User" page of trainee website', () => {
	test.beforeEach(async () => {
		await driver.driverStart();

		addUserPage = new AddUserPage(driver.page);
		await addUserPage.goToPage(URLs.addUserURL);
		await addUserPage.checkPageURL(URLs.addUserURL);
	});

	test('Display the title', async () => {
		await expect(addUserPage.titleText()).toHaveText(
			`${pageTitles.addUser}`
		);
		await expect(addUserPage.titleText()).toHaveCSS(
			'color',
			`${titleProperties.colorBlack}`
		);
	});

	test('Check button colors', async () => {
		await expect(addUserPage.createButton()).toHaveText(
			`${ButtonText.createBtn}`
		);
		await expect(addUserPage.createButton()).toHaveCSS(
			'background-color',
			`${ButtonColor.createBtn}`
		);

		await expect(addUserPage.cancelButton()).toHaveText(
			`${ButtonText.cancelBtn}`
		);
		await expect(addUserPage.cancelButton()).toHaveCSS(
			'background-color',
			`${ButtonColor.cancelBtn}`
		);
	});

	test('Check validation messages with empty fields', async () => {
		await addUserPage.createButton().click();
		await expect(addUserPage.userNameValidationMessage()).toHaveText(
			`${UserValidationMessage.nameEmpty}`
		);
		await expect(addUserPage.yearOfBirthValidationMessage()).toHaveText(
			`${UserValidationMessage.yearEmpty}`
		);
	});

	test('Check validation messages after filling the fields with invalid data', async () => {
		await addUserPage.userNameInput().fill(`${UserInvalidData.nameMIN}`);
		await addUserPage.yearOfBirthInput().fill(`${UserInvalidData.yearMIN}`);
		await addUserPage.createButton().press('Enter');

		await expect(addUserPage.userNameValidationMessage()).toHaveText(
			`${UserValidationMessage.nameShort}`
		);
		await expect(addUserPage.yearOfBirthValidationMessage()).toHaveText(
			`${UserValidationMessage.yearIncorrect}`
		);
	});

	test.afterEach(async () => {
		driver.driverClose();
	});
});

test.describe('User functionality on "Add User" page', () => {
	test.beforeEach(async () => {
		await driver.driverStart();

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
		await header.clickHomeBtn();

		await mainPage.checkPageURL(URLs.homeURL);
		await mainPage.editNewUserButton().isVisible();
		await mainPage.deleteNewUserButton().isVisible();
	});

	test.afterEach(async () => {
		// add checks for Invisibility of user
		await mainPage.deleteNewUserButton().click();
		await mainPage.delYesConfButton().click();

		driver.driverClose();
	});
});
