import {test} from '@playwright/test';
import {client} from '../../base/client/client';
import {apiSteps} from '../../steps/apiSteps';
import API_URLs from '../../provider/pageURLs/api_URLs';
import {apiDataDto} from '../../dto/apiDataDto';
import ApiRequest from '../../testData/apiData/apiRequest';
import ApiResponse from '../../testData/apiData/apiResponse';
import RequestOptions from '../../base/client/RequestOptions';

let requestOptions: RequestOptions;

test.beforeEach(async () => {
	await client.createApiContext(API_URLs.reqresURL);

	requestOptions = new RequestOptions();
});

test('PUT update User', async () => {
	apiDataDto.apiRequest = ApiRequest.putUpdateUser;
	requestOptions.data = apiDataDto.apiRequest;

	await apiSteps.executeRequestPUT('/api/users/148', requestOptions, 200);
	await apiSteps.checkResponseVariable(
		'name',
		ApiResponse.putUpdatedUser.name
	);
	await apiSteps.checkResponseVariable('job', ApiResponse.putUpdatedUser.job);
	await apiSteps.checkResponseVariable(
		'status',
		ApiResponse.putUpdatedUser.status
	);
});
