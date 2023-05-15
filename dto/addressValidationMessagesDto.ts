import AddressValidationMessages from '../testData/formValidationMessages/addressValidationMessages';

export default class AddressValidationMessagesDto {
	streetMessage: string;
	cityMessage: string;
	stateMessage: string;
	zipCodeMessage: string;

	public async setMessages(
		streetMessage: string,
		cityMessage: string,
		stateMessage: string,
		zipCodeMessage: string
	) {
		this.streetMessage = streetMessage;
		this.cityMessage = cityMessage;
		this.stateMessage = stateMessage;
		this.zipCodeMessage = zipCodeMessage;
	}
}

const addressValidationMessagesDTO = new AddressValidationMessagesDto();

const addressEmptyFieldsValidationMessagesDTO =
	new AddressValidationMessagesDto();

addressEmptyFieldsValidationMessagesDTO.setMessages(
	AddressValidationMessages.streetEmpty,
	AddressValidationMessages.cityEmpty,
	AddressValidationMessages.stateEmpty,
	AddressValidationMessages.zipCodeEmpty
);

const addressShortValidationMessagesDTO = new AddressValidationMessagesDto();

addressShortValidationMessagesDTO.setMessages(
	AddressValidationMessages.streetShort,
	AddressValidationMessages.cityShort,
	AddressValidationMessages.stateShort,
	AddressValidationMessages.zipCodeIncorrect
);

export {
	addressValidationMessagesDTO,
	addressEmptyFieldsValidationMessagesDTO,
	addressShortValidationMessagesDTO,
};
