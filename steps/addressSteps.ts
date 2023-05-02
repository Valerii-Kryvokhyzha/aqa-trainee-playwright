import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import AddAddressPage from '../pages/addAddressPage';
import BasePageSteps from './basePageSteps';

let addAddressPage: AddAddressPage;

export default class AddressSteps extends BasePageSteps {
	public async fillAllTextFieldsWithDataInAddAddressForm(
		street: string,
		city: string,
		state: string,
		zipCode: string
	) {
		addAddressPage = new AddAddressPage(driver.page); // !!!
		await addAddressPage.streetAddressInput().fill(street);
		await addAddressPage.cityInput().fill(city);
		await addAddressPage.stateInput().fill(state);
		await addAddressPage.zipCodeInput().fill(zipCode);
	}

	public async clickCreateButtonInAddAddressForm() {
		addAddressPage = new AddAddressPage(driver.page); // !!!
		await addAddressPage.createButton().click();
	}

	public async checkThatAddressPageTitleHasText(text: string) {
		addAddressPage = new AddAddressPage(driver.page); // !!!
		await expect(addAddressPage.titleText()).toHaveText(`${text}`);
	}
	public async checkThatAddressPageTitleHasTextColor(textColor: string) {
		await expect(addAddressPage.titleText()).toHaveCSS(
			'color',
			`${textColor}`
		);
	}

	public async checkThatCreateAddressButtonHasProperties(
		text: string,
		backgroundColor: string
	) {
		addAddressPage = new AddAddressPage(driver.page); // !!!
		await expect(addAddressPage.createButton()).toHaveText(`${text}`);
		await expect(addAddressPage.createButton()).toHaveCSS(
			'background-color',
			`${backgroundColor}`
		);
	}

	public async checkThatCancelAddressCreationButtonHasProperties(
		text: string,
		backgroundColor: string
	) {
		await expect(addAddressPage.cancelButton()).toHaveText(`${text}`);
		await expect(addAddressPage.cancelButton()).toHaveCSS(
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
			addAddressPage.streetAddressValidationMessage()
		).toHaveText(`${streetValidationMessage}`);
		await expect(addAddressPage.cityValidationMessage()).toHaveText(
			`${cityValidationMessage}`
		);
		await expect(addAddressPage.stateValidationMessage()).toHaveText(
			`${stateValidationMessage}`
		);
		await expect(addAddressPage.zipCodeValidationMessage()).toHaveText(
			`${zipCodeValidationMessage}`
		);
	}
}
