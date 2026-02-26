<?php
// Archivo: raiz/php/enviar_formulario.php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    echo json_encode(['success' => false, 'message' => 'Acceso no permitido.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // CAMBIA A 0 UNA VEZ QUE TODO FUNCIONE PERFECTAMENTE
    $mail->SMTPDebug = 0; 

    // --- CONFIGURACIÓN DEL SERVIDOR DE CORREO ---
    $mail->isSMTP();
    $mail->Host       = 'ssl://smtp.gmail.com:465';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'webmaster.etn@gmail.com';
    $mail->Password   = 'izygxyyafcqrdjqm';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 465;

    // --- CONFIGURACIÓN DEL MENSAJE ---
    $mail->setFrom('webmaster.etn@gmail.com', 'Sitio Web - Contacto'); 
    $mail->addAddress('ubg.mario@gmail.com', 'Administrador'); 

    // --- RECOLECTAMOS LOS DATOS USANDO LOS NOMBRES CORRECTOS DEL JSON ---
    $nombre = strip_tags($_POST['name'] ?? 'No proporcionado'); // <--- CORREGIDO
    $apellidos = strip_tags($_POST['lastName'] ?? ''); // <--- CORREGIDO
    $telefono = strip_tags($_POST['phone'] ?? 'No proporcionado'); // <--- CORREGIDO
    $email = strip_tags($_POST['email'] ?? '');
    $tema = strip_tags($_POST['topic'] ?? 'No proporcionado'); // <--- CORREGIDO
    $comentarios = strip_tags($_POST['comments'] ?? ''); // <--- CORREGIDO

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
         throw new Exception('La dirección de correo electrónico no es válida.');
    }
    
    $mail->addReplyTo($email, $nombre . ' ' . $apellidos);
    
    // --- CONSTRUIMOS EL CUERPO DEL EMAIL CON LOS DATOS REALES ---
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'Nuevo Mensaje - Tema: ' . $tema;
    $mail->Body    = "
        <h2>Nuevo Mensaje de Contacto</h2>
        <p><strong>Nombre:</strong> {$nombre}</p>
        <p><strong>Apellidos:</strong> {$apellidos}</p>
        <p><strong>Teléfono:</strong> {$telefono}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Tema de Interés:</strong> {$tema}</p>
        <hr>
        <h3>Comentarios:</h3>
        <p>" . nl2br($comentarios) . "</p>
    ";
    
    $mail->AltBody = "Nuevo Mensaje de Contacto\n\nNombre: {$nombre}\nApellidos: {$apellidos}\nTeléfono: {$telefono}\nEmail: {$email}\nTema de Interés: {$tema}\n\nComentarios:\n{$comentarios}";


    $mail->send();
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => "El mensaje no se pudo enviar. Error: {$mail->ErrorInfo}"]);
}
?>
