<?php
// CORS enabled : cf. https://enable-cors.org/server_php.html
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

$url = "https://fr.airbnb.be/search/search_results";
// on transfère à l'api airbnb tous les paramètres GET que l'on reçoit
$url .= '?'.$_SERVER['QUERY_STRING'];

// chargement et affichage de la réponse brute de l'API appelée
$request = curl_init( $url );
curl_setopt($request, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec( $request );
curl_close( $request );
?>