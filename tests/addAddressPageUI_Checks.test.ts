import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import WebsiteURLs from '../provider/pageURLs/websiteURLs';
import AddressSteps from '../steps/addressSteps';
import BasePageSteps from '../steps/basePageSteps';
import AddressValidData from '../testData/inputDataValues/addressValidData';

import PageTitlesText from '../testData/titlesText/pageTitlesText';
import Colours from '../provider/colours';
import ActionButtonsText from '../testData/buttonsText/actionButtonsText';
import {addressDTO} from '../dto/addressDto';
import {
	addressEmptyFieldsValidationMessagesDTO,
	addressShortValidationMessagesDTO,
} from '../dto/addressValidationMessagesDto';

let addressSteps: AddressSteps;
let basePageSteps: BasePageSteps;

addressDTO.createAddress(
	AddressValidData.streetMAX.substring(0, 4),
	AddressValidData.cityMAX.substring(0, 2),
	AddressValidData.stateMAX.substring(0, 1),
	AddressValidData.zipCode.substring(0, 4)
);

test.beforeEach(async () => {
	await driver.start();

	addressSteps = new AddressSteps();
	basePageSteps = new BasePageSteps(driver.page);

	await basePageSteps.goToPage(WebsiteURLs.addAddressURL);
	await basePageSteps.checkPageURL(WebsiteURLs.addAddressURL);
});

test('Check title properties on "Add Address" page', async () => {
	await addressSteps.checkThatAddressPageTitleHasText(
		PageTitlesText.addAddress
	);
	await addressSteps.checkThatAddressPageTitleHasTextColor(Colours.black);
});

test('Check action buttons properties in "Add Address" form', async () => {
	await addressSteps.checkThatCreateAddressButtonHasProperties(
		ActionButtonsText.createBtn,
		Colours.blue
	);
	await addressSteps.checkThatCancelAddressCreationButtonHasProperties(
		ActionButtonsText.cancelBtn,
		Colours.grey
	);
});

test('Check validation messages in "Add Address" form with empty fields', async () => {
	await addressSteps.clickCreateButtonInAddAddressForm();
	await addressSteps.checkThatAllValidationMessagesInAddAddressFormHaveText(
		addressEmptyFieldsValidationMessagesDTO
	);
});

test('Check validation messages in "Add Address" form with invalid data', async () => {
	await addressSteps.fillAllTextFieldsWithDataInAddAddressForm(addressDTO);
	await addressSteps.clickCreateButtonInAddAddressForm();
	await addressSteps.checkThatAllValidationMessagesInAddAddressFormHaveText(
		addressShortValidationMessagesDTO
	);
});

test.afterEach(async () => {
	driver.close();
});
