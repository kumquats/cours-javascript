// @flow
import HomePage from './HomePage.js';
import data from './data.js';
import PageRenderer from './PageRenderer.js';

PageRenderer.titleElement = document.querySelector('.pageTitle');
PageRenderer.contentElement = document.querySelector('.pizzasContainer');

const homePage:HomePage = new HomePage(data);
PageRenderer.renderPage( homePage );
