import BasePage from './basePage';

export default class MainPage extends BasePage {
	public titleText() {
		return this.page.locator('//h1[@class="display-4"]');
	}

	public usersTableText() {
		return this.page.locator(
			'//table[@data-id="table-Users"]/descendant::th[@colspan="5"]'
		);
	}
	public addressesTableText() {
		return this.page.locator(
			'//table[@data-id="table-Addresses"]/descendant::th[@colspan="5"]'
		);
	}

	public editNewUserButton(year: string) {
		return this.page.locator(
			`//td[contains(text(),${year})]/following-sibling::td/a[@data-id="button-Edit"]`
		);
	}

	public deleteNewUserButton(year: string) {
		return this.page.locator(
			`//td[contains(text(),${year})]/following-sibling::td/a[@data-id="button-Delete"]`
		);
	}

	public delYesConfButton() {
		return this.page.locator('//button[@data-id="button-Yes"]');
	}

	public deleteNewAddressButton(code: string) {
		return this.page.locator(
			`//td[contains(text(),${code})]/following-sibling::td/a`
		);
	}
}
