import {expect, test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import AddAddressPage from '../pages/addAddressPage';
import MainPage from '../pages/mainPage';
import {AddressValidData} from '../base/inputDataValues/addressInputData';

let addAddressPage: AddAddressPage;
let mainPage: MainPage;

test.beforeEach(async () => {
	await driver.start();

	addAddressPage = new AddAddressPage(driver.page);
	await addAddressPage.goToPage(URLs.addAddressURL);
	await addAddressPage.checkPageURL(URLs.addAddressURL);

	mainPage = new MainPage(driver.page);
});

test('Check that new Address is created using valid data on "Add Address" page', async () => {
	await addAddressPage
		.streetAddressInput()
		.fill(`${AddressValidData.streetMAX}`);
	await addAddressPage.cityInput().fill(`${AddressValidData.cityMAX}`);
	await addAddressPage.stateInput().fill(`${AddressValidData.stateMAX}`);
	await addAddressPage.zipCodeInput().fill(`${AddressValidData.zipCodeMAX}`);

	await addAddressPage.createButton().press('Enter');

	await mainPage.checkPageURL(URLs.homeURL);

	await expect(mainPage.addedAddressStreetInTable()).toHaveText(
		AddressValidData.streetMAX
	);
	await expect(mainPage.addedAddressCityInTable()).toHaveText(
		AddressValidData.cityMAX
	);
	await expect(mainPage.addedAddressStateInTable()).toHaveText(
		AddressValidData.stateMAX
	);
	await expect(mainPage.addedAddressZipCodeInTable()).toHaveText(
		AddressValidData.zipCodeMAX
	);

	await expect(
		mainPage.checkUserNameInTable(AddressValidData.streetMAX)
	).toBeVisible();
});

test.afterEach(async () => {
	await mainPage.deleteNewAddressButton().click();
	await mainPage.delYesConfButton().click();

	await expect(
		mainPage.checkUserNameInTable(AddressValidData.streetMAX)
	).toHaveCount(0);

	driver.close();
});
