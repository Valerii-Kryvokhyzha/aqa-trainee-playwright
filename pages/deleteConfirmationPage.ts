import ActionButton from '../identifiers/butttons/actionButton';
import PageTitle from '../identifiers/pageTitle';
import BasePage from './basePage';

export default class DeletePage extends BasePage {
	public TitleText() {
		return this.page.locator(PageTitle.deletePage);
	}

	public CancelButton() {
		return this.page.getByTestId(ActionButton.cancel);
	}

	public YesConfButton() {
		return this.page.getByTestId(ActionButton.yes);
	}
}
