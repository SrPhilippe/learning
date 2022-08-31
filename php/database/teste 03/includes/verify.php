<?php
session_start();

include 'connection.php';
// Recebe informação se usuário está criando conta ou se registrando
if (isset($_GET['type'])) {
	$type = $_GET['type'];

	if($type === 'login') {
		$username = $_POST['username'];
		$password = $_POST['password'];
		if (empty($username) || empty($password)) {
			header("Location: ../index.php?msg=1");
		} else {
			$sql = "SELECT * FROM users WHERE nickname='$username' AND password='$password'";
			$result = mysqli_query($conn, $sql);
			if (mysqli_num_rows($result) > 0) {
				while($row = mysqli_fetch_assoc($result)) {
					$_SESSION['user'] = $row['nickname'];
					$_SESSION['id'] = $row['id'];
					header("Location: ../painel.php");
				}
			} else {
				header("Location: ../index.php?msg=2");
			}
		}
	} else if ($type === 'register') {
		$email = $_POST['email_c'];
		$username = $_POST['username_c'];
		$password = $_POST['password_c'];
		if (empty($username) || empty($password) || empty($email)) {
			header("Location: ../index.php?msg=4");
		} else {
			$sql = "SELECT * FROM users WHERE nickname='$username' OR email='$email'";
			$result = mysqli_query($conn, $sql);
			if (mysqli_num_rows($result) > 0) {
				header("Location: ../index.php?msg=5");
			} else {
				$sql = "INSERT INTO users (id, nickname, email, password, img) VALUES (null, '$username', '$email', '$password', 'default.png')" or die(mysqli_error($conn));
				$query = mysqli_query($conn, $sql) or die(mysqli_error($conn));
				header("Location: ../index.php?msg=6");
			}
		}
	}








} else {
	echo "Há algo de errado. Por favor tente novamente.";
}

?>