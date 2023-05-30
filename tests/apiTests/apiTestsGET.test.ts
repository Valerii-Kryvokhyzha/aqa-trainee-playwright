import {test} from '@playwright/test';
import {client} from '../../base/client/client';
import {apiSteps} from '../../steps/apiSteps';
import API_URLs from '../../provider/pageURLs/api_URLs';
import {response} from '../../runtimeVariables/response';
import ApiTestData from '../../testData/apiData/apiTestData';

test.beforeEach(async () => {
	await client.createApiContext(API_URLs.reqresURL);
});

test('GET list of users on specific page', async () => {
	await apiSteps.executeRequestGET('/api/users?page=1');
	await apiSteps.checkStatusCode(200);
	await apiSteps.checkResponseVariable(
		'page',
		ApiTestData.getListOfUsers.page
	);
	await apiSteps.checkResponseVariable(
		'per_page',
		ApiTestData.getListOfUsers.per_page
	);
	await apiSteps.checkResponseVariable(
		'total',
		ApiTestData.getListOfUsers.total
	);
	await apiSteps.checkFullResponse(ApiTestData.getListOfUsers);
});

test('GET User by ID', async () => {
	await apiSteps.executeRequestGET('/api/users/12');
	await apiSteps.checkStatusCode(200);

	const jsonResponse = await response.convertToJSON();
	const userID = jsonResponse.data.id;
	const userEmail = jsonResponse.data.email;
	const firstName = jsonResponse.data.first_name;
	const lastName = jsonResponse.data.last_name;

	await apiSteps.checkResponseAnyIncludedVariable(
		userID,
		ApiTestData.getUser.data.id
	);
	await apiSteps.checkResponseAnyIncludedVariable(
		userEmail,
		ApiTestData.getUser.data.email
	);
	await apiSteps.checkResponseAnyIncludedVariable(
		firstName,
		ApiTestData.getUser.data.first_name
	);
	await apiSteps.checkResponseAnyIncludedVariable(
		lastName,
		ApiTestData.getUser.data.last_name
	);
});

test('GET User with non-existent ID', async () => {
	await apiSteps.executeRequestGET('/api/users/20');
	await apiSteps.checkStatusCode(404);
	await apiSteps.checkFullResponse({});
});
