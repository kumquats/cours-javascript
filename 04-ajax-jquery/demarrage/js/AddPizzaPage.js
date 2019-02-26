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
			<input type="number" name="prix_petite" class="form-control" step="0.05">
		</label>
		<label>
			Prix grand format :
			<input type="number" name="prix_grande" class="form-control" step="0.05">
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
		// C.4. la validation du formulaire
		// const nomInput:?HTMLElement = document.querySelector('input[name=nom]');
		// if (nomInput && nomInput instanceof HTMLInputElement){
		// 	if ( nomInput.value == '' ) {
		// 		alert('Le champ nom ne peut pas être vide');
		// 	} else {
		// 		alert(`La Pizza ${nomInput.value} ajoutée !`);
		// 		nomInput.value = '';
		// 	}
		// }

		//C.5 le formulaire complet
		const fieldNames:Array<string> = [
			'nom',
			'base',
			'prix_petite',
			'prix_grande',
			'ingredients',
		];
		// on vérifie tous les champs à l'aide de la méthode validateField
		const errors:Array<string> = fieldNames.reduce(this.validateField, []);
		if (errors.length) {
			// si des erreurs sont détectées, on les affiche
			alert( errors.join('\n') );
		}
		else {
			// si il n'y a pas d'erreur, on vide le formulaire
			const form:?HTMLElement = document.querySelector('form.addPizzaPage');
			if (form && form instanceof HTMLFormElement) {
				form.reset();
			}
		}
	}
	validateField(errors:Array<string>, fieldName:string):Array<string>{
		const field:?HTMLElement = document.querySelector(`[name=${fieldName}]`);
		if (
			( field instanceof HTMLInputElement && field.value == '' )
			||
			( field instanceof HTMLSelectElement && field.selectedOptions.length == 0 )
		) {
			return errors.concat( `Le champ ${fieldName} ne peut être vide !` );
		}
		return errors;
	}
}