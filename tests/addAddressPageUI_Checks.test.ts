import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import URLs from '../provider/pageURLs/websiteURLsProvider';
import AddressSteps from '../steps/addressSteps';
import BasePageSteps from '../steps/basePageSteps';
import {AddressInvalidData} from '../testData/inputDataValues/addressInputData';

import PageTitlesText from '../testData/titlesText/pageTitleText';
import Colours from '../provider/colours';
import ActionButtonsText from '../testData/buttonsText/actionButtonText';
import AddressValidationMessages from '../testData/formValidationMessages/addressValidationMessages';

let addressSteps: AddressSteps;
let basePageSteps: BasePageSteps;

test.beforeEach(async () => {
	await driver.start();

	addressSteps = new AddressSteps();
	basePageSteps = new BasePageSteps(driver.page);

	await basePageSteps.goToPage(URLs.addAddressURL);
	await basePageSteps.checkPageURL(URLs.addAddressURL);
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
		AddressValidationMessages.streetEmpty,
		AddressValidationMessages.cityEmpty,
		AddressValidationMessages.stateEmpty,
		AddressValidationMessages.zipCodeEmpty
	);
});

test('Check validation messages in "Add Address" form with invalid data', async () => {
	await addressSteps.fillAllTextFieldsWithDataInAddAddressForm(
		AddressInvalidData.streetMIN,
		AddressInvalidData.cityMIN,
		AddressInvalidData.stateMIN,
		AddressInvalidData.zipCodeMIN
	);
	await addressSteps.clickCreateButtonInAddAddressForm();
	await addressSteps.checkThatAllValidationMessagesInAddAddressFormHaveText(
		AddressValidationMessages.streetShort,
		AddressValidationMessages.cityShort,
		AddressValidationMessages.stateShort,
		AddressValidationMessages.zipCodeIncorrect
	);
});

test.afterEach(async () => {
	driver.close();
});
