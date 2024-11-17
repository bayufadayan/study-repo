<?php
$pesan = NULL;
echo $pesan;

// jika pada PHP 7 terdapat cara lain untuk mengatasi error Undefined variable , kita bisa menggunakan coalescing seperti di bawah ini :


$pesan = "Selamat Datang";
echo $pesan ?? NULL;
