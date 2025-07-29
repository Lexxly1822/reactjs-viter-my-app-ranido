<?php

// database variable 
$conn = null;
//connect to database and store in conn variable
$conn = checkDatabaseConnection();
//use models
$contact = new Contact ($conn);
//no id shall pass = gate

if (array_key_exists('id', $_GET)) {
    checkEndpoint();
}
//check data
checkPayload($data);
$contact->contact_is_active = 1;
$contact->contact_fullname = checkIndex($data, 'contact_fullname'); // call the contact name galing sa data
$contact->contact_email = checkIndex($data, 'contact_email');
$contact->contact_message = checkIndex($data, 'contact_message');
$contact->contact_created = date("Y-m-d H:i:s");
$contact->contact_updated = date("Y-m-d H:i:s");

$query = checkCreate($contact);
returnSuccess($contact, 'contact create', $query);
