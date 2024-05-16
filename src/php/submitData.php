<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $studentName = $_POST['studentName'];
    $gender = $_POST['gender'];
    $roomType = $_POST['roomType'];
    // Database credentials
    $db_host = 'localhost';
    $db_name = 'students';
    $db_user = 'root';
    $db_pass = ''; 
    try {
        $db = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8", $db_user, $db_pass);
        $stmt = $db->prepare('INSERT INTO student_info (studentName, gender, roomType) VALUES (?, ?, ?)');
        $stmt->execute([$studentName, $gender, $roomType]);
        echo '<script type="text/javascript">alert("Submission Success"); window.location.href = "http://localhost:3000/visualizer";</script>';
    } catch (PDOException $e) {
        echo '<script type="text/javascript">alert("Database error: ' . $e->getMessage() . '"); window.location.href = "http://localhost:3000/seating-plan";</script>';
    }
}