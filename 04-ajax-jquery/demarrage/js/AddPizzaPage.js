// @flow
import Page from './Page.js';

export default class AddPizzaPage extends Page {
	constructor(){
		super('Ajouter une pizza');
		this.submit = this.submit.bind(this);
	}
	render():string {
		return `<form class="addPizzaPage">
			<label>
				Nom :
				<input type="text" name="nom" >
			</label>
			<button type="submit">Ajouter</button>
		</form>`;
	}
	mount():void{
		const form = document.querySelector('form.addPizzaPage');
		if (!form) {
			return;
		}
		form.addEventListener('submit', this.submit );
	}
	submit(event:Event):void{
		event.preventDefault();
		const nomInput:?HTMLElement = document.querySelector('input[name=nom]');
		if (nomInput){
			if ( nomInput.value == '' ) {
				alert('Le champ nom ne peut pas être vide');
			} else {
				alert(`La Pizza ${nomInput.value} ajoutée !`);
				nomInput.value = '';
			}
		}
	}
}