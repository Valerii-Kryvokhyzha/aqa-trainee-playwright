import {expect} from '@playwright/test';
import {client} from '../base/client/client';
import {response} from '../runtimeVariables/response';
import ApiResponse from '../testData/apiData/apiTestData';
import RequestOptions from '../base/client/requestOptions';

class API_Steps {
	public async executeRequestGET(endPoint: string, options?: RequestOptions) {
		response.value = await client.requestContext.get(endPoint, options);
	}

	public async executeRequestPOST(
		endPoint: string,
		options?: RequestOptions
	) {
		response.value = await client.requestContext.post(endPoint, options);
	}

	public async executeRequestPUT(endPoint: string, options?: RequestOptions) {
		response.value = await client.requestContext.put(endPoint, options);
	}

	public async executeRequestDELETE(
		endPoint: string,
		options?: RequestOptions
	) {
		response.value = await client.requestContext.delete(endPoint, options);
	}

	public async checkResponseVariable(
		variable: string,
		expectedVariable: any
	) {
		const jsonResponse = await response.value.json();
		const jsonVariable = await jsonResponse[variable];

		expect(jsonVariable).toBe(expectedVariable);
	}

	public async checkResponseAnyIncludedVariable(
		jsonResponse: string,
		expectedVariable: any
	) {
		expect(jsonResponse).toBe(expectedVariable);
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