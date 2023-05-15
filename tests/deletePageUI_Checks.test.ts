import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import URLs from '../provider/pageURLs/websiteURLsPath';
import UserSteps from '../steps/userSteps';
import BasePageSteps from '../steps/basePageSteps';
import PageTitlesText from '../testData/titlesText/pageTitleText';
import Colours from '../provider/colours';
import ActionButtonsText from '../testData/buttonsText/actionButtonText';
import UserValidData from '../testData/inputDataValues/userInputData';
import DeleteSteps from '../steps/deleteConfirmationSteps';
import MainPageSteps from '../steps/mainPageSteps';
import {userDTO} from '../dto/userDto';
import {sessionValue} from '../runtimeVariables/sessionValue';

let deletePageSteps: DeleteSteps;
let userSteps: UserSteps;
let basePageSteps: BasePageSteps;
let mainPageSteps: MainPageSteps;

test.beforeEach(async () => {
	await driver.start();

	deletePageSteps = new DeleteSteps();
	userSteps = new UserSteps();
	mainPageSteps = new MainPageSteps();
	basePageSteps = new BasePageSteps(driver.page);

	await basePageSteps.goToPage(URLs.addUserURL);
	await basePageSteps.checkPageURL(URLs.addUserURL);

	userDTO.createUser(
		UserValidData.selectorFemale,
		UserValidData.nameMIN + sessionValue.stringValue,
		UserValidData.year
	);

	await userSteps.selectValueFromGenderDropdownInAddUserForm(userDTO);
	await userSteps.fillAllTextFieldsWithDataInAddUserForm(userDTO);
	await userSteps.clickCreateButtonInAddUserForm();
	await basePageSteps.checkPageURL(URLs.homeURL);
	await mainPageSteps.clickDeleteUserButtonInUsersTable(userDTO);
});

test('Check that title has properties on "Delete User" page', async () => {
	await deletePageSteps.checkThatDeletePageTitleHasText(
		PageTitlesText.deleteUser
	);
	await deletePageSteps.checkThatDeletePageTitleHasTextColor(Colours.black);
});

test('Check that action buttons have properties on "Delete User" page', async () => {
	await deletePageSteps.checkThatYesButtonHasProperties(
		ActionButtonsText.yesBtn,
		Colours.red
	);
	await userSteps.checkThatCancelUserCreationButtonHasProperties(
		ActionButtonsText.cancelBtn,
		Colours.grey
	);
});

test.afterEach(async () => {
	await deletePageSteps.clickYesButtonInDeleteForm();

	driver.close();
});
