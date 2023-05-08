export default class MainTable {
	static usersTable = 'table-Users';
	static addressesTable = 'table-Addresses';
	static subheader = '//th[@colspan="5"]';

	static addedUserGender = '//tr[last()]/td[@data-id="td-Gender"]';
	static addedUserName = '//tr[last()]/td[@data-id="td-UserName"]';
	static addedUserYear = '//tr[last()]/td[@data-id="td-YearOfBirth"]';

	static addedAddressStreet = '//tr[last()]/td[@data-id="td-StreetAddress"]';
	static addedAddressCity = '//tr[last()]/td[@data-id="td-City"]';
	static addedAddressState = '//tr[last()]/td[@data-id="td-State"]';
	static addedAddressZipCode = '//tr[last()]/td[@data-id="td-ZipCode"]';
}
