// @flow
import Component from './Component.js';

export default class Img extends Component {
	constructor(url:string){
		super( 'img', {name:'src', value: url} );
	}
}
