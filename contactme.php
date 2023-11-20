<?php 
use PHPMailer\PHPMailer\PHPMailer;

    require_once("./mailing/Exception.php");
    require_once("./mailing/PHPMailer.php");
    require_once("./mailing/SMTP.php");
    $mail=new PHPMailer(true);
    $alert = '';
    if( isset($_POST['submit']) ) {
        //getting user data
        $name = $_POST['name'];
        
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        
        $message = $_POST['message'];

        $subject = ' A New Message Received From ' .$name;
        $body = "<ul><li>Name: ".$name."</li><li>Phone: ".$phone."</li><li>Email: ".$email."</li><li>Message: ".$message."</li></ul>";
        try{
            $mail->isSMTP();
            $mail->Host='smtp.gmail.com';
            $mail->SMTPAuth=true;

            $mail->Username="sapnakousar428.3@gmail.com";
            $mail->Password="ajxq jsln vblq bvpn";
            $mail->SMTPSecure=PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port=587;
            $mail->setFrom('sapnakousar428.3@gmail.com');

            $mail->addAddress('sapnakousar428.3@gmail.com');
            $mail->isHTML(true);
            $mail->Subject=$subject;
            $mail->Body= $body;
            $mail->send();
            $alert=''
            $alert = '<div class="alert-success">
            <span>Message Sent! Thanks! We will contact you soon</span>
           </div>';
} catch (Exception $e){
$alert = '<div class="alert-error">
           <span>'Error sending message! Please try again.'</span>
         </div>';







        

        }
    }

 

   
?>




