import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import {UserValidationMessage} from '../base/validationMessages/userValidationMessages';
import {pageTitles, titleProperties} from '../base/pageTextTitles/textTitle';
import {ButtonColor, ButtonText} from '../base/buttons/buttonProperties';
import {UserInvalidData} from '../base/inputDataValues/userInputData';
import UserSteps from '../steps/userSteps';
import BasePageSteps from '../steps/basePageSteps';

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
	await userSteps.checkThatUserPageTitleHasText(pageTitles.addUser);
	await userSteps.checkThatUserPageTitleHasTextColor(
		titleProperties.colorBlack
	);
});

test('Check action buttons properties in "Add User" form', async () => {
	await userSteps.checkThatCreateUserButtonHasProperties(
		ButtonText.createBtn,
		ButtonColor.createBtn
	);
	await userSteps.checkThatCancelUserCreationButtonHasProperties(
		ButtonText.cancelBtn,
		ButtonColor.cancelBtn
	);
});

test('Check validation messages in "Add User" form with empty fields', async () => {
	await userSteps.clickCreateButtonInAddUserForm();
	await userSteps.checkThatAllValidationMessagesInAdduserFormHaveText(
		UserValidationMessage.nameEmpty,
		UserValidationMessage.yearEmpty
	);
});

test('Check validation messages in "Add User" form with invalid data', async () => {
	await userSteps.fillAllTextFieldsWithDataInAddUserForm(
		UserInvalidData.nameMIN,
		UserInvalidData.yearMIN
	);
	await userSteps.clickCreateButtonInAddUserForm();
	await userSteps.checkThatAllValidationMessagesInAdduserFormHaveText(
		UserValidationMessage.nameShort,
		UserValidationMessage.yearIncorrect
	);
});

test.afterEach(async () => {
	driver.close();
});
