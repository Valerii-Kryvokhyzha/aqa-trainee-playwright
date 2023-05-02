import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import AddressSteps from '../steps/addressSteps';
import MainPageSteps from '../steps/MainPageSteps';
import {AddressValidData} from '../base/inputDataValues/addressInputData';

let addressSteps: AddressSteps;
let mainPageSteps: MainPageSteps;

test.beforeEach(async () => {
	await driver.start();

	addressSteps = new AddressSteps(driver.page);
	mainPageSteps = new MainPageSteps(driver.page);

	await addressSteps.goToPage(URLs.addAddressURL);
	await addressSteps.checkPageURL(URLs.addAddressURL);
});

test('Check that new Address is created using valid data on "Add Address" page', async () => {
	await addressSteps.fillAllTextFieldsWithDataInAddAddressForm(
		AddressValidData.streetMAX,
		AddressValidData.cityMAX,
		AddressValidData.stateMAX,
		AddressValidData.zipCodeMAX
	);
	await addressSteps.clickCreateButtonInAddAddressForm();
	await mainPageSteps.checkPageURL(URLs.homeURL);

	await mainPageSteps.checkThatAddressWithValidDataIsAddedToAddressesTableOnMainPage(
		AddressValidData.streetMAX,
		AddressValidData.cityMAX,
		AddressValidData.stateMAX,
		AddressValidData.zipCodeMAX
	);
});

test.afterEach(async () => {
	await mainPageSteps.deleteAddedAddressFromAddressesTableOnMainPage();

	await mainPageSteps.checkThatAddressIsDeletedFromAddressesTableOnMainPage(
		AddressValidData.streetMAX,
		AddressValidData.cityMAX,
		AddressValidData.stateMAX,
		AddressValidData.zipCodeMAX
	);

	driver.close();
});
