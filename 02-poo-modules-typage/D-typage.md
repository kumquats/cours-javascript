# TP 2 - POO - modules - typage <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [D. Typage](#d-typage)
	- [D.1 Installation et configuration](#d1-installation-et-configuration)
	- [D.2. Premiers tests](#d2-premiers-tests)
	- [D.3. intégration avec Babel](#d3-intégration-avec-babel)
	- [D.4. Intégration dans Visual Studio Code](#d4-intégration-dans-visual-studio-code)
	- [D.5. Typer notre code](#d5-typer-notre-code)
- [Étape suivante](#Étape-suivante)

## D. Typage
Comme vu en cours, il existe plusieurs solutions pour ajouter du typage statique dans notre code JS.

Celle que nous allons employer aujourd'hui se base sur [Flow](https://flow.org/).

### D.1 Installation et configuration

1. **Installez Flow (attention, cette commande est bien à lancer dans votre dossier de travail, là où se trouvent les fichiers index.html, package.json, .babelrc, etc.) :**
	```bash
	npm install --save-dev flow-bin
	```

2. **Initialisez flow à l'aide de la commande suivante :**
	```bash
	./node_modules/.bin/flow init
	```
5. **Lancez ensuite la vérification de vos fichiers en lançant :**
	```bash
	./node_modules/.bin/flow
	```
	Vous devriez avoir comme résultat final :
	```bash
	No errors!
	```
	En effet, pour le moment nos fichiers ne contiennent aucune information de typage !

### D.2. Premiers tests
1. **Dans le fichier `js/main.js` ajoutez le code suivant (au début du fichier):**
   ```js
   // @flow
   const i:number = '12';
   ```
2. **Relancez la commande `./node_modules/.bin/flow`.** Cette fois plusieurs erreurs doivent apparaître dans votre terminal :
	<br><a href="images/flow-error.jpg"><img src="images/flow-error.jpg" width="80%"></a>

	On a en réalité 3 erreurs :
	- la première concerne notre ligne `const i:number = '12';` ce qui est normal puisqu'on a volontairement tenté d'assigner une chaîne de caractères dans une variable typée "number". On peut supprimer cette ligne.
	- Les deux autres erreurs nous amènent à comprendre en quoi le typage des variables peut nous aider à avoir un code plus robuste... En effet l'erreur est la suivante :
		```bash
		Cannot assign title.render() to document.querySelector(...).innerHTML because property innerHTML is missing in null [1].
		```
		Ce que nous apprend cette ligne, c'est que la méthode `document.querySelector()` peut dans certains cas nous retourner une valeur vide (`null`). C'est en effet le cas par exemple si la page html ne contient pas de balise avec la classe CSS 'pageTitle', ou si le script s'exécute avant que la page ne soit complètement chargée.

		Si on laisse notre code tel quel, alors on s'expose à des bugs car dans l'hypothèse où querySelector retournerait `null`, la ligne
		```js
		document.querySelector('.pageTitle').innerHTML = title.render();
		```
		planterait aussitôt (impossible d'appeler la propriété "innerHTML" sur une valeur nulle !).

3. **Corrigez les deux erreurs remontées par Flow en décomposant les instructions `querySelector` et `innerHTML` en 2 étapes** :
	```js
	const titleElement:?HTMLElement = document.querySelector('.pageTitle');
	if ( titleElement ) {
		titleElement.innerHTML = title.render();
	}
	```

	Vous noterez qu'on en a profité pour typer la nouvelle variable titleElement dans un type compatible avec la valeur de retour de querySelector (on approfondira ce sujet lors du prochain cours sur l'API DOM).

	Faites de même pour la homePage et relancez flow, vous n'avez en principe plus d'erreur !

### D.3. intégration avec Babel
Si vous tentez de recompiler votre JS une fois les informations de typage ajoutées, vous verrez que webpack et babel n'arriveront plus à compiler votre code.

En effet, la syntaxe flow ne fait pas partie de la spec officielle d'EcmaScript.

On peut cependant assez facilement rendre tout ça compatible :
1. **Installez le preset babel flow** (qui va permettre à babel de comprendre les instructions de typage de flow) :
	```bash
	npm install --save-dev @babel/preset-flow
	```
2. **Dans le fichier `.babelrc` ajoutez le preset "flow"** :
	```json
	{
		"presets": [
	-		["@babel/env", {"modules": false}]
	+		["@babel/env", {"modules": false}],
	+		"@babel/flow"
		],
		"plugins": ["@babel/plugin-proposal-class-properties"],
	}
	```
3. **Relancez la compilation à l'aide de la commande `npm run build` ou `npm run watch`**, vérifiez que tout compile correctement et que l'affichage dans le navigateur est inchangé.

### D.4. Intégration dans Visual Studio Code
Pour permettre à Visual Studio Code de comprendre les informations de typage flow, installez l'extension : https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode

1. Activez l'extension une fois installée en relançant vscode
2. Ouvrez les préférences de vscode (<kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> &gt; Préférences : Ouvrir les paramètres <u>d'espace de travail</u>)
3. recherchez la clé "Javascript › Validate: Enable" et décochez la case pour désactiver le système de vérification du JS intégré à VSCode
4. recherchez la clé "Flow : Use NPMPackaged Flow" et cochez la case pour permettre à l'extension d'utiliser la version de flow qui est installée dans le projet.
5. Vérifiez que le dossier que vous avez ouvert dans VSCode correspond bien au dossier "demarrage" : à la racine du dossier, dans l'explorateur de VSCode, vous devez trouver le dossier `node_modules`

Désormais si vos fichiers comportent l'annotation `// @flow` alors le plugin va afficher les éventuelles erreurs de typage !

## Ça y est ! <!-- omit in toc -->
***vous avez un environnement de travail prêt à utiliser les dernières technologies JS : des classes avec une syntaxe moderne, des modules et du typage, tout en conservant une compatibilité avec les vieux navigateurs. La vie est belle !***

***Ceci étant dit le travail n'est pas terminé :***

### D.5. Typer notre code
**Maintenant que flow est installé, ajoutez les informations de typage aux différents fichiers de notre application (main, Component, Img, PizzaThumbnail, HomePage):**
 - typer toutes les variables (let, const)
 - typer les propriétés d'instances
 - typer les paramètres de méthodes et de fonctions
 - typer les valeurs de retour des méthodes et fonctions

 ***NB:** Ne pas oublier d'ajouter le commentaire `// @flow` en entête de chaque fichier modifié*


## Étape suivante
Si vous avez terminé cet exercice et que l'ensemble de votre code est correctement typé, vous pouvez passer à la suite : [Pour aller plus loin](E-pour-aller-plus-loin.md)