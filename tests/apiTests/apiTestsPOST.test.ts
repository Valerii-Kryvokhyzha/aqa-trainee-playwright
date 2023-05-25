import {test} from '@playwright/test';
import {client} from '../../base/client/client';
import {apiSteps} from '../../steps/apiSteps';
import API_URLs from '../../provider/pageURLs/api_URLs';
import {apiDataDto, defaultApiUser} from '../../dto/apiDataDto';
import ApiRequest from '../../testData/apiData/apiRequest';
import ApiResponse from '../../testData/apiData/apiResponse';
import RequestOptions from '../../base/client/RequestOptions';

let requestOptions: RequestOptions;

test.beforeEach(async () => {
	await client.createApiContext(API_URLs.reqresURL);

	requestOptions = new RequestOptions();
});

test('POST create User', async () => {
	requestOptions.data = defaultApiUser.apiRequest;

	await apiSteps.executeRequestPOST('/api/users/', requestOptions, 201);
	await apiSteps.checkResponseVariable(
		'name',
		ApiResponse.postCreatedDefaultUser.name
	);
	await apiSteps.checkResponseVariable(
		'job',
		ApiResponse.postCreatedDefaultUser.job
	);
	await apiSteps.checkStatusCode(201);
});

test('POST create custom User', async () => {
	apiDataDto.apiRequest = ApiRequest.postCustomUser;
	requestOptions.data = apiDataDto.apiRequest;

	await apiSteps.executeRequestPOST('/api/users/', requestOptions, 201);
	await apiSteps.checkResponseVariable(
		'firstName',
		ApiResponse.postCreatedCustomUser.firstName
	);
	await apiSteps.checkResponseVariable(
		'lastName',
		ApiResponse.postCreatedCustomUser.lastName
	);
	await apiSteps.checkResponseVariable(
		'randomID',
		ApiResponse.postCreatedCustomUser.randomID
	);
	await apiSteps.checkStatusCode(201);
});

test('POST Register successful', async () => {
	apiDataDto.apiRequest = ApiRequest.postDefaultRegisterData;
	requestOptions.data = apiDataDto.apiRequest;

	await apiSteps.executeRequestPOST('/api/register/', requestOptions, 200);
	await apiSteps.checkResponseVariable(
		'id',
		ApiResponse.postSuccessfullDefaultRegister.id
	);
	await apiSteps.checkResponseVariable(
		'token',
		ApiResponse.postSuccessfullDefaultRegister.token
	);
});

test('POST Register unsuccessful', async () => {
	apiDataDto.apiRequest = ApiRequest.postInvalidRegisterData;
	requestOptions.data = apiDataDto.apiRequest;

	await apiSteps.executeRequestPOST('/api/register/', requestOptions, 400);

	await apiSteps.checkResponseVariable(
		'error',
		ApiResponse.postUnsuccessfullRegisterWithoutEmail.error
	);
});

test('POST Login successful', async () => {
	apiDataDto.apiRequest = ApiRequest.postDefaultRegisterData;
	requestOptions.data = apiDataDto.apiRequest;

	await apiSteps.executeRequestPOST('/api/login/', requestOptions, 200);
	await apiSteps.checkResponseVariable(
		'token',
		ApiResponse.postSuccessfullDefaultLogin.token
	);
});

test('POST Login unsuccessful with incorrect email', async () => {
	apiDataDto.apiRequest = ApiRequest.postInvalidloginData;
	requestOptions.data = apiDataDto.apiRequest;

	await apiSteps.executeRequestPOST('/api/login/', requestOptions, 400);
	await apiSteps.checkFullResponse(
		ApiResponse.postUnsuccessfullLoginWithIncorrectEmail
	);
});
