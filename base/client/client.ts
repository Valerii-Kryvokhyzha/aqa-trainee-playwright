import {APIRequestContext, request} from '@playwright/test';

export default class Client {
	public requestContext: APIRequestContext;

	async createApiContext(apiResourceUrl: string) {
		this.requestContext = await request.newContext({
			baseURL: apiResourceUrl,
		});
	}
}

const client = new Client();

export {client};
