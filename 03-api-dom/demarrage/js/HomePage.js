// @flow
import Component from './Component.js';
import PizzaThumbnail from './PizzaThumbnail.js';

export default class HomePage extends Component {
	constructor( data:Array<{nom:string, base:string, prix_petite:number, prix_grande:number}> ){
		super( 'section', null, data.map( pizza => new PizzaThumbnail(pizza) ) );
	}
}