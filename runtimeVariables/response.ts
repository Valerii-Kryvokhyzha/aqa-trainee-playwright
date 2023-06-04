import {APIResponse} from '@playwright/test';

class Response {
	public value: APIResponse;

	public async convertToJSON() {
		return await response.value.json();
	}
}

const response = new Response();

export {response};
