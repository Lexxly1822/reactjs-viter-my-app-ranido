<?php

//check database 6

$conn = null;
$conn = checkDatabaseConnection();

//use model 
$Testimonials = new Testimonials($conn);

if (array_key_exists('id', $_GET)) {
    $Testimonials->testimonials_aid = $_GET['id'];

    checkId($Testimonials->testimonials_aid);
    $query = checkDelete($Testimonials);
    http_response_code(200);
    returnSuccess($Testimonials, 'web sevices delete', $query);
}

checkEndpoint();
