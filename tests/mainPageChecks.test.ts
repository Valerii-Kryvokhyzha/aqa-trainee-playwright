import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import WebsiteURLs from '../provider/pageURLs/websiteURLs';
import MainPageSteps from '../steps/mainPageSteps';
import PageTitlesText from '../testData/titlesText/pageTitlesText';
import TableTitlesText from '../testData/titlesText/tableTitlesText';
import BasePageSteps from '../steps/basePageSteps';
import Colours from '../provider/colours';

let mainPageSteps: MainPageSteps;
let basePageSteps: BasePageSteps;

test.beforeEach(async () => {
	await driver.start();

	mainPageSteps = new MainPageSteps();
	basePageSteps = new BasePageSteps(driver.page);

	await basePageSteps.goToPage(WebsiteURLs.homeURL);
	await basePageSteps.checkPageURL(WebsiteURLs.homeURL);
});

test('Check that "Users and Addresses" title is shown on main page', async () => {
	await mainPageSteps.checkThatMainPageTitleHasText(PageTitlesText.main);
	await mainPageSteps.checkThatMainPageTitleHasTextColor(Colours.black);
});

test('Check that table headers are displayed on main page', async () => {
	await mainPageSteps.checkThatUsersTableHeaderHasProperties(
		TableTitlesText.users,
		Colours.black
	);
	await mainPageSteps.checkThatAddressesTableHeaderHasProperties(
		TableTitlesText.addresses,
		Colours.black
	);
});

test.afterEach(async () => {
	driver.close();
});
