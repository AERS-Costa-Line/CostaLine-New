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
    // Una vez que todo funciona, puedes cambiar el debug a 0.
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

    // --- 1. RECOLECTAMOS LOS CAMPOS NUEVOS ---
    // Recolectamos TODOS los datos que vienen del formulario
    $nombre = strip_tags($_POST['nombre'] ?? 'No proporcionado');
    $apellidos = strip_tags($_POST['apellidos'] ?? ''); // <--- CAMPO NUEVO
    $telefono = strip_tags($_POST['telefono'] ?? 'No proporcionado'); // <--- CAMPO NUEVO
    $email = strip_tags($_POST['email'] ?? '');
    $tema = strip_tags($_POST['tema'] ?? 'No proporcionado'); // <--- CAMPO NUEVO
    $comentarios = strip_tags($_POST['comentarios'] ?? ''); // <--- CAMPO NUEVO (reemplaza a 'mensaje')

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
         throw new Exception('La dirección de correo electrónico no es válida.');
    }
    
    $mail->addReplyTo($email, $nombre . ' ' . $apellidos);
    
    // --- 2. CONSTRUIMOS EL CUERPO DEL EMAIL CON LOS NUEVOS CAMPOS ---
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'Nuevo Mensaje - Tema: ' . $tema; // Asunto dinámico con el tema
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
    
    // También actualizamos la versión de texto plano
    $mail->AltBody = "Nuevo Mensaje de Contacto\n\nNombre: {$nombre}\nApellidos: {$apellidos}\nTeléfono: {$telefono}\nEmail: {$email}\nTema de Interés: {$tema}\n\nComentarios:\n{$comentarios}";


    $mail->send();
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => "El mensaje no se pudo enviar. Error: {$mail->ErrorInfo}"]);
}
?>
