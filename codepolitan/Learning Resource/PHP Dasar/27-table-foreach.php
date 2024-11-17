<?php
$karyawan = [
    ['nama' => 'Naufal', 'alamat' => 'Bandung', 'jenis_kelamin' => 'Pria'],
    ['nama' => 'Winda', 'alamat' => 'Surabaya', 'jenis_kelamin' => 'Wanita'],
    ['nama' => 'Abyasa', 'alamat' => 'Bandung', 'jenis_kelamin' => 'Pria']
];
?>
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Karyawan</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f4f4f4;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        tr:hover {
            background-color: #f1f1f1;
        }
    </style>
</head>

<body>
    <h2>Daftar Karyawan</h2>
    <table>
        <thead>
            <tr>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Jenis Kelamin</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($karyawan as $k): ?>
                <tr>
                    <td><?php echo htmlspecialchars($k['nama']); ?></td>
                    <td><?php echo htmlspecialchars($k['alamat']); ?></td>
                    <td><?php echo htmlspecialchars($k['jenis_kelamin']); ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>

</html>