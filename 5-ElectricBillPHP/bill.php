<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Assignment4 - Bill Calculator</title>

    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">

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

    .parentbill {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 20px;
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

    <script src="http://code.jquery.com/jquery.js"></script>

    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>

</head>

<body>

    <div class="container">
        <h1>Bill Calculator</h1>
        <form action="" method="POST" role="form">
            <div class="parentbill">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Total Unit / Kwh</label>
                        <input type="text" class="form-control" name="unit" placeholder="Input Units">
                    </div>
                </div>

                <div>
                    <button type="submit" class="btn btn-primary">Get Price</button>
                </div>
            </div>
        </form>

        <hr>
        <?php
        if (isset($_POST['unit'])) {
            $total = 0;
            $unit = (int) $_POST['unit'];

            function calculate($unit, $range, $price)
            {
                $xunit = $range[1] - $range[0] + 1;
                if ($unit <= $xunit && $unit > 0) {
                    $bill = $unit * $price;
                    echo "
						<tr>
							<td>" . implode("-", $range) . "</td>
							<td>$price</td>
							<td>$unit</td>
							<td>$bill Rs.</td>
						</tr>
						";
                    return array($unit - $xunit, $bill);
                } elseif ($unit > $xunit) {
                    $bill = $xunit * $price;
                    $newUnit = $unit - $xunit;
                    echo "
						<tr>
							<td>" . implode("-", $range) . "</td>
							<td>$price</td>
							<td>" . $xunit . "</td>
							<td>$bill Rs.</td>
						</tr>
						";
                    return array($newUnit, $bill);
                }
            }

            echo "<h3>Calculating bill for $unit Unit</h3>";

            echo "<hr><br><h4>For first 50 -> 3.50</h4> <h4>Next 100 -> 4</h4> <h4>Next 100 -> 5.20</h4> <h4>Above 250 -> 6.5</h4><br><hr>";

            echo "<table class=\"table table-hover\">
			<thead>
				<tr>
					<th>Range</th>
					<th>Price/Unit</th>
					<th>Unit</th>
					<th>Bill</th>
				</tr>
			</thead>
			<tbody>
				
			";

            $newUnit = 0;
            if ($unit > 0) {
                $rep = calculate($unit, array(1, 50), 3.50);
                $newUnit = $rep[0];
                $total += $rep[1];
            }
            if ($newUnit > 0) {
                $rep = calculate($newUnit, array(51, 150), 4);
                $newUnit = $rep[0];
                $total += $rep[1];
            }
            if ($newUnit > 0) {
                $rep = calculate($newUnit, array(151, 250), 5.20);
                $newUnit = $rep[0];
                $total += $rep[1];
            }
            if ($newUnit > 0) {
                $rep = calculate($newUnit, array(251, 1000000), 6.50);
                $newUnit = $rep[0];
                $total += $rep[1];
            }
            $meter = $_POST['meter'];
            $newTotal = $total + $meter;
            echo "
				
			</tbody>
			<tfoot>
				<tr>
					<th></th>
					<th></th>
					<th>Bill</th>
					<th>$newTotal Rs.</th>
			</tfoot>
		</table>";
        }
        ?>

    </div>
</body>

</html>