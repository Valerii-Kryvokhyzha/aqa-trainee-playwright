import {test} from '@playwright/test';
import {client} from '../../base/client/client';
import {apiSteps} from '../../steps/apiSteps';
import API_URLs from '../../provider/pageURLs/api_URLs';
import {requestOptions} from '../../base/client/request_Options';
import ApiRequestData from '../../testData/apiData/apiRequestData';
import ApiTestData from '../../testData/apiData/apiTestData';
import {PutUserDto} from '../../dto/apiDTO/putUserDto';
import {response} from '../../runtimeVariables/response';
import {StatusCodes} from 'http-status-codes';

test.beforeEach(async () => {
	await client.createApiContext(API_URLs.reqresURL);
});

test('PUT update non-existent User', async () => {
	requestOptions.data = ApiRequestData.putUpdateUser;

	await apiSteps.executeRequestPUT('/api/users/148', requestOptions);
	await apiSteps.checkStatusCode(StatusCodes.OK);

	const actualResponse: PutUserDto =
		(await response.convertToJSON()) as PutUserDto;

	actualResponse.updatedAt = '';

	await apiSteps.checkPutUserResponse(
		actualResponse,
		ApiTestData.putUpdatedUser
	);
});
