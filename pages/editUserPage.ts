import ActionButton from '../identifiers/butttons/actionButton';
import EditUserForm from '../identifiers/forms/editUserForm';
import PageTitle from '../identifiers/pageTitle';
import BasePage from './basePage';

export default class EditUserPage extends BasePage {
	public titleText() {
		return this.page.locator(PageTitle.editUserPage);
	}

	public updateButton() {
		return this.page.getByTestId(ActionButton.update);
	}

	public cancelButton() {
		return this.page.getByTestId(ActionButton.cancel);
	}

	public chooseFileButton() {
		return this.page.locator(EditUserForm.chooseFileButton);
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
