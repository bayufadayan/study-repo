<?php
$message = "Tes, saya lagi makan ini";
file_put_contents('32-mymessage.txt', $message);

$messageContents = file_get_contents('32-mymessage.txt');
echo $messageContents;