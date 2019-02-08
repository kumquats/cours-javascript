"use strict";

// D. Manipulation des chaînes
// D.2. Créer une constante appelée `nom` et y assigner la chaine de caractères `Regina`
var nom = 'Regina'; // D.3. Créer une constante nommée `url`.

var url = 'images/' + nom.toLowerCase() + '.jpg'; // D.4. Créer la variable `html`

var html = "<a href=\"".concat(url, "\">").concat(url, "</a>");
console.log(html); // D.5. C'est le moment d'afficher le contenu de la variable `html` dans la page.

document.querySelector(".pizzasContainer").innerHTML = html; // D.6. Modifier encore la variable html avant son affichage

html = "<a href=\"".concat(url, "\">\n\t<img src=\"").concat(url, "\" />\n\t<h4>").concat(nom, "</h4>\n</a>");
document.querySelector(".pizzasContainer").innerHTML = html; //F. Manipulation des tableaux

var data = ['Regina', 'Napolitaine', 'Spicy'];
html = ''; // F.1. boucle for :

for (var i = 0; i < data.length; i++) {
  var _nom = data[i],
      _url = "images/".concat(_nom.toLowerCase(), ".jpg");

  html += "<a href=\"".concat(_url, "\">\n\t\t<img src=\"").concat(_url, "\" />\n\t\t<h4>").concat(_nom, "</h4>\n\t</a>");
}

document.querySelector(".pizzasContainer").innerHTML = html; // F.2. Array.forEach :

html = '';
data.forEach(function (nom) {
  var url = "images/".concat(nom.toLowerCase(), ".jpg");
  html += "<a href=\"".concat(url, "\">\n\t\t<img src=\"").concat(url, "\" />\n\t\t<h4>").concat(nom, "</h4>\n\t</a>");
});
document.querySelector(".pizzasContainer").innerHTML = html; // F.3. Array.map + Array.join :

html = data.map(function (nom) {
  return "<a href=\"images/".concat(nom.toLowerCase(), ".jpg\">\n\t<img src=\"images/").concat(nom.toLowerCase(), ".jpg\" />\n\t<h4>").concat(nom, "</h4>\n</a>");
}).join('');
document.querySelector(".pizzasContainer").innerHTML = html; // G. Les objets littéraux

data = [{
  nom: 'Regina',
  base: 'tomate',
  prix_petite: 5.5,
  prix_grande: 7.5
}, {
  nom: 'Napolitaine',
  base: 'tomate',
  prix_petite: 6.2,
  prix_grande: 8
}, {
  nom: 'Spicy',
  base: 'crème',
  prix_petite: 6.5,
  prix_grande: 9.95
}];
html = '';
data.forEach(function (pizza) {
  var url = "images/".concat(pizza.nom.toLowerCase(), ".jpg");
  html += "<article class=\"media\">\n\t\t<a href=\"".concat(url, "\">\n\t\t\t<img src=\"").concat(url, "\" />\n\t\t\t<section class=\"infos\">\n\t\t\t\t<h4>").concat(pizza.nom, "</h4>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Prix petit format : ").concat(pizza.prix_petite.toFixed(2), " \u20AC</li>\n\t\t\t\t\t<li>Prix grand format : ").concat(pizza.prix_grande.toFixed(2), " \u20AC</li>\n\t\t\t\t</ul>\n\t\t\t</section>\n\t\t</a>\n\t</article>");
});
document.querySelector(".pizzasContainer").innerHTML = html;
//# sourceMappingURL=main.js.map