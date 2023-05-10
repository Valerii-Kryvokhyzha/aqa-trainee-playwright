import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import URLs from '../DTO/pageURLs/websiteURLs';
import MainPageSteps from '../steps/mainPageSteps';
import PageTitleText from '../DTO/pageTitles/pageTitleText';
import TableTitleText from '../DTO/pageTitles/tableTitleText';
import BasePageSteps from '../steps/basePageSteps';
import Color from '../DTO/colors';

let mainPageSteps: MainPageSteps;
let basePageSteps: BasePageSteps;

test.beforeEach(async () => {
	await driver.start();

	mainPageSteps = new MainPageSteps();
	basePageSteps = new BasePageSteps(driver.page);

	await basePageSteps.goToPage(URLs.homeURL);
	await basePageSteps.checkPageURL(URLs.homeURL);
});

test('Check that "Users and Addresses" title is shown on main page', async () => {
	await mainPageSteps.checkThatMainPageTitleHasText(PageTitleText.main);
	await mainPageSteps.checkThatMainPageTitleHasTextColor(Color.black);
});

test('Check that table headers are displayed on main page', async () => {
	await mainPageSteps.checkThatUsersTableHeaderHasProperties(
		TableTitleText.users,
		Color.black
	);
	await mainPageSteps.checkThatAddressesTableHeaderHasProperties(
		TableTitleText.addresses,
		Color.black
	);
});

test.afterEach(async () => {
	driver.close();
});
