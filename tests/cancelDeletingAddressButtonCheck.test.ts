import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import BasePageSteps from '../steps/basePageSteps';
import DeleteSteps from '../steps/deleteConfirmationSteps';
import MainPageSteps from '../steps/mainPageSteps';

import URLs from '../DTO/pageURLs/websiteURLs';
import AddressSteps from '../steps/addressSteps';
import {AddressValidData} from '../DTO/inputDataValues/addressInputData';

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

	await basePageSteps.goToPage(URLs.addAddressURL);
	await basePageSteps.checkPageURL(URLs.addAddressURL);

	await addressSteps.fillAllTextFieldsWithDataInAddAddressForm(
		AddressValidData.streetMIN,
		AddressValidData.cityMAX,
		AddressValidData.stateMIN,
		AddressValidData.zipCodeMAX
	);
	await addressSteps.clickCreateButtonInAddAddressForm();
	await basePageSteps.checkPageURL(URLs.homeURL);
});

test('Check that "Cancel" button cancel deleting the Address on "Delete Address" page', async () => {
	await mainPageSteps.clickDeleteAddedAddressButtonInAddressesTable();
	await deletePageSteps.clickCancelButtonInDeleteForm();
	await basePageSteps.checkPageURL(URLs.homeURL);
});

test.afterEach(async () => {
	await mainPageSteps.deleteAddedAddressFromAddressesTableOnMainPage();
	driver.close();
});
