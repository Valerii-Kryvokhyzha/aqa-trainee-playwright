import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import {
	UserSelector,
	UserValidData,
} from '../base/inputDataValues/userInputData';
import UserSteps from '../steps/userSteps';
import MainPageSteps from '../steps/MainPageSteps';

// import {userSteps} from '../steps/userSteps';

let userSteps: UserSteps;
let mainPageSteps: MainPageSteps;

test.beforeEach(async () => {
	await driver.start();

	userSteps = new UserSteps(driver.page);
	mainPageSteps = new MainPageSteps(driver.page);

	await userSteps.goToPage(URLs.addUserURL);
	await userSteps.checkPageURL(URLs.addUserURL);
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
	await mainPageSteps.checkPageURL(URLs.homeURL);

	await mainPageSteps.checkThatUserWithValidDataIsAddedToUsersTableOnMainPage(
		UserSelector.male,
		UserValidData.nameMIN,
		UserValidData.yearMIN
	);
});

test.afterEach(async () => {
	await mainPageSteps.deleteAddedUserFromUsersTableOnMainPage();

	await mainPageSteps.checkThatUserIsDeletedFromUsersTableOnMainPage(
		UserSelector.male,
		UserValidData.nameMIN,
		UserValidData.yearMIN
	);

	driver.close();
});
