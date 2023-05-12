import BasePage from './basePage';
import ActionButtons from '../identifiers/buttons/actionButtons';
import AddUserForm from '../identifiers/forms/addUserForm';

export default class AddUserPage extends BasePage {
	public titleText() {
		return this.page.locator('//h1[text()="Add User"]');
	}

	public createButton() {
		return this.page.getByTestId(ActionButtons.create);
	}

	public cancelButton() {
		return this.page.getByTestId(ActionButtons.cancel);
	}

	public genderSelector() {
		return this.page.getByTestId(AddUserForm.selector);
	}

	public userNameInput() {
		return this.page.getByTestId(AddUserForm.nameInput);
	}

	public yearOfBirthInput() {
		return this.page.getByTestId(AddUserForm.yearInput);
	}

	public userNameValidationMessage() {
		return this.page.getByTestId(AddUserForm.nameValidationMessage);
	}

	public yearOfBirthValidationMessage() {
		return this.page.getByTestId(AddUserForm.yearValidationMessage);
	}
}
