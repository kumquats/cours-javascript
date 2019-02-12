# TP 2 - POO - modules - typage <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [C. Modules](#c-modules)
	- [C.1. Le support natif des modules dans les navigateurs modernes](#c1-le-support-natif-des-modules-dans-les-navigateurs-modernes)
	- [C.2. Rendre les modules compatibles avec les vieux navigateurs](#c2-rendre-les-modules-compatibles-avec-les-vieux-navigateurs)
- [Étape suivante](#Étape-suivante)

## C. Modules
**Comme vu en cours, le système de modules ES6 permet de répartir son code dans plusieurs fichiers et de gérer les dépendances de l'application fichier par fichier plutôt que d'avoir à maintenir une liste exhaustive des scripts à charger dans le fichier html.**

Le [support navigateur des modules ES6](https://caniuse.com/#feat=es6-module) est plutôt bon mais pas encore suffisant pour des applications grand public (absence de support sur IE et android 4.4).

Dans un premier temps nous allons mettre de côté ce problème et nous appuyer sur le fait que les dernières versions de Chromium/Chrome et FireFox supportent nativement les modules ES6. Par la suite nous verrons comment solutionner ce problème de compatibilité à l'aide de Webpack.
### C.1. Le support natif des modules dans les navigateurs modernes
1.  **Avant d'utiliser le système de modules et les instructions `import`/`export`, il faut indiquer au navigateur que notre fichier main.js est lui même un module.** Pour cela, ajouter un attribut `type="module"` dans la balise `<script>` du fichier `index.html` :
	```html
	<script type="module" src="js/main.js"></script>
	```
	Vous notez que l'attribut `"defer"` n'est plus nécessaire car il est implicite pour les modules.
2. **Il faut ensuite configurer Babel.** En effet, par défaut Babel va chercher à compiler toutes les instructions `import`et `export` qu'il trouvera pour les transformer en code compatible ES5 (mais qui nécessite l'emploi de librairies supplémentaires). Ici on veut utiliser le support natif du navigateur pour les modules ES6, par conséquent il faut indiquer à Babel de ne pas compiler les `import`/`export`. Modifiez le fichier `.babelrc` comme suit (notez le tableau dans un tableau !) :
	```json
	"presets": [
		["@babel/env", {"modules": false}]
	],
	```

3.  **Passez enfin la variable `data` ainsi que les classes `Component`, `Img`, `PizzaThumbnail` et `HomePage` dans des modules ES6 distincts (un module par classe)**. Rappelez vous, tout ce qui est défini dans un module (variables, fonctions, classes), n'existe qu'à l'intérieur du module sauf s'il est exporté puis importé dans un autre fichier.

	Le fichier `main.js` conservera uniquement :
    - l'instanciation et l'affichage (`render()`) du composant de titre
    - l'instanciation et l'affichage (`render()`) de la `homePage`

	*NB: Pour rappel, exporter par défaut une constante sur la même ligne que sa création est interdit :*
	```js
	export default const data = [...]; // ERREUR !
	```
	*Il faut obligatoirement faire cela en deux étapes :*
	```js
	const data = [...];
	export default data; // OK !
	```
	***NB1:** Un export simple (pas par défaut) est en revanche autorisé :*
	```js
	export const data = [...]; // OK !
	```
	***NB2:** Cette restriction ne s'applique pas aux fonctions et aux classes ; on peut tout à fait faire :*
	```js
	export default class Component {...} // OK !
	```

4. **Compilez votre code et testez la page dans le navigateur** : le résultat doit être identique à celui obtenu précédemment :<br><a href="images/pizzaland-05.jpg"><img src="images/pizzaland-05.jpg" width="80%"></a>

5. **Ouvrez l'onglet Réseau/Network des devtools, vous devez normalement voir le chargement automatique des différents modules** (une ligne par fichier JS) :<br><a href="images/pizzaland-06-modules.jpg"><img src="images/pizzaland-06-modules.jpg" width="80%"></a>

### C.2. Rendre les modules compatibles avec les vieux navigateurs

**Pour rendre nos modules compatibles avec les anciens navigateurs, il faut utiliser un "bundler".** Cet outil va permettre d'assembler en un seul fichier toutes les dépendances (tous les scripts JS) de notre application. Le navigateur n'a alors qu'un seul fichier à charger et plus à se soucier des modules.

Comme vu en cours, le bundler le plus employé en JS est [Webpack](https://webpack.js.org/), c'est donc cet outil que l'on va installer et configurer.

1. **Dans le fichier `index.html`, retirez l'attribut `type="module"` de la balise script et remettez l'attribut `defer`. Remplacez aussi le nom du fichier `build/main.js` par `build/main.bundle.js`.** C'est en effet une pratique courante de nommer les fichiers de ce type avec le mot "bundle".

2. **Installez webpack** à l'aide de la commande suivante :
	```bash
	npm install --save-dev webpack webpack-cli babel-loader
	```
2. **Créez à la racine du dossier `demarrage`(au même niveau que le `package.json` et le `.babelrc`) un fichier `webpack.config.js`** et placez y le code suivant :
	```js
	const path = require('path');

	module.exports = {
		// Fichier d'entrée
		entry: './js/main.js',
		// Fichier de sortie
		output: {
			path: path.resolve(__dirname, './build'),
			filename: 'main.bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/, // tous les fichiers .js
					exclude: /node_modules/, // sauf le dossier node_modules
					use: { // seront transpilés par babel
						loader: 'babel-loader',
					}
				}
			]
		},
		devtool: 'source-map'
	}
	```

3. **Modifiez les scripts `"build"` et `"watch"` du fichier `package.json` pour replacer babel par webpack** (*notez quand même que babel sera toujours utilisé, mais c'est webpack qui va directement le piloter*):
	```json
	"build": "webpack --mode=production",
    "watch": "webpack --mode=development --watch"
	```
4. **Lancez la compilation** à l'aide de la commande `watch`
5. **Enfin, vérifiez dans le navigateur que la page s'affiche toujours** et que dans l'onglet "Réseau"/"Network" vous n'avez maintenant bien plus qu'un seul fichier JS téléchargé par le navigateur : le `build/main.bundle.js`<a href="images/pizzaland-07-modules-webpack.jpg"><img src="images/pizzaland-07-modules-webpack.jpg" width="80%"></a>

## Étape suivante
Maintenant que les modules sont en place on va voir comment renforcer le typage du code JS de notre application dans la partie suivante: [Le typage](D-typage.md).