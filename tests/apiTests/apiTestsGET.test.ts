import {test} from '@playwright/test';
import {client} from '../../base/client/client';
import {apiSteps} from '../../steps/apiSteps';
import API_URLs from '../../provider/pageURLs/api_URLs';
import {response} from '../../runtimeVariables/response';
import ApiTestData from '../../testData/apiData/apiTestData';
import {GetUserDto} from '../../dto/apiDTO/getUserDto';
import {GetListOfUsersDto} from '../../dto/apiDTO/getListOfUsersDto';
import {StatusCodes} from 'http-status-codes';

test.beforeEach(async () => {
	await client.createApiContext(API_URLs.reqresURL);
});

test('GET list of users on specific page', async () => {
	await apiSteps.executeRequestGET('/api/users?page=1');
	await apiSteps.checkStatusCode(StatusCodes.OK);

	const actualResponse: GetListOfUsersDto =
		(await response.convertToJSON()) as GetListOfUsersDto;

	await apiSteps.checkGetResponse(actualResponse, ApiTestData.getListOfUsers);
});

test('GET User by ID', async () => {
	await apiSteps.executeRequestGET('/api/users/12');
	await apiSteps.checkStatusCode(StatusCodes.OK);

	const actualResponse: GetUserDto =
		(await response.convertToJSON()) as GetUserDto;

	await apiSteps.checkGetResponse(actualResponse, ApiTestData.getUser);
});

test('GET User with non-existent ID', async () => {
	await apiSteps.executeRequestGET('/api/users/20');
	await apiSteps.checkStatusCode(StatusCodes.NOT_FOUND);

	const actualResponse: GetUserDto =
		(await response.convertToJSON()) as GetUserDto;

	await apiSteps.checkGetResponse(actualResponse, ApiTestData.emptyBody);
});
