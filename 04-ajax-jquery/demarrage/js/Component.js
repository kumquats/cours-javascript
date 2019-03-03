// @flow

export default class Component {
	tagName:string;
	children:void|string|Array<string|Component>;
	attribute:?{name:string,value:string};

	constructor( tagName:string = 'div', attribute:?{name:string,value:string}= null, children:void|string|Array<string|Component> = '' ){
		this.tagName = tagName;
		this.attribute = attribute;
		this.children = children;
	}
	render():string{
		let html:string = `<${this.tagName} ${this.renderAttribute()}`;
		if ( this.children ){
			html += `>
				${this.renderChildren()}
			</${this.tagName}>`
		}
		else {
			html += ` />`;
		}
		return html;
	}
	renderAttribute():string {
		if ( this.attribute ){
			return `${this.attribute.name}="${this.attribute.value}"`
		}
		return '';
	}
	renderChildren():string {
		if (this.children instanceof Array) {
			let html:string = '';
			this.children.forEach( child => {
				html += child instanceof Component ? child.render() : child
			});
			return html;
		}
		return this.children || '';
	}
}
