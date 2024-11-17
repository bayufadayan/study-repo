<?php
session_start();

if (!isset($_SESSION['todos'])) {
    $_SESSION['todos'] = [
        ['todo' => 'Ini mah data default', 'status' => 1],
        ['todo' => 'Aplikasi nya ke Restart sih kayaknya', 'status' => 0],
        ['todo' => 'Bersih-bersih rumah', 'status' => 1]
    ];
}

$todos = $_SESSION['todos'];

if (isset($_POST["todo"])) {
    $data = $_POST['todo'];
    $todos[] = [
        'todo' => $data,
        'status' => 0,
    ];

    saveData($todos);
}

if (isset($_GET['status'])) {
    $todos[$_GET['key']]['status'] = $_GET['status'];

    saveData($todos);
}

if (isset($_GET['hapus'])) {
    unset($todos[$_GET['key']]);

    saveData($todos);
}

function saveData($todos)
{
    // Simpan array ke dalam sesi
    $_SESSION['todos'] = $todos;
    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
    <style>
        /* CSS tetap sama seperti sebelumnya */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f8ff;
            margin: 0;
            padding: 20px;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        form {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            align-items: center;
        }

        input[type="text"] {
            width: 300px;
            padding: 8px;
            margin-right: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }

        button {
            background-color: #4CAF50;
            color: white;
            padding: 8px 12px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

        ul {
            list-style-type: none;
            padding: 0;
            max-width: 600px;
            margin: 0 auto;
        }

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            margin-bottom: 10px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        li label {
            flex: 1;
            margin-left: 10px;
        }

        li a {
            color: #e74c3c;
            text-decoration: none;
            font-weight: bold;
            margin-left: 10px;
        }

        li a:hover {
            text-decoration: underline;
        }

        input[type="checkbox"] {
            transform: scale(1.2);
        }

        .tagline {
            color: #2196f3;
            font-weight: 600;
            margin-right: 10px;
        }
    </style>
</head>

<body>
    <h1>Todo App</h1>
    <form action="" method="POST" onsubmit="return validateForm()">
        <label for="todo" class="tagline">Apa kegiatanmu hari ini?</label><br>
        <input type="text" id="todo" name="todo">
        <button type="submit">Simpan</button>
    </form>

    <br>

    <ul>
        <?php foreach ($todos as $key => $value): ?>
            <li>
                <input type="checkbox" name="todo"
                    onclick="window.location.href = 'index.php?status=<?php echo ($value['status'] == 1) ? '0' : '1'; ?>&key=<?php echo $key; ?>'"
                    <?php if ($value['status'] == 1) echo "checked"; ?>>
                <label>
                    <?php
                    if ($value['status'] == 1) {
                        echo '<del>' . htmlspecialchars($value['todo']) . '</del>';
                    } else {
                        echo htmlspecialchars($value['todo']);
                    }
                    ?>
                </label>
                <a href='index.php?hapus=1&key=<?php echo $key; ?>' onclick="return confirm('Apakah Kamu yakin akan menghapus todo ini?')">hapus</a>
            </li>
        <?php endforeach; ?>
    </ul>

    <script>
        function validateForm() {
            var todoInput = document.getElementById("todo").value.trim();
            if (todoInput === "") {
                alert("Jangan kosong, isi kegiatanmu terlebih dahulu!");
                return false;
            }
            return true;
        }
    </script>
</body>

</html>