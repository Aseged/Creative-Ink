<?
if (isset($_POST['badInput']) && $_POST['badInput'] !="") 
{
header('location:Ooops.html');
}
else {
require 'PHPMailerAutoload.php';
$mail = new PHPMailer();
$mail->isSMTP();
$mail->SMTPAuth = true;                                                                     
$mail->Host = 'smtp.gmail.com';                      
$mail->Username = 'up746804@myport.ac.uk';                   
$mail->Password = 'Rachelmccullen22';               
$mail->SMTPSecure = 'tls';                            
$mail->Port = 587;                                    
$mail->setFrom('up746804@myport.ac.uk', 'Creative Ink Tattoo');     
$mail->addAddress = 'degiman00@gmail.com';
$mail->isHTML(true); 
$mail->Subject = 'Mail From Website';
$mail->Name = $_POST['name'];
$mail->Email = $_POST['email'];
$mail->Phone = $_POST['phone'];
$mail->Body = $_POST['message'];
$mail->message = <<<EMAIL
Message from $Name
$Message
Contact email $Email
Contact number $Phone
EMAIL;
$header = '$Email';
if ($_POST){
mail ($To, $Subject, $header);
$emailSent = 'DONE, we will get back to you as soon as possible.';		
}
else {
$emailSent = 'Ooops, something went wrong. Try again please!';		
}
}
?>