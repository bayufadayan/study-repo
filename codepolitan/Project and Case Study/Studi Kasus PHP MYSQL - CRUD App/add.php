<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert Data</title>

    <link rel="stylesheet" href="styles/style.css">

</head>

<body>
    <h1 style="text-align: center;">Input Data</h1>

    <form action="insert.php" method="POST">
        <label for="nama">Nama</label> <br>
        <input type="text" name="nama" id="nama">

        <br>

        <label for="alamat">Alamat</label> <br>
        <textarea name="alamat" id="alamat"></textarea>

        <br>

        <label for="umur">Umur</label> <br>
        <input type="text" name="umur" id="umur">

        <br>

        <label for="jenis_kelamin">Jenis Kelamin</label> <br>
        <select name="jenis_kelamin" id="jenis_kelamin">
            <option value="Pria">Pria</option>
            <option value="Wanita">Wanita</option>
        </select>

        <br><br>

        <button type="submit">Submit Data</button>

    </form>

    <br>
    <div style="margin: 10px auto; text-align: center;">
        <a onclick="window.history.back()" class="button secondary">&larr; Kembali</a>
    </div>

    <br>
</body>

</html>