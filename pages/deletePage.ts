import ActionButtons from '../identifiers/buttons/actionButtons';
import BasePage from './basePage';

export default class DeletePage extends BasePage {
	public TitleText() {
		return this.page.locator('//h1');
	}

	public CancelButton() {
		return this.page.getByTestId(ActionButtons.cancel);
	}

	public YesConfirmationButton() {
		return this.page.getByTestId(ActionButtons.yes);
	}
}
