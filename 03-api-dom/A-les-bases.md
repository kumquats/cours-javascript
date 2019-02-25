#### TP3 - API DOM <!-- omit in toc -->
# A. Les bases de l'API DOM <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [A.1. Installation](#a1-installation)
- [A.2. Sélectionner des éléments](#a2-sélectionner-des-éléments)
	- [A.2.1 querySelector()](#a21-queryselector)
	- [A.2.2. querySelectorAll()](#a22-queryselectorall)
- [A.3. Modifier des éléments](#a3-modifier-des-éléments)
	- [A.3.1. innerHTML](#a31-innerhtml)
	- [A.3.2. getAttribute/setAttribute](#a32-getattributesetattribute)
- [Étape suivante](#Étape-suivante)

***Ce TP va permettre de mettre en oeuvre les principales méthodes de sélection et de modification d'éléments de l'arbre DOM.***

## A.1. Installation
1. **Récupérez le contenu du dossier `demarrage`, il contient une solution du TP sur la POO, les modules et le typage qui servira de base pour ce TP sur l'API DOM.** Comme lors du TP précédent n'oubliez pas de lancer un serveur web dans ce dossier
	```bash
	cd /chemin/vers/votre/dossier/demarrage
	python3 -m http.server 8000
	```
	*Si vous avez des questions sur le lancement de ce serveur, ou sur la procédure à suivre dans le cas où vous n'utiliseriez pas les postes des salles de TP mais votre propre machine, relisez attentivement le [README du premier TP](../01-premiers-pas-en-js/README.md#Préparatifs) !*

2. **Ouvrez le fichier `package.json` et constatez que Babel, webpack et Flow sont listés dans les dépendances du projet.** Le dossier `demarrage` est en effet **déjà configuré pour l'utilisation de tous les outils nécessaires au dev JS moderne**. On va donc pouvoir tout installer facilement grâce à la commande :
	```bash
	npm install
	```
	(à lancer à la racine du dossier de votre projet, cad là où se trouve le fichier `package.json`)

	*Si vous voulez en savoir plus sur le détail de l'installation et de la configuration des différents outils, vous pouvez consulter les TPs précédents.*

## A.2. Sélectionner des éléments

### A.2.1 querySelector()
Comme vu en cours, la principale méthode pour sélectionner un élément de la page HTML est la méthode `querySelector()`.

querySelector() est une méthode de la classe Element qui permet de retourner une référence vers un élément de la page (une balise) à partir d'un sélecteur CSS. Par exemple :
```js
const appContainerElement:?HTMLElement = document.querySelector('#appContainer');
```
assigne dans la constante `appContainer` la balise d'id html 'appContainer' :
```html
<main id="appContainer">
```

Dans le fichier `main.js`, sélectionnez les éléments suivants et affichez les dans la console à l'aide de l'instruction `console.log()`. Par exemple si l'on demande d'afficher la balise d'id *"appContainer"* il faudra taper le code suivant :
```js
console.log( document.querySelector('#appContainer') );
```

Afficher dans la console :
1. La balise `<img>` qui contient le logo de la page (les 2 parts de pizza)
3. Le lien du menu "Ajouter une pizza"
4. Le lien vers le site [Unsplash](https://unsplash.com/) dans les crédits
5. le titre de la première pizza (*`<h4>Regina</h4>`*)

### A.2.2. querySelectorAll()
La méthode `querySelectorAll()` permet de récupérer non pas un, mais tous les éléments qui correspondent au sélecteur CSS passé en paramètre.

Affichez dans la console :
1. la liste des liens du menu de navigation ("La carte" et "Ajouter une pizza")
2. la liste des ingrédients de toutes les pizzas de la page

## A.3. Modifier des éléments
### A.3.1. innerHTML
La propriété `innerHTML` permet à la fois de lire et de modifier le contenu d'un Element HTML (le contenu HTML compris entre les balises ouvrantes et fermantes)

1. Affichez dans la console le titre de la deuxième pizza (*"Napolitaine"*)
2. Remplacez dans la page le titre de la deuxième pizza par *"Savoyarde"*
3. Ajoutez au titre de la page le code HTML suivant :
	```html
	<em>les pizzas c'est la vie</em>
	```

### A.3.2. getAttribute/setAttribute
Les méthodes `getAttribute()` et `setAttribute()` de la classe Element permettent de lire, d'ajouter ou de modifier des attributs HTML.

1. Affichez dans la console l'url du 2e lien contenu dans le footer (`"https://www.freepik.com/"`)
2. Ajoutez la classe CSS "active" au `<li>` qui contient le lien "La carte" dans le menu

## Étape suivante
Maintenant que l'on est capable de sélectionner / modifier des éléments HTML, nous allons voir dans le prochain exercice comment détecter les événements : [C. Les événements](./C-evenements.md).