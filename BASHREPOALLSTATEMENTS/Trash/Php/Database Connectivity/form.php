<?php
    include '../config.php';
    if(isset($_POST['insert'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        
        $insert = "INSERT INTO form(name, email, phone) values('$name', '$email','$phone')";
        $result = mysqli_query($conn, $insert);
        if($result){
            ?>
            <script>
                alert("Data Inserted");
            </script>
            <?php
        }
        else{
            ?>
            <script>
                alert("Data not inserted");
            </script>
            <?php
        }
        
    }

    if(isset($_POST['delete'])){
        $name = $_POST['name'];
        $delete = "DELETE FROM form WHERE name='$name'";
        $result = mysqli_query($conn, $delete);
        if($result){
            ?>
            <script>
                alert("Data Deleted");
            </script>
            <?php
        }
        else{
            ?>
            <script>
                alert("Data not Deleted");
            </script>
            <?php
        }
    }

    header("Location: ". $_SERVER['HTTP_REFERER']);
    exit();
?>