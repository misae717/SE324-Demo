<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];


    $db_host = 'localhost';
    $db_name = 'login';
    $db_user = 'root';
    $db_pass = ''; 

    try {

        $db = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8", $db_user, $db_pass);


        $stmt = $db->prepare('SELECT * FROM verification WHERE user = ? AND pass = ?');
        $stmt->execute([$username, $password]);


        if ($stmt->fetch()) {
            echo '<script type="text/javascript">alert("Login successful"); window.location.href = "http://localhost:3000/booking";</script>';
        } else {
            echo '<script type="text/javascript">alert("Invalid login"); window.location.href = "http://localhost:3000";</script>';
        }
    } catch (PDOException $e) {
        echo 'Database error: ' . $e->getMessage();
    }
}