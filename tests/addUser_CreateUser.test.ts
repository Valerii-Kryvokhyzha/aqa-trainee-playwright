import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import URLs from '../provider/pageURLs/websiteURLsProvider';
import UserSteps from '../steps/userSteps';
import MainPageSteps from '../steps/mainPageSteps';
import BasePageSteps from '../steps/basePageSteps';
import UserValidData from '../testData/inputDataValues/userInputData';

let userSteps: UserSteps;
let mainPageSteps: MainPageSteps;
let basePageSteps: BasePageSteps;

test.beforeEach(async () => {
	await driver.start();

	userSteps = new UserSteps();
	mainPageSteps = new MainPageSteps();
	basePageSteps = new BasePageSteps(driver.page);

	await basePageSteps.goToPage(URLs.addUserURL);
	await basePageSteps.checkPageURL(URLs.addUserURL);
});

test('Check that new User is created using valid data on "Add User" page', async () => {
	await userSteps.selectValueFromGenderDropdownInAddUserForm(
		UserValidData.selectorMale
	);
	await userSteps.fillAllTextFieldsWithDataInAddUserForm(
		UserValidData.nameMIN,
		UserValidData.yearMIN
	);
	await userSteps.clickCreateButtonInAddUserForm();
	await basePageSteps.checkPageURL(URLs.homeURL);
	await mainPageSteps.checkThatUserWithValidDataIsAddedToUsersTableOnMainPage(
		UserValidData.selectorMale,
		UserValidData.nameMIN,
		UserValidData.yearMIN
	);
});

test.afterEach(async () => {
	await mainPageSteps.deleteAddedUserFromUsersTableOnMainPage();
	await mainPageSteps.checkThatUserIsDeletedFromUsersTableOnMainPage(
		UserValidData.nameMIN
	);

	driver.close();
});
