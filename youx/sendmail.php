<?php
try {
    if(isset($_POST['submit'])){
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: YOUX WEBSITE. "\r\n"';

//        if(empty($_POST['popup__tel'] || empty($_POST['popup__tel'])){
//            throw new Exception('Tel not found', 403);
//        }

        $name = $_POST['popup__name'];
        $tel = $_POST['popup__tel'];
        $email = $_POST['popup__email'];

        $message = 'Имя: ' . $name . ' Email: ' . $email . ' Телефон: ' . $tel . ' Сообщение: ' . $_POST['popup__text'];

        //send email
        if(mail("nexis.sis@gmail.com", "YOUX WEBSITE. Письмо от : " .$email, $message,$headers)){
             echo json_encode(array(
                    'result' => 'ok!',
                ));
        }else{
            throw new Exception('Email not sent', 500);
        }
     }
} catch (Exception $e) {
     echo json_encode(array(
         'error' => array(
             'msg' => $e->getMessage(),
             'code' => $e->getCode(),
         ),
     ));
 }
?>