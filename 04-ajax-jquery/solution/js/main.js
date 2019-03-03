// @flow
import HomePage from './HomePage.js';
import PageRenderer from './PageRenderer.js';
import AddPizzaPage from './AddPizzaPage.js';

PageRenderer.titleElement = document.querySelector('.pageTitle');
PageRenderer.contentElement = document.querySelector('.pizzasContainer');

const homePage:HomePage = new HomePage([]);
PageRenderer.renderPage( homePage ); // page vide

// ajout de la baseline "les pizzas c'est la vie" au logo
const logoContainer:?HTMLElement = document.querySelector('.navbar-brand');
if (logoContainer){
	logoContainer.innerHTML += '<small class="label label-success">les pizzas c\'est la vie</small>';
}

// Activation du lien "La carte" dans le menu
const homeLink:?HTMLElement = document.querySelector('.navbar-right li');
if (homeLink) {
	homeLink.setAttribute('class', 'active');
}

// Gestion du click sur les liens du menu
function handleNavClick(event:Event){
	event.preventDefault();

	const link:EventTarget = event.currentTarget;
	if (link instanceof HTMLElement){
		const li:?Element = link.parentElement,
			prevActiveLi:?Element = document.querySelector('.navbar-right li.active');
		if (prevActiveLi) {
			prevActiveLi.setAttribute('class', '');
		}
		if (li) {
			li.setAttribute('class', 'active');
		}
	}
}
const navLinks:NodeList<HTMLElement> = document.querySelectorAll('.navbar-right a');
navLinks.forEach( element => element.addEventListener('click', handleNavClick) );

// Gestion du clic sur le lien du menu "Ajouter une pizza"
const addPizzaPage:AddPizzaPage = new AddPizzaPage();
function renderAddPizza():void{
	PageRenderer.renderPage( addPizzaPage );
}
const addPizzaLink:?HTMLElement = document.querySelector('.pizzaFormButton');
if (addPizzaLink) {
	addPizzaLink.addEventListener('click', (event:Event)=>{
		event.preventDefault();
		renderAddPizza();
	})
}

// A.3. Charger un fichier statique
function displayNews(html:string):void {
	const newsContainer:?HTMLElement = document.querySelector('.newsContainer');
	if (newsContainer) {
		newsContainer.innerHTML = html;
	}
}
fetch('./news.html')
	.then( (response:Response) => response.text() )
	.then( displayNews );

function renderHome(data:Array<{nom:string, base:string, prix_petite:number, prix_grande:number}>):void{
	homePage.data = data;
	PageRenderer.renderPage(homePage);
}

fetch('http://localhost:8080/api/v1/pizzas')
	.then( (response:Response) => response.json() )
	.then( renderHome );