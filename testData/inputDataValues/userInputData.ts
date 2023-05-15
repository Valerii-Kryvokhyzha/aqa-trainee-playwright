import {sessionValue} from '../../runtimeVariables/sessionValue';

export default class UserValidData {
	static nameMIN = 'Abc';
	static nameMAX = 'aaaaBBBBccccDD';
	static year = sessionValue.validYear;
	static selectorDefault = 'Undefined';
	static selectorMale = 'Male';
	static selectorFemale = 'Female';
}
