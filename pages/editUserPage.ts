import BasePage from './basePage';
import EditUserForm from '../identifiers/forms/editUserForm';
import ActionButtons from '../identifiers/buttons/actionButtons';

export default class EditUserPage extends BasePage {
	public titleText() {
		return this.page.locator('//h1[text()="Edit User"]');
	}

	public updateButton() {
		return this.page.getByTestId(ActionButtons.update);
	}

	public cancelButton() {
		return this.page.getByTestId(ActionButtons.cancel);
	}

	public chooseFileButton() {
		return this.page.locator('//input[@id="ProfileImage"]');
	}

	public genderSelector() {
		return this.page.getByTestId(EditUserForm.selector);
	}

	public userNameInput() {
		return this.page.getByTestId(EditUserForm.nameInput);
	}

	public yearOfBirthInput() {
		return this.page.getByTestId(EditUserForm.yearInput);
	}
}
