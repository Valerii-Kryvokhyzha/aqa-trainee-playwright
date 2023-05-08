export enum UserValidData {
	nameMIN = 'Leo',
	nameMAX = 'AAAAooooAAAAoo',
	yearMIN = '1900',
	yearMAX = '2004',
}

export enum UserInvalidData {
	nameShort = 'Le',
	nameLong = 'AAAAooooAAAAoooo',
	yearShort = '190',
	yearInvalid = '2005',
}

export enum UserSelector {
	default = 'Undefined',
	male = 'Male',
	female = 'Female',
}
