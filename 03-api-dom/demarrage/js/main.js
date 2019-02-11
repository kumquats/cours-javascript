// @flow
import HomePage from './HomePage.js';
import data from './data.js';
import PageRenderer from './PageRenderer.js';

PageRenderer.titleElement = document.querySelector('.pageTitle');
PageRenderer.contentElement = document.querySelector('.pizzasContainer');

const homePage:HomePage = new HomePage(data);
PageRenderer.renderPage( homePage );


/*


class Input extends Component {
	name;
	constructor( type, name, label, attributes ){
		super( 'input', {...attributes, type, name} );
		this.name = name;
		this.label = label;
	}
	render(){
		return `<label>
			${(this.label)}
			${super.render()}
		</label>`;
	}
}
class Select extends Component {
	#options = [];
	constructor(name, options = [], attributes) {
		super('select', {...attributes, name} );
		this.options = options;
	}
	set options( value ){
		this.#options = value;
		this.children = this.#options.map(
			option => new Component('option', {value: option.value || option}, [option.label || option] )
		)
	}
}

class AddPizzaPage extends Page {
	#ingredients = [];

	constructor( ingredients ){
		super( 'Ajouter une pizza', 'addPizzaPage', ['form']);
		this.ingredients = ingredients;
	}

	set ingredients( value ){
		this.#ingredients = value;
		this.computeChildren();
	}

	computeChildren(){
		this.children = [
			new Component('form', null, [
				new Input('text', 'nom', 'Nom de la pizza'),
				new Select('base', ['tomate', 'crème'] ),
				new Input('number', 'prix_petite', 'Prix petite taille :', {step:0.05,min:0,max:20} ),
				new Input('number', 'prix_grande', 'Prix grande taille :', {step:0.05,min:0,max:20} ),
				new Select('ingredients', this.#ingredients.map( ingredient => ({value:ingredient.id, label:ingredient.nom})), {multiple:true}),
				new Component('button', null, ['Ajouter'])
			])
		];
	}

}

const addPizzaPage = new AddPizzaPage([
	{id:1, nom:'Mozzarella'},
	{id:2, nom:'Jambon'},
	{id:3, nom:'Champignon'},
	{id:4, nom:'Olives'},
]);
PageRenderer.renderPage(addPizzaPage);
*/