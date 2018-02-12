# TP Premiers pas

## Objectifs
Mettre en place son environnement de développement et manipuler les premiers types et fonctions de base de JavaScript.

## Préparatifs
1. installer un serveur apache/php (sur windows [Apachefriends xampp](https://www.apachefriends.org/fr/index.html) ou [wampserver](http://www.wampserver.com/)) nécessaire pour faire tourner votre page web (utiliser toujours le protocole http pour tester vos développements et pas file://...)
2. Installer un éditeur de code optimisé pour le développement web : [VSCode](https://code.visualstudio.com/), [SublimeText](https://www.sublimetext.com/), [Atom](https://atom.io/), ...
3. créer un dossier pour ce TP dans un emplacement accessible en http (répertoire htdocs pour xampp) et y placer le contenu du dossier de démarrage fourni dans ce repo. Puis vérifier dans le navigateur que la page peut bien se charcher en y accédant en **http** (`http://localhost/chemin-vers-mon-dossier/index.html`)
4. inspecter le code HTML de la page à l'aide des devtools du navigateur

*Indice : en JavaScript, le caractère qui représente un saut de ligne est `'\n'`.*

## Instructions
1. **Créer un sous dossier `js`** et y créer un nouveau fichier `main.js`
2. **Inclure le fichier `main.js` dans le fichier `index.html` à l'aide d'une balise `<script>`.** <br>**NB :** *De manière générale et sauf cas particuliers, pour éviter que le chargement du fichier JS ne ralentisse l'affichage de la page html, les balises script sont placées en fin de fichier html, juste **avant** la balise fermante `</body>`*
3. **Créer une variable nommée `html`.** Sa valeur initiale sera le contenu html de la balise ayant comme id **"slideshow"**. La récupération du code html de cette balise peut se faire à l'aide de l'instruction :
	```js
	document.querySelector('#slideshow').innerHTML
	/* retourne le code html contenu dans la balise d'id "slideshow" (sous la forme d'une String) */
	```
4. **Manipuler la chaîne de caractères** contenue dans la variable html pour lui appliquer les transformations suivantes :
	- ajouter des liens (balises `<a>`) autour de chaque balise `<span>`;
	- chaque lien doit avoir un attribut `href` ayant comme valeur le texte qui se trouve dans le `<span>`
	- remplacer les balises `<span></span>` par des balises `<img>` ayant comme attribut `src` le contenu des balises `<span>`
5. **Remplacer le contenu de la balise "slideshow"** par la chaîne de caractères ainsi transformée à l'aide de l'instruction :
	```js
	document.querySelector('#slideshow').innerHTML = html;
	/* modifie le code html de la balise d'id "slideshow" (prend en paramètre une String) */
	```
6. **Créer une fonction `slideNext()`** qui décale les images d'un cran vers la gauche (la 1ère devient la 3ème, la 2ème devient la 1ère, et la 3ème devient la 2ème) (la tester à l'aide de la console).
7. **Créer une fonction `slidePrev()`** qui décale les images d'un cran vers la droite (la 1ère devient la 2ème, la 2ème devient la 3ème et la 3ème devient la 1ère) (la tester à l'aide de la console).

## Pour aller plus loin
- ajouter un défilement automatique toutes les 2 secondes à l'aide de la fonction `setInterval()` (documentation : https://developer.mozilla.org/fr/docs/Web/API/WindowTimers/setInterval)
- n'afficher que la première image du diaporama