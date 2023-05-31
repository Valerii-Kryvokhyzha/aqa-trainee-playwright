import {test} from '@playwright/test';
import {client} from '../../base/client/client';
import {apiSteps} from '../../steps/apiSteps';
import API_URLs from '../../provider/pageURLs/api_URLs';
import {requestOptions} from '../../base/client/request_Options';
import ApiTestData from '../../testData/apiData/apiTestData';
import ApiRequestData from '../../testData/apiData/apiRequestData';

test.beforeEach(async () => {
	await client.createApiContext(API_URLs.reqresURL);
});

test('POST create User', async () => {
	requestOptions.data = ApiRequestData.postDefaultUser;

	await apiSteps.executeRequestPOST('/api/users/', requestOptions);
	await apiSteps.checkStatusCode(201);
	await apiSteps.checkResponseVariable(
		'name',
		ApiTestData.postCreatedDefaultUser.name
	);
	await apiSteps.checkResponseVariable(
		'job',
		ApiTestData.postCreatedDefaultUser.job
	);
});

test('POST create custom User', async () => {
	requestOptions.data = ApiRequestData.postCustomUser;

	await apiSteps.executeRequestPOST('/api/users/', requestOptions);
	await apiSteps.checkStatusCode(201);
	await apiSteps.checkResponseVariable(
		'firstName',
		ApiTestData.postCreatedCustomUser.firstName
	);
	await apiSteps.checkResponseVariable(
		'lastName',
		ApiTestData.postCreatedCustomUser.lastName
	);
	await apiSteps.checkResponseVariable(
		'randomID',
		ApiTestData.postCreatedCustomUser.randomID
	);
});

test('POST Register successful', async () => {
	requestOptions.data = ApiRequestData.postDefaultRegisterData;

	await apiSteps.executeRequestPOST('/api/register/', requestOptions);
	await apiSteps.checkStatusCode(200);
	await apiSteps.checkResponseVariable(
		'id',
		ApiTestData.postSuccessfullDefaultRegister.id
	);
	await apiSteps.checkResponseVariable(
		'token',
		ApiTestData.postSuccessfullDefaultRegister.token
	);
});

test('POST Register unsuccessful', async () => {
	requestOptions.data = ApiRequestData.postInvalidRegisterData;

	await apiSteps.executeRequestPOST('/api/register/', requestOptions);
	await apiSteps.checkStatusCode(400);
	await apiSteps.checkResponseVariable(
		'error',
		ApiTestData.postUnsuccessfullRegisterWithoutEmail.error
	);
});

test('POST Login successful', async () => {
	requestOptions.data = ApiRequestData.postDefaultRegisterData;

	await apiSteps.executeRequestPOST('/api/login/', requestOptions);
	await apiSteps.checkStatusCode(200);
	await apiSteps.checkResponseVariable(
		'token',
		ApiTestData.postSuccessfullDefaultLogin.token
	);
});

test('POST Login unsuccessful with incorrect email', async () => {
	requestOptions.data = ApiRequestData.postInvalidloginData;

	await apiSteps.executeRequestPOST('/api/login/', requestOptions);
	await apiSteps.checkStatusCode(400);
	await apiSteps.checkResponseVariable(
		'error',
		ApiTestData.postUnsuccessfullLoginWithIncorrectEmail.error
	);
});
