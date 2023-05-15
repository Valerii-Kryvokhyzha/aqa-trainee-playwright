import AddressValidData from '../testData/inputDataValues/addressInputData';

export default class AddressDto {
	street: string;
	city: string;
	state: string;
	zipCode: string;

	public async createAddress(
		street: string,
		city: string,
		state: string,
		zipCode: string
	) {
		this.street = street;
		this.city = city;
		this.state = state;
		this.zipCode = zipCode;
	}
}

const addressDTO = new AddressDto();

const defaultAddressWithValidData = new AddressDto();

defaultAddressWithValidData.createAddress(
	AddressValidData.streetMIN,
	AddressValidData.cityMIN,
	AddressValidData.stateMIN,
	AddressValidData.zipCode
);

export {addressDTO, defaultAddressWithValidData};
