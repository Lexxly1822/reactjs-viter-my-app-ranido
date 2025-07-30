<?php

// database variable 
$conn = null;
//connect to database and store in conn variable
$conn = checkDatabaseConnection();
//use models
$contact = new Contact($conn);
//no id shall pass = gate

if (array_key_exists('id', $_GET)) {
    checkPayload($data);

    $contact->contact_aid = $_GET['id'];
    $contact->contact_fullname = checkIndex($data, 'contact_fullname'); // call the contact name galing sa data
    $contact->contact_email = checkIndex($data, 'contact_email');
    $contact->contact_message = checkIndex($data, 'contact_message');
    $contact->contact_updated = date("Y-m-d H:i:s");

    $contact_email_old = $data['contact_email_old'];

    compareEmail($contact, $contact_email_old, $contact->contact_email);


    $query = checkUpdate($contact);
    returnSuccess($contact, 'contact update', $query);
}
//check data

checkEndpoint();
