<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['phone'];
$step1 = $_POST['step1'];
$step2 = $_POST['step2'];
$step22 = $_POST['step22'];
$step3 = $_POST['step3'];
$step4 = $_POST['step4'];
$step44 = $_POST['step44'];
$step5 = $_POST['step5'];


$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'ssl://smtp.beget.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'support@agencyaj.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '&Cff%0hf'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('support@agencyaj.com'); // от кого будет уходить письмо?
$mail->addAddress('antondavletov229@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на расчет стоимости';
$mail->Body    = 'Клиент оставил номер:' .$name. '<br> Тип мебели:' .$step1. '<br> Размеры:' .$step2. '' .$step22. 
'<br> Материал:' .$step3. '<br> Цвет:' .$step4. '' .$step44. '<br> Вариант доставки:' .$step5. '';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>


