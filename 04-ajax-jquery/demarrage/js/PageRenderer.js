// @flow
import Page from './Page';

export default class PageRenderer {

	static titleElement:?HTMLElement;
	static contentElement:?HTMLElement;

	static renderPage( page:Page ):void {
		if (this.titleElement){
			// $FlowFixMe
			this.titleElement.innerHTML = page.renderTitle();
		}
		if (this.contentElement){
			// $FlowFixMe
			this.contentElement.innerHTML = page.render();
		}
		page.mount();
	}
}
