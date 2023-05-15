import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import WebsiteURLs from '../provider/pageURLs/websiteURLs';
import UserSteps from '../steps/userSteps';
import BasePageSteps from '../steps/basePageSteps';
import PageTitlesText from '../testData/titlesText/pageTitlesText';
import Colours from '../provider/colours';
import ActionButtonsText from '../testData/buttonsText/actionButtonsText';
import UserValidData from '../testData/inputDataValues/userValidData';
import {
	userEmptyFieldsValidationMessagesDTO,
	userShortValidationMessagesDTO,
} from '../dto/userValidationMessagesDto';
import {userDTO} from '../dto/userDto';

let userSteps: UserSteps;
let basePageSteps: BasePageSteps;

userDTO.createUser(
	UserValidData.selectorDefault,
	UserValidData.nameMIN.substring(0, 2),
	UserValidData.year.substring(0, 3)
);

test.beforeEach(async () => {
	await driver.start();

	userSteps = new UserSteps();
	basePageSteps = new BasePageSteps(driver.page);

	await basePageSteps.goToPage(WebsiteURLs.addUserURL);
	await basePageSteps.checkPageURL(WebsiteURLs.addUserURL);
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
		userEmptyFieldsValidationMessagesDTO
	);
});

test('Check validation messages in "Add User" form with invalid data', async () => {
	await userSteps.fillAllTextFieldsWithDataInAddUserForm(userDTO);
	await userSteps.clickCreateButtonInAddUserForm();
	await userSteps.checkThatAllValidationMessagesInAddUserFormHaveText(
		userShortValidationMessagesDTO
	);
});

test.afterEach(async () => {
	driver.close();
});
