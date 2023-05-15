import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import EditUserPage from '../pages/editUserPage';
import UserDto from '../dto/userDto';

export default class EditUserSteps {
	public editUserPage: EditUserPage;

	constructor() {
		this.editUserPage = new EditUserPage(driver.page);
	}

	public async fillAllTextFieldsWithDataInEditUserForm(user: UserDto) {
		await this.editUserPage.userNameInput().fill(user.name);
		await this.editUserPage.yearOfBirthInput().fill(user.year);
	}

	public async selectValueFromGenderDropdownInAddUserForm(user: UserDto) {
		await this.editUserPage.genderSelector().selectOption(user.gender);
	}

	public async clickUpdateButtonInEditUserForm() {
		await this.editUserPage.updateButton().click();
	}

	public async checkThatEditUserPageTitleHasText(text: string) {
		await expect(this.editUserPage.titleText()).toHaveText(`${text}`);
	}

	public async checkThatEditUserPageTitleHasTextColor(textColor: string) {
		await expect(this.editUserPage.titleText()).toHaveCSS(
			'color',
			`${textColor}`
		);
	}

	public async checkThatUpdateUserButtonHasProperties(
		text: string,
		backgroundColor: string
	) {
		await expect(this.editUserPage.updateButton()).toHaveText(`${text}`);
		await expect(this.editUserPage.updateButton()).toHaveCSS(
			'background-color',
			`${backgroundColor}`
		);
	}

	public async checkThatCancelUserEditingButtonHasProperties(
		text: string,
		backgroundColor: string
	) {
		await expect(this.editUserPage.cancelButton()).toHaveText(`${text}`);
		await expect(this.editUserPage.cancelButton()).toHaveCSS(
			'background-color',
			`${backgroundColor}`
		);
	}
}
