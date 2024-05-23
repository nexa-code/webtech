<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        session_start();
        // Check if the user is not logged in
        if (!isset($_SESSION['username'])) {
            header("Location: index.html");
            exit();
        }
        ?>
        <h2>Welcome</h2>
        <?php
        $timeout = 60;
        $_SESSION['timeout'] = time() + $timeout;

        $username = $_SESSION['username'];
        echo "<h2>Welcome $username</h2>";

        // Check for session timeout
        if (isset($_SESSION['timeout']) && time() > $_SESSION['timeout']) {
            // Session has timed out, log the user out
            session_unset();
            session_destroy();
            session_write_close(); // Add this line
            header("Location: login.php");
            exit();
        }
    ?>
</body>
</html>
