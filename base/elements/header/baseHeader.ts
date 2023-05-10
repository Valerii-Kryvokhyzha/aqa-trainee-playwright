import {Page} from '@playwright/test';

export default class BaseHeader {
	protected page: Page;

	constructor(page: Page) {
		this.page = page;
	}
}
