<?php

    $adminemail = "margoholomki@mail.ru";

    $date = date("d.m.y"); // number-month-year
    $time = date("H:i"); // hour-minutes-seconds

    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['message'];

    if(!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", strtolower($email))){
        echo "<center>Вернитесь <a 
        href='javascript:history.back(1)'><B>назад</B></a>. Вы 
        указали неверные данные!";
    }
    else{
        $msg = "
        <p>Имя: $name</p> 
 
 
        <p>E-mail: $email</p> 
         
         
        <p>Сообщение: $msg</p> 
        "

        mail("$adminemail", "$date $time Сообщение от $name", "$msg"); 
    }

?>