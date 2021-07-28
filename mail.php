<?php
$from = $_POST['mail'];
if($_POST['submit']){
    $dest = "mickaelgiraud81@yahoo.com";
    $sujet = "Contact Portfolio";
    $message = $_POST['texte'];
    $header = $from; 
}
mail($dest, $sujet, $message, $header);
header('Location: index.html');
?>