export default class UserValidData {
	static nameMIN = 'Abc';
	static nameMAX = 'aaaaBBBBccccDD';
	static yearMIN = '1900';
	static yearMAX = '2004';
	static selectorDefault = 'Undefined';
	static selectorMale = 'Male';
	static selectorFemale = 'Female';
}

export enum UserInvalidData {
	nameShort = 'Le',
	nameLong = 'AAAAooooAAAAoooo',
	yearShort = '190',
	yearInvalid = '2005',
}
