import ApiRequest from '../testData/apiData/apiRequest';
import ApiResponse from '../testData/apiData/apiResponse';

export default class ApiDataDto {
	public apiRequest: ApiRequest;
	public apiResponse: ApiResponse;
}

const apiDataDto = new ApiDataDto();

const defaultApiUser = new ApiDataDto();

defaultApiUser.apiRequest = ApiRequest.postDefaultUser;

export {apiDataDto, defaultApiUser};
