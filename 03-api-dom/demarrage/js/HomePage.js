// @flow
import Component from './Component.js';
import PizzaThumbnail from './PizzaThumbnail.js';
import Page from './Page.js';

export default class HomePage extends Page {
	#data;
	constructor( data:Array<{nom:string, base:string, prix_petite:number, prix_grande:number}> ){
		super( 'La carte' );
		this.data = data;
	}
	set data(value:Array<{nom:string, base:string, prix_petite:number, prix_grande:number}>):void {
		this.#data = value;
		this.children = this.#data.map( pizza => new PizzaThumbnail(pizza) )
	}

}