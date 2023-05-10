import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import URLs from '../DTO/pageURLs/websiteURLs';
import UserSteps from '../steps/userSteps';
import MainPageSteps from '../steps/mainPageSteps';
import BasePageSteps from '../steps/basePageSteps';
import {
	UserSelector,
	UserValidData,
} from '../DTO/inputDataValues/userInputData';
import EditUserSteps from '../steps/editUserSteps';

let userSteps: UserSteps;
let mainPageSteps: MainPageSteps;
let basePageSteps: BasePageSteps;
let editUserSteps: EditUserSteps;

test.beforeEach(async () => {
	await driver.start();

	userSteps = new UserSteps();
	mainPageSteps = new MainPageSteps();
	editUserSteps = new EditUserSteps();
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
});

test('Check that new User is edited using valid data', async () => {
	await mainPageSteps.clickEditNewUserButtonInUsersTable();
	await editUserSteps.selectValueFromGenderDropdownInAddUserForm(
		UserSelector.default
	);
	await editUserSteps.fillAllTextFieldsWithDataInEditUserForm(
		UserValidData.nameMAX,
		UserValidData.yearMAX
	);
	await editUserSteps.clickUpdateButtonInEditUserForm();
	await basePageSteps.checkPageURL(URLs.homeURL);
	await mainPageSteps.checkThatUserWithValidDataIsAddedToUsersTableOnMainPage(
		UserSelector.default,
		UserValidData.nameMAX,
		UserValidData.yearMAX
	);
});

test.afterEach(async () => {
	await mainPageSteps.deleteAddedUserFromUsersTableOnMainPage();
	await mainPageSteps.checkThatUserIsDeletedFromUsersTableOnMainPage(
		UserValidData.nameMAX
	);

	driver.close();
});
