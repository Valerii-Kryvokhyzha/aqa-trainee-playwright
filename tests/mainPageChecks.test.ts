import {expect, test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import MainPage from '../pages/mainPage';
import {
	pageTitles,
	mainPageTableTitles,
	titleProperties,
} from '../base/pageTextTitles/textTitle';

let mainPage: MainPage;
test.beforeEach(async () => {
	await driver.start();

	mainPage = new MainPage(driver.page);
	await mainPage.goToPage(URLs.homeURL);
	await mainPage.checkPageURL(URLs.homeURL);
});

test('Display the "Users and Addresses" title', async () => {
	await expect(mainPage.titleText()).toHaveText(`${pageTitles.main}`);
	await expect(mainPage.titleText()).toHaveCSS(
		'color',
		`${titleProperties.colorBlack}`
	);
});

test('Display table headers text', async () => {
	await expect(mainPage.usersTableHeader()).toHaveText(
		`${mainPageTableTitles.user}`
	);
	await expect(mainPage.usersTableHeader()).toHaveCSS(
		'color',
		`${titleProperties.colorBlack}`
	);

	await expect(mainPage.addressesTableHeader()).toHaveText(
		`${mainPageTableTitles.address}`
	);
	await expect(mainPage.addressesTableHeader()).toHaveCSS(
		'color',
		`${titleProperties.colorBlack}`
	);
});

test.afterEach(async () => {
	driver.close();
});
