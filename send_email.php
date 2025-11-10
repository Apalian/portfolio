<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données JSON
    $data = json_decode(file_get_contents('php://input'), true);
    
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $subject = htmlspecialchars($data['subject']);
    $message = htmlspecialchars($data['message']);
    
    // Validation
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Tous les champs sont requis']);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Email invalide']);
        exit;
    }
    
    // Configuration de l'email
    $to = "colin.lespilette@gmail.com";
    $email_subject = "Portfolio - " . $subject;
    
    $email_body = "Nouveau message depuis le portfolio\n\n";
    $email_body .= "Nom: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Sujet: $subject\n\n";
    $email_body .= "Message:\n$message\n";
    
    $headers = "From: noreply@tondomaine.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Envoi de l'email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Email envoyé avec succès']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
}
?>