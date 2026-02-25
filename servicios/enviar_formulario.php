<?php
header('Content-Type: application/json');

// --- CONFIGURACIÓN ---
// ¡IMPORTANTE! Cambia esta dirección por el email donde quieres recibir los mensajes.
$destinatario = "webmasteretn@etn.com.mx"; 
// --------------------

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitizar y recolectar los datos. 
    // Los nombres 'nombre', 'email', etc., deben coincidir con los 'name' de tu JSON de formulario.
    $nombre = filter_var($_POST['nombre'] ?? 'No proporcionado', FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $telefono = filter_var($_POST['telefono'] ?? 'No proporcionado', FILTER_SANITIZE_STRING);
    $asunto = filter_var($_POST['asunto'] ?? 'Contacto desde la web', FILTER_SANITIZE_STRING);
    $mensaje = filter_var($_POST['mensaje'] ?? 'No hay mensaje', FILTER_SANITIZE_STRING);

    // Validación simple
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'La dirección de correo electrónico no es válida.']);
        exit;
    }
    if (empty($nombre) || empty($mensaje)) {
        echo json_encode(['success' => false, 'message' => 'El nombre y el mensaje son obligatorios.']);
        exit;
    }

    // Construir el cuerpo del correo
    $cuerpoEmail = "Has recibido un nuevo mensaje de contacto:\n\n";
    $cuerpoEmail .= "Nombre: " . $nombre . "\n";
    $cuerpoEmail .= "Email: " . $email . "\n";
    $cuerpoEmail .= "Teléfono: " . $telefono . "\n\n";
    $cuerpoEmail .= "Mensaje:\n" . $mensaje . "\n";

    // Construir las cabeceras del correo
    $headers = "From: " . $nombre . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpoEmail, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'El servidor no pudo enviar el mensaje.']);
    }

} else {
    // No permitir acceso directo al script
    echo json_encode(['success' => false, 'message' => 'Acceso no permitido.']);
}
?>

