<?php
// CORS enabled : cf. https://enable-cors.org/server_php.html
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

$url = "https://www.airbnb.fr/api/v2/explore_tabs?key=d306zoyjsyarp7ifhu67rjxn52tv0t20&currency=EUR&locale=fr&refinement_paths%5B%5D=%2Fhomes&is_guided_search=true";
// on transfère à l'api airbnb tous les paramètres GET que l'on reçoit
$url .= '&'.$_SERVER['QUERY_STRING'];

// chargement et affichage de la réponse brute de l'API appelée
$request = curl_init( $url );
curl_setopt($request, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec( $request );
curl_close( $request );
?>