import {Browser, BrowserContext, Page, chromium} from '@playwright/test';

export default class Driver {
	public browser: Browser;
	public context: BrowserContext;
	public page: Page;

	async start() {
		this.browser = await chromium.launch();
		this.context = await this.browser.newContext();
		// this.context.tracing.start({screenshots: true, snapshots: true});
		this.page = await this.context.newPage();
	}

	async close() {
		// this.context.tracing.stop({path: 'trace.zip'});
		this.page.close();
		this.context.close();
	}
}

export const driver = new Driver();
