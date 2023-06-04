import {expect} from '@playwright/test';
import {client} from '../base/client/client';
import {response} from '../runtimeVariables/response';
import Request_Options from '../base/client/request_Options';
import {GetUserDto} from '../dto/apiDTO/getUserDto';
import {GetListOfUsersDto} from '../dto/apiDTO/getListOfUsersDto';
import {PostUserDto} from '../dto/apiDTO/postUserDto';
import {PostAuthenticationDto} from '../dto/apiDTO/postAuthenticationDtoDto';
import {PutUserDto} from '../dto/apiDTO/putUserDto';

class API_Steps {
	public async executeRequestGET(urlPath: string, options?: Request_Options) {
		response.value = await client.requestContext.get(urlPath, options);
	}

	public async executeRequestPOST(
		urlPath: string,
		options?: Request_Options
	) {
		response.value = await client.requestContext.post(urlPath, options);
	}

	public async executeRequestPUT(urlPath: string, options?: Request_Options) {
		response.value = await client.requestContext.put(urlPath, options);
	}

	public async executeRequestDELETE(
		urlPath: string,
		options?: Request_Options
	) {
		response.value = await client.requestContext.delete(urlPath, options);
	}

	public async checkGetResponse(
		actualResponse: GetUserDto | GetListOfUsersDto | object,
		expectedResponse: GetUserDto | GetListOfUsersDto | object
	) {
		expect(actualResponse).toEqual(expectedResponse);
	}

	public async checkPostUserResponse(
		actualResponse: PostUserDto,
		expectedResponse: PostUserDto
	) {
		expect(actualResponse).toEqual(expectedResponse);
	}

	public async checkPostAuthenticationResponse(
		actualResponse: PostAuthenticationDto,
		expectedResponse: PostAuthenticationDto
	) {
		expect(actualResponse).toEqual(expectedResponse);
	}

	public async checkPutUserResponse(
		actualResponse: PutUserDto,
		expectedResponse: PutUserDto
	) {
		expect(actualResponse).toEqual(expectedResponse);
	}

	public async checkStatusCode(statusCode: number) {
		expect(response.value.status()).toBe(statusCode);
	}

	public async checkStatusText(statusText: string) {
		expect(response.value.statusText()).toBe(statusText);
	}
}

const apiSteps = new API_Steps();

export {apiSteps};
