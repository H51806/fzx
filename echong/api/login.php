<?php
    $nickname = isset($_GET["username"])? $_GET["username"] : "02";
    $wpassword = isset($_GET["wpassword"])? $_GET["wpassword"] : "0055";


    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'echongc';
    $conn = new mysqli($servername, $username, $password, $dbname);



    $conn->set_charset('utf8');
    $result = $conn -> query('select * from login');
    $res = $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($res);
    foreach($res as $item){
            
            if($item ['name'] == $nickname && $item ['password']== $wpassword){
                 echo "true";
                 break;
            }
            // var_dump( $item ['passwords']);
        }
        
        $result->close();
        $conn->close();

?>