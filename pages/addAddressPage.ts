import BasePage from './basePage';

export default class AddAddressPage extends BasePage {
	public titleText() {
		return this.page.locator('//h1[text()="Add Address"]');
	}
	public streetAddressInput() {
		return this.page.getByPlaceholder('Street Address');
	}
	public cityInput() {
		return this.page.getByPlaceholder('City');
	}
	public stateInput() {
		return this.page.getByPlaceholder('State');
	}
	public zipCodeInput() {
		return this.page.getByPlaceholder('Zip Code');
	}

	public createButton() {
		return this.page.locator('//button[@data-id="button-Create"]');
	}
	public cancelButton() {
		return this.page.locator('//a[@data-id="button-Cancel"]');
	}

	public streetAddressValidationMessage() {
		return this.page.locator('//span[@id="inputStreetAddress-error"]');
	}
	public cityValidationMessage() {
		return this.page.locator('//span[@id="inputCity-error"]');
	}
	public stateValidationMessage() {
		return this.page.locator('//span[@id="inputState-error"]');
	}
	public zipCodeValidationMessage() {
		return this.page.locator('//span[@id="inputZipCode-error"]');
	}
}
