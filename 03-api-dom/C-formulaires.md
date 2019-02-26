#### TP3 - API DOM <!-- omit in toc -->
# C. La gestion des formulaires <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [C.1. Rappels](#c1-rappels)
- [C.2. Préparatifs](#c2-préparatifs)
- [C.3. Le formulaire d'ajout de pizza](#c3-le-formulaire-dajout-de-pizza)
- [C.4. La validation de la saisie](#c4-la-validation-de-la-saisie)
- [C.5. Le formulaire complet :](#c5-le-formulaire-complet-)

## C.1. Rappels
Comme vu en cours (cf. pdf sur moodle), on peut utiliser l'API DOM avec les formulaires principalement pour 3 utilisations :
- vérifier la saisie de l'utilisateur et afficher des messages d'erreur si besoin
- modifier éventuellement les valeurs des champs (corriger une valeur, ou vider un formulaire)
- Soumettre les données en AJAX (ce qui sera abordé dans le prochain cours et TP)

## C.2. Préparatifs
Avant d'aller plus loin dans le TP faisons un point sur le code qui est fourni dans le dossier `demarrage` : il contient en effet des classes `Page` et `PageRenderer` qui correspondent à la solution de l'exercice [E. pour aller plus loin](../02-poo-modules-typage/E-pour-aller-plus-loin.md) :

- La classe `Page` est une classe de base dont hérite la classe `HomePage` et qui implémente une méthode `renderTitle()`.
- La classe `PageRenderer` est une classe qui dispose d'une méthode statique `PageRenderer.renderPage( page )` qui permet d'afficher une page (méthode `render()`) et son titre (méthode `renderTitle()` ci-dessus).

Pour permettre à chaque page de réagir aux événements de l'utilisateur, on va ajouter une méthode `mount()` dans la classe `Page` et qui sera appelée par la classe `PageRenderer` à chaque fois qu'on affiche une page via `renderPage()` :

1. **Ajouter la méthode `mount()` à la classe `Page`** :
	```js
	mount():void {
		// par défaut, cette méthode ne fait rien
		// ce sont les classes filles qui devront surcharger cette méthode
	}
	```
2. **Appeler la méthode `mount()` à la fin de la méthode statique `PageRenderer.renderPage()`** :
	```js
	static renderPage( page:Page ):void {
		// ...
		page.mount();
	}
	```

## C.3. Le formulaire d'ajout de pizza
1. **Créez la classe `AddPizzaPage`** (dans un module `js/AddPizzaPage.js`) dont le titre est "Ajouter une pizza" et dont la méthode `render()` est surchargée comme suit :
	```js
	render():string {
		return `<form class="addPizzaPage">
			<label>
				Nom :
				<input type="text" name="nom" >
			</label>
			<button type="submit">Ajouter</button>
		</form>`;
	}
	```

2. **Dans le fichier `main.js` instanciez la classe `AddPizzaPage` puis, au "click" sur le lien "Ajouter une pizza"** affichez la `AddPizzaPage` à l'aide de `PageRenderer` :
	```js
	// addPizzaPage est une instance de la classe AddPizzaPage
	PageRenderer.renderPage( addPizzaPage );
	```
3. **Ajoutez une méthode `submit()` dans la classe `AddPizzaPage`.** Cette méthode sera appelée lorsque l'utilisateur soumettra le formulaire :
	```js
	submit(event:Event):void {
	  // ici le code de votre méthode
	}
	```
	Cette méthode va pour le moment juste afficher un message dans la console.

	***NB:** Souvenez vous de la méthode `event.preventDefault()`...*
3. **Overrider la méthode `mount()` dans la classe `AddPizzaPage`** et y ajouter un écouteur d'événement 'submit' sur la balise `<form class="addPizzaPage">` qui va déclencer la méthode `submit()` de l'instance.

	***NB :** Pour rappel, la valeur du `this` à l'intérieur d'un écouteur d'événement (fonction appelée par addEventListener) est toujours l'élément HTML qui a déclenché l'événement (ici le formulaire). Pour pouvoir appeler une méthode de l'instance, il faut forcer la valeur du `this` pour qu'elle corresponde toujours à l'instance dans laquelle le code s'exécute. Comme expliqué dans le pdf du cours, il existe plusieurs manières de le faire, mais celle que je vous recommande est l'emploi de la méthode [`bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) dans le constructeur de la classe :*
	```js
	class maClasse {
		constructor(){
			// $FlowFixMe : pour dire à flow d'ignorer la ligne suivante
			this.onClick = this.onClick.bind(this)
		}
		onClick(event:Event):void {
			// this est correct !
		}
	}
	```

## C.4. La validation de la saisie
1. **Au submit afficher dans la console la valeur saisie dans le champ "nom"**
2. **Si le champ "nom" est vide, afficher un message d'erreur** à l'aide de la fonction [`alert()`](https://developer.mozilla.org/fr/docs/Web/API/Window/alert)
3. **Si le champ "nom" n'est pas vide, afficher une alerte "La pizza xxxxx a été ajoutée"** (où "xxxxx" correspond au nom qu'a saisi l'utilisateur) **et vider le champ de saisie** pour permettre à l'utilisateur de saisir une nouvelle pizza.

## C.5. Le formulaire complet :
Coder le formulaire complet de création de pizza selon le code HTML suivant (tous les champs sont obligatoires) :
```html
<form class="add-pizza-page">
	<label>
		Nom :
		<input type="text" name="nom" >
	</label>
	<label>
		Base :
		<select name="base" >
			<option>Tomate</option>
			<option>Crème</option>
		</select>
	</label>
	<label>
		Prix petit format :
		<input type="number" name="prix_petite" >
	</label>
	<label>
		Prix grand format :
		<input type="number" name="prix_grande" >
	</label>
	<label>
		Ingrédients :
		<select name="ingredients">
			<option value="1">Mozzarella</option>
			<option value="2">Jambon</option>
			<option value="3">Champignon</option>
			<option value="4">Olives</option>
		</select>
	</label>
	<button type="submit">Ajouter</button>
</form>
```
