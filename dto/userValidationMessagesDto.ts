import UserValidationMessages from '../testData/formValidationMessages/userValidationMessages';

export default class UserValidationMessagesDto {
	nameMessage: string;
	yearMessage: string;

	public async setMessages(nameMessage: string, yearMessage: string) {
		this.nameMessage = nameMessage;
		this.yearMessage = yearMessage;
	}
}

const userValidationMessagesDTO = new UserValidationMessagesDto();

const userEmptyFieldsValidationMessagesDTO = new UserValidationMessagesDto();

userEmptyFieldsValidationMessagesDTO.setMessages(
	UserValidationMessages.nameEmpty,
	UserValidationMessages.yearEmpty
);

const userShortValidationMessagesDTO = new UserValidationMessagesDto();

userShortValidationMessagesDTO.setMessages(
	UserValidationMessages.nameShort,
	UserValidationMessages.yearIncorrect
);

export {
	userValidationMessagesDTO,
	userEmptyFieldsValidationMessagesDTO,
	userShortValidationMessagesDTO,
};
