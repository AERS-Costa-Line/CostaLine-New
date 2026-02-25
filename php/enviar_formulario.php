<?php
// Usar las clases de PHPMailer que acabamos de subir
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/*
 * Estas líneas le dicen a PHP dónde encontrar la herramienta.
 * Le decimos: "En la carpeta actual, busca una carpeta llamada 'PHPMailer'
 * y carga estos tres archivos que necesitamos para trabajar".
 */
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

header('Content-Type: application/json');

// Este if es para seguridad, para que nadie pueda acceder al archivo directamente
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    echo json_encode(['success' => false, 'message' => 'Acceso no permitido.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // --- CONFIGURACIÓN DEL SERVIDOR DE CORREO (SMTP) ---
    // ¡¡¡IMPORTANTE!!! Aquí debes poner los datos de tu proveedor de correo.
    
    $mail->isSMTP();
    $mail->Host       = 'smtp.example.com';              // Ej: 'smtp.gmail.com' para Gmail
    $mail->SMTPAuth   = true;
    $mail->Username   = 'tu_usuario@example.com';        // Tu correo completo
    $mail->Password   = 'tu_contraseña_muy_secreta';     // Tu contraseña de correo o de aplicación
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // --- CONFIGURACIÓN DEL MENSAJE ---
    $mail->setFrom('tu_usuario@example.com', 'Sitio Web - Contacto'); 
    $mail->addAddress('correo_donde_recibes@dominio.com', 'Administrador'); // Tu correo, donde llegarán los mensajes

    // Recolectar datos que vienen del formulario
    $nombre = strip_tags($_POST['nombre'] ?? 'No proporcionado');
    $email = strip_tags($_POST['email'] ?? '');
    $mensaje = strip_tags($_POST['mensaje'] ?? '');

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
         throw new Exception('La dirección de correo electrónico no es válida.');
    }
    
    // Esto permite que al darle "Responder" en tu email, se responda al cliente
    $mail->addReplyTo($email, $nombre);
    
    // Contenido del correo
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8'; // Para que se vean bien los acentos y la ñ
    $mail->Subject = 'Nuevo Mensaje del Formulario de Contacto';
    $mail->Body    = "
        <h2>Nuevo Mensaje de Contacto</h2>
        <p><strong>Nombre:</strong> {$nombre}</p>
        <p><strong>Email:</strong> {$email}</p>
        <hr>
        <h3>Mensaje:</h3>
        <p>" . nl2br($mensaje) . "</p>
    ";

    // Enviar el correo
    $mail->send();
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    // Si algo falla, este mensaje de error te dirá exactamente qué es.
    echo json_encode(['success' => false, 'message' => "El mensaje no se pudo enviar. Error de PHPMailer: {$mail->ErrorInfo}"]);
}
?>

