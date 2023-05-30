import {sessionValue} from '../../runtimeVariables/sessionValue';

export default class ApiRequestData {
	static postDefaultUser = {
		name: 'morpheus',
		job: 'leader',
	};

	static postCustomUser = {
		firstName: `User_${sessionValue.stringValue}`,
		lastName: 'Surname',
		position: 'Engineer',
		randomID: sessionValue.numberValue,
	};

	static postDefaultRegisterData = {
		email: 'eve.holt@reqres.in',
		password: 'pistol',
	};

	static postInvalidRegisterData = {
		password: `${sessionValue.stringValue}${sessionValue.numberValue}`,
	};

	static postInvalidloginData = {
		email: `${sessionValue.stringValue}.holt@reqres.in`,
		password: 'pistol',
	};

	static putUpdateUser = {
		name: `${sessionValue.stringValue}`,
		job: 'zion resident',
		status: 'updated or Not',
	};
}
