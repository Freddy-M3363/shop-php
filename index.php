<?php
$api_key = '80f69bd173df46efb01194636242203';
$location = isset($_GET['location']) ? $_GET['location'] : 'London'; // Default to London 

$url = "https://api.weatherapi.com/v1/current.json?key=$api_key&q=$location";
$response = file_get_contents($url);
echo $response;