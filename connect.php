<?php

require 'vendor/autoload.php';

$client = new MongoDB\Client(
    'mongodb+srv://admin:admin@cluster0.jouvv.mongodb.net/sample_mflix?retryWrites=true&w=majority'
);

?>
