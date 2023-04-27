import {expect, test} from '@playwright/test';
import {driver} from '../base/driver/driver';
import {URLs} from '../base/pageURLs/websiteURLs';
import Header from '../base/elements/header';
import MainPage from '../pages/mainPage';
import AddUserPage from '../pages/addUserPage';
import AddAddressPage from '../pages/addAddressPage';
import {pageTitles} from '../base/pageTextTitles/textTitle';
import {HeaderButtonsText} from '../base/buttons/buttonProperties';

let header: Header;
let mainPage: MainPage;
let addUserPage: AddUserPage;
let addAddressPage: AddAddressPage;

test.beforeEach(async () => {
	await driver.start();

	mainPage = new MainPage(driver.page);

	await mainPage.goToPage(URLs.homeURL);
	await mainPage.checkPageURL(URLs.homeURL);

	addUserPage = new AddUserPage(driver.page);
	addAddressPage = new AddAddressPage(driver.page);
	header = new Header(driver.page);
});

test('Check redirections between the pages of Trainee website', async () => {
	await expect(header.logoButton()).toBeVisible();
	await expect(header.logoButton()).toHaveText(HeaderButtonsText.logo);

	await expect(header.homeButton()).toBeVisible();
	await expect(header.homeButton()).toHaveText(HeaderButtonsText.home);

	await expect(header.addUserButton()).toBeVisible();
	await expect(header.addUserButton()).toHaveText(HeaderButtonsText.addUser);

	await expect(header.addAddressButton()).toBeVisible();
	await expect(header.addAddressButton()).toHaveText(
		HeaderButtonsText.addAddress
	);

	await header.clickAddUserBtn();
	await addUserPage.checkPageURL(URLs.addUserURL);
	await expect(addUserPage.titleText()).toHaveText(`${pageTitles.addUser}`);

	await header.clickLogoBtn();
	await mainPage.checkPageURL(URLs.homeURL);
	await expect(mainPage.titleText()).toHaveText(`${pageTitles.main}`);

	await header.clickAddAddressBtn();
	await addAddressPage.checkPageURL(URLs.addAddressURL);
	await expect(addAddressPage.titleText()).toHaveText(
		`${pageTitles.addAddress}`
	);

	await header.clickHomeBtn();
	await mainPage.checkPageURL(URLs.homeURL);
	await expect(mainPage.titleText()).toHaveText(`${pageTitles.main}`);
});

test.afterEach(async () => {
	driver.close();
});
