import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import URLs from '../provider/pageURLs/websiteURLsProvider';
import UserSteps from '../steps/userSteps';
import BasePageSteps from '../steps/basePageSteps';
import UserValidationMessages from '../testData/formValidationMessages/userValidationMessages';
import PageTitlesText from '../testData/titlesText/pageTitleText';
import Colours from '../provider/colours';
import ActionButtonsText from '../testData/buttonsText/actionButtonText';
import {UserInvalidData} from '../testData/inputDataValues/userInputData';

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
	await userSteps.checkThatUserPageTitleHasText(PageTitlesText.addUser);
	await userSteps.checkThatUserPageTitleHasTextColor(Colours.black);
});

test('Check action buttons properties in "Add User" form', async () => {
	await userSteps.checkThatCreateUserButtonHasProperties(
		ActionButtonsText.createBtn,
		Colours.blue
	);
	await userSteps.checkThatCancelUserCreationButtonHasProperties(
		ActionButtonsText.cancelBtn,
		Colours.grey
	);
});

test('Check validation messages in "Add User" form with empty fields', async () => {
	await userSteps.clickCreateButtonInAddUserForm();
	await userSteps.checkThatAllValidationMessagesInAddUserFormHaveText(
		UserValidationMessages.nameEmpty,
		UserValidationMessages.yearEmpty
	);
});

test('Check validation messages in "Add User" form with invalid data', async () => {
	await userSteps.fillAllTextFieldsWithDataInAddUserForm(
		UserInvalidData.nameShort,
		UserInvalidData.yearShort
	);
	await userSteps.clickCreateButtonInAddUserForm();
	await userSteps.checkThatAllValidationMessagesInAddUserFormHaveText(
		UserValidationMessages.nameShort,
		UserValidationMessages.yearIncorrect
	);
});

test.afterEach(async () => {
	driver.close();
});
