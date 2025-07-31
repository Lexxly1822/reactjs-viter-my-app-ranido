
<?php 
//set http header 11111111
require '../../../core/header.php';
//use needed functions
require '../../../core/functions.php';
//use model 
require '../../../models/developer/web-services/WebServices.php';

//conn
$conn = null;
$conn = checkDatabaseConnection();
//get payload 
$body = file_get_contents("php://input");
$data = json_decode($body, true);

//MODELS  
$WebServices = new WebServices($conn);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    if (array_key_exists('start', $_GET)) {
        $WebServices->web_services_start = $_GET['start'];
        $WebServices->web_services_total = 5;

        checkLimitId($WebServices->web_services_start, $WebServices->web_services_total);

        $query = checkReadLimit($WebServices);
        $total_result = checkReadAll($WebServices);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,

            $WebServices->web_services_total,
            $WebServices->web_services_start,


        );
    }
}

checkEndpoint();
