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
		const form:?HTMLElement = document.querySelector('form.addPizzaPage');
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
		// 		alert(`Pizza "${nomInput.value}" enregistrée avec succès !`);
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
		// on vérifie la valeur saisie dans chaque champ
		const values:any = {};
		const errors:Array<string> = [];

		fieldNames.forEach( (fieldName:string) => {
			const value = this.getFieldValue(fieldName);
			if ( !value ){
				errors.push( `Le champ ${fieldName} ne peut être vide !` );
			}
			values[fieldName] = value;
		});

		if (errors.length) {
			// si des erreurs sont détectées, on les affiche
			alert( errors.join('\n') );
		}
		else {
			// si il n'y a pas d'erreur, on affiche un message de succès
			alert(`Pizza "${values.nom}" enregistrée avec succès !`);
			// puis on vide le formulaire
			const form:?HTMLElement = document.querySelector('form.addPizzaPage');
			if (form && form instanceof HTMLFormElement) {
				form.reset();
			}
		}
	}

	getFieldValue(fieldName:string):?string|Array<string>{
		// on récupère une référence vers le champ qui a comme attribut `name` la valeur fieldName (nom, base, prix_petite, etc.)
		const field:?HTMLElement = document.querySelector(`[name=${fieldName}]`);
		if ( field instanceof HTMLInputElement ) {
			// s'il s'agit d'un <input> on utilise la propriété `value`
			// et on retourne la chaine de caractère saisie
			return field.value != '' ? field.value : null;
		} else if ( field instanceof HTMLSelectElement ) {
			// s'il s'agit d'un <select> on utilise la propriété `selectedOptions`
			const values:Array<string> = [];
			for (let i = 0; i < field.selectedOptions.length; i++) {
				values.push( field.selectedOptions[i].value );
			}
			// et on retourne un tableau avec les valeurs sélectionnées
			return values.length ? values : null;
		}
		return null;
	}
}