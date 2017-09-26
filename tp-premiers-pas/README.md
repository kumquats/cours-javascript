# TP Premiers pas

## Objectifs
Mettre en place son environnement de développement et manipuler les premiers types et fonctions de base de JavaScript.

## Préparatifs
- installer un serveur apache/php (sur windows [Apachefriends xampp](https://www.apachefriends.org/fr/index.html) ou [wampserver](http://www.wampserver.com/)) nécessaire pour faire tourner votre page web (utiliser toujours le protocole http pour tester vos développements et pas file://...)
- Installer un éditeur de code optimisé pour le développement web : [SublimeText](https://www.sublimetext.com/), [VSCode](https://code.visualstudio.com/), [Atom](https://atom.io/), ...
- créer un dossier pour ce TP dans un emplacement accessible en http (répertoire htdocs pour xampp) et y placer le contenu du dossier de démarrage fourni dans ce repo.
- inspecter le code HTML de la page

## Instructions
1. Créer un sous dossier `js` et y créer un nouveau fichier `main.js`
2. Inclure ce fichier dans le fichier `index.html`
3. Créer une variable `html`. Lui affecter comme valeur le code html de la balise ayant comme id **"slideshow"**. La récupération du code html d'une balise peut se faire à l'aide de l'instruction :
```js
document.getElementById('slideshow').innerHTML 
/* retourne le code html contenu dans la balise d'id "slideshow" (sous la forme d'une String) */
```
4. Manipuler la chaine de caractères contenue dans la variable html pour lui appliquer les transformations suivantes :
- ajouter des liens (balises `<a>`) autour de chaque balise `<span>`;
- chaque lien doit avoir un attribut `href` ayant comme valeur le texte qui se trouve dans le `<span>`
- remplacer les balises `<span></span>` par des balises `<img>` ayant comme attribut `src` le contenu des balises `<span>`
5. Remplacer le contenu de la balise **"slideshow"** par la chaine de caractères ainsi transformée à l'aide de l'instruction :
```js
document.getElementById('slideshow').innerHTML = html;
/* modifie le code html de la balise d'id "slideshow" (prend en paramètre une String) */
```
6. Créer une fonction `slideNext()` qui décale les images d'un cran vers la gauche (la 1ère devient la 3ème, la 2ème devient la 1ère, et la 3ème devient la 2ème) (la tester à l'aide de la console).
7. Créer une fonction `slidePrev()` qui décale les images d'un cran vers la droite (la 1ère devient la 2ème, la 2ème devient la 3ème et la 3ème devient la 1ère) (la tester à l'aide de la console).

## Pour aller plus loin
- ajouter un défilement automatique toutes les 2 secondes à l'aide de la fonction `setTimeout()`