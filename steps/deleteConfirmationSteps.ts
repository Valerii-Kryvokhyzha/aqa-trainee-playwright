import {expect} from '@playwright/test';
import {driver} from '../base/driver/driver';
import DeletePage from '../pages/deleteConfirmationPage';

export default class DeleteSteps {
	public deletePage: DeletePage;

	constructor() {
		this.deletePage = new DeletePage(driver.page);
	}

	public async clickYesButtonInDeleteForm() {
		await this.deletePage.YesConfirmationButton().click();
	}

	public async clickCancelButtonInDeleteForm() {
		await this.deletePage.CancelButton().click();
	}

	public async checkThatDeletePageTitleHasText(text: string) {
		await expect(this.deletePage.TitleText()).toHaveText(`${text}`);
	}

	public async checkThatDeletePageTitleHasTextColor(textColor: string) {
		await expect(this.deletePage.TitleText()).toHaveCSS(
			'color',
			`${textColor}`
		);
	}

	public async checkThatYesButtonHasProperties(
		text: string,
		backgroundColor: string
	) {
		await expect(this.deletePage.YesConfirmationButton()).toHaveText(
			`${text}`
		);
		await expect(this.deletePage.YesConfirmationButton()).toHaveCSS(
			'background-color',
			`${backgroundColor}`
		);
	}

	public async checkThatCancelButtonHasProperties(
		text: string,
		backgroundColor: string
	) {
		await expect(this.deletePage.CancelButton()).toHaveText(`${text}`);
		await expect(this.deletePage.CancelButton()).toHaveCSS(
			'background-color',
			`${backgroundColor}`
		);
	}
}
