# TP API DOM

## Objectifs
Interagir avec la page html en JavaScrip via l'API DOM.
Se familiariser avec la norme ES6 et les outils associés.

## Préparatifs
- installer un serveur apache/php (sur windows [Apachefriends xampp](https://www.apachefriends.org/fr/index.html) ou [wampserver](http://www.wampserver.com/))
- installer node.js (version 7.x.x) : si une ancienne ersion est installée, la désinstaller avant d'installer la nouvelle version
- créer un dossier pour le projet et y placer le contenu du dossier de démarrage fourni dans ce repo.
- dans ce dossier, installer & configurer babel qui permettra de coder le TP en ES6
NB : la page inclue jQuery (nécessaire pour les composants bootstrap de la page), mais vous ne pouvez pas utiliser cette librairie pour ce TP :)

## Instructions
1. Au clic sur le lien "à propos" du menu, afficher la div de class "popin" présente dans la page HTML (mais initialement masquée).
2. Au clic sur le bouton "fermer", la croix ou en dehors de la popin, la refermer.
3. Au clic sur chacun des liens du menu principal (sauf "à propos"), afficher le titre du lien cliqué dans la balise h1 de la section de classe "main". Associer un contenu différent à chaque lien et l'afficher dans la balise `<article>` lorsqu'un lien est cliqué
4. Dans le code HTML, supprimer les liens du menu (sauf "à propos") et les recréer en JS au chargement de la page. On doit toujours pouvoir cliquer dessus et leur comportement doit être inchangé.
5. dans la page "accueil", reprendre le code html présent dans "formulaire.html.tpl" et mettre en place (en JavaScript) une vérification de la saisie de l'utilisateur avec les règles de gestion suivantes : 
- le lieu est obligatoire
- la date de début doit être supérieure ou égale à la date du jour
- la date de fin doit être supérieure à la date de début
- le prix max doit être supérieur au prix min

## Pour aller plus loin
- intégrer Flow
- obfusquer et minifier le code généré
- faire le TP : https://github.com/kumquats/formation-js-perfectionnement/tree/master/1.2-api-dom