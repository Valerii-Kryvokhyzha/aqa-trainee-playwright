import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import URLs from '../DTO/pageURLs/websiteURLs';
import UserSteps from '../steps/userSteps';
import BasePageSteps from '../steps/basePageSteps';
import PageTitleText from '../DTO/pageTitles/pageTitleText';
import Color from '../DTO/colors';
import ActionButtonText from '../DTO/buttons/actionButtonText';
import {
	UserSelector,
	UserValidData,
} from '../DTO/inputDataValues/userInputData';
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
		UserSelector.male
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
		PageTitleText.deleteUser
	);
	await deletePageSteps.checkThatDeletePageTitleHasTextColor(Color.black);

	await deletePageSteps.checkThatYesButtonHasProperties(
		ActionButtonText.yesBtn,
		Color.red
	);
	await userSteps.checkThatCancelUserCreationButtonHasProperties(
		ActionButtonText.cancelBtn,
		Color.grey
	);
});

test.afterEach(async () => {
	await deletePageSteps.clickYesButtonInDeleteForm();
	driver.close();
});
