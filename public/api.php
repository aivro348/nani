<?php
// Set CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle OPTIONS request for CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header("Content-Type: application/json");

// ==========================================
// DATABASE CREDENTIALS - UPDATE THESE LATER!
// ==========================================
$servername = "localhost";
$username = "Scarotechnologie";
$password = "Charan@2006";
$dbname = "Scarotechnologie-35313133daeb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // If connection fails, return a 500 error but don't leak the exact error in production
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed. Check credentials in api.php"]);
    exit();
}

$action = isset($_GET['action']) ? $_GET['action'] : '';

// Handle different API actions
switch ($action) {
    case 'health':
        echo json_encode(["status" => "ok"]);
        break;

    case 'enroll':
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            echo json_encode(["error" => "Method not allowed"]);
            break;
        }

        // Get JSON body
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        if (!$data) {
            http_response_code(400);
            echo json_encode(["error" => "Invalid JSON payload"]);
            break;
        }

        $name = $conn->real_escape_string($data['name'] ?? '');
        $collegeName = $conn->real_escape_string($data['collegeName'] ?? '');
        $course = $conn->real_escape_string($data['course'] ?? '');
        $phoneNumber = $conn->real_escape_string($data['phoneNumber'] ?? '');
        $gmail = $conn->real_escape_string($data['gmail'] ?? '');
        $crNumber = $conn->real_escape_string($data['crNumber'] ?? '');
        $coursePrice = $conn->real_escape_string($data['coursePrice'] ?? 'N/A');

        if (empty($name) || empty($collegeName) || empty($course) || empty($phoneNumber) || empty($gmail) || empty($crNumber)) {
            http_response_code(400);
            echo json_encode([
                "error" => "All fields are required",
                "received_data" => $data,
                "missing_fields" => [
                    "name" => empty($name),
                    "collegeName" => empty($collegeName),
                    "course" => empty($course),
                    "phoneNumber" => empty($phoneNumber),
                    "gmail" => empty($gmail),
                    "crNumber" => empty($crNumber)
                ]
            ]);
            break;
        }

        $sql = "INSERT INTO enrollments (name, college_name, course, phone_number, gmail, cr_number, course_price) 
                VALUES ('$name', '$collegeName', '$course', '$phoneNumber', '$gmail', '$crNumber', '$coursePrice')";

        if ($conn->query($sql) === TRUE) {
            $enrollmentId = $conn->insert_id;
            echo json_encode([
                "success" => true,
                "message" => "Enrollment submitted successfully",
                "enrollmentId" => $enrollmentId
            ]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error saving enrollment: " . $conn->error]);
        }
        break;

    case 'get-started':
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            echo json_encode(["error" => "Method not allowed"]);
            break;
        }

        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        if (!$data) {
            http_response_code(400);
            echo json_encode(["error" => "Invalid JSON payload"]);
            break;
        }

        $name = $conn->real_escape_string($data['name'] ?? '');
        $collegeName = $conn->real_escape_string($data['collegeName'] ?? '');
        $gmail = $conn->real_escape_string($data['gmail'] ?? '');
        $phoneNumber = $conn->real_escape_string($data['phoneNumber'] ?? '');
        $formType = $conn->real_escape_string($data['formType'] ?? 'Get Started');

        if (empty($name) || empty($collegeName) || empty($gmail) || empty($phoneNumber)) {
            http_response_code(400);
            echo json_encode(["error" => "All fields are required"]);
            break;
        }

        $sql = "INSERT INTO get_started_submissions (name, college_name, gmail, phone_number, form_type) 
                VALUES ('$name', '$collegeName', '$gmail', '$phoneNumber', '$formType')";

        if ($conn->query($sql) === TRUE) {
            $submissionId = $conn->insert_id;
            echo json_encode([
                "success" => true,
                "message" => "Form submitted successfully",
                "submissionId" => $submissionId
            ]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error saving submission: " . $conn->error]);
        }
        break;

    case 'get-enrollments':
        if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
            http_response_code(405);
            echo json_encode(["error" => "Method not allowed"]);
            break;
        }

        $sql = "SELECT * FROM enrollments ORDER BY created_at DESC";
        $result = $conn->query($sql);
        $enrollments = [];

        if ($result && $result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $enrollments[] = $row;
            }
        }

        echo json_encode([
            "success" => true,
            "count" => count($enrollments),
            "data" => $enrollments
        ]);
        break;

    case 'get-submissions':
        if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
            http_response_code(405);
            echo json_encode(["error" => "Method not allowed"]);
            break;
        }

        $sql = "SELECT * FROM get_started_submissions ORDER BY created_at DESC";
        $result = $conn->query($sql);
        $submissions = [];

        if ($result && $result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $submissions[] = $row;
            }
        }

        echo json_encode([
            "success" => true,
            "count" => count($submissions),
            "data" => $submissions
        ]);
        break;

    default:
        http_response_code(404);
        echo json_encode(["error" => "Invalid action parameter"]);
        break;
}

$conn->close();
?>
