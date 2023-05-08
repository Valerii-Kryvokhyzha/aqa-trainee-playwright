import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import URLs from '../DTO/pageURLs/websiteURLs';
import AddressSteps from '../steps/addressSteps';
import BasePageSteps from '../steps/basePageSteps';
import {AddressInvalidData} from '../DTO/inputDataValues/addressInputData';
import AddressValidationMessage from '../DTO/formValidationMessages/addressValidationMessages';
import PageTitleText from '../DTO/pageTitles/pageTitleText';
import Color from '../DTO/colors';
import ActionButtonText from '../DTO/buttons/actionButtonText';

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
		PageTitleText.addAddress
	);
	await addressSteps.checkThatAddressPageTitleHasTextColor(Color.black);
});

test('Check action buttons properties in "Add Address" form', async () => {
	await addressSteps.checkThatCreateAddressButtonHasProperties(
		ActionButtonText.createBtn,
		Color.blue
	);
	await addressSteps.checkThatCancelAddressCreationButtonHasProperties(
		ActionButtonText.cancelBtn,
		Color.grey
	);
});

test('Check validation messages in "Add Address" form with empty fields', async () => {
	await addressSteps.clickCreateButtonInAddAddressForm();
	await addressSteps.checkThatAllValidationMessagesInAddAddressFormHaveText(
		AddressValidationMessage.streetEmpty,
		AddressValidationMessage.cityEmpty,
		AddressValidationMessage.stateEmpty,
		AddressValidationMessage.zipCodeEmpty
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
		AddressValidationMessage.streetShort,
		AddressValidationMessage.cityShort,
		AddressValidationMessage.stateShort,
		AddressValidationMessage.zipCodeIncorrect
	);
});

test.afterEach(async () => {
	driver.close();
});
