import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import URLs from '../provider/pageURLs/websiteURLsProvider';
import UserSteps from '../steps/userSteps';
import BasePageSteps from '../steps/basePageSteps';
import PageTitlesText from '../testData/titlesText/pageTitleText';
import Colours from '../provider/colours';
import ActionButtonsText from '../testData/buttonsText/actionButtonText';
import UserValidData from '../testData/inputDataValues/userInputData';
import DeleteSteps from '../steps/deleteConfirmationSteps';
import MainPageSteps from '../steps/mainPageSteps';

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

	await userSteps.selectValueFromGenderDropdownInAddUserForm(
		UserValidData.selectorMale
	);
	await userSteps.fillAllTextFieldsWithDataInAddUserForm(
		UserValidData.nameMIN,
		UserValidData.yearMIN
	);
	await userSteps.clickCreateButtonInAddUserForm();
	await basePageSteps.checkPageURL(URLs.homeURL);
	await mainPageSteps.clickDeleteAddedUserButtonInUsersTable();
});

test('Check title and action buttons properties on "Delete User" page', async () => {
	await deletePageSteps.checkThatDeletePageTitleHasText(
		PageTitlesText.deleteUser
	);
	await deletePageSteps.checkThatDeletePageTitleHasTextColor(Colours.black);
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
