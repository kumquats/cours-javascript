import Component from './Component.js';
export default class Img extends Component {
	constructor(url){
		super( 'img', {name:'src', value: url} );
	}
}
