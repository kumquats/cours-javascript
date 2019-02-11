# TP 2 - POO - modules - typage <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [E. Pour aller plus loin](#e-pour-aller-plus-loin)
	- [E.1. *Propriétés et méthodes statiques :* La classe PageRenderer](#e1-propriétés-et-méthodes-statiques--la-classe-pagerenderer)
	- [E.2. La classe AddPizzaPage](#e2-la-classe-addpizzapage)

## E. Pour aller plus loin
Si vous avez terminé les précédents exercices voici qui devrait vous occuper et permettre de gagner du temps pour le prochain TP :
### E.1. *Propriétés et méthodes statiques :* La classe PageRenderer
1. Créez une classe `Page` (dans un module à part, bien entendu !)  :
	- qui hérite de `Component`
	- dont le constructeur reçoit comme paramètres: title (string) et children
	- qui dispose d'une méthode `renderTitle()` qui retourne le titre passé au constructeur entouré d'une balise `<h1>...</h1>`
2. Modifiez la classe `HomePage` pour lui faire hériter de `Page`. Son titre sera `'La carte'`.
3. Créez une classe PageRenderer avec :
	- une propriété statique `titleElement` dont la valeur est `document.querySelector('.pageTitle')`
	- une propriété statique `contentElement` dont la valeur est `document.querySelector( '.pizzasContainer' )`
   - une méthode statique `renderPage( page )` qui affiche dans `titleElement` le résultat de l'appel à la méthode `renderTitle()` et dans contentElement le résultat de l'appel à la méthode `render()` de la page passée en paramètre.
4. Afficher la `HomePage` grâce à la classe `PageRenderer`

***NB:** N'oubliez pas de typer toutes vos nouvelles classes au fur et à mesure (ne pas oublier non plus le commentaire `// @flow`) et de vérifier régulièrement que tout est conforme à l'aide de la commande `./node_modules/.bin/flow`*

### E.2. La classe AddPizzaPage

Sur le modèle de la HomePage créez une class `AddPizzaPage` qui servira de formulaire de création de Pizza.

1. Avant toute chose, les éléments HTML de formulaire nécessitent d'avoir plus d'un attribut html. Par exemple la balise `<input type="number" >` peut également recevoir des attributs `min`, `max` et `step` pour configurer les valeurs possibles du champ. Avec notre classe Component actuelle c'est impossible car on ne peut avoir qu'un seul attribut par balise :
   - remplacez la propriété `attribute` par `attributes` (avec un "s")
   - remplacez la méthode `renderAttribute()` par `renderAttributes()` (avec un "s")
   - modifiez tous les appels au constructeur de component qui envoient des attributs de la manière suivante : au lieu d'envoyer un objet avec des propriétés `name` et `value`, c'est maintenant le nom des clés qui détermineront les noms des attributs html à ajouter. Par exemple au lieu d'avoir :
   ```js
   new Component('a', {name:'href', value:'images/regina.jpg'} );
   ```
   on aura
   ```js
   new Component('a', {href:'images/regina.jpg'} );
   ```
   - modifiez le code de la méthode `renderAttributes()` pour prendre en compte cette nouvelle syntaxe

2. Codez la classe AddPizzaPage qui hérite de `Page` et dont le titre est `"Ajouter une pizza"`.

	Cette page doit contenir une balise `<form>` dans laquelle se trouvent :
	- un `<input type="text">` pour le nom de la pizza
	- deux `<input type="number">` pour le prix_petite et prix_grande
	- un `<select>` pour la base de la pizza avec deux valeurs possibles : 'tomate' ou 'crème'
	- un `<select multiple>` cette fois pour les ingredients de la pizza (passés en paramètre au constructeur. cf. ci-dessous).
	- un bouton `<button>Ajouter</button>`

	Le constructeur de la classe prend en paramètre un tableau d'ingrédients de cette manière :
	```js
	const addPizzaPage = new AddPizzaPage([
		{id:1, nom:'Mozarella'},
		{id:2, nom:'Jambon'},
		{id:3, nom:'Champignon'},
		{id:4, nom:'Olives'},
	]);
	```

	L'affichage se fait ensuite grâce au `PageRenderer` :
	```js
	PageRenderer.renderPage(addPizzaPage);
	```

<hr>

# Cette fois c'est terminé, bravo !