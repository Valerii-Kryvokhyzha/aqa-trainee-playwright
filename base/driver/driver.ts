import {Browser, BrowserContext, Page, chromium} from '@playwright/test';

export default class Driver {
	public browser: Browser;
	public context: BrowserContext;
	public page: Page;

	async driverStart() {
		this.browser =
			await chromium.launch(/* {headless: false, slowMo: 50} */);
		this.context = await this.browser.newContext();
		this.page = await this.context.newPage();
	}

	async driverClose() {
		this.page.close();
		this.context.close();
		this.browser.close();
	}
}

export const driver = new Driver();
