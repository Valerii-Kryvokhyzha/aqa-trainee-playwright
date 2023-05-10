import HeaderButton from '../../../identifiers/butttons/headerButton';
import BaseHeader from './baseHeader';

export default class Header extends BaseHeader {
	public logoButton() {
		return this.page.locator(HeaderButton.logo);
	}

	public homeButton() {
		return this.page.getByRole('link', HeaderButton.home);
	}

	public addUserButton() {
		return this.page.getByRole('link', HeaderButton.addUser);
	}

	public addAddressButton() {
		return this.page.getByRole('link', HeaderButton.addAddress);
	}
}
