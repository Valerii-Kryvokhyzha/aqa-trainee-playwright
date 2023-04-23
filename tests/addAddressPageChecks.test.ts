import {expect, test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import AddAddressPage from '../pages/addAddressPage';
import Header from '../base/elements/header';
import MainPage from '../pages/mainPage';
import {AddressValidationMessage} from '../base/validationMessages/addressValidationMessages';
import {pageTitles, titleProperties} from '../base/pageTextTitles/textTitle';
import {ButtonColor, ButtonText} from '../base/buttons/buttonProperties';
import {
	AddressInvalidData,
	AddressValidData,
} from '../base/inputDataValues/addressInputData';

let addAddressPage: AddAddressPage;
let header: Header;
let mainPage: MainPage;

test.describe('UI Checks for "Add Address" page of trainee website', () => {
	test.beforeEach(async () => {
		await driver.driverStart();

		addAddressPage = new AddAddressPage(driver.page);
		await addAddressPage.goToPage(URLs.addAddressURL);
		await addAddressPage.checkPageURL(URLs.addAddressURL);
	});

	test('Display the title', async () => {
		await expect(addAddressPage.titleText()).toHaveText(
			`${pageTitles.addAddress}`
		);
		await expect(addAddressPage.titleText()).toHaveCSS(
			'color',
			`${titleProperties.colorBlack}`
		);
	});

	test('Check button colors', async () => {
		await expect(addAddressPage.createButton()).toHaveText(
			`${ButtonText.createBtn}`
		);
		await expect(addAddressPage.createButton()).toHaveCSS(
			'background-color',
			`${ButtonColor.createBtn}`
		);

		await expect(addAddressPage.cancelButton()).toHaveText(
			`${ButtonText.cancelBtn}`
		);
		await expect(addAddressPage.cancelButton()).toHaveCSS(
			'background-color',
			`${ButtonColor.cancelBtn}`
		);
	});

	test('Check validation messages with empty fields', async () => {
		await addAddressPage.createButton().click();

		await expect(
			addAddressPage.streetAddressValidationMessage()
		).toHaveText(`${AddressValidationMessage.streetEmpty}`);
		await expect(addAddressPage.cityValidationMessage()).toHaveText(
			`${AddressValidationMessage.cityEmpty}`
		);
		await expect(addAddressPage.stateValidationMessage()).toHaveText(
			`${AddressValidationMessage.stateEmpty}`
		);
		await expect(addAddressPage.zipCodeValidationMessage()).toHaveText(
			`${AddressValidationMessage.zipCodeEmpty}`
		);
	});

	test('Check validation messages after filling the fields with invalid data', async () => {
		await addAddressPage
			.streetAddressInput()
			.fill(`${AddressInvalidData.streetMIN}`);
		await addAddressPage.cityInput().fill(`${AddressInvalidData.cityMIN}`);
		await addAddressPage
			.stateInput()
			.fill(`${AddressInvalidData.stateMIN}`);
		await addAddressPage
			.zipCodeInput()
			.fill(`${AddressInvalidData.zipCodeMIN}`);

		await addAddressPage.createButton().press('Enter');

		await expect(
			addAddressPage.streetAddressValidationMessage()
		).toHaveText(`${AddressValidationMessage.streetShort}`);
		await expect(addAddressPage.cityValidationMessage()).toHaveText(
			`${AddressValidationMessage.cityShort}`
		);
		await expect(addAddressPage.stateValidationMessage()).toHaveText(
			`${AddressValidationMessage.stateShort}`
		);
		await expect(addAddressPage.zipCodeValidationMessage()).toHaveText(
			`${AddressValidationMessage.zipCodeIncorrect}`
		);
	});

	test.afterEach(async () => {
		driver.driverClose();
	});
});

test.describe('Address functionality on "Add Address" page', () => {
	test.beforeEach(async () => {
		await driver.driverStart();

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
		await addAddressPage
			.zipCodeInput()
			.fill(`${AddressValidData.zipCodeMAX}`);

		await addAddressPage.createButton().press('Enter');
		await header.clickLogoBtn();

		await mainPage.checkPageURL(URLs.homeURL);
		await mainPage
			.deleteNewAddressButton(AddressValidData.zipCodeMAX)
			.isVisible();
	});

	test.afterEach(async () => {
		// add checks for Invisibility of address
		await mainPage
			.deleteNewAddressButton(AddressValidData.zipCodeMAX)
			.click();
		await mainPage.delYesConfButton().click();

		driver.driverClose();
	});
});
