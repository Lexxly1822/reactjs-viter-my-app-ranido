<?php

//check database 6

$conn = null;
$conn = checkDatabaseConnection();

//use model 
$contact = new Contact ($conn);

if (array_key_exists('id', $_GET)) {
    $contact->testimonials_aid = $_GET['id'];

    checkId($contact->testimonials_aid);
    $query = checkDelete($contact);
    http_response_code(200);
    returnSuccess($contact, 'contact delete', $query);
}

checkEndpoint();
