import {sessionValue} from '../../runtimeVariables/sessionValue';

export default class UserValidData {
	static nameMIN = sessionValue.stringValue.substring(0, 3);
	static nameMAX = `aaBB_${sessionValue.stringValue}_cc`;
	static year = sessionValue.validYear;
	static selectorDefault = 'Undefined';
	static selectorMale = 'Male';
	static selectorFemale = 'Female';
}
