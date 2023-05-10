import BasePage from './basePage';
import PageTitle from '../identifiers/pageTitle';
import ActionButton from '../identifiers/butttons/actionButton';
import AddAddressForm from '../identifiers/forms/addAddressForm';

export default class AddAddressPage extends BasePage {
	public titleText() {
		return this.page.locator(PageTitle.addressPage);
	}

	public streetAddressInput() {
		return this.page.getByTestId(AddAddressForm.streetInput);
	}

	public cityInput() {
		return this.page.getByTestId(AddAddressForm.cityInput);
	}

	public stateInput() {
		return this.page.getByTestId(AddAddressForm.stateInput);
	}

	public zipCodeInput() {
		return this.page.getByTestId(AddAddressForm.zipCodeInput);
	}

	public createButton() {
		return this.page.getByTestId(ActionButton.create);
	}

	public cancelButton() {
		return this.page.getByTestId(ActionButton.cancel);
	}

	public streetAddressValidationMessage() {
		return this.page.getByTestId(AddAddressForm.streetValidationMessage);
	}

	public cityValidationMessage() {
		return this.page.getByTestId(AddAddressForm.cityValidationMessage);
	}

	public stateValidationMessage() {
		return this.page.getByTestId(AddAddressForm.stateValidationMessage);
	}

	public zipCodeValidationMessage() {
		return this.page.getByTestId(AddAddressForm.zipCodeValidationMessage);
	}
}
