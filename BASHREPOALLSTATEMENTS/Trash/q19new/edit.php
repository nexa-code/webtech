<?php

include "db.php";

if (!isset($_GET["id"]) || empty($_GET["id"])) {
    die("Invalid request. No ID specified.");
}

$id = $_GET["id"];

if (isset($_POST["update"])) {
    $name = $_POST['name'];
    $position = $_POST['position'];

    $sql = "UPDATE employee1 SET name='$name', position='$position' WHERE id = $id";

    $result = mysqli_query($conn, $sql);

    if ($result) {
        header("Location: index.php?msg=Data updated successfully");
        exit();
    } else {
        echo "Failed: " . mysqli_error($conn);
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change User Info</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>

<body>
    <div class="container mt-5">
        <h1>Change user info</h1>

        <?php
        $sql = "SELECT * FROM employee1 WHERE id = $id LIMIT 1";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        ?>

        <form action="edit.php?id=<?php echo $id; ?>" method="post">
            <!-- Include hidden input for passing id -->
            <input type="hidden" name="id" value="<?php echo $id; ?>">

            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" class="form-control" value="<?php echo $row['name'] ?>">
            </div>

            <div class="mb-3">
                <label for="position" class="form-label">Position</label>
                <input type="text" name="position" class="form-control" value="<?php echo $row['position'] ?>">
            </div>

            <button type="submit" name="update" class="btn btn-primary">Submit</button>
        </form>
    </div>

    <!-- Add Bootstrap JavaScript and Popper.js from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
</body>

</html>
