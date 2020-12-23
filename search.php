<?php

require 'connect.php';

$collection = $client->sample_mflix->movies;

$regex = new MongoDB\BSON\Regex (".*" . preg_quote($_GET["title"]) . ".*", "i");
$result = $collection->find(["title" => $regex])->toArray();

echo json_encode($result);

?>
