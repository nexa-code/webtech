<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <style>
        .board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            gap: 5px;
        }
        .cell {
            width: 100px;
            height: 100px;
            font-size: 2em;
            text-align: center;
            line-height: 100px;
            border: 1px solid #000;
        }
    </style>
</head>
<body>
    <h1>Tic Tac Toe</h1>
    <form method="POST" action="">
        <div class="board">
            <?php
            session_start();

            // Initialize the game board if not already done
            if (!isset($_SESSION['board'])) {
                $_SESSION['board'] = array_fill(0, 9, '');
                $_SESSION['current_player'] = 'X';
            }

            // Handle user input
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                $cell = $_POST['cell'];
                if ($_SESSION['board'][$cell] == '') {
                    $_SESSION['board'][$cell] = $_SESSION['current_player'];
                    $_SESSION['current_player'] = $_SESSION['current_player'] == 'X' ? 'O' : 'X';
                }
            }

            // Display the game board
            foreach ($_SESSION['board'] as $index => $value) {
                echo "<button type='submit' name='cell' value='$index' class='cell'>$value</button>";
            }

            // Check for win conditions
            $winning_combinations = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
                [0, 4, 8], [2, 4, 6]             // diagonals
            ];

            $winner = '';
            foreach ($winning_combinations as $combination) {
                if ($_SESSION['board'][$combination[0]] &&
                    $_SESSION['board'][$combination[0]] == $_SESSION['board'][$combination[1]] &&
                    $_SESSION['board'][$combination[1]] == $_SESSION['board'][$combination[2]]) {
                    $winner = $_SESSION['board'][$combination[0]];
                    break;
                }
            }

            // Display game status
            if ($winner) {
                echo "<p>Player $winner wins!</p>";
                session_destroy(); // Reset the game
            } elseif (!in_array('', $_SESSION['board'])) {
                echo "<p>It's a draw!</p>";
                session_destroy(); // Reset the game
            } else {
                echo "<p>Player {$_SESSION['current_player']}'s turn.</p>";
            }
            ?>
        </div>
    </form>
</body>
</html>

