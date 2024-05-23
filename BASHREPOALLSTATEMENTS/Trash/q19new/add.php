<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.18.0/font/bootstrap-icons.css">
    <title>Document</title>
</head>

<body>
    <div class="container mt-5">
        <form action="add.php" method="post">
            <label for="id">ID</label>
            <input type="number" name="id" class="form-control">

            <label for="name">Name</label>
            <input type="text" name="name" class="form-control">

            <label for="position">Position</label>
            <input type="text" name="position" class="form-control">

            <button type="submit" class="btn btn-primary mt-3">Submit</button>
        </form>
    </div>

    <?php

    include 'db.php';

    $conn = mysqli_connect($servername, $username, $password, $db);

    if (!$conn) {
        die("Connection failed : " . mysqli_connect_error());
    }


    if ($_SERVER['REQUEST_METHOD'] ===  'POST') {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $position = $_POST['position'];

        $sql = "INSERT INTO employee1 (id, name, position) VALUES ('$id', '$name', '$position')";

        $result = mysqli_query($conn, $sql);
        if ($result) {
            echo "Added succesfully";
            echo '<script>alert("Added successfully");</script>';
            header("Location: index.php"); // Redirect to index.php
            exit(); // Make sure to exit after the redirect to prevent further execution
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }

    mysqli_close($conn);


    ?>
    <!-- Add Bootstrap JavaScript and Popper.js from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

</body>

</html>