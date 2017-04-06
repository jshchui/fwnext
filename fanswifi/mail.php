<?php

  $firstname = $_POST['firstname'];
  $lastname = $_POST['lastname'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $recipient = "jshchui@gmail.com";
  $subject = "Contact Form";
  $mailheader = "From: $email \r\n";
  //mail($recipient, $subject, $mailheader) or die("Error!");

  if(mail($recipient, $subject, $mailheader) or die("Error!")) {
    echo "sent";
  }
  //echo "Thank You!";

?>
