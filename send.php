<?php 

$headers = 'Content-type: text/plain; charset="utf-8"';


	$username = $_POST['username'];
	$userphone = $_POST['userphone'];
	$usermail = $_POST['usermail'];
	$usercomment = $_POST['usercomment'];
	$aim = $_POST['aim'];
	$utm_source = $_POST['utm_source'];
	$utm_medium = $_POST['utm_medium'];
	$utm_term = $_POST['utm_term'];
	$utm_content = $_POST['utm_content'];
	$utm_campaign = $_POST['utm_campaign'];
	$ip = $_SERVER['REMOTE_ADDR']; 

	// Кому 
	$to = 'vol4ara2012@mail.ru, volosunovmike@gmail.com, volosunovmihail@yandex.ru';
	// subject Admin
	$subject = 'ЗАЯВКА с сайта XXX';
	// Само сообщение Admin
	$message = "
	<html><head><title>Привет от почтового сервера</title></head>
	<body>
	<h2>ЗАЯВКА</h2>
	<h3>Имя: $username</h3>
	<h3>Телефон: $userphone</h3>
	<h3>E-mail: $usermail</h3>
	<h3>Коммент: $usercomment</h3>
	<h3>IP: $ip</h3>
	<h3>Цель: $aim</h3>
	<hr>
	<h3>Источник кампании: $utm_source</h3>
	<h3>Канал кампании: $utm_medium</h3>
	<h3>Ключевое слово в кампании: $utm_term</h3>
	<h3>Содержание кампании: $utm_content</h3>
	<h3>Название кампании: $utm_campaign</h3>

	</body>
	</html>";

	// Что бы отправлять HTML, устанавливаем Content-type заголовки
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	// тут установить ту кодировку с которой вы работатете
	$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
	// Отправляем
	mail($to, $subject, $message, $headers);
	header("Location: /thanks/");

	// subject Lead
	$subject = 'Спасибо!';
	// Само сообщение Lead
	$message = "
	<html><head><title>Привет от почтового сервера</title></head>
	<body>
	<h2>$username, Ваша заявка рассматривается!</h2>
	</body>
	</html>";


?>		

