
<?php  
if( isset($_POST['submit']) ) {
//getting user data
$name = $_POST['name'];

$email = $_POST['email'];
$phone = $_POST['phone'];

$message = $_POST['message'];
 
//Recipient email, Replace with your email Address
$mailTo = 'sapnakousar428.3@gmail.com';
 
//email subject
$subject = ' A New Message Received From ' .$name;
 
//email message body
$htmlContent = '<h2> Email Request Received </h2>
<p> <b>Client Name: </b> '.$name  . '</p>
<p> <b>Email: </b> '.$email .'</p>
<p> <b>Phone Number: </b> '.$phone .'</p>

<p> <b>Message: </b> '.$message .'</p>';
 
//header for sender info
$headers = "From: " .$name . "<". $email . ">";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
 
//PHP mailer function
 $result = mail($mailTo, $subject, $htmlContent, $headers);
 
   //error checking
   if($result) {
    $success = "The message was sent successfully!";
   } else {
    $failed = "Error: Message was not sent, Try again Later";
   }
}
 
?>
