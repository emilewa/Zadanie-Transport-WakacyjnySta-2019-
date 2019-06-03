<?php
session_start();
   $m1 = "Airbus_A380";
   $m2 = "Boeing_747";
   $adres1 = "airbus@lemonmind.com";
   $adres2 = "boeing@lemonmind.com";


if($_POST['Model'] == $m1)
  $adresemail = $adres1;
  else if($_POST['Model'] == $m2)
  $adresemail = $adres2;

$to      = $adresemail;
$subject = 'Transport - zadanie';
$message = '
<html lang="pl-PL">
<head>
    <meta charset="utf-8">
</head>
<body>
<b>Dane transportu:</b><br/>
  <b>Transport z  '.$_POST['transport_z'].' do '.$_POST['transport_do'].'o .</b><br/>
  <b>Samolot   '.$_POST['Model'].' w dniu '.$_POST['data'].' .</b><br/>
  <br/>
   <table>
  <thead>
<tr>
<td>Nazwa :</td>
<td>Ciê¿ar :</td>
<td>Typ :</td>
</tr>
</thead>
<tbody>
<tr 
<td>'.$_POST['nazwa'].'</td>
<td>'.$_POST['ciezar'].'</td>
<td>'.$_POST['ciezar'].'</td>
</tr>
</body>
</html>
';
$header = "From: adres1@emilewa.cba.pl\r\nReply-to: adres1@emilewa.cba.pl\r\n";

if(mail($to, $subject, $message, $header))
   {
         echo "Wyslano wiadomosc :)" ;
   }
   else echo "Blad :(";

?>
