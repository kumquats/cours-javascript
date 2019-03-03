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
		const fieldNames:Array<string> = [
			'nom',
			'base',
			'prix_petite',
			'prix_grande',
			'ingredients',
		];
		// on récupère la valeur saisie dans chaque champ
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
		} else {
			// si il n'y a pas d'erreur on envoie les données
			const pizza = {
				nom: values.nom,
				base: values.base[0],
				prix_petite: Number(values.prix_petite),
				prix_grande: Number(values.prix_grande),
				ingredients: values.ingredients
			};
			fetch( 'http://localhost:8080/api/v1/pizzas', {
					method:'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(pizza)
				})
			.then(response => {
				if (!response.ok) {
					throw new Error( `${response.status} : ${response.statusText}` );
				}
				return response.json();
			})
			.then ( newPizza => {
				alert(`Pizza "${newPizza.nom}" enregistrée avec succès ! (id ${newPizza.id})`);
				// puis on vide le formulaire
				const form:?HTMLElement = document.querySelector('form.addPizzaPage');
				if (form && form instanceof HTMLFormElement) {
					form.reset();
				}
			})
			.catch( error => alert(`Enregistrement impossible : ${error.message}`) );
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