import BasePage from './basePage';

export default class MainPage extends BasePage {
	public titleText() {
		return this.page.locator('//h1[@class="display-4"]');
	}

	public usersTableText() {
		return this.page.locator('//th[contains(text(),"USERS")]');
	}
	public addressesTableText() {
		return this.page.locator('//th[contains(text(),"ADDRESSES")]');
	}

	public editNewUserButton() {
		return this.page.locator('//tr[last()]/.//a[@data-id="button-Edit"]');
	}

	public deleteNewUserButton() {
		return this.page.locator(
			'//tr[last()]/.//a[@data-id="button-Edit"]/following-sibling::a[@data-id="button-Delete"]'
		);
	}

	public delYesConfButton() {
		return this.page.locator('//button[@data-id="button-Yes"]');
	}

	public deleteNewAddressButton(code: string) {
		return this.page.locator(
			`//td[contains(text(),${code})]/following-sibling::td/a` //CHECK
		);
	}
}
