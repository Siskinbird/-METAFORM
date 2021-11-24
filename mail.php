<?php

$recepient = "dimachig@gmail.com";
$siteName = "metaform.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST['email']);
$messageText = trim(($_POST['messageText']));
$message = "Имя: $name \nТелефон: $phone \nE-mail: $email \nСообщение: $messageText";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>