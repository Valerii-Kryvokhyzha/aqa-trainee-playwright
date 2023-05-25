import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import WebsiteURLs from '../provider/pageURLs/websiteURLs';
import UserSteps from '../steps/userSteps';
import MainPageSteps from '../steps/mainPageSteps';
import BasePageSteps from '../steps/basePageSteps';
import UserValidData from '../testData/inputDataValues/userValidData';
import EditUserSteps from '../steps/editUserSteps';
import {defaultUserWithValidData, userDTO} from '../dto/userDto';

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

	await basePageSteps.goToPage(WebsiteURLs.addUserURL);
	await basePageSteps.checkPageURL(WebsiteURLs.addUserURL);

	await userSteps.selectValueFromGenderDropdownInAddUserForm(
		defaultUserWithValidData
	);
	await userSteps.fillAllTextFieldsWithDataInAddUserForm(
		defaultUserWithValidData
	);
	await userSteps.clickCreateButtonInAddUserForm();
	await basePageSteps.checkPageURL(WebsiteURLs.homeURL);
});

test('Check that new User is edited using valid data', async () => {
	test.slow();
	userDTO.gender = UserValidData.selectorFemale;
	userDTO.name = UserValidData.nameMIN;
	userDTO.year = UserValidData.year;

	await mainPageSteps.clickEditNewUserButtonInUsersTable();
	await editUserSteps.selectValueFromGenderDropdownInAddUserForm(userDTO);
	await editUserSteps.fillAllTextFieldsWithDataInEditUserForm(userDTO);
	await editUserSteps.clickUpdateButtonInEditUserForm();
	await basePageSteps.checkPageURL(WebsiteURLs.homeURL);
	await mainPageSteps.checkThatUserWithValidDataIsAddedToUsersTableOnMainPage(
		userDTO
	);
});

test.afterEach(async () => {
	await mainPageSteps.deleteAddedUserFromUsersTableOnMainPage();
	await mainPageSteps.checkThatUserIsDeletedFromUsersTableOnMainPage(userDTO);

	driver.close();
});
