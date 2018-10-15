<?php
    $id = isset($_POST["id"])? $_POST["id"] : "";
    $name = isset($_POST["uname"])? $_POST["uname"] : "";
    $imgsrc = isset($_POST["imgsrc"])? $_POST["imgsrc"] : "";
    $title = isset($_POST["utitle"])? $_POST["utitle"] : "";
    $jieshao = isset($_POST["jieshao"])? $_POST["jieshao"] : "";
    $curprice = isset($_POST["curprice"])? $_POST["curprice"] : "";
    $oldprice = isset($_POST["oldprice"])? $_POST["oldprice"] : "";
    $xiaoji = isset($_POST["xiaoji"])? $_POST["xiaoji"] : "";
    $qty = isset($_POST["qty"])? $_POST["qty"] : "";
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'echongc';
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->set_charset('utf8');
    $result = $conn -> query('select * from delit where name="'.$name.'" and id="'.$id.'"');
    $c = $result -> fetch_assoc();

    
    if($c){
       $qty = ++$c["qty"];
       $res = $conn->query("update delit set qty=".$qty." where id=".$id);
    }else{
        $res = $conn ->query('insert into delit(id,name,imgsrc,title
,jieshao,curprice,oldprice,xiaoji,qty)values("'.$id.'","'.$name.'","'.$imgsrc.'","'.$title.'","'.$jieshao.'","'.$curprice.'","'.$oldprice.'","'.$xiaoji.'","'.$qty.'")');
    }

    
    // $c = select * from car where id=$id;

    if ($res) {
        echo "true";
    } else {
        echo "Error: " . $res . "<br>" . $conn->error;
    }





?>