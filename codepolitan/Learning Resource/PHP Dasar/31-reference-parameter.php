<?php
// Fungsi ini mengganti nilai variabel yang dikirim sebagai referensi
function gantiNama(&$nama)
{
    $nama = "Indah";
}
$nama = "Risa";
gantiNama($nama);
echo $nama;
