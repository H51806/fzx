<?php
     $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'echongc';
    $conn = new mysqli($servername, $username, $password, $dbname);



        $conn->set_charset('utf8');
        $result = $conn -> query('select * from shouye');
        $res = $result->fetch_all(MYSQLI_ASSOC);

        echo json_encode($res,JSON_UNESCAPED_UNICODE);
        $result->close();
        $conn->close();










?>