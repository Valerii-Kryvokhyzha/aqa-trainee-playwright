import {test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import {pageTitles} from '../base/pageTextTitles/textTitle';
import {HeaderButtonsText} from '../base/buttons/buttonProperties';
import HeaderSteps from '../steps/headerSteps';
import MainPageSteps from '../steps/mainPageSteps';
import UserSteps from '../steps/userSteps';
import AddressSteps from '../steps/addressSteps';

let headerSteps: HeaderSteps;
let mainPageSteps: MainPageSteps;
let userSteps: UserSteps;
let addressSteps: AddressSteps;

test.beforeEach(async () => {
	await driver.start();

	headerSteps = new HeaderSteps(driver.page);
	mainPageSteps = new MainPageSteps(driver.page);
	userSteps = new UserSteps(driver.page);
	addressSteps = new AddressSteps(driver.page);

	await mainPageSteps.goToPage(URLs.homeURL);
	await mainPageSteps.checkPageURL(URLs.homeURL);
});

test('Check redirections between the pages of Trainee website', async () => {
	await headerSteps.checkThatHeaderButtonsHaveText(
		HeaderButtonsText.logo,
		HeaderButtonsText.home,
		HeaderButtonsText.addUser,
		HeaderButtonsText.addAddress
	);

	await headerSteps.clickAddUserButton();
	await userSteps.checkPageURL(URLs.addUserURL);
	await userSteps.checkThatUserPageTitleHasText(pageTitles.addUser);

	await headerSteps.clickLogoButton();
	await mainPageSteps.checkPageURL(URLs.homeURL);
	await mainPageSteps.checkThatMainPageTitleHasText(pageTitles.main);

	await headerSteps.clickAddAddressButton();
	await addressSteps.checkPageURL(URLs.addAddressURL);
	await addressSteps.checkThatAddressPageTitleHasText(pageTitles.addAddress);

	await headerSteps.clickHomeButton();
	await mainPageSteps.checkPageURL(URLs.homeURL);
	await mainPageSteps.checkThatMainPageTitleHasText(pageTitles.main);
});

test.afterEach(async () => {
	driver.close();
});
