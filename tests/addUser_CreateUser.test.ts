import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import WebsiteURLs from '../provider/pageURLs/websiteURLs';
import UserSteps from '../steps/userSteps';
import MainPageSteps from '../steps/mainPageSteps';
import BasePageSteps from '../steps/basePageSteps';
import {defaultUserWithValidData} from '../dto/userDto';

let userSteps: UserSteps;
let mainPageSteps: MainPageSteps;
let basePageSteps: BasePageSteps;

test.beforeEach(async () => {
	await driver.start();

	userSteps = new UserSteps();
	mainPageSteps = new MainPageSteps();
	basePageSteps = new BasePageSteps(driver.page);

	await basePageSteps.goToPage(WebsiteURLs.addUserURL);
	await basePageSteps.checkPageURL(WebsiteURLs.addUserURL);
});

test('Check that new User is created using valid data on "Add User" page', async () => {
	await userSteps.selectValueFromGenderDropdownInAddUserForm(
		defaultUserWithValidData
	);
	await userSteps.fillAllTextFieldsWithDataInAddUserForm(
		defaultUserWithValidData
	);
	await userSteps.clickCreateButtonInAddUserForm();
	await basePageSteps.checkPageURL(WebsiteURLs.homeURL);
	await mainPageSteps.checkThatUserWithValidDataIsAddedToUsersTableOnMainPage(
		defaultUserWithValidData
	);
});

test.afterEach(async () => {
	await mainPageSteps.deleteAddedUserFromUsersTableOnMainPage();
	await mainPageSteps.checkThatUserIsDeletedFromUsersTableOnMainPage(
		defaultUserWithValidData
	);

	driver.close();
});
