<?php

include('connection.php');

$keyword = $_GET['keyword'];

if ($keyword != '') {
   $query = mysqli_query($connect, "SELECT * FROM karyawan WHERE nama LIKE '%$keyword%'");
} else {
    $query = mysqli_query($connect, "SELECT * FROM karyawan");
}
$results = mysqli_fetch_all($query, MYSQLI_ASSOC);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List Karyawan</title>

    <link rel="stylesheet" href="styles/style.css">
</head>

<body>

    <h1 class="header2">
        <div>
            <img src="assets/php-logo.png" alt="logo-php" height="48px">
            <span> + </span>
            <img src="assets/mysql-logo.png" alt="mysql-logo" height="48px">
        </div>
        <div>CRUD Application</div>
    </h1>

    <form action="search.php" method="GET">
        <input type="text" name="keyword" placeholder="Keyword .." value="<?php echo $_GET['keyword'] ?>" />
        <button type="submit">Search</button>
    </form>

    <br>
    <a href="add.php" class="button">+ Tambah Data</a>

    <table>
        <?php $number = 1 ?>
        <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Umur</th>
            <th>Alamat</th>
            <th>Jenis Kelamin</th>
            <th>Pilihan</th>
        </tr>

        <?php
        if (count($results) > 0) {
            foreach ($results as $result) {  ?>
                <tr>
                    <td><?php echo $number ?></td>
                    <td><?php echo $result['nama'] ?></td>
                    <td><?php echo $result['umur'] ?></td>
                    <td><?php echo $result['alamat'] ?></td>
                    <td><?php echo $result['jenis_kelamin'] ?></td>
                    <td>
                        <a href="edit.php?id=<?php echo $result['id'] ?>" class="button">Edit</a>
                        <a href="delete.php?id=<?php echo $result['id'] ?>" class="button delete">Hapus</a>
                    </td>
                    <?php $number++ ?>
                </tr>
            <?php  } ?>
        <?php  } else { ?>
            <tr>
                <td colspan="6" style="text-align: center">
                    <b>Tidak ada data tidak ditemukan</b>
                </td>
            </tr>

        <?php  } ?>
    </table>

    <div class="footer-fixed">
        <span>
            <a href="https://github.com/bayufadayan/study-repo/tree/main/codepolitan/Project%20and%20Case%20Study/Studi%20Kasus%20React%20JS%20-%20Split%20Bill%20App">
                Link Repository
            </a>
        </span> | <a href="https://github.com/bayufadayan/">@bayufadayan</a>
    </div>

    <br><br><br><br>
</body>

</html>
