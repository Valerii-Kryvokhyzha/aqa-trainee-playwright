import {sessionValue} from '../../runtimeVariables/sessionValue';

export default class ApiRequestData {
	static postUserData = {
		name: 'morpheus',
		job: 'leader',
	};

	static postCustomUserData = {
		firstName: `User_${sessionValue.stringValue}`,
		lastName: 'Surname',
		position: 'Engineer',
		randomID: sessionValue.numberValue,
		id: '',
		createdAt: '',
	};

	static postAuthenticationData = {
		email: 'eve.holt@reqres.in',
		password: 'pistol',
	};

	static postInvalidRegisterData = {
		password: `${sessionValue.stringValue}${sessionValue.numberValue}`,
	};

	static postInvalidLoginData = {
		email: `${sessionValue.stringValue}.holt@reqres.in`,
		password: 'pistol',
	};

	static putUpdateUser = {
		name: sessionValue.stringValue,
		job: 'zion resident',
		status: 'updated or Not',
		updatedAt: '',
	};
}
