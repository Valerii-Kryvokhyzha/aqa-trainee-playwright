import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import URLs from '../DTO/pageURLs/websiteURLs';
import UserSteps from '../steps/userSteps';
import BasePageSteps from '../steps/basePageSteps';
import UserValidationMessage from '../DTO/formValidationMessages/userValidationMessages';
import PageTitleText from '../DTO/pageTitles/pageTitleText';
import Color from '../DTO/colors';
import ActionButtonText from '../DTO/buttons/actionButtonText';
import {UserInvalidData} from '../DTO/inputDataValues/userInputData';

let userSteps: UserSteps;
let basePageSteps: BasePageSteps;

test.beforeEach(async () => {
	await driver.start();

	userSteps = new UserSteps();
	basePageSteps = new BasePageSteps(driver.page);

	await basePageSteps.goToPage(URLs.addUserURL);
	await basePageSteps.checkPageURL(URLs.addUserURL);
});

test('Check title properties on "Add User" page', async () => {
	await userSteps.checkThatUserPageTitleHasText(PageTitleText.addUser);
	await userSteps.checkThatUserPageTitleHasTextColor(Color.black);
});

test('Check action buttons properties in "Add User" form', async () => {
	await userSteps.checkThatCreateUserButtonHasProperties(
		ActionButtonText.createBtn,
		Color.blue
	);
	await userSteps.checkThatCancelUserCreationButtonHasProperties(
		ActionButtonText.cancelBtn,
		Color.grey
	);
});

test('Check validation messages in "Add User" form with empty fields', async () => {
	await userSteps.clickCreateButtonInAddUserForm();
	await userSteps.checkThatAllValidationMessagesInAddUserFormHaveText(
		UserValidationMessage.nameEmpty,
		UserValidationMessage.yearEmpty
	);
});

test('Check validation messages in "Add User" form with invalid data', async () => {
	await userSteps.fillAllTextFieldsWithDataInAddUserForm(
		UserInvalidData.nameShort,
		UserInvalidData.yearShort
	);
	await userSteps.clickCreateButtonInAddUserForm();
	await userSteps.checkThatAllValidationMessagesInAddUserFormHaveText(
		UserValidationMessage.nameShort,
		UserValidationMessage.yearIncorrect
	);
});

test.afterEach(async () => {
	driver.close();
});
