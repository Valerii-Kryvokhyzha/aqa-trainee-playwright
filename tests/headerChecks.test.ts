import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import URLs from '../provider/pageURLs/websiteURLsProvider';
import PageTitlesText from '../testData/titlesText/pageTitleText';
import HeaderButtonsText from '../testData/buttonsText/headerButtonText';
import HeaderSteps from '../steps/headerSteps';
import MainPageSteps from '../steps/mainPageSteps';
import UserSteps from '../steps/userSteps';
import AddressSteps from '../steps/addressSteps';
import BasePageSteps from '../steps/basePageSteps';

let headerSteps: HeaderSteps;
let mainPageSteps: MainPageSteps;
let userSteps: UserSteps;
let addressSteps: AddressSteps;
let basePageSteps: BasePageSteps;

test.beforeEach(async () => {
	await driver.start();

	headerSteps = new HeaderSteps();
	mainPageSteps = new MainPageSteps();
	userSteps = new UserSteps();
	addressSteps = new AddressSteps();
	basePageSteps = new BasePageSteps(driver.page);

	await basePageSteps.goToPage(URLs.homeURL);
	await basePageSteps.checkPageURL(URLs.homeURL);
});

test('Check that buttons in header have text', async () => {
	await headerSteps.checkThatLogoButtonInHeaderHasText(
		HeaderButtonsText.logo
	);
	await headerSteps.checkThatHomeButtonInHeaderHasText(
		HeaderButtonsText.home
	);
	await headerSteps.checkThatAddUserButtonInHeaderHasText(
		HeaderButtonsText.addUser
	);
	await headerSteps.checkThatAddAddressButtonInHeaderHasText(
		HeaderButtonsText.addAddress
	);
});

test('Check redirections between the pages of Trainee website', async () => {
	await headerSteps.clickAddUserButton();
	await basePageSteps.checkPageURL(URLs.addUserURL);
	await userSteps.checkThatUserPageTitleHasText(PageTitlesText.addUser);

	await headerSteps.clickLogoButton();
	await basePageSteps.checkPageURL(URLs.homeURL);
	await mainPageSteps.checkThatMainPageTitleHasText(PageTitlesText.main);

	await headerSteps.clickAddAddressButton();
	await basePageSteps.checkPageURL(URLs.addAddressURL);
	await addressSteps.checkThatAddressPageTitleHasText(
		PageTitlesText.addAddress
	);

	await headerSteps.clickHomeButton();
	await basePageSteps.checkPageURL(URLs.homeURL);
	await mainPageSteps.checkThatMainPageTitleHasText(PageTitlesText.main);
});

test.afterEach(async () => {
	driver.close();
});
