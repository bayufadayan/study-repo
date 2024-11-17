<?php
// Mirip Map di dart / Dict di Python
// cara 1
$alamat = array(
    "naufal" => "Bandung",
    "meilan" => "Malang",
    "marimar" => "Mexico"
);
echo "Alamat Marimar adalah di " . $alamat['marimar'];

echo "</br>";
// cara 2
$alamat['naufal'] = "Bandung";
$alamat['meilan'] = "Malang";
$alamat['marimar'] = "Mexico";

// For Each
$alamat = array(
    "naufal" => "Bandung",
    "meilan" => "Malang",
    "marimar" => "Mexico"
);

foreach ($alamat as $x => $value) {
    echo "Alamat " . $x . "  di " . $value;
    echo "<br>";
}
