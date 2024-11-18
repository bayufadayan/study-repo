<?php

include('connection.php');
$id = $_GET['id'];

$query = mysqli_query($connect, "SELECT * FROM karyawan WHERE id = '$id'");
$result = mysqli_fetch_all($query, MYSQLI_ASSOC);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Data</title>

    <link rel="stylesheet" href="styles/style.css">
</head>

<body>

    <h1 style="text-align: center;">Update Data <span style="color: #0056b3;"><?php echo $result[0]['nama'] ?></span></h1>

    <form action="update.php" method="POST">

        <input type="hidden" name="id" value="<?php echo $result[0]['id'] ?>">

        <label for="nama">Nama</label> <br>
        <input type="text" name="nama" id="nama" value="<?php echo $result[0]['nama'] ?>">

        <br>

        <label for="alamat">Alamat</label> <br>
        <textarea name="alamat" id="alamat"><?php echo $result[0]['alamat'] ?></textarea>

        <br>

        <label for="umur">Umur</label> <br>
        <input type="text" name="umur" id="umur" value="<?php echo $result[0]['umur'] ?>">

        <br>

        <label for="jenis_kelamin">Jenis Kelamin</label> <br>
        <select name="jenis_kelamin" id="jenis_kelamin">
            <option value="Pria" <?php echo ($result[0]['jenis_kelamin'] == 'Laki-laki' ? "selecter" : "") ?>>Pria</option>
            <option value="Wanita" <?php echo ($result[0]['jenis_kelamin'] == 'Perempuan' ? "selecter" : "") ?>>Wanita</option>
        </select>

        <br><br>

        <button type="submit">Update Data</button>

    </form>
    <br>
    <div style="margin: 10px auto; text-align: center;">
        <a onclick="window.history.back()" class="button secondary">&larr; Kembali</a>
    </div>

    <br>
</body>

</html>