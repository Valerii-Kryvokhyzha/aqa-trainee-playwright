import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import {pageTitles} from '../base/pageTextTitles/textTitle';
import {HeaderButtonsText} from '../base/buttons/buttonProperties';
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

test('Check redirections between the pages of Trainee website', async () => {
	await headerSteps.checkThatHeaderButtonsHaveText(
		HeaderButtonsText.logo,
		HeaderButtonsText.home,
		HeaderButtonsText.addUser,
		HeaderButtonsText.addAddress
	);

	await headerSteps.clickAddUserButton();
	await basePageSteps.checkPageURL(URLs.addUserURL);
	await userSteps.checkThatUserPageTitleHasText(pageTitles.addUser);

	await headerSteps.clickLogoButton();
	await basePageSteps.checkPageURL(URLs.homeURL);
	await mainPageSteps.checkThatMainPageTitleHasText(pageTitles.main);

	await headerSteps.clickAddAddressButton();
	await basePageSteps.checkPageURL(URLs.addAddressURL);
	await addressSteps.checkThatAddressPageTitleHasText(pageTitles.addAddress);

	await headerSteps.clickHomeButton();
	await basePageSteps.checkPageURL(URLs.homeURL);
	await mainPageSteps.checkThatMainPageTitleHasText(pageTitles.main);
});

test.afterEach(async () => {
	driver.close();
});
