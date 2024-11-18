<?php

$host = 'qhaas.h.filess.io';
$username = 'phpcrudkaryawan_bowlcardif';
$password = 'aca1d53ab5c118d488b66b0c2db26f57880c1a96';
$dbname = 'phpcrudkaryawan_bowlcardif';
$port = 3305;


try {
    $connect = mysqli_connect($host, $username, $password, $dbname, $port);
} catch (\Throwable $th) {
    echo $th;
    exit('Gagal koneksi database!');
}
