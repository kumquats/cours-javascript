# TP AJAX JQUERY

## Objectifs
Lancer des appels asynchrones en AJAX et mettre en pratique la librairie jQuery.

## Préparatifs
- repartir des fichiers du précédent TP
- récupérer le fichier proxy.php et le placer sur un hébergement PHP avec l'extension CURL activée

## Instructions
1. lors de la soumission du formulaire, s'il n'y a pas d'erreur lancer un appel ajax vers le script `proxy.php`
2. afficher les résultats avec leur titre et l'image de chaque logement retourné
3. compléter la requête AJAX en passant en GET les valeurs saisies par l'utilisateur dans le formulaire. Le nom des paramètres GET à ajouter à la requête sont : 
    + guests
    + location
    + checkin=jj/mm/aaaa
    + checkout=jj/mm/aaaa
    + price_min
    + price_max


## Pour aller plus loin
- afficher au dessus des résultats une carte google maps avec les logements affichés
- au clic sur un logement, afficher la page de détail du logement