<?php
try {
    if($_POST){
        $name = $_POST['popup__name'];
        $email = $_POST['popup__email'];
        $tel = $_POST['popup__tel'];
        $message = 'Имя: ' . $name . ' Email: ' . $email . ' Телефон: ' . $tel . ' Сообщение: ' . $_POST['form_msg'];

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: YOUX WEBSITE. "\r\n"';


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