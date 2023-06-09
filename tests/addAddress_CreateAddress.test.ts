import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import WebsiteURLs from '../provider/pageURLs/websiteURLs';
import AddressSteps from '../steps/addressSteps';
import MainPageSteps from '../steps/mainPageSteps';
import BasePageSteps from '../steps/basePageSteps';
import {defaultAddressWithValidData} from '../dto/addressDto';

let addressSteps: AddressSteps;
let mainPageSteps: MainPageSteps;
let basePageSteps: BasePageSteps;

test.beforeEach(async () => {
	await driver.start();

	addressSteps = new AddressSteps();
	mainPageSteps = new MainPageSteps();
	basePageSteps = new BasePageSteps(driver.page);

	await basePageSteps.goToPage(WebsiteURLs.addAddressURL);
	await basePageSteps.checkPageURL(WebsiteURLs.addAddressURL);
});

test('Check that new Address is created using valid data on "Add Address" page', async () => {
	await addressSteps.fillAllTextFieldsWithDataInAddAddressForm(
		defaultAddressWithValidData
	);
	await addressSteps.clickCreateButtonInAddAddressForm();
	await basePageSteps.checkPageURL(WebsiteURLs.homeURL);
	await mainPageSteps.checkThatAddressWithValidDataIsAddedToAddressesTableOnMainPage(
		defaultAddressWithValidData
	);
});

test.afterEach(async () => {
	await mainPageSteps.deleteAddedAddressFromAddressesTableOnMainPage();
	await mainPageSteps.checkThatAddressIsDeletedFromAddressesTableOnMainPage(
		defaultAddressWithValidData
	);

	driver.close();
});
