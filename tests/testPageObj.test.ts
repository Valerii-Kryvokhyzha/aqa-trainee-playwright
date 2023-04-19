import Header from '../elements/header';
import {expect, test} from '@playwright/test';
import {URLs} from '../websiteURLs';
import MainPage from '../pages/mainPage';
import AddUserPage from '../pages/mainPage';
import AddAddressPage from '../pages/mainPage';

test.describe('Checks test', () => {
	test.beforeEach(async ({page}) => {
		await page.goto('https://traineeautomation.azurewebsites.net/');
	});

	test.afterEach(async ({page}) => {
		page.close();
	});

	test('Check header text of main page', async ({page}) => {
		const homePage = new MainPage(page);
		const addUserPage = new AddUserPage(page);
		const addAddressPage = new AddAddressPage(page);
		await homePage.goToPage();

		const header = new Header(page);

		await header.clickAddUserBtn();
		await addUserPage.checkPageURL();

		await header.clickLogoBtn();

		await header.clickAddAddressBtn();
		await addAddressPage.checkPageURL();

		await header.clickHomeBtn();
		await homePage.checkPageURL();
	});
});
