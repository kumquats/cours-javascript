import Component from './Component.js';
import HomePage from './HomePage.js';
import data from './data.js';
var title = new Component('h1', null, ['La', ' ', 'carte']);
document.querySelector('.pageTitle').innerHTML = title.render();
var homePage = new HomePage(data);
document.querySelector('.pizzasContainer').innerHTML = homePage.render(); // // class Component {
// // 	tag/*:string*/;
// // 	attribute/*:?{name:string, value:string}*/;
// // 	children/*:Array<Component|string>*/;
// // 	constructor( tag/*:string*/, attribute/*:?{name:string, value:string}*/, children/*:Array<Component|string>*/=[] ){
// // 		this.tag = tag;
// // 		this.attribute = attribute;
// // 		this.children = children;
// // 	}
// // 	render()/*:string*/{
// // 		return `<${this.tag} ${this.renderAttribute()} ${
// // 			this.children.length ?
// // 			`>${this.renderChildren()}</${this.tag}>` :
// // 			`/>`
// // 		}`;
// // 	}
// // 	renderAttribute()/*:string*/{
// // 		if ( this.attribute ){
// // 			return `${this.attribute.name}="${this.attribute.value}"`
// // 		}
// // 		return '';
// // 	}
// // 	renderChildren()/*:string*/{
// // 		return this.children.map( (child/*:Component|string*/) => (
// // 			child instanceof Component ? child.render() : child
// // 		)).join('');
// // 	}
// // }
// // class Img extends Component {
// // 	constructor(url/*:string*/){
// // 		super('img', {name:'src', value:url} );
// // 	}
// // }
// // attributes peut contenir plusieurs valeurs
// class Component {
// 	tag/*:string*/;
// 	attributes/*:?{}*/;
// 	children/*:Array<Component|string>*/;
// 	constructor( tag/*:string*/, attributes/*:?{}*/, children/*:Array<Component|string>*/=[] ){
// 		this.tag = tag;
// 		this.attributes = attributes;
// 		this.children = children;
// 	}
// 	render()/*:string*/{
// 		return `<${this.tag} ${this.renderAttributes()} ${
// 			this.children.length ?
// 			`>${this.renderChildren()}</${this.tag}>` :
// 			`/>`
// 		}`;
// 	}
// 	renderAttributes()/*:string*/{
// 		let attributesHTML = '';
// 		if ( this.attributes ){
// 			for (const attribute in this.attributes){
// 				attributesHTML += `${attribute}="${this.attributes[attribute]}" `
// 			}
// 		}
// 		return attributesHTML;
// 	}
// 	renderChildren()/*:string*/{
// 		return this.children.map( (child/*:Component|string*/) => (
// 			child instanceof Component ? child.render() : child
// 		)).join('');
// 	}
// }
// class Img extends Component {
// 	constructor(url/*:string*/){
// 		super('img', {src: url} );
// 	}
// }
// class PizzaThumbnail extends Component {
// 	constructor(pizza/*:{title:string, thumbnail:string}*/){
// 		const imageUrl/*:string*/ = `images/${pizza.nom.toLowerCase()}.jpg`;
// 		super('article', {class:'media'}, [
// 			new Component( 'a', {href: imageUrl}, [
// 				new Img(imageUrl),
// 				new Component('section', {class: 'infos'}, [
// 					new Component('h4', null, [ pizza.nom ]),
// 					new Component( 'ul', null, [
// 						new Component('li', null, [`Prix petit format : ${pizza.prix_petite.toFixed(2)} €`]),
// 						new Component('li', null, [`Prix grand format : ${pizza.prix_grande.toFixed(2)} €`])
// 					])
// 				])
// 			])
// 		]);
// 		this.pizza = pizza;
// 	}
// }
// // const title/*:Component*/ = new Component('h1', null, ['La carte']);
// // const pageTitleElement/*:?Element*/ = document.querySelector('.pageTitle')
// // if ( pageTitleElement ) {
// // 	pageTitleElement.innerHTML = title.render();
// // }
// const pizzasHtml/*:Array<string>*/ = data.map( (pizza/*:{title:string,thumbnail:string,pizza:string}*/) => {
// 	const v/*:PizzaThumbnail*/ = new PizzaThumbnail(pizza);
// 	return v.render();
// });
// // const pizzasContainerElement/*:?Element*/ = document.querySelector( '.pizzasContainer' );
// // if ( pizzasContainerElement ){
// // 	pizzasContainerElement.innerHTML = pizzasHtml.join('');
// // }
// class Page extends Component {
// 	title;
// 	constructor( title, cssClass, children ){
// 		super('section', {name:'class', value: cssClass}, children);
// 		this.title = title;
// 	}
// 	renderTitle() {
// 		return `<h1>${this.title}</h1>`;
// 	}
// }
// // const homePage = new Page( 'La carte', 'homePage', ['lol']);
// // const pageTitleElement/*:?Element*/ = document.querySelector('.pageTitle')
// // if ( pageTitleElement ) {
// // 	pageTitleElement.innerHTML = homePage.renderTitle();
// // }
// // const pizzasContainerElement/*:?Element*/ = document.querySelector( '.pizzasContainer' );
// // if ( pizzasContainerElement ){
// // 	pizzasContainerElement.innerHTML = homePage.render();
// // }
// class HomePage extends Page {
// 	#data = [];
// 	constructor( data ){
// 		super( 'La carte', 'homePage' );
// 		this.data = data;
// 	}
// 	set data( value ){
// 		this.#data = value;
// 		this.children = this.#data.map( pizza => new PizzaThumbnail(pizza) );
// 	}
// }
// const homePage = new HomePage( data );
// // const pageTitleElement/*:?Element*/ = document.querySelector('.pageTitle')
// // if ( pageTitleElement ) {
// // 	pageTitleElement.innerHTML = homePage.renderTitle();
// // }
// // const pizzasContainerElement/*:?Element*/ = document.querySelector( '.pizzasContainer' );
// // if ( pizzasContainerElement ){
// // 	pizzasContainerElement.innerHTML = homePage.render();
// // }
// homePage.data = [
// 	{
// 		nom: '4fromages',
// 		base: 'tomate',
// 		prix_petite: 5.5,
// 		prix_grande: 7.5
// 	},
// 	{
// 		nom: 'Regina',
// 		base: 'tomate',
// 		prix_petite: 5.5,
// 		prix_grande: 7.5
// 	},
// 	{
// 		nom: 'Napolitaine',
// 		base: 'tomate',
// 		prix_petite: 6.2,
// 		prix_grande: 8
// 	},
// 	{
// 		nom: 'Spicy',
// 		base: 'crème',
// 		prix_petite: 6.5,
// 		prix_grande: 9.95
// 	},
// ];
// // if ( pizzasContainerElement ){
// // 	pizzasContainerElement.innerHTML = homePage.render();
// // }
// class PageRenderer {
// 	static titleElement = document.querySelector('.pageTitle');
// 	static contentElement = document.querySelector( '.pizzasContainer' );
// 	static renderPage( page/*:Page*/ ) {
// 		if (this.titleElement){
// 			this.titleElement.innerHTML = page.renderTitle();
// 		}
// 		if (this.contentElement){
// 			this.contentElement.innerHTML = page.render();
// 		}
// 	}
// }
// PageRenderer.renderPage(homePage);
// class Input extends Component {
// 	name;
// 	constructor( type, name, label, attributes ){
// 		super( 'input', {...attributes, type, name} );
// 		this.name = name;
// 		this.label = label;
// 	}
// 	render(){
// 		return `<label>
// 			${(this.label)}
// 			${super.render()}
// 		</label>`;
// 	}
// }
// class Select extends Component {
// 	#options = [];
// 	constructor(name, options = [], attributes) {
// 		super('select', {...attributes, name} );
// 		this.options = options;
// 	}
// 	set options( value ){
// 		this.#options = value;
// 		this.children = this.#options.map(
// 			option => new Component('option', {value: option.value || option}, [option.label || option] )
// 		)
// 	}
// }
// class AddPizzaPage extends Page {
// 	#ingredients = [];
// 	constructor( ingredients ){
// 		super( 'Ajouter une pizza', 'addPizzaPage', ['form']);
// 		this.ingredients = ingredients;
// 	}
// 	set ingredients( value ){
// 		this.#ingredients = value;
// 		this.computeChildren();
// 	}
// 	computeChildren(){
// 		this.children = [
// 			new Component('form', null, [
// 				new Input('text', 'nom', 'Nom de la pizza'),
// 				new Select('base', ['tomate', 'crème'] ),
// 				new Input('number', 'prix_petite', 'Prix petite taille :', {step:0.05,min:0,max:20} ),
// 				new Input('number', 'prix_grande', 'Prix grande taille :', {step:0.05,min:0,max:20} ),
// 				new Select('ingredients', this.#ingredients.map( ingredient => ({value:ingredient.id, label:ingredient.nom})), {multiple:true}),
// 				new Component('button', null, ['Ajouter'])
// 			])
// 		];
// 	}
// }
// const addPizzaPage = new AddPizzaPage([
// 	{id:1, nom:'Mozarella'},
// 	{id:2, nom:'Jambon'},
// 	{id:3, nom:'Champignon'},
// 	{id:4, nom:'Olives'},
// ]);
// PageRenderer.renderPage(addPizzaPage);
//# sourceMappingURL=main.js.map