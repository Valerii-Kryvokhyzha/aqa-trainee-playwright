export default class AddressValidData {
	static streetMIN = 'adDre';
	static streetMAX = 'aaaaDDDDrrrrEEEEssssAAAAddddrr';
	static cityMIN = 'dd';
	static cityMAX = 'CCCCiiiiTTTTyyy';
	static stateMIN = '2a';
	static stateMAX = 'ssssTTTTaaaaTTT';
	static zipCodeMIN = '00000';
	static zipCodeMAX = '99999';
}

export enum AddressInvalidData {
	streetMIN = 'adDr',
	streetMAX = 'aaaaDDDDrrrrEEEEssssAAAAddddrrrr',
	cityMIN = 'c',
	cityMAX = 'CCCCiiiiTTTTyyyy',
	stateMIN = 's',
	stateMAX = 'ssssTTTTaaaaTTTT',
	zipCodeMIN = '0001',
	zipCodeMAX = '123456',
}
