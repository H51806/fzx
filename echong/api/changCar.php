<?php
    $id = isset($_POST["id"])? $_POST["id"] : "666";
    $uname = isset($_POST["uname"])? $_POST["uname"] : "666";
    $qty = isset($_POST["qty"])? $_POST["qty"] : "0055";

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'echongc';
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->set_charset('utf8');
    $result = $conn -> query('select * from delit where name="'.$uname.'" and id="'.$id.'"');
    $c = $result -> fetch_assoc();
    if($c){
        $res = $conn->query('update delit set qty='.$qty.' where name="'.$uname.'" and id="'.$id.'"');
    }
    if ($res) {
        echo "true";
    } else {
        echo "Error: " . $res . "<br>" . $conn->error;
    }





?>