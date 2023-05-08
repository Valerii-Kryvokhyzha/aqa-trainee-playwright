import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import AddUserPage from '../pages/addUserPage';

export default class UserSteps {
	public addUserPage: AddUserPage;

	constructor() {
		this.addUserPage = new AddUserPage(driver.page);
	}

	public async fillAllTextFieldsWithDataInAddUserForm(
		name: string,
		year: string
	) {
		await this.addUserPage.userNameInput().fill(name);
		await this.addUserPage.yearOfBirthInput().fill(year);
	}

	public async selectValueFromGenderDropdownInAddUserForm(
		selectorValue: string
	) {
		await this.addUserPage.genderSelector().selectOption(selectorValue);
	}

	public async clickCreateButtonInAddUserForm() {
		await this.addUserPage.createButton().click();
	}

	public async checkThatUserPageTitleHasText(text: string) {
		await expect(this.addUserPage.titleText()).toHaveText(`${text}`);
	}
	public async checkThatUserPageTitleHasTextColor(textColor: string) {
		await expect(this.addUserPage.titleText()).toHaveCSS(
			'color',
			`${textColor}`
		);
	}

	public async checkThatCreateUserButtonHasProperties(
		text: string,
		backgroundColor: string
	) {
		await expect(this.addUserPage.createButton()).toHaveText(`${text}`);
		await expect(this.addUserPage.createButton()).toHaveCSS(
			'background-color',
			`${backgroundColor}`
		);
	}

	public async checkThatCancelUserCreationButtonHasProperties(
		text: string,
		backgroundColor: string
	) {
		await expect(this.addUserPage.cancelButton()).toHaveText(`${text}`);
		await expect(this.addUserPage.cancelButton()).toHaveCSS(
			'background-color',
			`${backgroundColor}`
		);
	}

	public async checkThatAllValidationMessagesInAddUserFormHaveText(
		nameValidationMessage: string,
		yearValidationMessage: string
	) {
		await expect(this.addUserPage.userNameValidationMessage()).toHaveText(
			`${nameValidationMessage}`
		);
		await expect(
			this.addUserPage.yearOfBirthValidationMessage()
		).toHaveText(`${yearValidationMessage}`);
	}
}
