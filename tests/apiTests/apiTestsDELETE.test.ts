import {test} from '@playwright/test';
import {client} from '../../base/client/client';
import {apiSteps} from '../../steps/apiSteps';
import API_URLs from '../../provider/pageURLs/api_URLs';
import {sessionValue} from '../../runtimeVariables/sessionValue';

test.beforeEach(async () => {
	await client.createApiContext(API_URLs.reqresURL);
});

test('DELETE User', async () => {
	await apiSteps.executeRequestDELETE('/api/users/1');
	await apiSteps.checkStatusCode(204);
	await apiSteps.checkStatusText('No Content');
});

test('DELETE non-existent User', async () => {
	await apiSteps.executeRequestDELETE(
		`/api/users/${sessionValue.numberValue}`
	);
	await apiSteps.checkStatusCode(204);
	await apiSteps.checkStatusText('No Content');
});
