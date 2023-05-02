import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import AddUserPage from '../pages/addUserPage';
import BasePageSteps from './basePageSteps';

let addUserPage: AddUserPage;

export default class UserSteps extends BasePageSteps {
	public async fillAllTextFieldsWithDataInAddUserForm(
		userName: string,
		year: string
	) {
		addUserPage = new AddUserPage(driver.page); // !!!

		await addUserPage.userNameInput().fill(userName);
		await addUserPage.yearOfBirthInput().fill(year);
	}

	public async selectValueFromGenderDropdownInAddUserForm(
		selectorValue: string
	) {
		addUserPage = new AddUserPage(driver.page); // !!!

		await addUserPage.genderSelector().selectOption(selectorValue);
	}
	public async clickCreateButtonInAddUserForm() {
		addUserPage = new AddUserPage(driver.page); // !!!

		await addUserPage.createButton().click();
	}

	public async checkThatUserPageTitleHasText(text: string) {
		addUserPage = new AddUserPage(driver.page); // !!!

		await expect(addUserPage.titleText()).toHaveText(`${text}`);
	}
	public async checkThatUserPageTitleHasTextColor(textColor: string) {
		await expect(addUserPage.titleText()).toHaveCSS(
			'color',
			`${textColor}`
		);
	}

	public async checkThatCreateUserButtonHasProperties(
		text: string,
		backgroundColor: string
	) {
		addUserPage = new AddUserPage(driver.page); // !!!

		await expect(addUserPage.createButton()).toHaveText(`${text}`);
		await expect(addUserPage.createButton()).toHaveCSS(
			'background-color',
			`${backgroundColor}`
		);
	}

	public async checkThatCancelUserCreationButtonHasProperties(
		text: string,
		backgroundColor: string
	) {
		await expect(addUserPage.cancelButton()).toHaveText(`${text}`);
		await expect(addUserPage.cancelButton()).toHaveCSS(
			'background-color',
			`${backgroundColor}`
		);
	}

	public async checkThatAllValidationMessagesInAdduserFormHaveText(
		nameValidationMessage: string,
		yearValidationMessage: string
	) {
		await expect(addUserPage.userNameValidationMessage()).toHaveText(
			`${nameValidationMessage}`
		);
		await expect(addUserPage.yearOfBirthValidationMessage()).toHaveText(
			`${yearValidationMessage}`
		);
	}
}

const userSteps = new UserSteps(driver.page);
export {userSteps};
