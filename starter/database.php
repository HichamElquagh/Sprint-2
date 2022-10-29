<?php    
    //CONNECT TO MYSQL DATABASE USING MYSQLI
    $servername ="localhost";
    $username ="root";
    $password ="";
    $namedatatbase  ="youcodescrumboard";

    global $conn ;

    $conn = mysqli_connect($servername,$username,$password,$namedatatbase);
    if($conn){
        echo "connect successful";
    }
    else {
        die(mysql_error($conn));
    } 
?>