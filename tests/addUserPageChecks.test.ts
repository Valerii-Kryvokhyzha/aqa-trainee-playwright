import {test, expect} from '@playwright/test';
import {URLs} from '../websiteURLs';

test.describe('Checks for "Add User" page of trainee website', () => {
	test.beforeEach(async ({page}) => {
		await page.goto(URLs.addUserURL);
	});

	test('Check validation messages', async ({page}) => {
		const createButton = page.getByRole('button', {name: /Create/});
		await createButton.click();

		const userNameValidationMessage = page.locator(
			'//span[@id="inputUserName-error"]'
		);
		const yearOfBirthValidationMessage = page.locator(
			'//span[@id="inputYearOfBirth-error"]'
		);

		await expect(userNameValidationMessage).toHaveText('Name is requried');
		await expect(yearOfBirthValidationMessage).toHaveText(
			'Year of Birth is requried'
		);

		const userNameInput = page.getByPlaceholder('User Name');
		const yearOfBirthInput = page.getByPlaceholder('Year of Birth');

		await userNameInput.fill('12');
		await yearOfBirthInput.fill('2005');
		await userNameInput.press('Enter');

		await expect(userNameValidationMessage).toHaveText('Name is too short');
		await expect(yearOfBirthValidationMessage).toHaveText(
			'Not valid Year of Birth is set'
		);
	});

	test('check button colors', async ({page}) => {
		const createButton = await page.getByRole('button', {name: /Create/});
		await expect(createButton).toHaveText('Create');
		await expect(createButton).toHaveCSS(
			'background-color',
			'rgb(13, 110, 253)'
		);
		const cancelButton = await page.locator(
			'//a[@data-id="button-Cancel"]'
		);
		await expect(cancelButton).toHaveText('Cancel');
		await expect(cancelButton).toHaveCSS(
			'background-color',
			'rgb(108, 117, 125)'
		);
	});

	test.afterEach(async ({page}) => {
		page.close();
	});
});
