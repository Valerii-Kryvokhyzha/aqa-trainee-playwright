import BasePage from './basePage';
import ActionButtons from '../identifiers/buttons/actionButtons';
import AddAddressForm from '../identifiers/forms/addAddressForm';

export default class AddAddressPage extends BasePage {
	public titleText() {
		return this.page.locator('//h1[text()="Add Address"]');
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
		return this.page.getByTestId(ActionButtons.create);
	}

	public cancelButton() {
		return this.page.getByTestId(ActionButtons.cancel);
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
