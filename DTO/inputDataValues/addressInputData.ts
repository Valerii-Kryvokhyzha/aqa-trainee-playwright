export enum AddressValidData {
	streetMIN = 'adDre',
	streetMAX = 'aaaaDDDDrrrrEEEEssssAAAAddddrr',
	cityMIN = 'dd',
	cityMAX = 'CCCCiiiiTTTTyyy',
	stateMIN = '2a',
	stateMAX = 'ssssTTTTaaaaTTT',
	zipCodeMIN = '00000',
	zipCodeMAX = '99999',
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
