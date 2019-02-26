// @flow
import Page from './Page.js';

export default class AddPizzaPage extends Page {
	constructor(){
		super('Ajouter une pizza');
		// $FlowFixMe
		this.submit = this.submit.bind(this);
	}

	render():string {
		return `<form class="addPizzaPage">
		<label>
			Nom :
			<input type="text" name="nom" class="form-control">
		</label>
		<label>
			Base :
			<select name="base" class="form-control">
				<option>Tomate</option>
				<option>Crème</option>
			</select>
		</label>
		<label>
			Prix petit format :
			<input type="number" name="prix_petite" class="form-control">
		</label>
		<label>
			Prix grand format :
			<input type="number" name="prix_grande" class="form-control">
		</label>
		<label>
			Ingrédients :
			<select name="ingredients" multiple="true" class="form-control">
				<option value="1">Mozzarella</option>
				<option value="2">Jambon</option>
				<option value="3">Champignon</option>
				<option value="4">Olives</option>
			</select>
		</label>
		<button type="submit" class="btn btn-default">Ajouter</button>
	</form>`;
	}

	mount():void {
		const form = document.querySelector('form.addPizzaPage');
		if (!form) {
			return;
		}
		form.addEventListener('submit', this.submit );
	}

	submit(event:Event):void {
		event.preventDefault();
		const nomInput:?HTMLElement = document.querySelector('input[name=nom]');
		if (nomInput && nomInput instanceof HTMLInputElement){
			if ( nomInput.value == '' ) {
				alert('Le champ nom ne peut pas être vide');
			} else {
				alert(`La Pizza ${nomInput.value} ajoutée !`);
				nomInput.value = '';
			}
		}
	}
}