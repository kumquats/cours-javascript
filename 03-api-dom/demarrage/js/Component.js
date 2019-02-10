export default class Component {
	tagName;
	children;
	attribute;
	constructor( tagName = 'div', attribute=null, children = '' ){
		this.tagName = tagName;
		this.attribute = attribute;
		this.children = children;
	}
	render(){
		let html = `<${this.tagName} ${this.renderAttribute()}`;
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
	renderAttribute(){
		if ( this.attribute ){
			return `${this.attribute.name}="${this.attribute.value}"`
		}
		return '';
	}
	renderChildren(){
		if (this.children instanceof Array) {
			let html = '';
			this.children.forEach( child => {
				html += child instanceof Component ? child.render() : child
			});
			return html;
		} else {
			return this.children;
		}
	}
}
