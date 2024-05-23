<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Bill Calculator</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background-image: url('https://www.mypunepulse.com/wp-content/uploads/2023/01/MSEDCL-employees-to-go-on-72-hour-strike-from-January-4-1-1024x538.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .container {
        position: relative;
        max-width: 700px;
        width: 100%;
        background: #fff;
        padding: 25px;
        border-radius: 15px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }

    .container header {
        font-size: 1.5rem;
        color: #333;
        font-weight: 500;
        text-align: center;
    }

    .container .form {
        margin-top: 30px;
    }
    </style>
</head>
<body>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h3>Bill Calculator</h3>
                </div>
                <div class="card-body">
                    <form action="calculate" method="post">
                        <div class="form-group">
                            <label for="unit">Total Unit / Kwh:</label>
                            <input type="text" class="form-control" id="unit" name="unit" placeholder="Input Units">
                        </div>
                        <button type="submit" class="btn btn-primary">Calculate</button>
                    </form>
                    <hr>
                    <% if (request.getAttribute("total") != null) { %>
                        <h4>Bill Calculation Result:</h4>
                        <p>Total bill amount: Rs. <%= request.getAttribute("total") %></p>
                    <% } %>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>
