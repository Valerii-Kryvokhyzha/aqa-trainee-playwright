import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import MainPageSteps from '../steps/MainPageSteps';
import {
	pageTitles,
	mainPageTableTitles,
	titleProperties,
} from '../base/pageTextTitles/textTitle';

let mainPageSteps: MainPageSteps;

test.beforeEach(async () => {
	await driver.start();

	mainPageSteps = new MainPageSteps(driver.page);
	await mainPageSteps.goToPage(URLs.homeURL);
	await mainPageSteps.checkPageURL(URLs.homeURL);
});

test('Check that "Users and Addresses" title is shown on main page', async () => {
	await mainPageSteps.checkThatMainPageTitleHasText(pageTitles.main);
	await mainPageSteps.checkThatMainPageTitleHasTextColor(
		titleProperties.colorBlack
	);
});

test('Check that table headers are displayed on main page', async () => {
	await mainPageSteps.checkThatUsersTableHeaderHasProperties(
		mainPageTableTitles.user,
		titleProperties.colorBlack
	);
	await mainPageSteps.checkThatAddressesTableHeaderHasProperties(
		mainPageTableTitles.address,
		titleProperties.colorBlack
	);
});

test.afterEach(async () => {
	driver.close();
});
