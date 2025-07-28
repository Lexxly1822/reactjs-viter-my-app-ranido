<?php

//check database 6

$conn = null;
$conn = checkDatabaseConnection();

//use model 
$webServices = new WebServices($conn);

if (array_key_exists('id', $_GET)) {
    $webServices->web_services_aid = $_GET['id'];

    checkId($webServices->web_services_aid);
    $query = checkDelete($webServices);
    http_response_code(200);
    returnSuccess($webServices, 'web sevices delete', $query);
}

checkEndpoint();
