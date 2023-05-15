import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import AddAddressPage from '../pages/addAddressPage';
import AddressDto from '../dto/addressDto';
import AddressValidationMessagesDto from '../dto/addressValidationMessagesDto';

export default class AddressSteps {
	public addAddressPage: AddAddressPage;

	constructor() {
		this.addAddressPage = new AddAddressPage(driver.page);
	}

	public async fillAllTextFieldsWithDataInAddAddressForm(
		address: AddressDto
	) {
		await this.addAddressPage.streetAddressInput().fill(address.street);
		await this.addAddressPage.cityInput().fill(address.city);
		await this.addAddressPage.stateInput().fill(address.state);
		await this.addAddressPage.zipCodeInput().fill(address.zipCode);
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
		validationMessage: AddressValidationMessagesDto
	) {
		await expect(
			this.addAddressPage.streetAddressValidationMessage()
		).toHaveText(`${validationMessage.streetMessage}`);

		await expect(this.addAddressPage.cityValidationMessage()).toHaveText(
			`${validationMessage.cityMessage}`
		);
		await expect(this.addAddressPage.stateValidationMessage()).toHaveText(
			`${validationMessage.stateMessage}`
		);
		await expect(this.addAddressPage.zipCodeValidationMessage()).toHaveText(
			`${validationMessage.zipCodeMessage}`
		);
	}
}
