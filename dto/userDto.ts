import UserValidData from '../testData/inputDataValues/userValidData';

export default class UserDto {
	gender: string;
	name: string;
	year: string;

	public async createUser(gender: string, name: string, year: string) {
		this.gender = gender;
		this.name = name;
		this.year = year;
	}
}

const userDTO = new UserDto();

const defaultUserWithValidData = new UserDto();

defaultUserWithValidData.createUser(
	UserValidData.selectorMale,
	UserValidData.nameMAX,
	UserValidData.year
);

export {userDTO, defaultUserWithValidData};
