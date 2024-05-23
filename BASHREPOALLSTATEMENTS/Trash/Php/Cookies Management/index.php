<?php
    $cookie_name = "user";
    $cookie_value = "John Doe";
    setcookie($cookie_name, $cookie_value, time() + 30, "/");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie Example</title>
</head>
<body>
    <?php
        if (isset($_COOKIE[$cookie_name])) {
            echo "Cookie $cookie_name is set!<br>";
            echo "Value is: " . $_COOKIE[$cookie_name];
        } else {
            echo "Cookie named $cookie_name is not set!";
        }
    ?>

    <!-- <script>
        var userCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('user='));
        if (userCookie) {
            var cookieValue = userCookie.split('=')[1];
            document.write("<br>Value is (JavaScript): " + cookieValue);
        }
    </script> -->
</body>
</html>
