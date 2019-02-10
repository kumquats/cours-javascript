import Component from './Component.js';
import PizzaThumbnail from './PizzaThumbnail.js';
export default class HomePage extends Component {
	constructor( data ){
		super( 'section', null, data.map( pizza => new PizzaThumbnail(pizza) ) );
	}
}