<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    // Database credentials
    $db_host = 'localhost';
    $db_name = 'login';
    $db_user = 'root';
    $db_pass = ''; 
    try {
        $db = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8", $db_user, $db_pass);
        $stmt = $db->prepare('SELECT * FROM verification WHERE user = ? AND pass = ?');
        $stmt->execute([$username, $password]);
        $user = $stmt->fetch();
        if ($user) {
            echo '<script type="text/javascript">alert("User already exists"); window.location.href = "http://localhost:3000/register";</script>';
        } else {
            $stmt = $db->prepare('INSERT INTO verification (user, pass) VALUES (?, ?)');
            $stmt->execute([$username, $password]);
            echo '<script type="text/javascript">alert("Registration successful"); window.location.href = "http://localhost:3000";</script>';
        }
    } catch (PDOException $e) {
        echo '<script type="text/javascript">alert("Database error: ' . $e->getMessage() . '"); window.location.href = "http://localhost:3000/register";</script>';
    }
}