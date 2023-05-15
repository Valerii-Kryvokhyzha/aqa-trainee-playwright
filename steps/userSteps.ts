import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import AddUserPage from '../pages/addUserPage';
import UserDto from '../dto/userDto';
import UserValidationMessagesDto from '../dto/userValidationMessagesDto';

export default class UserSteps {
	public addUserPage: AddUserPage;

	constructor() {
		this.addUserPage = new AddUserPage(driver.page);
	}

	public async fillAllTextFieldsWithDataInAddUserForm(user: UserDto) {
		await this.addUserPage.userNameInput().fill(user.name);
		await this.addUserPage.yearOfBirthInput().fill(user.year);
	}

	public async selectValueFromGenderDropdownInAddUserForm(user: UserDto) {
		await this.addUserPage.genderSelector().selectOption(user.gender);
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
		validationMessage: UserValidationMessagesDto
	) {
		await expect(this.addUserPage.userNameValidationMessage()).toHaveText(
			`${validationMessage.nameMessage}`
		);
		await expect(
			this.addUserPage.yearOfBirthValidationMessage()
		).toHaveText(`${validationMessage.yearMessage}`);
	}
}
