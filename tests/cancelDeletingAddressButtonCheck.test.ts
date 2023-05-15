import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import BasePageSteps from '../steps/basePageSteps';
import DeleteSteps from '../steps/deleteSteps';
import MainPageSteps from '../steps/mainPageSteps';

import WebsiteURLs from '../provider/pageURLs/websiteURLs';
import AddressSteps from '../steps/addressSteps';
import {defaultAddressWithValidData} from '../dto/addressDto';

let deletePageSteps: DeleteSteps;
let addressSteps: AddressSteps;
let basePageSteps: BasePageSteps;
let mainPageSteps: MainPageSteps;

test.beforeEach(async () => {
	await driver.start();

	deletePageSteps = new DeleteSteps();
	addressSteps = new AddressSteps();
	mainPageSteps = new MainPageSteps();
	basePageSteps = new BasePageSteps(driver.page);

	await basePageSteps.goToPage(WebsiteURLs.addAddressURL);
	await basePageSteps.checkPageURL(WebsiteURLs.addAddressURL);

	await addressSteps.fillAllTextFieldsWithDataInAddAddressForm(
		defaultAddressWithValidData
	);
	await addressSteps.clickCreateButtonInAddAddressForm();
	await basePageSteps.checkPageURL(WebsiteURLs.homeURL);
});

test('Check that "Cancel" button cancel deleting the Address on "Delete Address" page', async () => {
	await mainPageSteps.clickDeleteAddedAddressButtonInAddressesTable();
	await deletePageSteps.clickCancelButtonInDeleteForm();
	await basePageSteps.checkPageURL(WebsiteURLs.homeURL);
});

test.afterEach(async () => {
	await mainPageSteps.deleteAddedAddressFromAddressesTableOnMainPage();
	driver.close();
});
