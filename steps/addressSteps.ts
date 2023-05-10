import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import AddAddressPage from '../pages/addAddressPage';

export default class AddressSteps {
	public addAddressPage: AddAddressPage;

	constructor() {
		this.addAddressPage = new AddAddressPage(driver.page);
	}

	public async fillAllTextFieldsWithDataInAddAddressForm(
		street: string,
		city: string,
		state: string,
		zipCode: string
	) {
		await this.addAddressPage.streetAddressInput().fill(street);
		await this.addAddressPage.cityInput().fill(city);
		await this.addAddressPage.stateInput().fill(state);
		await this.addAddressPage.zipCodeInput().fill(zipCode);
	}

	public async clickCreateButtonInAddAddressForm() {
		await this.addAddressPage.createButton().click();
	}

	public async checkThatAddressPageTitleHasText(text: string) {
		await expect(this.addAddressPage.titleText()).toHaveText(`${text}`);
	}

	public async checkThatAddressPageTitleHasTextColor(textColor: string) {
		await expect(this.addAddressPage.titleText()).toHaveCSS(
			'color',
			`${textColor}`
		);
	}

	public async checkThatCreateAddressButtonHasProperties(
		text: string,
		backgroundColor: string
	) {
		await expect(this.addAddressPage.createButton()).toHaveText(`${text}`);
		await expect(this.addAddressPage.createButton()).toHaveCSS(
			'background-color',
			`${backgroundColor}`
		);
	}

	public async checkThatCancelAddressCreationButtonHasProperties(
		text: string,
		backgroundColor: string
	) {
		await expect(this.addAddressPage.cancelButton()).toHaveText(`${text}`);
		await expect(this.addAddressPage.cancelButton()).toHaveCSS(
			'background-color',
			`${backgroundColor}`
		);
	}

	public async checkThatAllValidationMessagesInAddAddressFormHaveText(
		streetValidationMessage: string,
		cityValidationMessage: string,
		stateValidationMessage: string,
		zipCodeValidationMessage: string
	) {
		await expect(
			this.addAddressPage.streetAddressValidationMessage()
		).toHaveText(`${streetValidationMessage}`);

		await expect(this.addAddressPage.cityValidationMessage()).toHaveText(
			`${cityValidationMessage}`
		);
		await expect(this.addAddressPage.stateValidationMessage()).toHaveText(
			`${stateValidationMessage}`
		);
		await expect(this.addAddressPage.zipCodeValidationMessage()).toHaveText(
			`${zipCodeValidationMessage}`
		);
	}
}
