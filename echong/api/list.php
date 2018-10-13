<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "echongc";

    $conn = new mysqli($servername,$username,$password,$dbname);
      
   $conn->set_charset("utf8");

    $result = $conn->query("select * from list");
    $res = $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($res);

        
        $result->close();

        echo json_encode($res,JSON_UNESCAPED_UNICODE);

        $conn->close();
    
?>