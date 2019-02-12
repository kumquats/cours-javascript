# TP 2 - POO - modules - typage <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [E. Pour aller plus loin](#e-pour-aller-plus-loin)
	- [E.1. *Propriétés et méthodes statiques :* La classe PageRenderer](#e1-propriétés-et-méthodes-statiques--la-classe-pagerenderer)
	- [E.2. *Setter & Getter :* La propriété `data`](#e2-setter--getter--la-propriété-data)

## E. Pour aller plus loin
Si vous avez terminé les précédents exercices voici qui devrait vous occuper et permettre de gagner du temps pour le prochain TP :
### E.1. *Propriétés et méthodes statiques :* La classe PageRenderer
1. Créez une classe `Page` (dans un module à part, bien entendu !)  :
	- qui hérite de `Component`
	- dont le constructeur reçoit comme paramètres: title (string) et children
	- `title` est enregistré dans une propriété d'instance privée
	- la classe dispose d'une méthode `renderTitle()` qui retourne le titre passé au constructeur entouré d'une balise `<h1>...</h1>`
2. Modifiez la classe `HomePage` pour la faire hériter de `Page`. Son titre sera `'La carte'`.
3. Créez une classe PageRenderer avec :
	- une propriété statique `titleElement` de type `:?HTMLElement`
	- une propriété statique `contentElement` également de type `:?HTMLElement`
	- une méthode statique `renderPage( page )` qui affiche dans `titleElement` le résultat de l'appel à la méthode `renderTitle()` et dans contentElement le résultat de l'appel à la méthode `render()` de la page passée en paramètre.
4. Assigner à `titleElement` : `document.querySelector('.pageTitle')` et à `contentElement` : `document.querySelector( '.pizzasContainer' )`
4. Afficher la `HomePage` grâce à la classe `PageRenderer`

### E.2. *Setter & Getter :* La propriété `data`
A l'aide des propriétés privées, des getters et des setters, faire en sorte que le code suivant permette d'afficher la liste des pizzas :
```js
let homePage:HomePage = new HomePage([]);
PageRenderer.renderPage( homePage ); // affiche une page vide
homePage.data = data;
PageRenderer.renderPage( homePage ); // affiche la liste des pizzas
```

***NB:** N'oubliez pas de typer toutes vos nouvelles classes au fur et à mesure (ne pas oublier non plus le commentaire `// @flow`) et de vérifier régulièrement que tout est conforme à l'aide de la commande `./node_modules/.bin/flow`*


# Cette fois c'est terminé, bravo ! <!-- omit in toc -->