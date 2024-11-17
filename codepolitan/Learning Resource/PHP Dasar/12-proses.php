<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Formulir</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
        }

        h1 {
            color: #007bff;
            font-size: 24px;
        }

        p {
            font-size: 18px;
            margin: 10px 0;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Selamat Datang!</h1>
        <h4>Metode GET</h4>
        <p>Nama Kamu: <strong><?php echo htmlspecialchars($_GET["nama"]); ?></strong></p>
        <p>Alamat Kamu: <strong><?php echo htmlspecialchars($_GET["alamat"]); ?></strong></p>
    </div>
</body>

</html>