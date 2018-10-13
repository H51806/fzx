<?php
    $nickname = isset($_GET["name"])? $_GET["name"] : "666";
    // var_dump($nickname);
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
            
            if($item ['name']== $nickname){
                 echo "true";
                 break;
            }
            
        }
        
        $result->close();
        $conn->close();




   



?>