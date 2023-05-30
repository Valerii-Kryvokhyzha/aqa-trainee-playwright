import {test} from '@playwright/test';
import {client} from '../../base/client/client';
import {apiSteps} from '../../steps/apiSteps';
import API_URLs from '../../provider/pageURLs/api_URLs';
import {requestOptions} from '../../base/client/requestOptions';
import ApiRequestData from '../../testData/apiData/apiRequestData';
import ApiTestData from '../../testData/apiData/apiTestData';

test.beforeEach(async () => {
	await client.createApiContext(API_URLs.reqresURL);
});

test('PUT update User', async () => {
	requestOptions.data = ApiRequestData.putUpdateUser;

	await apiSteps.executeRequestPUT('/api/users/148', requestOptions);
	await apiSteps.checkStatusCode(200);
	await apiSteps.checkResponseVariable(
		'name',
		ApiTestData.putUpdatedUser.name
	);
	await apiSteps.checkResponseVariable('job', ApiTestData.putUpdatedUser.job);
	await apiSteps.checkResponseVariable(
		'status',
		ApiTestData.putUpdatedUser.status
	);
});
