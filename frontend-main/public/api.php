<?php
// api.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Database credentials
$host = "sdb-87.hosting.stackcp.net";
$dbname = "Scarotechnologie-35313133e6fe";
$username = "Scaro";
$password = "Charan@2004";

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$action = isset($_GET['action']) ? $_GET['action'] : '';

if ($action === 'enroll' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->name) && !empty($data->gmail) && !empty($data->phoneNumber)) {
        try {
            $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $stmt = $pdo->prepare("INSERT INTO enrollments (name, email, phone_number, college_name, cr_number, course_name, course_price) VALUES (:name, :email, :phone_number, :college_name, :cr_number, :course_name, :course_price)");
            
            $stmt->bindParam(':name', $data->name);
            $stmt->bindParam(':email', $data->gmail);
            $stmt->bindParam(':phone_number', $data->phoneNumber);
            $stmt->bindParam(':college_name', $data->collegeName);
            $stmt->bindParam(':cr_number', $data->crNumber);
            $stmt->bindParam(':course_name', $data->course);
            $stmt->bindParam(':course_price', $data->coursePrice);

            if ($stmt->execute()) {
                echo json_encode(["success" => true, "message" => "Enrollment saved successfully!"]);
            } else {
                echo json_encode(["success" => false, "error" => "Failed to save enrollment."]);
            }
        } catch(PDOException $e) {
            echo json_encode(["success" => false, "error" => "Database error: " . $e->getMessage()]);
        }
    } else {
        echo json_encode(["success" => false, "error" => "Incomplete data provided."]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Invalid request."]);
}
?>
