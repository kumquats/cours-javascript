import Component from './Component.js';
import HomePage from './HomePage.js';
import data from './data.js';

const title = new Component( 'h1', null, ['La', ' ', 'carte'] );
document.querySelector('.pageTitle').innerHTML = title.render();

const homePage = new HomePage(data);
document.querySelector( '.pizzasContainer' ).innerHTML = homePage.render();