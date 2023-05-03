import {Browser, BrowserContext, Page, chromium} from '@playwright/test';

export default class Driver {
	public browser: Browser;
	public context: BrowserContext;
	public page: Page;

	async start() {
		this.browser = await chromium.launch();
		this.context = await this.browser.newContext();
		this.page = await this.context.newPage();
	}

	async close() {
		await this.page.close();
		await this.context.close();
	}
}

export const driver = new Driver();
