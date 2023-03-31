<?php 

if (isset($_Post['submit'])) {
    $name = $_Post['name'];
    $subject = $_Post['subject'];
    $mailFrom = $_Post['mail'];
    $message = $_Post['message'];
    $tel = $_Post['tel'];

    $mailTo = "";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}