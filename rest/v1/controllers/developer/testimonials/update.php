<?php

//declare db variable
$conn = null;
// use db 
$conn = checkDatabaseConnection();

//Use model
$testimonials = new Testimonials($conn);


if (array_key_exists('id', $_GET)) {
    checkPayload($data);

    $testimonials->testimonials_aid = $_GET['id'];
    $testimonials->testimonials_image = checkIndex($data, 'testimonials_image');
    $testimonials->testimonials_description = $data['testimonials_description'];
    $testimonials->testimonials_name = $data['testimonials_name'];
    $testimonials->testimonials_position = $data['testimonials_position'];
    $testimonials->testimonials_updated = date("Y-m-d H:i:s");


    $query = checkUpdate($testimonials);
    returnSuccess($testimonials, 'testimonials update', $query);
}

checkEndpoint();
