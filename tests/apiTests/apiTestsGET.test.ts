import {test} from '@playwright/test';
import {client} from '../../base/client/client';
import {apiSteps} from '../../steps/apiSteps';
import API_URLs from '../../provider/pageURLs/api_URLs';
import ApiResponse from '../../testData/apiData/apiResponse';
import {apiDataDto} from '../../dto/apiDataDto';

test.beforeEach(async () => {
	await client.createApiContext(API_URLs.reqresURL);
});

test('GET list of users on specific page', async () => {
	await apiSteps.executeRequestGET('/api/users?page=1');
	await apiSteps.checkResponseVariable('page', 1);
	await apiSteps.checkResponseVariable('total', 12);
	await apiSteps.checkFullResponse(ApiResponse.getListOfUsers);
});

test('GET User with ID', async () => {
	apiDataDto.apiResponse = ApiResponse.getUser;

	await apiSteps.executeRequestGET('/api/users/12');
	await apiSteps.checkFullResponse(apiDataDto.apiResponse);
});

test('GET User with non-existent ID', async () => {
	await apiSteps.executeRequestGET('/api/users/20', {}, 404);
	await apiSteps.checkFullResponse({});
	await apiSteps.checkStatusCode(404);
});
