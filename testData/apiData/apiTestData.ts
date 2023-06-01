import {GetListOfUsersDto} from '../../dto/apiDTO/getListOfUsersDto';
import {GetUserDto} from '../../dto/apiDTO/getUserDto';
import {PostAuthenticationDto} from '../../dto/apiDTO/postAuthenticationDtoDto';
import {PostUserDto} from '../../dto/apiDTO/postUserDto';
import {PutUserDto} from '../../dto/apiDTO/putUserDto';
import ApiRequestData from './apiRequestData';

export default class ApiTestData {
	static emptyBody = {};

	static defaultToken = 'QpwL5tke4Pnpja7X4';

	static getUser: GetUserDto = {
		data: {
			id: 12,
			email: 'rachel.howell@reqres.in',
			first_name: 'Rachel',
			last_name: 'Howell',
			avatar: 'https://reqres.in/img/faces/12-image.jpg',
		},
		support: {
			url: 'https://reqres.in/#support-heading',
			text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
		},
	};

	static getListOfUsers: GetListOfUsersDto = {
		page: 1,
		per_page: 6,
		total: 12,
		total_pages: 2,
		data: [
			{
				id: 1,
				email: 'george.bluth@reqres.in',
				first_name: 'George',
				last_name: 'Bluth',
				avatar: 'https://reqres.in/img/faces/1-image.jpg',
			},
			{
				id: 2,
				email: 'janet.weaver@reqres.in',
				first_name: 'Janet',
				last_name: 'Weaver',
				avatar: 'https://reqres.in/img/faces/2-image.jpg',
			},
			{
				id: 3,
				email: 'emma.wong@reqres.in',
				first_name: 'Emma',
				last_name: 'Wong',
				avatar: 'https://reqres.in/img/faces/3-image.jpg',
			},
			{
				id: 4,
				email: 'eve.holt@reqres.in',
				first_name: 'Eve',
				last_name: 'Holt',
				avatar: 'https://reqres.in/img/faces/4-image.jpg',
			},
			{
				id: 5,
				email: 'charles.morris@reqres.in',
				first_name: 'Charles',
				last_name: 'Morris',
				avatar: 'https://reqres.in/img/faces/5-image.jpg',
			},
			{
				id: 6,
				email: 'tracey.ramos@reqres.in',
				first_name: 'Tracey',
				last_name: 'Ramos',
				avatar: 'https://reqres.in/img/faces/6-image.jpg',
			},
		],
		support: {
			url: 'https://reqres.in/#support-heading',
			text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
		},
	};

	static postCreatedUser: PostUserDto = {
		name: 'morpheus',
		job: 'leader',
		id: '',
		createdAt: '',
	};

	static postCreatedCustomUser: PostUserDto =
		ApiRequestData.postCustomUserData;

	static postRegisterData: PostAuthenticationDto = {
		id: 4,
		token: this.defaultToken,
	};

	static postUnsuccessfullRegisterWithoutEmail: PostAuthenticationDto = {
		error: 'Missing email or username',
	};

	static postSuccessfullLogin: PostAuthenticationDto = {
		token: this.defaultToken,
	};

	static postUnsuccessfullLoginWithIncorrectEmail: PostAuthenticationDto = {
		error: 'user not found',
	};

	static putUpdatedUser: PutUserDto = ApiRequestData.putUpdateUser;
}
