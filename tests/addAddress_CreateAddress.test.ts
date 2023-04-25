import {expect, test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import AddAddressPage from '../pages/addAddressPage';
import Header from '../base/elements/header';
import MainPage from '../pages/mainPage';
import {AddressValidData} from '../base/inputDataValues/addressInputData';
import {tableRows} from '../base/mainPageTableRows/mainPageTableRows';

let addAddressPage: AddAddressPage;
let header: Header;
let mainPage: MainPage;

test.beforeEach(async () => {
	await driver.start();

	addAddressPage = new AddAddressPage(driver.page);
	await addAddressPage.goToPage(URLs.addAddressURL);
	await addAddressPage.checkPageURL(URLs.addAddressURL);

	header = new Header(driver.page);
	mainPage = new MainPage(driver.page);
});

test('Create Address with valid data', async () => {
	await addAddressPage
		.streetAddressInput()
		.fill(`${AddressValidData.streetMAX}`);
	await addAddressPage.cityInput().fill(`${AddressValidData.cityMAX}`);
	await addAddressPage.stateInput().fill(`${AddressValidData.stateMAX}`);
	await addAddressPage.zipCodeInput().fill(`${AddressValidData.zipCodeMAX}`);

	await addAddressPage.createButton().press('Enter');
	await header.clickLogoBtn();

	await mainPage.checkPageURL(URLs.homeURL);
	await mainPage.deleteNewAddressButton().isVisible();

	await expect(mainPage.addressesTableRow()).toHaveCount(tableRows.addedAcc);
});

test.afterEach(async () => {
	await mainPage.deleteNewAddressButton().click();
	await mainPage.delYesConfButton().click();
	await expect(mainPage.addedAddressTableRow()).toBeHidden();
	await expect(mainPage.addressesTableRow()).toHaveCount(tableRows.standard);

	driver.close();
});
