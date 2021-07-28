<?php
$from = $_POST['mail'];
if($_POST['submit']){
    $dest = "gonzales.pierre01470@gmail.com";
    $sujet = "Contact Portfolio";
    $message = $_POST['texte'];
    $header = $from; 
}
mail($dest, $sujet, $message, $header);
header('Location: index.html');
?>