<?php
// Usar las clases de PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// --- CONFIGURACIÓN INICIAL ---
// Si usaste Composer, esta es la línea correcta.
require 'vendor/autoload.php';

// Si descargaste manualmente y renombraste la carpeta a 'PHPMailer':
// require 'PHPMailer/src/Exception.php';
// require 'PHPMailer/src/PHPMailer.php';
// require 'PHPMailer/src/SMTP.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    echo json_encode(['success' => false, 'message' => 'Acceso no permitido.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // --- 1. CONFIGURACIÓN DEL SERVIDOR DE CORREO (SMTP) ---
    // ¡ESTA ES LA PARTE MÁS IMPORTANTE QUE DEBES CAMBIAR!
    // Usa los datos de tu proveedor de correo (ej. Gmail, SendGrid, etc.)

    $mail->isSMTP();                                     // Usar el protocolo SMTP
    $mail->Host       = 'smtp.example.com';              // El servidor SMTP de tu proveedor
    $mail->SMTPAuth   = true;                            // Habilitar autenticación SMTP
    $mail->Username   = 'tu_usuario@example.com';        // Tu usuario SMTP (generalmente tu email)
    $mail->Password   = 'tu_contraseña_muy_secreta';     // Tu contraseña SMTP o contraseña de aplicación
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   // Habilitar cifrado TLS; `PHPMailer::ENCRYPTION_SMTPS` también es una opción (para puerto 465)
    $mail->Port       = 587;                             // Puerto TCP para conectar; usa 587 para STARTTLS o 465 para SMTPS

    // --- 2. CONFIGURACIÓN DEL MENSAJE ---
    // Quién envía el correo (debe ser el mismo email que el Username de SMTP)
    $mail->setFrom('tu_usuario@example.com', 'Sitio Web - Contacto'); 
    
    // A quién le va a llegar el correo (tú)
    $mail->addAddress('el_correo_que_recibe@dominio.com', 'Admin del Sitio');

    // Recolectar datos del formulario
    $nombre = filter_var($_POST['nombre'] ?? 'No proporcionado', FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $telefono = filter_var($_POST['telefono'] ?? 'No proporcionado', FILTER_SANITIZE_STRING);
    $asunto = filter_var($_POST['asunto'] ?? 'Contacto desde la web', FILTER_SANITIZE_STRING);
    $mensaje = filter_var($_POST['mensaje'] ?? '', FILTER_SANITIZE_STRING);

    // Validar email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
         throw new Exception('La dirección de correo electrónico no es válida.');
    }
    
    // El email del usuario se añade como dirección para "Responder a"
    $mail->addReplyTo($email, $nombre);
    
    // Contenido del correo
    $mail->isHTML(true); // Establecer el formato de email a HTML
    $mail->Subject = $asunto; // El asunto del correo
    
    // Cuerpo del mensaje en HTML
    $mail->Body    = "
        <h2>Nuevo Mensaje de Contacto</h2>
        <p><strong>Nombre:</strong> {$nombre}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Teléfono:</strong> {$telefono}</p>
        <hr>
        <h3>Mensaje:</h3>
        <p>" . nl2br($mensaje) . "</p>
    ";
    
    // Cuerpo alternativo para clientes de correo que no soportan HTML
    $mail->AltBody = "Nuevo Mensaje de Contacto\n\nNombre: {$nombre}\nEmail: {$email}\nTeléfono: {$telefono}\n\nMensaje:\n{$mensaje}";

    // Enviar el correo
    $mail->send();
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    // Si algo falla, se captura el error
    // El `{$mail->ErrorInfo}` te dará pistas muy detalladas sobre qué falló.
    echo json_encode(['success' => false, 'message' => "El mensaje no se pudo enviar. Error: {$mail->ErrorInfo}"]);
}
?>
