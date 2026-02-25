<?php
// Archivo: raiz/php/enviar_formulario.php

// Usar las clases de PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Esta ruta es correcta porque 'PHPMailer' está en la misma carpeta que este archivo.
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
    // --- CONFIGURACIÓN DEL SERVIDOR DE CORREO (SMTP) ---
    // ¡¡¡AQUÍ DEBES PONER TUS DATOS REALES!!!
    $mail->isSMTP();
    $mail->Host       = 'smtp.example.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'tu_usuario@example.com';
    $mail->Password   = 'tu_contraseña_muy_secreta';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // --- CONFIGURACIÓN DEL MENSAJE ---
    $mail->setFrom('tu_usuario@example.com', 'Sitio Web - Contacto'); 
    $mail->addAddress('correo_donde_recibes@dominio.com', 'Administrador'); 

    // Recolectar datos del formulario
    $nombre = strip_tags($_POST['nombre'] ?? 'No proporcionado');
    $email = strip_tags($_POST['email'] ?? '');
    $mensaje = strip_tags($_POST['mensaje'] ?? '');

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
         throw new Exception('La dirección de correo electrónico no es válida.');
    }
    
    $mail->addReplyTo($email, $nombre);
    
    // Contenido del correo
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'Nuevo Mensaje del Formulario de Contacto';
    $mail->Body    = "
        <h2>Nuevo Mensaje de Contacto</h2>
        <p><strong>Nombre:</strong> {$nombre}</p>
        <p><strong>Email:</strong> {$email}</p>
        <hr>
        <h3>Mensaje:</h3>
        <p>" . nl2br($mensaje) . "</p>
    ";

    $mail->send();
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => "El mensaje no se pudo enviar. Error: {$mail->ErrorInfo}"]);
}
?>
