import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import AddressSteps from '../steps/addressSteps';
import MainPageSteps from '../steps/mainPageSteps';
import {AddressValidData} from '../base/inputDataValues/addressInputData';
import BasePageSteps from '../steps/basePageSteps';

let addressSteps: AddressSteps;
let mainPageSteps: MainPageSteps;
let basePageSteps: BasePageSteps;

test.beforeEach(async () => {
	await driver.start();

	addressSteps = new AddressSteps();
	mainPageSteps = new MainPageSteps();
	basePageSteps = new BasePageSteps(driver.page);

	await basePageSteps.goToPage(URLs.addAddressURL);
	await basePageSteps.checkPageURL(URLs.addAddressURL);
});

test('Check that new Address is created using valid data on "Add Address" page', async () => {
	await addressSteps.fillAllTextFieldsWithDataInAddAddressForm(
		AddressValidData.streetMAX,
		AddressValidData.cityMAX,
		AddressValidData.stateMAX,
		AddressValidData.zipCodeMAX
	);
	await addressSteps.clickCreateButtonInAddAddressForm();
	await basePageSteps.checkPageURL(URLs.homeURL);
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
		AddressValidData.streetMAX
	);

	driver.close();
});
