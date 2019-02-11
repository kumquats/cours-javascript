// @flow
import Component from './Component.js';
import PizzaThumbnail from './PizzaThumbnail.js';
import Page from './Page.js';

export default class HomePage extends Page {
	constructor( data:Array<{nom:string, base:string, prix_petite:number, prix_grande:number}> ){
		super( 'La carte', data.map( pizza => new PizzaThumbnail(pizza) ) );
	}
}