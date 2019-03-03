// @flow
import Component from './Component.js';
import Img from './Img.js';

export default class PizzaThumbnail extends Component {
	constructor(pizza:{nom:string, prix_petite:number, prix_grande:number}){
		const imageUrl:string = `images/${pizza.nom.toLowerCase()}.jpg`;
		super('article', {name:'class', value:'media'}, [
			new Component( 'a', {name:'href', value: imageUrl}, [
				new Img(imageUrl),
				new Component('section', {name:'class', value: 'infos'}, [
					new Component('h4', null, pizza.nom),
					new Component( 'ul', null, [
						new Component('li', null, `Prix petit format : ${pizza.prix_petite.toFixed(2)} €`),
						new Component('li', null, `Prix grand format : ${pizza.prix_grande.toFixed(2)} €`)
					])
				])
			])
		]);
	}
}
