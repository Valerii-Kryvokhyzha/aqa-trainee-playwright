import BasePage from './basePage';
import PageTitle from '../identifiers/pageTitle';
import ActionButton from '../identifiers/butttons/actionButton';
import AddUserForm from '../identifiers/forms/addUserForm';

export default class AddUserPage extends BasePage {
	public titleText() {
		return this.page.locator(PageTitle.userPage);
	}

	public createButton() {
		return this.page.getByTestId(ActionButton.create);
	}

	public cancelButton() {
		return this.page.getByTestId(ActionButton.cancel);
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
