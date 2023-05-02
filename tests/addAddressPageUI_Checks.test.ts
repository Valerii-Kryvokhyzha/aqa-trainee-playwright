import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import AddressSteps from '../steps/addressSteps';
import {AddressValidationMessage} from '../base/validationMessages/addressValidationMessages';
import {pageTitles, titleProperties} from '../base/pageTextTitles/textTitle';
import {ButtonColor, ButtonText} from '../base/buttons/buttonProperties';
import {AddressInvalidData} from '../base/inputDataValues/addressInputData';

let addressSteps: AddressSteps;

test.beforeEach(async () => {
	await driver.start();

	addressSteps = new AddressSteps(driver.page);
	await addressSteps.goToPage(URLs.addAddressURL);
	await addressSteps.checkPageURL(URLs.addAddressURL);
});

test('Check title properties on "Add Address" page', async () => {
	await addressSteps.checkThatAddressPageTitleHasText(pageTitles.addAddress);
	await addressSteps.checkThatAddressPageTitleHasTextColor(
		titleProperties.colorBlack
	);
});

test('Check action buttons properties in "Add Address" form', async () => {
	await addressSteps.checkThatCreateAddressButtonHasProperties(
		ButtonText.createBtn,
		ButtonColor.createBtn
	);
	await addressSteps.checkThatCancelAddressCreationButtonHasProperties(
		ButtonText.cancelBtn,
		ButtonColor.cancelBtn
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
