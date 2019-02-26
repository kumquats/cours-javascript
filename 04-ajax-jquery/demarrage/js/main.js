// @flow
import HomePage from './HomePage.js';
import data from './data.js';
import PageRenderer from './PageRenderer.js';
import AddPizzaPage from './AddPizzaPage.js';

PageRenderer.titleElement = document.querySelector('.pageTitle');
PageRenderer.contentElement = document.querySelector('.pizzasContainer');

const homePage:HomePage = new HomePage([]);
PageRenderer.renderPage( homePage ); // page vide
homePage.data = data;
PageRenderer.renderPage( homePage ); // liste des vidéos

// A.2.1. querySelector
// console.log( document.querySelector('.navbar-brand img') );
// console.log( document.querySelector('.pizzaFormButton') );
// console.log( document.querySelector('footer a') );
// console.log( document.querySelector('.pizzasContainer article h4') );

//A.2.2. querySelectorAll
// console.log( document.querySelectorAll('.navbar-right li a') );
// console.log( document.querySelectorAll('.pizzasContainer article .infos li') );

//A.3.1. innerHTML
console.log( document.querySelectorAll('.pizzasContainer article h4' )[1].innerHTML )
document.querySelectorAll('.pizzasContainer article h4' )[1].innerHTML = 'Savoyarde';
const logoContainer:?HTMLElement = document.querySelector('.navbar-brand');
if (logoContainer){
	logoContainer.innerHTML += '<small class="label label-success">les pizzas c\'est la vie</small>';
}

// A.3.2. getAttribute/setAttribute
console.log( document.querySelectorAll('footer a')[1].getAttribute('href'));
const homeLink:?HTMLElement = document.querySelector('.navbar-right li');
if (homeLink){
	homeLink.setAttribute('class', 'active');
}

//B.2. La gestion du menu
function handleNavClick(event:Event){
	event.preventDefault();

	const activeLink:EventTarget = event.currentTarget;
	if (activeLink instanceof HTMLElement){
		console.log(activeLink.innerHTML);
		const activeLi:?Element = activeLink.parentElement,
			prevActiveLi:?Element = document.querySelector('.navbar-right li.active');
		if ( prevActiveLi ){
			prevActiveLi.setAttribute('class', '');
		}
		if ( activeLi ){
			activeLi.setAttribute('class', 'active');
		}
	}
}
const navLinks:NodeList<HTMLElement> = document.querySelectorAll('.navbar-right a');
navLinks.forEach( element => element.addEventListener('click', handleNavClick) );

//C.3. le formulaire d'ajout de pizza
const addPizzaPage = new AddPizzaPage(),
	addPizzaLink:?HTMLElement = document.querySelector('.pizzaFormButton');

if (addPizzaLink){
	addPizzaLink.addEventListener('click', (event:Event)=>{
		event.preventDefault();
		PageRenderer.renderPage( addPizzaPage );
	})
}