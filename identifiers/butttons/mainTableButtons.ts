export default class TableButton {
	static lastEditUserBtn = '//tr[last()]/.//a[@data-id="button-Edit"]';
	static lastDeleteUserBtn =
		'//following-sibling::a[@data-id="button-Delete"]';

	static lastDeleteAddressBtn =
		'//.//tr[last()]/.//a[@data-id="button-Delete"]';
}
