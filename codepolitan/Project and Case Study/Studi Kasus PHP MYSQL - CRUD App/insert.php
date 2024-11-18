<?php 
include('connection.php');

$nama = $_POST['nama'];
$umur = $_POST['umur'];
$alamat = $_POST['alamat'];
$jenis_kelamin = $_POST['jenis_kelamin'];

$insert = mysqli_query($connect, "INSERT INTO karyawan SET nama = '$nama', umur = '$umur', alamat = '$alamat', jenis_kelamin = '$jenis_kelamin'" );

if ($insert) {
    header('Location: index.php');
} else {
    "Insert Data Gagal";
}

?>