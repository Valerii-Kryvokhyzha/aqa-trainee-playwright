import {test} from '@playwright/test';
import {client} from '../../base/client/client';
import {apiSteps} from '../../steps/apiSteps';
import API_URLs from '../../provider/pageURLs/api_URLs';
import {requestOptions} from '../../base/client/request_Options';
import ApiTestData from '../../testData/apiData/apiTestData';
import ApiRequestData from '../../testData/apiData/apiRequestData';
import {PostUserDto} from '../../dto/apiDTO/postUserDto';
import {response} from '../../runtimeVariables/response';
import {PostAuthenticationDto} from '../../dto/apiDTO/postAuthenticationDtoDto';
import {StatusCodes} from 'http-status-codes';

test.beforeEach(async () => {
	await client.createApiContext(API_URLs.reqresURL);
});

test('POST create User', async () => {
	requestOptions.data = ApiRequestData.postUserData;

	await apiSteps.executeRequestPOST('/api/users/', requestOptions);
	await apiSteps.checkStatusCode(StatusCodes.CREATED);

	const actualResponse: PostUserDto =
		(await response.convertToJSON()) as PostUserDto;

	actualResponse.id = '';
	actualResponse.createdAt = '';

	await apiSteps.checkPostUserResponse(
		actualResponse,
		ApiTestData.postCreatedUser
	);
});

test('POST create custom User', async () => {
	requestOptions.data = ApiRequestData.postCustomUserData;

	await apiSteps.executeRequestPOST('/api/users/', requestOptions);
	await apiSteps.checkStatusCode(StatusCodes.CREATED);

	const actualResponse: PostUserDto =
		(await response.convertToJSON()) as PostUserDto;

	actualResponse.id = '';
	actualResponse.createdAt = '';

	await apiSteps.checkPostUserResponse(
		actualResponse,
		ApiTestData.postCreatedCustomUser
	);
});

test('POST Register successful', async () => {
	requestOptions.data = ApiRequestData.postAuthenticationData;

	await apiSteps.executeRequestPOST('/api/register/', requestOptions);
	await apiSteps.checkStatusCode(StatusCodes.OK);

	const actualResponse: PostAuthenticationDto =
		(await response.convertToJSON()) as PostAuthenticationDto;

	await apiSteps.checkPostAuthenticationResponse(
		actualResponse,
		ApiTestData.postRegisterData
	);
});

test('POST Register unsuccessful', async () => {
	requestOptions.data = ApiRequestData.postInvalidRegisterData;

	await apiSteps.executeRequestPOST('/api/register/', requestOptions);
	await apiSteps.checkStatusCode(StatusCodes.BAD_REQUEST);

	const actualResponse: PostAuthenticationDto =
		(await response.convertToJSON()) as PostAuthenticationDto;

	await apiSteps.checkPostAuthenticationResponse(
		actualResponse,
		ApiTestData.postUnsuccessfullRegisterWithoutEmail
	);
});

test('POST Login successful', async () => {
	requestOptions.data = ApiRequestData.postAuthenticationData;

	await apiSteps.executeRequestPOST('/api/login/', requestOptions);
	await apiSteps.checkStatusCode(StatusCodes.OK);

	const actualResponse: PostAuthenticationDto =
		(await response.convertToJSON()) as PostAuthenticationDto;

	await apiSteps.checkPostAuthenticationResponse(
		actualResponse,
		ApiTestData.postSuccessfullLogin
	);
});

test('POST Login unsuccessful with incorrect email', async () => {
	requestOptions.data = ApiRequestData.postInvalidLoginData;

	await apiSteps.executeRequestPOST('/api/login/', requestOptions);
	await apiSteps.checkStatusCode(StatusCodes.BAD_REQUEST);

	const actualResponse: PostAuthenticationDto =
		(await response.convertToJSON()) as PostAuthenticationDto;

	await apiSteps.checkPostAuthenticationResponse(
		actualResponse,
		ApiTestData.postUnsuccessfullLoginWithIncorrectEmail
	);
});
