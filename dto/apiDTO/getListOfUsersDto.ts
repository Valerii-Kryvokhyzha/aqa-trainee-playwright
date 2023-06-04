import ApiTestData from '../../testData/apiData/apiTestData';

export interface GetListOfUsersDto {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: ApiTestData[];
	support: {
		url: string;
		text: string;
	};
}
