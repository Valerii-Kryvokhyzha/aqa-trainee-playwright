import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import UserSteps from '../steps/userSteps';
import MainPageSteps from '../steps/mainPageSteps';
import {
	UserValidData,
	UserSelector,
} from '../base/inputDataValues/userInputData';
import BasePageSteps from '../steps/basePageSteps';

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
		UserSelector.male
	);
	await userSteps.fillAllTextFieldsWithDataInAddUserForm(
		UserValidData.nameMIN,
		UserValidData.yearMIN
	);
	await userSteps.clickCreateButtonInAddUserForm();
	await basePageSteps.checkPageURL(URLs.homeURL);
	await mainPageSteps.checkThatUserWithValidDataIsAddedToUsersTableOnMainPage(
		UserSelector.male,
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
