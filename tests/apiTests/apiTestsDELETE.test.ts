import {test} from '@playwright/test';
import {client} from '../../base/client/client';
import {apiSteps} from '../../steps/apiSteps';
import API_URLs from '../../provider/pageURLs/api_URLs';
import {sessionValue} from '../../runtimeVariables/sessionValue';
import {StatusCodes, ReasonPhrases} from 'http-status-codes';

test.beforeEach(async () => {
	await client.createApiContext(API_URLs.reqresURL);
});

test('DELETE User', async () => {
	await apiSteps.executeRequestDELETE('/api/users/1');
	await apiSteps.checkStatusCode(StatusCodes.NO_CONTENT);
	await apiSteps.checkStatusText(ReasonPhrases.NO_CONTENT);
});

test('DELETE non-existent User', async () => {
	await apiSteps.executeRequestDELETE(
		`/api/users/${sessionValue.numberValue}`
	);
	await apiSteps.checkStatusCode(StatusCodes.NO_CONTENT);
	await apiSteps.checkStatusText(ReasonPhrases.NO_CONTENT);
});
