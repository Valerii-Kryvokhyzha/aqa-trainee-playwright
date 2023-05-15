import {sessionValue} from '../../runtimeVariables/sessionValue';

export default class AddressValidData {
	static streetMIN = 'adDre';
	static streetMAX = 'aaaaDDDDrrrrEEEEssssAAAAddddrr';
	static cityMIN = 'ccc';
	static cityMAX = 'CCCCiiiiTTTTyyy';
	static stateMIN = '2a';
	static stateMAX = 'ssssTTTTaaaaTTT';
	static zipCode = sessionValue.numberValue;
}
