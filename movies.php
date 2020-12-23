<?php

require 'connect.php';

$collection = $client->sample_mflix->movies;
$result = $collection->find()->toArray();

echo json_encode($result);

?>
