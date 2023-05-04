import BasePage from './basePage';

export default class AddUserPage extends BasePage {
	public titleText() {
		return this.page.locator('//h1[text()="Add User"]');
	}

	public createButton() {
		return this.page.locator('//button[@data-id="button-Create"]');
	}
	public cancelButton() {
		return this.page.locator('//a[@data-id="button-Cancel"]');
	}

	public userNameInput() {
		return this.page.getByPlaceholder('User Name');
	}
	public userNameValidationMessage() {
		return this.page.locator('//span[@id="inputUserName-error"]');
	}

	public yearOfBirthInput() {
		return this.page.getByPlaceholder('Year of Birth');
	}
	public yearOfBirthValidationMessage() {
		return this.page.locator('//span[@id="inputYearOfBirth-error"]');
	}

	public genderSelector() {
		return this.page.locator('//select[@id="selectGender"]');
	}
}
