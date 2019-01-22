<?php
try {
    if(empty($_POST['tel'])){
        throw new Exception('Tel not found');
    }
    $to = 'nexis.sis@gmail.com';
    $subject = 'New Client From Woodpeker';
    $message = "Данные заказчика\n";
    if(!empty($_POST['name'])){
        $message .= 'Имя: ' . $_POST['name'] . "\n";
    }
    if(!empty($_POST['tel'])){
         $message .=  'Телефон: ' . $_POST['tel'] . "\n";
    }
     if(!empty($_POST['comment'])){
         $message .=  'Комментарий: ' . $_POST['comment'] . "\n";
    }
    if(!empty($_POST['email'])){
         $message .=  'Email:  ' . $_POST['email'] . "\n";
         $from = $_POST['popup__email'];
    }
    if(!empty($_POST['material'])){
         $message .= ' Сообщение: ' . $_POST['material'] . "\n";
    }
    if(!empty($_POST['size'])){
         $message .= ' Размеры: ' . $_POST['size'] . "\n";
    }
    if(!empty($_POST['derevo'])){
             $message .= ' Порода дерева: ' . $_POST['derevo'] . "\n";
    }
    if(mail($to, $subject, $message)){
       echo json_encode(['success'=>true]);
    }else{
         throw new Exception('Mail Error');
     }

} catch (Exception $e) {
     echo json_encode(['success'=>false,'error' => $e->getMessage()]);
 }
?>