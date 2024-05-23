<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        include 'config.php';
        $query = "Select name from form";
        $result = mysqli_query($conn, $query);
        ?>
        <form action="form.php" method="POST">
        <select name="name">
        <?php
        while($row=mysqli_fetch_array($result)){
            ?>
                <option value="<?php echo $row['name']; ?>"><?php echo $row['name']; ?></option>
            <?php
        }
        ?>
        </select>
        <input type="submit" name="delete" value="Delete">
        </form>
</body>
</html>