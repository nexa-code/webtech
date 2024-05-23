<?php

    include '../config.php';
    if(isset($_POST['login'])){
        $username = $_POST['username'];
        $password = $_POST['password'];
        $query = "select * from login where username='$username' and password='$password'";
        $result = mysqli_query($conn, $query);
        if(mysqli_num_rows($result) > 0){
            session_start();
            $_SESSION['username'] = $username;
            header("Location: home.php");
        }
        else{
            echo "Error Occureed".mysqli_error($conn);
        }
    }

?>