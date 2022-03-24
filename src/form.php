<?php

$post = (!empty($_POST)) ? true : false;

if($post)
{
$email = trim($_POST['email']);
$name = htmlspecialchars($_POST['name']);
$name = htmlspecialchars($_POST['last-name']);
$email = htmlspecialchars($_POST['email']);
$error = '';

if(!$name)
{
$error .= 'Please enter your name<br />';
}

if(!$last-name)
{
$error .= 'Please enter your last name<br />';
}

if(!$email)
{
$error .= "ПPlease enter your email<br />";
}

if(!$error)



$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

$subject ="New order from domain.name";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";
/*
$message ="\n\nСообщение: ".$message."\n\nИмя: " .$name."\n\nТелефон: ".$tel."\n\n";
*/
$message1 ="\n\nName: ".$name."\n\nE-mail: " .$email."\n\nLast-name: ".$last-name."\n\n";	


$header = "Content-Type: text/plain; charset=utf-8\n";

$header .= "From: New <romanova.lenovo@gmail.com>\n\n";
$mail = mail("romanova.lenovo@gmail.com", $subject1, iconv ('utf-8', 'windows-1251', $message1), iconv ('utf-8', 'windows-1251', $header));

if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}

?>