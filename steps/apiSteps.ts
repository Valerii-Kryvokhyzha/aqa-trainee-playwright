import {expect} from '@playwright/test';
import {client} from '../base/client/client';
import {response} from '../runtimeVariables/response';
import ApiResponse from '../testData/apiData/apiResponse';
import RequestOptions from '../base/client/RequestOptions';

class API_Steps {
	public async executeRequestGET(
		endPoint: string,
		options?: RequestOptions,
		statusCode = 200
	) {
		response.value = await client.requestContext.get(endPoint, options);
		expect(response.value.status()).toBe(statusCode);
	}

	public async executeRequestPOST(
		endPoint: string,
		options?: RequestOptions,
		statusCode = 200
	) {
		response.value = await client.requestContext.post(endPoint, options);
		expect(response.value.status()).toBe(statusCode);
	}

	public async executeRequestPUT(
		endPoint: string,
		options?: RequestOptions,
		statusCode = 200
	) {
		response.value = await client.requestContext.put(endPoint, options);
		expect(response.value.status()).toBe(statusCode);
	}

	public async executeRequestDELETE(
		endPoint: string,
		options?: RequestOptions
	) {
		response.value = await client.requestContext.delete(endPoint, options);
	}

	public async checkResponseVariable(
		variable: string | any,
		expectedVariable: any
	) {
		const jsonResponse = await response.value.json();
		const jsonVariable = await jsonResponse[variable];

		expect(jsonVariable).toBe(expectedVariable);
	}

	public async checkStatusCode(statusCode: number) {
		expect(response.value.status()).toBe(statusCode);
	}

	public async checkStatusText(statusText: string) {
		expect(response.value.statusText()).toBe(statusText);
	}

	public async checkFullResponse(expectedResponse: ApiResponse) {
		const jsonResponse = await response.value.json();
		expect(jsonResponse).toEqual(expectedResponse);
	}
}

const apiSteps = new API_Steps();

export {apiSteps};
