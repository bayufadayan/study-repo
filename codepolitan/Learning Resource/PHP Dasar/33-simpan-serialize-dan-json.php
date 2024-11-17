<?php
$karyawan    = [
    ['nama' => 'Toni', 'alamat' => 'Bandung'],
    ['nama' => 'Naufal', 'alamat' => 'Bandung'],
    ['nama' => 'Davi', 'alamat' => 'Jakarta']
];
$data = serialize($karyawan);
file_put_contents('33-data.txt', $data);
$output    = file_get_contents('33-data.txt');
$hasil    = unserialize($output);
print_r($hasil);

echo "<br>";
$karyawan    = [
    ['nama' => 'Toni', 'alamat' => 'Bandung'],
    ['nama' => 'Naufal', 'alamat' => 'Bandung'],
    ['nama' => 'Davi', 'alamat' => 'Jakarta']
];
$data = json_encode($karyawan);
file_put_contents('33-data2.txt', $data);
$output    = file_get_contents('33-data2.txt');
$hasil    = json_decode($output);
print_r($hasil);
