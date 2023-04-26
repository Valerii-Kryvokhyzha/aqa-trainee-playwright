import {expect, test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import AddUserPage from '../pages/addUserPage';
import {UserValidationMessage} from '../base/validationMessages/userValidationMessages';
import {pageTitles, titleProperties} from '../base/pageTextTitles/textTitle';
import {ButtonColor, ButtonText} from '../base/buttons/buttonProperties';
import {UserInvalidData} from '../base/inputDataValues/userInputData';

let addUserPage: AddUserPage;

test.beforeEach(async () => {
	await driver.start();

	addUserPage = new AddUserPage(driver.page);
	await addUserPage.goToPage(URLs.addUserURL);
	await addUserPage.checkPageURL(URLs.addUserURL);
});

test('Check that title is displayed on "Add User" page', async () => {
	await expect(addUserPage.titleText()).toHaveText(`${pageTitles.addUser}`);
	await expect(addUserPage.titleText()).toHaveCSS(
		'color',
		`${titleProperties.colorBlack}`
	);
});

test('Check action buttons properties in "Add User" form', async () => {
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

test('Check validation messages in "Add User" form with empty fields', async () => {
	await addUserPage.createButton().click();
	await expect(addUserPage.userNameValidationMessage()).toHaveText(
		`${UserValidationMessage.nameEmpty}`
	);
	await expect(addUserPage.yearOfBirthValidationMessage()).toHaveText(
		`${UserValidationMessage.yearEmpty}`
	);
});

test('Check validation messages in "Add User" form with invalid data', async () => {
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
	driver.close();
});
