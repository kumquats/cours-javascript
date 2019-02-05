// D. Manipulation des chaînes

// D.2. Créer une constante appelée `nom` et y assigner la chaine de caractères `Regina`
const nom = 'Regina';
// D.3. Créer une constante nommée `url`.
const url = 'images/'+nom.toLowerCase()+'.jpg';
// D.4. Créer la variable `html`
let html = `<a href="${url}">${url}</a>`;
console.log( html );
// D.5. C'est le moment d'afficher le contenu de la variable `html` dans la page.
document.querySelector(".pizzasContainer").innerHTML = html;
// D.6. Modifier encore la variable html avant son affichage
html = `<a href="${url}">
	<img src="${url}" />
	<h4>${nom}</h4>
</a>`;
document.querySelector(".pizzasContainer").innerHTML = html;

//F. Manipulation des tableaux
let data = [ 'Regina', 'Napolitaine', 'Spicy' ];
html = '';
// F.1. boucle for :
for (let i = 0; i < data.length; i++) {
	const nom = data[i],
	url = `images/${nom.toLowerCase()}.jpg`;
	html += `<a href="${url}">
		<img src="${url}" />
		<h4>${nom}</h4>
	</a>`;
}
document.querySelector(".pizzasContainer").innerHTML = html;
// F.2. Array.forEach :
html = '';
data.forEach( nom => {
	const url = `images/${nom.toLowerCase()}.jpg`;
	html += `<a href="${url}">
		<img src="${url}" />
		<h4>${nom}</h4>
	</a>`;
})
document.querySelector(".pizzasContainer").innerHTML = html;
// F.3. Array.map + Array.join :
html = data.map( nom => `<a href="images/${nom.toLowerCase()}.jpg">
	<img src="images/${nom.toLowerCase()}.jpg" />
	<h4>${nom}</h4>
</a>`).join('');
document.querySelector(".pizzasContainer").innerHTML = html;

// G. Les objets littéraux
data = [
	{
		nom: 'Regina',
		base: 'tomate',
		prix_petite: 5.5,
		prix_grande: 7.5
	},
	{
		nom: 'Napolitaine',
		base: 'tomate',
		prix_petite: 6.2,
		prix_grande: 8
	},
	{
		nom: 'Spicy',
		base: 'crème',
		prix_petite: 6.5,
		prix_grande: 9.95
	},
];

html = '';
data.forEach( pizza => {
	const url = `images/${pizza.nom.toLowerCase()}.jpg`;
	html += `<article class="media">
		<a href="${url}">
			<img src="${url}" />
			<section class="infos">
				<h4>${pizza.nom}</h4>
				<ul>
					<li>Prix petit format : ${pizza.prix_petite.toFixed(2)} €</li>
					<li>Prix grand format : ${pizza.prix_grande.toFixed(2)} €</li>
				</ul>
			</section>
		</a>
	</article>`;
})
document.querySelector(".pizzasContainer").innerHTML = html;